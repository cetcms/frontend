/**
 * 认证工具函数
 */

export interface LoginCredentials {
  email: string;
  password: string;
}

export const ADMIN_CREDENTIALS: LoginCredentials = {
  email: 'admin@email.com',
  password: '123456',
};

export const TEST_USERS = {
  admin: ADMIN_CREDENTIALS,
  // 可以根据实际情况添加其他测试用户
};

/**
 * 登录辅助函数
 */
export async function login(
  page: any,
  credentials: LoginCredentials,
  target: 'Admin' | 'Company' | 'Member' = 'Admin'
) {
  const loginUrl = `http://localhost:5173/auth/login?target=${target}`;

  await page.navigate(loginUrl);

  // 等待页面加载
  await page.waitFor({ time: 2000 });

  // 获取页面快照以分析表单
  const snapshot = await page.snapshot();
  console.log('Login page loaded:', snapshot);

  // 查找邮箱输入框
  const emailInputs = snapshot.match(/email|邮箱|账号/gi);
  if (emailInputs) {
    // 尝试输入邮箱
    await page.type({
      element: 'Email input field',
      text: credentials.email,
      ref: 'input[type="email"], input[name="email"], input[placeholder*="邮箱"], input[placeholder*="email"]',
    });
  }

  // 查找密码输入框
  const passwordInputs = snapshot.match(/password|密码/gi);
  if (passwordInputs) {
    await page.type({
      element: 'Password input field',
      text: credentials.password,
      ref: 'input[type="password"], input[name="password"], input[placeholder*="密码"], input[placeholder*="password"]',
    });
  }

  // 点击登录按钮
  await page.click({
    element: 'Login button',
    ref: 'button[type="submit"], button:has-text("登录"), button:has-text("Login")',
  });

  // 等待跳转
  await page.waitFor({ time: 3000 });
}

/**
 * 检查是否已登录
 */
export async function isLoggedIn(page: any): Promise<boolean> {
  const snapshot = await page.snapshot();
  // 检查是否有登出按钮或用户信息
  return snapshot.includes('登出') || snapshot.includes('退出') || snapshot.includes('个人中心');
}

/**
 * 登出
 */
export async function logout(page: any) {
  const snapshot = await page.snapshot();

  // 查找登出按钮
  if (snapshot.includes('登出') || snapshot.includes('退出')) {
    await page.click({
      element: 'Logout button',
      ref: 'button:has-text("登出"), button:has-text("退出"), a:has-text("登出"), a:has-text("退出")',
    });

    await page.waitFor({ time: 2000 });
  }
}
