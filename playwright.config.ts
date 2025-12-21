import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright E2E 测试配置
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests/e2e',
  
  /* 并发运行测试 */
  fullyParallel: true,
  
  /* 失败时重试次数 */
  retries: process.env.CI ? 2 : 0,
  
  /* CI 环境下禁用并行 */
  workers: process.env.CI ? 1 : undefined,
  
  /* 测试报告 */
  reporter: [
    ['html', { outputFolder: 'tests/reports/playwright-html' }],
    ['json', { outputFile: 'tests/reports/playwright-results.json' }],
    ['list'],
  ],
  
  /* 全局配置 */
  use: {
    /* 基础 URL */
    baseURL: process.env.BASE_URL || 'http://localhost:5173',
    
    /* 失败时截图 */
    screenshot: 'only-on-failure',
    
    /* 失败时录制视频 */
    video: 'retain-on-failure',
    
    /* 追踪 */
    trace: 'retain-on-failure',
    
    /* 超时时间 */
    actionTimeout: 10000,
    navigationTimeout: 30000,
  },

  /* 配置不同的浏览器项目 */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    
    // 可以启用更多浏览器
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    
    /* 移动端测试 */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
  ],

  /* 测试前启动开发服务器 */
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
  
  /* 输出目录 */
  outputDir: 'tests/reports/playwright-artifacts',
});
