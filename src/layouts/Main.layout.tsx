import { AppShell, Divider, Group, ScrollArea, Text } from '@mantine/core';
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { useThemeMode } from 'src/hooks';
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

const Background = () => {
  const theme = useThemeMode();
  return (
    <>
      <div
        style={{
          backgroundColor: 'var(--mantine-color-primary-9)',
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          opacity: 0.02,
          zIndex: -1,
        }}
      />
      <div
        style={{
          backgroundColor: theme === 'dark' ? 'white' : 'black',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.02,
          zIndex: -1,
        }}
      />
    </>
  );
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const fullWidth = 260;
  const collapsedWidth = 63;
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
            <Divider orientation="vertical" my="-4px" />
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
        <ScrollArea h="calc(100vh - 60px)">
          <Background />
          {children ?? <Outlet />}
        </ScrollArea>
      </AppShell.Main>
    </AppShell>
  );
};
