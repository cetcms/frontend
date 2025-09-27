import React, { useEffect, useState } from 'react';
import { Loading } from 'src/components';
import { MenuItem, useMenuStore } from 'src/store';

export interface SetupOptions {
  registerMenus?: (defaultMenuItems: MenuItem[]) => MenuItem[] | void | Promise<MenuItem[] | void>;
}

export interface InitializeProviderProps {
  children: React.ReactNode;
  setupOptions?: SetupOptions;
}

const useRegisterMenus = (registerMenus: SetupOptions['registerMenus']) => {
  // 注册菜单
  const { setMenuItems, menuItems } = useMenuStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (registerMenus) {
      const initialMenuItems = JSON.parse(JSON.stringify(menuItems));
      Promise.resolve(registerMenus(initialMenuItems)).then((registeredMenuItems) => {
        if (registeredMenuItems) {
          setMenuItems(registeredMenuItems);
        } else {
          setMenuItems(initialMenuItems);
        }
        setLoading(false);
      });
    }
  }, [setMenuItems, setLoading]);

  return {
    menuItems,
    loading,
  };
};

export const InitializeProvider: React.FC<InitializeProviderProps> = ({ children, setupOptions }) => {
  const { registerMenus } = setupOptions || {};
  const { loading } = useRegisterMenus(registerMenus);
  if (loading) {
    return <Loading />;
  }
  return <>{children}</>;
};
