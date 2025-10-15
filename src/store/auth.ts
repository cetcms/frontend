import { Auth, Company, Login, Maybe, User, Admin, PermissionAlias } from 'src/graphql';
import { create } from 'zustand';

const STORAGE_KEY = 'login';

export type CheckPermissionMode = 'AND' | 'OR';
export type CheckPermissionValue = PermissionAlias[] | PermissionAlias | Record<CheckPermissionMode, PermissionAlias[]>;

export type AuthStore = {
  user: Maybe<User>;
  admin: Maybe<Admin>;
  company: Maybe<Company>;
  isAdmin: boolean;
  isUser: boolean;
  isCompany: boolean;

  auth: Maybe<Auth>;
  setAuth: (auth: Auth) => void;
  clearAuth: () => void;

  login: Maybe<Login>;
  setLogin: (login: Login) => void;
  clearLogin: () => void;
  checkLogin: () => void;

  initialized: boolean;
  initialize: () => void;

  checkPermission: (permission?: CheckPermissionValue, mode?: CheckPermissionMode) => boolean;
};

export const useAuthStore = create<AuthStore>()((set, getState) => ({
  auth: null,
  company: null,
  user: null,
  admin: null,
  isAdmin: false,
  isUser: false,
  isCompany: false,

  setAuth: (auth: Auth) => {
    const { company, user, admin } = auth;
    let isAdmin = false;
    let isUser = false;
    let isCompany = false;
    if (company) {
      isCompany = true;
    } else if (user) {
      isUser = true;
    } else if (admin) {
      isAdmin = true;
    }
    return set(() => ({ auth, company, user, admin, isAdmin, isUser, isCompany }));
  },
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

  checkPermission: (permission, mode) => {
    const { auth } = getState();
    if (!permission) return true;
    if (!auth) return false;

    const userPermissions = auth.permissions as Array<PermissionAlias>;

    // Handle case when permission is an object with mode keys
    if (typeof permission === 'object' && !Array.isArray(permission)) {
      const permObj = permission as Record<CheckPermissionMode, PermissionAlias[]>;
      if (permObj.AND) return permObj.AND.every((p) => userPermissions.includes(p));
      if (permObj.OR) return permObj.OR.some((p) => userPermissions.includes(p));
      return false;
    }

    // Handle array or single permission
    const perms = Array.isArray(permission) ? permission : [permission];

    // When mode is not specified, default to 'OR' behavior
    if (mode === undefined) return perms.some((p) => userPermissions.includes(p));
    return mode === 'AND'
      ? perms.every((p) => userPermissions.includes(p))
      : perms.some((p) => userPermissions.includes(p));
  },
}));
