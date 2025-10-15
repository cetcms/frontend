import { useQuery } from '@apollo/client/react';
import { MantineProvider } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Loading } from 'src/components';
import { HealthCheckDocument, TranslationsDocument } from 'src/graphql';
import { SomeErrorPage } from 'src/pages/error';
import { MenuItemGroup } from 'src/router/menus';
import adminMenuItems from 'src/router/menus/admin';
import companyMenuItems from 'src/router/menus/company';
import userMenuItems from 'src/router/menus/user';
import { SetupAppOptions } from 'src/setup';
import { useAuthStore, useMenuStore, useThemeStore } from 'src/store';

export interface InitializeProviderProps {
  children: React.ReactNode;
  setupOptions?: SetupAppOptions;
}

const useLoadTranslations = (scopes: string[]) => {
  const { i18n } = useTranslation();
  const { data, loading } = useQuery(TranslationsDocument, {
    variables: { scopes },
  });
  useEffect(() => {
    if (data?.translations) {
      for (const scope in data?.translations) {
        const translations = data.translations[scope] || {};
        i18n.addResourceBundle(i18n.language, scope, translations);
      }
    }
  }, [data]);
  return { loading };
};

const useRegisterMenus = (registerMenus: SetupAppOptions['registerMenus']) => {
  // 注册菜单
  const { setMenuItems, menuItems } = useMenuStore();
  const { isAdmin, isUser, isCompany } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const currentMenu: keyof MenuItemGroup | null = isCompany ? 'company' : isAdmin ? 'admin' : isUser ? 'user' : null;
  const defaultGroup = {
    admin: adminMenuItems,
    user: userMenuItems,
    company: companyMenuItems,
  };
  useEffect(() => {
    if (registerMenus) {
      Promise.resolve(registerMenus({ ...defaultGroup })).then((menuGroup) => {
        if (menuGroup && currentMenu) {
          setMenuItems(menuGroup[currentMenu] || defaultGroup[currentMenu] || []);
        } else if (currentMenu) {
          setMenuItems(defaultGroup[currentMenu] || []);
        } else {
          setMenuItems([]);
        }
        setLoading(false);
      });
    } else {
      if (currentMenu) {
        setMenuItems(defaultGroup[currentMenu] || []);
      } else {
        setMenuItems([]);
      }
      setLoading(false);
    }
  }, [currentMenu]);

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
  const { loading: translationLoading } = useLoadTranslations(['models']);
  const health = useQuery(HealthCheckDocument, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    const intervalId = setInterval(health.refetch, 5000);
    return () => clearInterval(intervalId);
  }, []);

  if (menuLoading || themeLoading || translationLoading) {
    return <Loading native />;
  }

  return <MantineProvider theme={theme}>{health.error ? <SomeErrorPage /> : children}</MantineProvider>;
};
