import { AppShell, Group, Text } from '@mantine/core';
import React from 'react';
import { Outlet } from 'react-router';
import { ColorSchemeToggle, LanguageToggle, MainLogo } from 'src/components';

export interface AuthLayoutProps {
  children?: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }: AuthLayoutProps) => {
  return (
    <AppShell padding="md" header={{ height: 60 }}>
      <AppShell.Header>
        <Group justify="space-between" h="100%" px="md">
          <Group>
            <MainLogo />
          </Group>
          <Group gap="xs">
            <LanguageToggle />
            <Text c="var(--app-shell-border-color)">|</Text>
            <ColorSchemeToggle />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Main>{children || <Outlet />}</AppShell.Main>
      <AppShell.Footer>
        <Group justify="center" h="100%" p="md">
          <Text size="xs">© {new Date().getFullYear()} 深圳极客领航科技有限公司</Text>
          <Text size="xs">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              蜀ICP备2025134448号
            </a>
          </Text>
        </Group>
      </AppShell.Footer>
    </AppShell>
  );
};
