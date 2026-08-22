/**
 * E2E 测试运行器
 */

import * as fs from 'fs';
import * as path from 'path';

import { runAdminTests } from './admin.test';
import { testResults } from './utils/helpers';

// 这个文件用于通过 Node.js 直接运行测试
// 实际执行时我们会使用 Playwright MCP 工具

export async function generateTestReport() {
  const totalTests = testResults.length;
  const passedTests = testResults.filter((r) => r.status === 'PASS').length;
  const failedTests = testResults.filter((r) => r.status === 'FAIL').length;
  const skippedTests = testResults.filter((r) => r.status === 'SKIP').length;

  const passRate = totalTests > 0 ? ((passedTests / totalTests) * 100).toFixed(2) : '0.00';

  let report = `
# E2E 测试报告

**生成时间**: ${new Date().toLocaleString('zh-CN')}

## 测试概览

- 总测试数: ${totalTests}
- 通过: ${passedTests} ✅
- 失败: ${failedTests} ❌
- 跳过: ${skippedTests} ⏭️
- 通过率: ${passRate}%

## 详细结果

`;

  // 按模块分组
  const moduleResults = new Map<string, typeof testResults>();

  testResults.forEach((result) => {
    if (!moduleResults.has(result.module)) {
      moduleResults.set(result.module, []);
    }
    moduleResults.get(result.module)!.push(result);
  });

  // 生成每个模块的报告
  moduleResults.forEach((results, module) => {
    const modulePassed = results.filter((r) => r.status === 'PASS').length;
    const moduleFailed = results.filter((r) => r.status === 'FAIL').length;

    report += `\n### ${module}\n\n`;
    report += `**状态**: ${moduleFailed === 0 ? '✅ 全部通过' : `❌ ${moduleFailed} 个失败`}\n\n`;
    report += `| 测试名称 | 状态 | 耗时 | 备注 |\n`;
    report += `|---------|------|------|------|\n`;

    results.forEach((result) => {
      const statusIcon = result.status === 'PASS' ? '✅' : result.status === 'FAIL' ? '❌' : '⏭️';
      const duration = result.duration ? `${result.duration}ms` : '-';
      const error = result.error ? result.error : '-';

      report += `| ${result.testName} | ${statusIcon} ${result.status} | ${duration} | ${error} |\n`;
    });
  });

  // 失败详情
  const failedResults = testResults.filter((r) => r.status === 'FAIL');
  if (failedResults.length > 0) {
    report += `\n## 失败详情\n\n`;

    failedResults.forEach((result, index) => {
      report += `\n### ${index + 1}. ${result.module} - ${result.testName}\n\n`;
      report += `**错误信息**: ${result.error}\n\n`;
      if (result.screenshot) {
        report += `**截图**: ${result.screenshot}\n\n`;
      }
    });
  }

  // 问题定位
  if (failedResults.length > 0) {
    report += `\n## 问题定位建议\n\n`;

    const moduleIssues = new Map<string, string[]>();

    failedResults.forEach((result) => {
      if (!moduleIssues.has(result.module)) {
        moduleIssues.set(result.module, []);
      }
      moduleIssues.get(result.module)!.push(`- ${result.testName}: ${result.error}`);
    });

    moduleIssues.forEach((issues, module) => {
      report += `\n### ${module}\n\n`;
      issues.forEach((issue) => {
        report += `${issue}\n`;
      });

      // 添加可能的解决方案
      report += `\n**可能的原因**:\n`;
      report += `1. 页面路由配置问题\n`;
      report += `2. 组件未正确渲染\n`;
      report += `3. 权限验证失败\n`;
      report += `4. 后端 API 未响应\n`;
      report += `5. 网络延迟导致超时\n\n`;
    });
  }

  report += `\n## 测试环境\n\n`;
  report += `- 测试工具: Playwright\n`;
  report += `- 浏览器: Chromium\n`;
  report += `- 测试地址: http://localhost:5173\n`;
  report += `- 测试账号: admin@email.com\n`;

  return report;
}

export function saveTestReport(report: string, filename = 'test-report.md') {
  const reportDir = path.join(process.cwd(), 'tests', 'reports');

  // 确保目录存在
  if (!fs.existsSync(reportDir)) {
    fs.mkdirSync(reportDir, { recursive: true });
  }

  const reportPath = path.join(reportDir, filename);
  fs.writeFileSync(reportPath, report, 'utf-8');

  console.log(`\n测试报告已生成: ${reportPath}\n`);

  return reportPath;
}
