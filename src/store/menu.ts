import { create } from 'zustand';

import { findMenuItem, findMenuItemPath, findMenuByPath, getExpandedMenuIds } from './utils/menu';

/**
 * 菜单项类型定义
 */
export type MenuItem = {
  id: string;
  label: string;
  icon?: string;
  path?: string;
  active?: boolean;
  children?: MenuItem[];
  hide?: boolean;
  type?: 'divider';
  description?: string;
};

/**
 * 菜单展开状态类型定义
 */
export type MenuExpandState = {
  [menuId: string]: boolean;
};

/**
 * 菜单状态管理类型定义
 */
export type MenuStore = {
  // 菜单数据
  menuItems: MenuItem[];
  setMenuItems: (menu: MenuItem[]) => void;

  // 当前激活的菜单项
  activeMenuId: string | null;
  activeItem: MenuItem | null;

  // 菜单路径（从根到当前激活项的完整路径）
  activePath: MenuItem[];
  activeIdPath: string[];

  // 菜单展开状态管理
  expandedMenus: MenuExpandState;

  // 核心方法：统一的菜单激活逻辑
  setActiveMenuByPath: (pathname: string) => void;
  setActiveMenuById: (menuId: string) => void;

  // 展开状态管理方法
  toggleMenuExpand: (menuId: string) => void;
  setMenuExpanded: (menuId: string, expanded: boolean) => void;

  // 工具方法
  isMenuActive: (menuId: string) => boolean;
  isMenuExpanded: (menuId: string) => boolean;
  hasActiveChild: (menuId: string) => boolean;
};

/**
 * 菜单状态管理 Store
 */
export const useMenuStore = create<MenuStore>((set, get) => ({
  // 初始状态
  menuItems: [
    {
      id: 'dashboard',
      label: '仪表盘',
      icon: 'solar:window-frame-line-duotone',
      path: '/dashboard',
    },
    {
      id: 'company',
      label: '企业管理',
      icon: 'solar:medal-ribbons-star-line-duotone',
      path: '/company',
      children: [
        {
          id: 'company-list',
          label: '公司列表',
          path: '/company/list',
        },
        {
          id: 'company-list-add',
          label: '添加公司',
          path: '/company/list/add',
        },
        {
          id: 'company-role',
          label: '公司角色',
          path: '/company/roles',
        },
      ],
    },
    {
      id: 'admin',
      label: '系统成员',
      icon: 'solar:user-id-line-duotone',
      path: '/admin',
      children: [
        {
          id: 'admin-list',
          label: '管理员列表',
          path: '/admin/list',
          children: [
            {
              id: 'admin-list-add',
              label: '添加管理员',
              path: '/admin/add',
              hide: true,
            },
            {
              id: 'admin-list-edit',
              label: '编辑管理员',
              path: '/admin/edit',
              hide: true,
            },
          ],
        },
        {
          id: 'admin-role',
          label: '管理员角色',
          path: '/admin/roles',
        },
      ],
    },
  ],
  activeMenuId: null,
  activeItem: null,
  activePath: [],
  activeIdPath: [],
  expandedMenus: {},

  // 设置菜单数据
  setMenuItems: (menuItems) => set({ menuItems }),

  /**
   * 根据路径设置激活菜单（核心方法）
   * 这是状态同步的关键方法，确保所有相关状态保持一致
   */
  setActiveMenuByPath: (pathname: string) => {
    const { menuItems } = get();
    const matchedItem = findMenuByPath(menuItems, pathname);

    if (matchedItem) {
      const activePath = findMenuItemPath(menuItems, matchedItem.id);
      const activeIdPath = activePath.map((item) => item.id);
      const expandedIds = getExpandedMenuIds(activePath);

      // 构建新的展开状态：保持现有展开状态，并添加新的展开项
      const newExpandedMenus = { ...get().expandedMenus };
      expandedIds.forEach((id) => {
        newExpandedMenus[id] = true;
      });

      // 确定主菜单项（用于侧边栏显示）
      // 如果匹配的是子菜单项，则主菜单项应该是其顶级父菜单
      const mainMenuItem = activePath.length > 0 ? activePath[0] : matchedItem;

      set({
        activeMenuId: matchedItem.id,
        activeItem: mainMenuItem, // 这里设置为主菜单项，确保侧边栏正确显示子菜单
        activePath,
        activeIdPath,
        expandedMenus: newExpandedMenus,
      });
    } else {
      // 如果没有找到匹配的菜单项，清空状态
      set({
        activeMenuId: null,
        activeItem: null,
        activePath: [],
        activeIdPath: [],
      });
    }
  },

  /**
   * 根据菜单ID设置激活菜单
   */
  setActiveMenuById: (menuId: string) => {
    const { menuItems } = get();
    const activeItem = findMenuItem(menuItems, menuId);

    if (activeItem) {
      const activePath = findMenuItemPath(menuItems, menuId);
      const activeIdPath = activePath.map((item) => item.id);
      const expandedIds = getExpandedMenuIds(activePath);

      const newExpandedMenus = { ...get().expandedMenus };
      expandedIds.forEach((id) => {
        newExpandedMenus[id] = true;
      });

      set({
        activeMenuId: menuId,
        activeItem,
        activePath,
        activeIdPath,
        expandedMenus: newExpandedMenus,
      });
    }
  },

  /**
   * 切换菜单展开状态
   */
  toggleMenuExpand: (menuId: string) => {
    const { expandedMenus } = get();
    set({
      expandedMenus: {
        ...expandedMenus,
        [menuId]: !expandedMenus[menuId],
      },
    });
  },

  /**
   * 设置菜单展开状态
   */
  setMenuExpanded: (menuId: string, expanded: boolean) => {
    const { expandedMenus } = get();
    set({
      expandedMenus: {
        ...expandedMenus,
        [menuId]: expanded,
      },
    });
  },

  /**
   * 判断菜单是否激活
   */
  isMenuActive: (menuId: string) => {
    const { activeIdPath } = get();
    return activeIdPath.includes(menuId);
  },

  /**
   * 判断菜单是否展开
   */
  isMenuExpanded: (menuId: string) => {
    const { expandedMenus } = get();
    return expandedMenus[menuId] || false;
  },

  /**
   * 判断菜单是否有激活的子项
   */
  hasActiveChild: (menuId: string) => {
    const { menuItems, activeIdPath } = get();
    const menuItem = findMenuItem(menuItems, menuId);

    if (!menuItem?.children) return false;

    return menuItem.children.some((child) => activeIdPath.includes(child.id));
  },
}));
