import { test, expect } from '@playwright/test';

/**
 * 认证测试 - 登录功能
 */
test.describe('登录功能测试', () => {
  test.beforeEach(async ({ page }) => {
    // 每个测试前访问登录页面
    await page.goto('/auth/login?target=Admin');
  });

  test('应该显示登录表单', async ({ page }) => {
    // 检查登录表单元素是否存在
    await expect(page.getByLabel(/邮箱|email/i)).toBeVisible();
    await expect(page.getByLabel(/密码|password/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /登录|login/i })).toBeVisible();
  });

  test('应该能够成功登录管理员账号', async ({ page }) => {
    // 填写登录表单
    await page.getByLabel(/邮箱|email/i).fill('admin@email.com');
    await page.getByLabel(/密码|password/i).fill('123456');

    // 点击登录按钮
    await page.getByRole('button', { name: /登录|login/i }).click();

    // 等待导航到仪表盘
    await page.waitForURL('**/dashboard', { timeout: 10000 });

    // 验证登录成功
    await expect(page).toHaveURL(/\/dashboard/);

    // 验证仪表盘内容加载
    await expect(page.getByText(/仪表盘|dashboard/i)).toBeVisible();
  });

  test('应该显示错误信息当使用错误的密码', async ({ page }) => {
    // 填写错误的登录信息
    await page.getByLabel(/邮箱|email/i).fill('admin@email.com');
    await page.getByLabel(/密码|password/i).fill('wrongpassword');

    // 点击登录按钮
    await page.getByRole('button', { name: /登录|login/i }).click();

    // 等待错误消息显示
    await expect(page.getByText(/错误|error|失败|fail/i)).toBeVisible({ timeout: 5000 });
  });

  test('应该验证必填字段', async ({ page }) => {
    // 不填写任何信息直接点击登录
    await page.getByRole('button', { name: /登录|login/i }).click();

    // 验证表单验证提示
    const emailInput = page.getByLabel(/邮箱|email/i);
    await expect(emailInput).toBeFocused();
  });
});
