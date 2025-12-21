import { Page } from '@playwright/test';

/**
 * 测试辅助工具集
 */

/**
 * 登录辅助函数
 */
export async function login(
  page: Page,
  email: string = 'admin@email.com',
  password: string = '123456',
  target: string = 'Admin'
) {
  await page.goto(`/auth/login?target=${target}`);
  
  await page.getByLabel(/邮箱|email/i).fill(email);
  await page.getByLabel(/密码|password/i).fill(password);
  await page.getByRole('button', { name: /登录|login/i }).click();
  
  // 等待登录完成
  await page.waitForURL('**/dashboard', { timeout: 10000 });
}

/**
 * 等待页面完全加载
 */
export async function waitForPageReady(page: Page) {
  await page.waitForLoadState('networkidle');
  await page.waitForLoadState('domcontentloaded');
}

/**
 * 截图辅助函数
 */
export async function takeScreenshot(page: Page, name: string) {
  const timestamp = Date.now();
  const filename = `tests/reports/screenshots/${name}-${timestamp}.png`;
  await page.screenshot({ path: filename, fullPage: true });
  return filename;
}

/**
 * 填写表单辅助函数
 */
export async function fillForm(page: Page, formData: Record<string, string>) {
  for (const [label, value] of Object.entries(formData)) {
    const input = page.getByLabel(new RegExp(label, 'i'));
    await input.fill(value);
  }
}

/**
 * 等待并点击按钮
 */
export async function clickButton(page: Page, buttonName: string) {
  const button = page.getByRole('button', { name: new RegExp(buttonName, 'i') });
  await button.waitFor({ state: 'visible' });
  await button.click();
}

/**
 * 等待通知消息
 */
export async function waitForNotification(page: Page, message?: string) {
  const notification = message 
    ? page.getByText(new RegExp(message, 'i'))
    : page.locator('[role="alert"], .notification, .toast').first();
  
  await notification.waitFor({ state: 'visible', timeout: 5000 });
  return notification;
}

/**
 * 检查表格是否包含数据
 */
export async function checkTableHasData(page: Page) {
  const table = page.locator('table').first();
  await table.waitFor({ state: 'visible' });
  
  const rows = await table.locator('tbody tr').count();
  return rows > 0;
}

/**
 * 获取表格行数
 */
export async function getTableRowCount(page: Page) {
  const table = page.locator('table').first();
  await table.waitFor({ state: 'visible' });
  
  return await table.locator('tbody tr').count();
}
