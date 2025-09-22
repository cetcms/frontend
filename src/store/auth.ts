import { Auth, Login, Maybe } from 'src/graphql/generated/graphql';
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
    try {
      const login: Login = JSON.parse(localStorage.getItem(STORAGE_KEY) || '');
      if (login && login.accessToken && new Date().getTime() < login.accessTimeout) {
        return set(() => ({ login }));
      }
    } catch {
      // 忽略
    }
    return set(() => ({ login: null }));
  },
  initialized: false,
  initialize: () => {
    const { checkLogin } = getState();
    checkLogin();
    setInterval(checkLogin, 1000 * 60);
    return set(() => ({ initialized: true }));
  },
}));
