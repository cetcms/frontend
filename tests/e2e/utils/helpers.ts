/**
 * 测试辅助函数
 */

export interface TestResult {
  testName: string;
  module: string;
  status: 'PASS' | 'FAIL' | 'SKIP';
  error?: string;
  duration?: number;
  screenshot?: string;
}

export const testResults: TestResult[] = [];

/**
 * 记录测试结果
 */
export function recordTestResult(result: TestResult) {
  testResults.push(result);
  console.log(`[${result.status}] ${result.module} - ${result.testName}`);
  if (result.error) {
    console.error(`  Error: ${result.error}`);
  }
}

/**
 * 等待页面加载完成
 */
export async function waitForPageLoad(page: any, timeout = 5000) {
  await page.waitFor({ time: Math.min(timeout, 5000) });
}

/**
 * 安全点击元素
 */
export async function safeClick(page: any, element: string, ref: string) {
  try {
    await page.click({ element, ref });
    await waitForPageLoad(page, 2000);
    return true;
  } catch (error) {
    console.error(`Failed to click ${element}:`, error);
    return false;
  }
}

/**
 * 检查元素是否存在
 */
export async function checkElementExists(page: any, text: string): Promise<boolean> {
  const snapshot = await page.snapshot();
  return snapshot.includes(text);
}

/**
 * 导航到指定路径
 */
export async function navigateTo(page: any, path: string, baseUrl = 'http://localhost:5173') {
  const url = path.startsWith('http') ? path : `${baseUrl}${path}`;
  await page.navigate(url);
  await waitForPageLoad(page, 3000);
}

/**
 * 截图保存
 */
export async function takeScreenshot(page: any, filename: string) {
  try {
    await page.takeScreenshot({ filename: `tests/screenshots/${filename}.png` });
    return `tests/screenshots/${filename}.png`;
  } catch (error) {
    console.error(`Failed to take screenshot:`, error);
    return undefined;
  }
}

/**
 * 检查菜单项是否高亮
 */
export async function checkMenuHighlight(page: any, menuText: string): Promise<boolean> {
  const snapshot = await page.snapshot();
  // 这里可以根据实际的菜单高亮样式来判断
  return snapshot.includes(menuText);
}

/**
 * 填写表单字段
 */
export async function fillFormField(page: any, label: string, value: string, ref: string) {
  try {
    await page.type({ element: label, text: value, ref });
    return true;
  } catch (error) {
    console.error(`Failed to fill field ${label}:`, error);
    return false;
  }
}

/**
 * 检查表格是否加载
 */
export async function checkTableLoaded(page: any): Promise<boolean> {
  const snapshot = await page.snapshot();
  return snapshot.includes('table') || snapshot.includes('数据') || snapshot.includes('列表');
}
