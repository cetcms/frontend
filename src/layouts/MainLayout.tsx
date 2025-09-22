import { AppShell, Group, Text } from '@mantine/core';
import React, { useState } from 'react';
import { Outlet } from 'react-router';
import { ColorSchemeToggle, LanguageToggle, MainLogo, NotificationButton, UserMenu } from 'src/components';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [collapsed] = useState(false);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: collapsed ? 62 : 163,
        breakpoint: 'false',
      }}
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <MainLogo />
          <Group gap="xs">
            <LanguageToggle />
            <Text c="var(--app-shell-border-color)">|</Text>
            <ColorSchemeToggle />
            <Text c="var(--app-shell-border-color)">|</Text>
            <NotificationButton />
            <Text c="var(--app-shell-border-color)">|</Text>
            <UserMenu />
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar
        style={{
          transition: 'width 0.2s',
        }}
      >
        {/*<MainNavbar onCollapse={setCollapsed} />*/}
      </AppShell.Navbar>
      <AppShell.Main>{children ?? <Outlet />}</AppShell.Main>
    </AppShell>
  );
}
