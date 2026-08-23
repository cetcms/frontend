# E2E 测试指南

本项目使用 [Playwright](https://playwright.dev/) 进行端到端 (E2E) 自动化测试。

## 快速开始

### 1. 安装依赖

依赖已经安装完成，如需重新安装：

```bash
bun install
bun exec playwright install chromium
```

### 2. 运行测试

#### 运行所有测试
```bash
bun test:e2e
```

#### 使用 UI 模式运行（推荐用于开发）
```bash
bun test:e2e:ui
```

#### 以 headed 模式运行（显示浏览器窗口）
```bash
bun test:e2e:headed
```

#### 调试模式
```bash
bun test:e2e:debug
```

#### 查看测试报告
```bash
bun test:e2e:report
```

### 3. 运行特定测试文件

```bash
# 运行登录测试
bun test:e2e auth/login.spec.ts

# 运行管理员管理测试
bun test:e2e admin/admin-management.spec.ts
```

## 项目结构

```
tests/e2e/
├── admin/                    # 管理员相关测试
│   └── admin-management.spec.ts
├── auth/                     # 认证相关测试
│   └── login.spec.ts
├── fixtures/                 # 测试 fixtures
│   └── auth.fixture.ts      # 认证 fixture
├── helpers/                  # 测试辅助工具
│   └── test-helpers.ts      # 通用辅助函数
├── reports/                  # 测试报告目录
├── example.spec.ts          # 示例测试
└── README.md                # 本文档
```

## 编写测试

### 基础测试示例

```typescript
import { test, expect } from '@playwright/test';

test.describe('功能模块名称', () => {
  test('测试用例名称', async ({ page }) => {
    // 访问页面
    await page.goto('/your-path');
    
    // 查找元素并交互
    await page.getByRole('button', { name: '按钮文本' }).click();
    
    // 断言
    await expect(page.getByText('预期文本')).toBeVisible();
  });
});
```

### 使用认证 Fixture

如果测试需要登录状态，使用 `authenticatedPage` fixture：

```typescript
import { test, expect } from '../fixtures/auth.fixture';

test.describe('需要登录的功能', () => {
  test('测试用例', async ({ authenticatedPage: page }) => {
    // page 已经是登录状态
    await page.goto('/protected-page');
    
    // 执行测试...
  });
});
```

### 使用辅助函数

```typescript
import { test, expect } from '@playwright/test';
import { 
  login, 
  fillForm, 
  clickButton, 
  waitForNotification 
} from '../helpers/test-helpers';

test('使用辅助函数的测试', async ({ page }) => {
  // 登录
  await login(page);
  
  // 填写表单
  await fillForm(page, {
    '姓名': 'John Doe',
    '邮箱': 'john@example.com'
  });
  
  // 点击按钮
  await clickButton(page, '提交');
  
  // 等待通知
  await waitForNotification(page, '保存成功');
});
```

## 测试最佳实践

### 1. 使用语义化定位器

优先使用基于角色和可访问性的定位器：

```typescript
// ✅ 推荐
await page.getByRole('button', { name: '提交' });
await page.getByLabel('邮箱');
await page.getByText('欢迎');

// ❌ 避免
await page.locator('#submit-btn');
await page.locator('.email-input');
```

### 2. 等待元素和导航

```typescript
// 等待页面加载完成
await page.waitForLoadState('networkidle');

// 等待 URL 变化
await page.waitForURL('**/dashboard');

// 等待元素可见
await expect(page.getByText('内容')).toBeVisible();
```

### 3. 使用 beforeEach 进行设置

```typescript
test.describe('功能测试', () => {
  test.beforeEach(async ({ page }) => {
    // 每个测试前的设置
    await page.goto('/setup-page');
  });

  test('测试 1', async ({ page }) => {
    // 测试逻辑
  });

  test('测试 2', async ({ page }) => {
    // 测试逻辑
  });
});
```

### 4. 处理动态内容

```typescript
// 使用正则表达式匹配
await expect(page.getByText(/成功|success/i)).toBeVisible();

// 等待 API 响应
await page.waitForResponse(resp => 
  resp.url().includes('/api/data') && resp.status() === 200
);
```

### 5. 错误处理和调试

```typescript
test('可能失败的测试', async ({ page }) => {
  // 截图
  await page.screenshot({ path: 'screenshot.png' });
  
  // 打印页面内容
  console.log(await page.content());
  
  // 条件检查
  const button = page.getByRole('button', { name: '提交' });
  if (await button.isVisible()) {
    await button.click();
  }
});
```

## 配置说明

配置文件位于 [`playwright.config.mjs`](../../playwright.config.mjs)

主要配置项：
- `testDir`: 测试目录路径
- `baseURL`: 应用基础 URL
- `timeout`: 测试超时时间
- `retries`: 失败重试次数
- `projects`: 浏览器配置
- `webServer`: 自动启动开发服务器

## CI/CD 集成

在 CI 环境中运行测试：

```bash
# 设置 CI 环境变量
CI=true bun test:e2e
```

CI 模式下的行为：
- 启用失败重试（2次）
- 单线程运行测试
- 不复用现有服务器

## 常见问题

### 测试超时

如果测试经常超时，可以增加超时时间：

```typescript
test('长时间运行的测试', async ({ page }) => {
  test.setTimeout(60000); // 60秒
  // 测试逻辑
});
```

### 元素未找到

确保使用正确的定位器，并添加等待：

```typescript
// 等待元素出现
await page.waitForSelector('text=内容');

// 或使用断言等待
await expect(page.getByText('内容')).toBeVisible({ timeout: 10000 });
```

### 测试不稳定

1. 添加适当的等待
2. 使用更可靠的定位器
3. 检查是否有竞态条件
4. 启用重试机制

## 资源链接

- [Playwright 官方文档](https://playwright.dev/)
- [Best Practices](https://playwright.dev/docs/best-practices)
- [API Reference](https://playwright.dev/docs/api/class-playwright)
- [定位器指南](https://playwright.dev/docs/locators)

## 测试账号

- 管理员账号：`admin@email.com`
- 密码：`123456`
- 登录地址：`/auth/login?target=Admin`
