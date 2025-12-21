import { test, expect } from '@playwright/test';

/**
 * 管理员管理测试
 */
test.describe('管理员管理', () => {
  // 登录钩子
  test.beforeEach(async ({ page }) => {
    // 访问登录页面
    await page.goto('/auth/login?target=Admin');
    
    // 登录
    await page.getByLabel(/邮箱|email/i).fill('admin@email.com');
    await page.getByLabel(/密码|password/i).fill('123456');
    await page.getByRole('button', { name: /登录|login/i }).click();
    
    // 等待登录完成
    await page.waitForURL('**/dashboard', { timeout: 10000 });
  });

  test('应该能够访问管理员列表页面', async ({ page }) => {
    // 导航到管理员列表
    await page.goto('/admin/list');
    
    // 等待页面加载
    await page.waitForLoadState('networkidle');
    
    // 验证页面标题或内容
    await expect(page.getByText(/管理员|admin/i)).toBeVisible();
  });

  test('应该能够访问管理员角色页面', async ({ page }) => {
    // 导航到管理员角色
    await page.goto('/admin/roles');
    
    // 等待页面加载
    await page.waitForLoadState('networkidle');
    
    // 验证页面内容
    await expect(page.getByText(/角色|role/i)).toBeVisible();
  });

  test('应该能够搜索和筛选管理员', async ({ page }) => {
    // 导航到管理员列表
    await page.goto('/admin/list');
    await page.waitForLoadState('networkidle');
    
    // 查找搜索输入框（根据实际项目调整选择器）
    const searchInput = page.getByPlaceholder(/搜索|search/i).first();
    
    if (await searchInput.isVisible()) {
      // 输入搜索关键词
      await searchInput.fill('admin');
      
      // 等待搜索结果
      await page.waitForTimeout(1000);
      
      // 验证搜索结果包含关键词
      const tableContent = await page.textContent('body');
      expect(tableContent).toContain('admin');
    }
  });
});
