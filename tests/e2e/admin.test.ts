/**
 * Admin 角色端到端测试
 */

import { login, ADMIN_CREDENTIALS } from './utils/auth';
import { recordTestResult, navigateTo, waitForPageLoad, checkElementExists, takeScreenshot } from './utils/helpers';

export async function runAdminTests(page: any) {
  console.log('\n========== 开始 Admin 角色测试 ==========\n');

  const startTime = Date.now();

  // 测试1: 登录功能
  await testAdminLogin(page);

  // 测试2: 仪表盘
  await testAdminDashboard(page);

  // 测试3: 管理员列表
  await testAdminList(page);

  // 测试4: 管理员角色
  await testAdminRoles(page);

  // 测试5: 企业列表
  await testCompanyList(page);

  // 测试6: 企业角色
  await testCompanyRoles(page);

  // 测试7: 成员列表
  await testMemberList(page);

  // 测试8: 项目网站列表
  await testWebsiteList(page);

  // 测试9: 媒体资源
  await testMediaList(page);

  const duration = Date.now() - startTime;
  console.log(`\n========== Admin 角色测试完成 (耗时: ${duration}ms) ==========\n`);
}

async function testAdminLogin(page: any) {
  const testName = 'Admin Login';
  const module = 'Authentication';
  const startTime = Date.now();

  try {
    await login(page, ADMIN_CREDENTIALS, 'Admin');

    // 检查是否成功登录
    const snapshot = await page.snapshot();
    const isSuccess = snapshot.includes('仪表盘') || snapshot.includes('Dashboard');

    if (isSuccess) {
      recordTestResult({
        testName,
        module,
        status: 'PASS',
        duration: Date.now() - startTime,
      });
    } else {
      const screenshot = await takeScreenshot(page, 'admin-login-fail');
      recordTestResult({
        testName,
        module,
        status: 'FAIL',
        error: '登录后未找到仪表盘元素',
        duration: Date.now() - startTime,
        screenshot,
      });
    }
  } catch (error: any) {
    const screenshot = await takeScreenshot(page, 'admin-login-error');
    recordTestResult({
      testName,
      module,
      status: 'FAIL',
      error: error.message,
      duration: Date.now() - startTime,
      screenshot,
    });
  }
}

async function testAdminDashboard(page: any) {
  const testName = 'Dashboard Access';
  const module = 'Admin Dashboard';
  const startTime = Date.now();

  try {
    await navigateTo(page, '/dashboard');

    const snapshot = await page.snapshot();
    const hasContent = snapshot.includes('仪表盘') || snapshot.includes('Dashboard');

    if (hasContent) {
      recordTestResult({
        testName,
        module,
        status: 'PASS',
        duration: Date.now() - startTime,
      });
    } else {
      const screenshot = await takeScreenshot(page, 'admin-dashboard-fail');
      recordTestResult({
        testName,
        module,
        status: 'FAIL',
        error: '仪表盘页面内容未加载',
        duration: Date.now() - startTime,
        screenshot,
      });
    }
  } catch (error: any) {
    const screenshot = await takeScreenshot(page, 'admin-dashboard-error');
    recordTestResult({
      testName,
      module,
      status: 'FAIL',
      error: error.message,
      duration: Date.now() - startTime,
      screenshot,
    });
  }
}

async function testAdminList(page: any) {
  const testName = 'Admin List Access';
  const module = 'Admin Management';
  const startTime = Date.now();

  try {
    await navigateTo(page, '/admin/list');

    const snapshot = await page.snapshot();
    const hasContent = snapshot.includes('管理员') || snapshot.includes('Admin');

    if (hasContent) {
      recordTestResult({
        testName,
        module,
        status: 'PASS',
        duration: Date.now() - startTime,
      });
    } else {
      const screenshot = await takeScreenshot(page, 'admin-list-fail');
      recordTestResult({
        testName,
        module,
        status: 'FAIL',
        error: '管理员列表页面未加载',
        duration: Date.now() - startTime,
        screenshot,
      });
    }
  } catch (error: any) {
    const screenshot = await takeScreenshot(page, 'admin-list-error');
    recordTestResult({
      testName,
      module,
      status: 'FAIL',
      error: error.message,
      duration: Date.now() - startTime,
      screenshot,
    });
  }
}

async function testAdminRoles(page: any) {
  const testName = 'Admin Roles Access';
  const module = 'Admin Role Management';
  const startTime = Date.now();

  try {
    await navigateTo(page, '/admin/roles');

    const snapshot = await page.snapshot();
    const hasContent = snapshot.includes('角色') || snapshot.includes('Role');

    if (hasContent) {
      recordTestResult({
        testName,
        module,
        status: 'PASS',
        duration: Date.now() - startTime,
      });
    } else {
      const screenshot = await takeScreenshot(page, 'admin-roles-fail');
      recordTestResult({
        testName,
        module,
        status: 'FAIL',
        error: '管理员角色页面未加载',
        duration: Date.now() - startTime,
        screenshot,
      });
    }
  } catch (error: any) {
    const screenshot = await takeScreenshot(page, 'admin-roles-error');
    recordTestResult({
      testName,
      module,
      status: 'FAIL',
      error: error.message,
      duration: Date.now() - startTime,
      screenshot,
    });
  }
}

