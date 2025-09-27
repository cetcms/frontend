import { AppShell, Divider, Group, ScrollArea, Text } from '@mantine/core';
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import {
  ActionAccount,
  ActionNotification,
  Breadcrumb,
  MainLogo,
  SideNavbar,
  ToggleLanguage,
  ToggleThemeMode,
} from 'src/layouts/includes';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const fullWidth = 250;
  const collapsedWidth = 70;
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: collapsed ? collapsedWidth : fullWidth,
        breakpoint: 'false',
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group gap="xs">
            <MainLogo width={fullWidth} />
            <Divider orientation="vertical" />
            <Breadcrumb />
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
        <SideNavbar onCollapse={setCollapsed} width={collapsedWidth} />
      </AppShell.Navbar>
      <AppShell.Main>
        <ScrollArea h="calc(100vh - 60px)">{children ?? <Outlet />}</ScrollArea>
      </AppShell.Main>
    </AppShell>
  );
};
