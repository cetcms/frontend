import { MantineProvider } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Loading } from 'src/components';
import { SetupAppOptions } from 'src/setup';
import { useMenuStore, useThemeStore } from 'src/store';

export interface InitializeProviderProps {
  children: React.ReactNode;
  setupOptions?: SetupAppOptions;
}

const useRegisterMenus = (registerMenus: SetupAppOptions['registerMenus']) => {
  // 注册菜单
  const { setMenuItems, menuItems } = useMenuStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (registerMenus) {
      const defaultMenuItems = JSON.parse(JSON.stringify(menuItems));
      Promise.resolve(registerMenus(defaultMenuItems)).then((newMenuItems) => {
        if (newMenuItems) {
          setMenuItems(newMenuItems);
        } else {
          setMenuItems(defaultMenuItems);
        }
        setLoading(false);
      });
    }
  }, []);

  return {
    menuItems,
    loading,
  };
};

const useRegisterTheme = (registerTheme: SetupAppOptions['registerTheme']) => {
  const { options, theme, setTheme } = useThemeStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (registerTheme) {
      const defaultOptions = JSON.parse(JSON.stringify(options));
      Promise.resolve(registerTheme(defaultOptions)).then((newOptions) => {
        if (newOptions) {
          setTheme(newOptions);
        } else {
          setTheme(defaultOptions);
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  return {
    theme,
    loading,
  };
};

export const InitializeProvider: React.FC<InitializeProviderProps> = ({ children, setupOptions }) => {
  const { registerMenus } = setupOptions || {};
  const { loading: menuLoading } = useRegisterMenus(registerMenus);
  const { loading: themeLoading, theme } = useRegisterTheme(setupOptions?.registerTheme);
  if (menuLoading || themeLoading) {
    return <Loading native />;
  }
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
