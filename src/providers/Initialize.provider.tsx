import { useQuery } from '@apollo/client/react';
import { MantineProvider } from '@mantine/core';
import React, { useEffect } from 'react';
import { Loading } from 'src/components';
import { HealthCheckDocument } from 'src/graphql';
import { useInitializeAuth, useLoadTranslations, useRegisterMenus, useRegisterTheme } from 'src/hooks';
import { SomeErrorPage } from 'src/pages/error';
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
  const health = useQuery(HealthCheckDocument, {
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    const intervalId = setInterval(health.refetch, 5000);
    return () => clearInterval(intervalId);
  }, []);

  if (menuLoading || themeLoading || translationLoading || authLoading) {
    return <Loading native />;
  }

  return <MantineProvider theme={theme}>{health.error ? <SomeErrorPage /> : children}</MantineProvider>;
};
