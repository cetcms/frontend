import { test as base } from '@playwright/test';
import { login } from '../helpers/test-helpers';

/**
 * 认证 Fixture - 提供已登录的页面上下文
 */
export const test = base.extend({
  // 自动登录的 page fixture
  authenticatedPage: async ({ page }, use) => {
    // 执行登录
    await login(page);
    
    // 使用已登录的页面
    await use(page);
    
    // 清理 - 登出（如果需要）
  },
});

export { expect } from '@playwright/test';
