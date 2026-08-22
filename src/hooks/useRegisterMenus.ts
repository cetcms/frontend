import { useCallback, useEffect, useState } from 'react';
import { MenuItem, MenuItemGroup } from 'src/router/menus';
import adminMenuItems from 'src/router/menus/admin';
import companyMenuItems from 'src/router/menus/company';
import memberMenuItems from 'src/router/menus/member';
import type { SetupAppOptions } from 'src/setup';
import { useAuthStore, useMenuStore } from 'src/store';

export const useRegisterMenus = (registerMenus: SetupAppOptions['registerMenus']) => {
  const { setMenuItems, menuItems } = useMenuStore();
  const { isAdmin, isMember, isCompany, checkPermission } = useAuthStore();
  const [loading, setLoading] = useState(Boolean(registerMenus));
  const currentMenu: keyof MenuItemGroup | null = isCompany
    ? 'company'
    : isAdmin
      ? 'admin'
      : isMember
        ? 'member'
        : null;
  const defaultGroup = {
    admin: adminMenuItems,
    member: memberMenuItems,
    company: companyMenuItems,
  };

  // 使用 useCallback 优化过滤函数,避免每次渲染都创建新函数
  const filterMenuItems = useCallback(
    function filter(items: MenuItem[]): MenuItem[] {
      return items
        .filter((item) => checkPermission(item.permissions))
        .map((item) => ({
          ...item,
          children: item.children ? filter(item.children) : undefined,
        }));
    },
    [checkPermission]
  );

  useEffect(() => {
    let newMenuItems: MenuItem[] = [];
    if (registerMenus) {
      Promise.resolve(registerMenus({ ...defaultGroup })).then((menuGroup) => {
        if (menuGroup && currentMenu) {
          newMenuItems = menuGroup[currentMenu] || defaultGroup[currentMenu];
        } else if (currentMenu) {
          newMenuItems = defaultGroup[currentMenu];
        }
        setMenuItems(filterMenuItems(newMenuItems || []));
        setLoading(false);
      });
    } else {
      if (currentMenu) newMenuItems = defaultGroup[currentMenu];
      setMenuItems(filterMenuItems(newMenuItems || []));
    }
    // 添加必要的依赖项
  }, [currentMenu, filterMenuItems, registerMenus, setMenuItems]);

  return {
    menuItems,
    loading,
  };
};
