import { AppShell, Group, Text } from '@mantine/core';
import React from 'react';
import { Outlet } from 'react-router';

import { MainLogo, ToggleLanguage, ToggleThemeMode } from './includes';

export interface AuthLayoutProps {
  children?: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }: AuthLayoutProps) => {
  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header>
        <Group justify="space-between" h="100%" px="md">
          <Group gap="xs">
            <MainLogo />
          </Group>
          <Group gap="xs">
            <ToggleLanguage />
            <Text c="var(--app-shell-border-color)">|</Text>
            <ToggleThemeMode />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children || <Outlet />}</AppShell.Main>
      <AppShell.Footer>
        <Group justify="center" h="100%" p="md">
          <Text size="xs">© {new Date().getFullYear()} 深圳市极客领航网络科技有限公司版权所有</Text>
          <Text size="xs">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://beian.miit.gov.cn/"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              粤ICP备 202588888888号
            </a>
          </Text>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
};
