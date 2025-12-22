import { AppShell, Divider, Group, ScrollArea, Text } from '@mantine/core';
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { CurrentCompany } from 'src/layouts/components/CurrentCompany';
import { useAuthStore } from 'src/store';

import {
  ActionAccount,
  ActionNotification,
  Background,
  Breadcrumb,
  MainLogo,
  SideNavbar,
  ToggleLanguage,
  ToggleThemeMode,
} from './components';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const fullWidth = 260;
  const collapsedWidth = 63;
  const memberWidth = 200;
  const { isMember } = useAuthStore();
  const navbarWidth = isMember ? memberWidth : collapsed ? collapsedWidth : fullWidth;
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: navbarWidth,
        breakpoint: 'false',
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group gap="xs">
            <MainLogo width={fullWidth} />
            <Divider orientation="vertical" my="-4px" />
            <Breadcrumb />
          </Group>
          <Group>
            <CurrentCompany />
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
        <SideNavbar onCollapse={setCollapsed} width={isMember ? memberWidth : collapsedWidth} />
      </AppShell.Navbar>
      <AppShell.Main>
        <ScrollArea h="calc(100vh - 60px)">
          <Background />
          {children ?? <Outlet />}
        </ScrollArea>
      </AppShell.Main>
    </AppShell>
  );
};
