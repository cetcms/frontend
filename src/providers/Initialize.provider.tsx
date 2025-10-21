import { MantineProvider } from '@mantine/core';
import React from 'react';
import { Loading } from 'src/components';
import { useInitializeAuth, useLoadTranslations, useRegisterMenus, useRegisterTheme } from 'src/hooks';
import { SetupAppOptions } from 'src/setup';

export interface InitializeProviderProps {
  children: React.ReactNode;
  setupOptions?: SetupAppOptions;
}

export const InitializeProvider: React.FC<InitializeProviderProps> = ({ children, setupOptions }) => {
  const { registerMenus, registerTheme } = setupOptions || {};
  const { loading: menuLoading } = useRegisterMenus(registerMenus);
  const { loading: themeLoading, theme } = useRegisterTheme(registerTheme);
  const { loading: translationLoading } = useLoadTranslations(['models']);
  const { loading: authLoading } = useInitializeAuth();

  if (menuLoading || themeLoading || translationLoading || authLoading) {
    return <Loading native />;
  }

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
