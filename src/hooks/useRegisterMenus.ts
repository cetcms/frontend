import { useEffect, useState } from 'react';
import { MenuItem, MenuItemGroup } from 'src/router/menus';
import adminMenuItems from 'src/router/menus/admin';
import companyMenuItems from 'src/router/menus/company';
import userMenuItems from 'src/router/menus/user';
import type { SetupAppOptions } from 'src/setup';
import { useAuthStore, useMenuStore } from 'src/store';

export const useRegisterMenus = (registerMenus: SetupAppOptions['registerMenus']) => {
  const { setMenuItems, menuItems } = useMenuStore();
  const { isAdmin, isUser, isCompany, checkPermission } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const currentMenu: keyof MenuItemGroup | null = isCompany ? 'company' : isAdmin ? 'admin' : isUser ? 'user' : null;
  const defaultGroup = {
    admin: adminMenuItems,
    user: userMenuItems,
    company: companyMenuItems,
  };

  const filterMenuItems = (items: MenuItem[]): MenuItem[] => {
    return items
      .filter((item) => checkPermission(item.permissions))
      .map((item) => ({
        ...item,
        children: item.children ? filterMenuItems(item.children) : undefined,
      }));
  };

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
      setLoading(false);
    }
  }, [currentMenu]);

  return {
    menuItems,
    loading,
  };
};
