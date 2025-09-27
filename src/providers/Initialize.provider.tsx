import React, { useEffect } from 'react';
import registerMenus from 'src/start/register-menus';
import { MenuItem, useMenuStore } from 'src/store';

export interface InitializeProviderProps {
  children: React.ReactNode;
}

export const InitializeProvider: React.FC<InitializeProviderProps> = ({ children }) => {
  // 注册菜单
  const { setMenuItems } = useMenuStore();
  useEffect(() => {
    const initialMenus: MenuItem[] = [];
    registerMenus(initialMenus);
    setMenuItems(initialMenus);
  }, [setMenuItems]);

  return <>{children}</>;
};
