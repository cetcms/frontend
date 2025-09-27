import { create } from 'zustand';

// 添加辅助函数用于递归查找菜单项
const findMenuItem = (items: MenuItem[], id: string): MenuItem | undefined => {
  for (const item of items) {
    if (item.id === id) {
      return item;
    }
    if (item.children) {
      const found = findMenuItem(item.children, id);
      if (found) {
        return found;
      }
    }
  }
  return undefined;
};

// 添加辅助函数用于递归查找菜单项路径
const findMenuItemPath = (items: MenuItem[], id: string): MenuItem[] => {
  for (const item of items) {
    if (item.id === id) {
      return [item];
    }
    if (item.children) {
      const path = findMenuItemPath(item.children, id);
      if (path.length > 0) {
        return [item, ...path];
      }
    }
  }
  return [];
};

export type MenuItem = {
  id: string;
  label: string;
  icon?: string;
  path?: string;
  active?: boolean;
  children?: MenuItem[];
  type?: 'divider';
  description?: string;
};

export type MenuStore = {
  menuItems: MenuItem[];
  setMenuItems: (menu: MenuItem[]) => void;

  idPath: string[];
  setIdPathByActiveId: (activeId: string) => void;

  activeItem: MenuItem | null;
  setActiveItem: (item: MenuItem | null) => void;
  setActiveItemById: (id: string) => void;

  itemPath: MenuItem[];
  setItemPathByActiveId: (activeId: string) => void;
};

export const useMenuStore = create<MenuStore>((set, get) => ({
  menuItems: [
    {
      id: 'dashboard',
      label: '仪表盘',
      icon: 'solar:window-frame-line-duotone',
      path: '/dashboard',
    },
  ],
  setMenuItems: (menuItems) => set({ menuItems }),

  activeItem: null,
  setActiveItem: (activeItem) => set({ activeItem }),
  setActiveItemById: (activeId) =>
    set(() => {
      const activeItem = findMenuItem(get().menuItems, activeId);
      return { activeItem };
    }),

  idPath: [],
  setIdPathByActiveId: (activeId) =>
    set(() => {
      const itemPath = findMenuItemPath(get().menuItems, activeId);
      return { idPath: itemPath.map((item) => item.id) };
    }),

  itemPath: [],
  setItemPathByActiveId: (activeId) =>
    set(() => {
      const itemPath = findMenuItemPath(get().menuItems, activeId);
      return { itemPath };
    }),
}));
