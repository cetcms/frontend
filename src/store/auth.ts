import { Auth, Login, Maybe } from 'src/graphql';
import { create } from 'zustand';

const STORAGE_KEY = 'login';

export type AuthStore = {
  auth: Maybe<Auth>;
  setAuth: (auth: Auth) => void;
  clearAuth: () => void;

  login: Maybe<Login>;
  setLogin: (login: Login) => void;
  clearLogin: () => void;
  checkLogin: () => void;

  initialized: boolean;
  initialize: () => void;
};

export const useAuthStore = create<AuthStore>()((set, getState) => ({
  auth: null,
  company: null,
  setAuth: (auth: Auth) => set(() => ({ auth })),
  clearAuth: () => set(() => ({ auth: null })),

  login: null,
  setLogin: (login: Login) => {
    login.accessTimeout = new Date().getTime() + login.accessTimeout - 1000 * 60 * 5;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(login));
    return set(() => ({ login }));
  },
  clearLogin: () => {
    localStorage.removeItem(STORAGE_KEY);
    return set(() => ({ login: null }));
  },
  checkLogin: () => {
    const currentLogin = getState().login;
    try {
      const storedLogin: Login = JSON.parse(localStorage.getItem(STORAGE_KEY) || '');
      if (storedLogin && storedLogin.accessToken && new Date().getTime() < storedLogin.accessTimeout) {
        // 只在登录状态真正发生变化时才更新
        if (!currentLogin || currentLogin.accessToken !== storedLogin.accessToken) {
          return set(() => ({ login: storedLogin }));
        }
        return; // 状态未变化，不触发更新
      }
    } catch {
      // 忽略解析错误
    }
    // 只在当前有登录状态时才清除（避免重复设置 null）
    if (currentLogin) {
      return set(() => ({ login: null }));
    }
  },
  initialized: false,
  initialize: () => {
    const { checkLogin } = getState();
    checkLogin();
    setInterval(checkLogin, 1000 * 60);
    return set(() => ({ initialized: true }));
  },
}));
