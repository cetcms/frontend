import { test, expect } from '@playwright/test';

/**
 * 示例：基础页面测试
 */
test.describe('基础页面测试', () => {
  test('首页可以正常访问', async ({ page }) => {
    await page.goto('/');
    
    // 等待页面加载
    await page.waitForLoadState('networkidle');
    
    // 验证页面标题或关键元素
    await expect(page).toHaveTitle(/极客领航/);
  });
});
