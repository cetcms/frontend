import { AppShell, Badge, Divider, Group, ScrollArea, Text } from '@mantine/core';
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import {
  ActionAccount,
  ActionNotification,
  MainLogo,
  SideNavbar,
  ToggleLanguage,
  ToggleThemeMode,
} from 'src/layouts/includes';

import { version } from '~/package.json';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: collapsed ? 62 : 227,
        breakpoint: 'false',
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group gap="xs">
            <MainLogo />
            <Divider orientation="vertical" />
            <Badge>{version}</Badge>
          </Group>
          <Group gap="xs">
            <ToggleLanguage />
            <Text c="var(--app-shell-border-color)">|</Text>
            <ToggleThemeMode />
            <Text c="var(--app-shell-border-color)">|</Text>
            <ActionNotification />
            <Text c="var(--app-shell-border-color)">|</Text>
            <ActionAccount />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar>
        <SideNavbar onCollapse={setCollapsed} />
      </AppShell.Navbar>
      <AppShell.Main>
        <ScrollArea h="calc(100vh - 60px)">{children ?? <Outlet />}</ScrollArea>
      </AppShell.Main>
    </AppShell>
  );
};