async function testCompanyList(page: any) {
  const testName = 'Company List Access';
  const module = 'Company Management';
  const startTime = Date.now();

  try {
    await navigateTo(page, '/company/list');

    const snapshot = await page.snapshot();
    const hasContent = snapshot.includes('企业') || snapshot.includes('Company');

    if (hasContent) {
      recordTestResult({
        testName,
        module,
        status: 'PASS',
        duration: Date.now() - startTime,
      });
    } else {
      const screenshot = await takeScreenshot(page, 'company-list-fail');
      recordTestResult({
        testName,
        module,
        status: 'FAIL',
        error: '企业列表页面未加载',
        duration: Date.now() - startTime,
        screenshot,
      });
    }
  } catch (error: any) {
    const screenshot = await takeScreenshot(page, 'company-list-error');
    recordTestResult({
      testName,
      module,
      status: 'FAIL',
      error: error.message,
      duration: Date.now() - startTime,
      screenshot,
    });
  }
}

async function testCompanyRoles(page: any) {
  const testName = 'Company Roles Access';
  const module = 'Company Role Management';
  const startTime = Date.now();

  try {
    await navigateTo(page, '/company/roles');

    const snapshot = await page.snapshot();
    const hasContent = snapshot.includes('角色') || snapshot.includes('Role');

    if (hasContent) {
      recordTestResult({
        testName,
        module,
        status: 'PASS',
        duration: Date.now() - startTime,
      });
    } else {
      const screenshot = await takeScreenshot(page, 'company-roles-fail');
      recordTestResult({
        testName,
        module,
        status: 'FAIL',
        error: '企业角色页面未加载',
        duration: Date.now() - startTime,
        screenshot,
      });
    }
  } catch (error: any) {
    const screenshot = await takeScreenshot(page, 'company-roles-error');
    recordTestResult({
      testName,
      module,
      status: 'FAIL',
      error: error.message,
      duration: Date.now() - startTime,
      screenshot,
    });
  }
}

async function testMemberList(page: any) {
  const testName = 'Member List Access';
  const module = 'Member Management';
  const startTime = Date.now();

  try {
    await navigateTo(page, '/member/list');

    const snapshot = await page.snapshot();
    const hasContent = snapshot.includes('成员') || snapshot.includes('Member');

    if (hasContent) {
      recordTestResult({
        testName,
        module,
        status: 'PASS',
        duration: Date.now() - startTime,
      });
    } else {
      const screenshot = await takeScreenshot(page, 'member-list-fail');
      recordTestResult({
        testName,
        module,
        status: 'FAIL',
        error: '成员列表页面未加载',
        duration: Date.now() - startTime,
        screenshot,
      });
    }
  } catch (error: any) {
    const screenshot = await takeScreenshot(page, 'member-list-error');
    recordTestResult({
      testName,
      module,
      status: 'FAIL',
      error: error.message,
      duration: Date.now() - startTime,
      screenshot,
    });
  }
}

async function testWebsiteList(page: any) {
  const testName = 'Website List Access';
  const module = 'Project Management';
  const startTime = Date.now();

  try {
    await navigateTo(page, '/project/website/list');

    const snapshot = await page.snapshot();
    const hasContent = snapshot.includes('网站') || snapshot.includes('Website') || snapshot.includes('项目');

    if (hasContent) {
      recordTestResult({
        testName,
        module,
        status: 'PASS',
        duration: Date.now() - startTime,
      });
    } else {
      const screenshot = await takeScreenshot(page, 'website-list-fail');
      recordTestResult({
        testName,
        module,
        status: 'FAIL',
        error: '网站列表页面未加载',
        duration: Date.now() - startTime,
        screenshot,
      });
    }
  } catch (error: any) {
    const screenshot = await takeScreenshot(page, 'website-list-error');
    recordTestResult({
      testName,
      module,
      status: 'FAIL',
      error: error.message,
      duration: Date.now() - startTime,
      screenshot,
    });
  }
}

async function testMediaList(page: any) {
  const testName = 'Media List Access';
  const module = 'Media Management';
  const startTime = Date.now();

  try {
    await navigateTo(page, '/media');

    const snapshot = await page.snapshot();
    const hasContent = snapshot.includes('媒体') || snapshot.includes('Media') || snapshot.includes('资源');

    if (hasContent) {
      recordTestResult({
        testName,
        module,
        status: 'PASS',
        duration: Date.now() - startTime,
      });
    } else {
      const screenshot = await takeScreenshot(page, 'media-list-fail');
      recordTestResult({
        testName,
        module,
        status: 'FAIL',
        error: '媒体资源页面未加载',
        duration: Date.now() - startTime,
        screenshot,
      });
    }
  } catch (error: any) {
    const screenshot = await takeScreenshot(page, 'media-list-error');
    recordTestResult({
      testName,
      module,
      status: 'FAIL',
      error: error.message,
      duration: Date.now() - startTime,
      screenshot,
    });
  }
}
