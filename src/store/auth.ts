import { Auth, Company, Login, Maybe, Member, Admin, PermissionAlias } from 'src/graphql';
import { create } from 'zustand';

const STORAGE_KEY = 'login';

export type CheckPermissionMode = 'AND' | 'OR';
export type CheckPermissionOption =
  | PermissionAlias[]
  | PermissionAlias
  | {
      AND?: PermissionAlias[];
      OR?: PermissionAlias[];
    };

export type PagePermissionOption = {
  permissions?: CheckPermissionOption;
};

export type AuthStore = {
  member: Maybe<Member>;
  admin: Maybe<Admin>;
  company: Maybe<Company>;
  isAdmin: boolean;
  isMember: boolean;
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

  checkPermission: (permission?: CheckPermissionOption, mode?: CheckPermissionMode) => boolean;
};

export const useAuthStore = create<AuthStore>()((set, getState) => ({
  auth: null,
  company: null,
  member: null,
  admin: null,
  isAdmin: false,
  isMember: false,
  isCompany: false,

  setAuth: (auth: Auth) => {
    const { company, member, admin } = auth;
    let isAdmin = false;
    let isMember = false;
    let isCompany = false;
    if (company) {
      isCompany = true;
    } else if (member) {
      isMember = true;
    } else if (admin) {
      isAdmin = true;
    }
    return set(() => ({ auth, company, member, admin, isAdmin, isMember, isCompany }));
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

  checkPermission: (option, mode) => {
    const { auth } = getState();
    if (!option) return true;
    if (!auth) return false;

    const memberPermissions = auth.permissions as Array<PermissionAlias>;

    // Handle case when permission is an object with mode keys
    if (typeof option === 'object' && !Array.isArray(option)) {
      const permissionObj = option as Record<CheckPermissionMode, PermissionAlias[]>;
      if (permissionObj.AND) return permissionObj.AND.every((p) => memberPermissions.includes(p));
      if (permissionObj.OR) return permissionObj.OR.some((p) => memberPermissions.includes(p));
      return false;
    }

    // Handle array or single permission
    const permissions = Array.isArray(option) ? option : [option];

    // When mode is not specified, default to 'OR' behavior
    if (mode === undefined) return permissions.some((p) => memberPermissions.includes(p));
    return mode === 'AND'
      ? permissions.every((p) => memberPermissions.includes(p))
      : permissions.some((p) => memberPermissions.includes(p));
  },
}));
