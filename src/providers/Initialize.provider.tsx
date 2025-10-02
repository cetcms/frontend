import { useQuery } from '@apollo/client/react';
import { MantineProvider } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loading } from 'src/components';
import { TranslationsDocument } from 'src/graphql';
import { SetupAppOptions } from 'src/setup';
import { useMenuStore, useThemeStore } from 'src/store';

export interface InitializeProviderProps {
  children: React.ReactNode;
  setupOptions?: SetupAppOptions;
}

const useLoadTranslations = (scope: string) => {
  const { i18n } = useTranslation();
  const { data, loading } = useQuery(TranslationsDocument, {
    variables: { scope },
  });
  useEffect(() => {
    if (data?.translations) {
      i18n.addResourceBundle(i18n.language, scope, data.translations);
    }
  }, [data]);
  return { loading };
};

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
    } else {
      setLoading(false);
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
  const { registerMenus, registerTheme } = setupOptions || {};
  const { loading: menuLoading } = useRegisterMenus(registerMenus);
  const { loading: themeLoading, theme } = useRegisterTheme(registerTheme);
  const { loading: translationsLoading } = useLoadTranslations('models');
  if (menuLoading || themeLoading || translationsLoading) {
    return <Loading native />;
  }
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
