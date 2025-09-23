import { AppShell, Badge, Card, Divider, Grid, Group, Paper, ScrollArea, Text } from '@mantine/core';
import { useElementSize } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import {
  ActionAccount,
  ActionNotification,
  MainLogo,
  MainNavbar,
  ToggleLanguage,
  ToggleThemeMode,
} from 'src/layouts/includes';
import { useLayoutStore } from 'src/store';

import { version } from '~/package.json';

export interface MainLayoutProps {
  children?: React.ReactNode;
}

const SectionBox: React.FC<{
  children: React.ReactNode;
  shadow?: boolean;
  onResize?: (height: number, width: number) => void;
}> = ({ children, onResize, shadow }) => {
  const { ref, height, width } = useElementSize();
  setTimeout(() => {
    onResize?.(height, width);
  });
  return (
    <Paper
      ref={ref}
      radius={0}
      pos={shadow ? 'relative' : undefined}
      shadow={shadow ? 'md' : undefined}
      style={{ zIndex: 1 }}
    >
      {children}
    </Paper>
  );
};

export function MainLayout({ children }: MainLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [topSectionHeight, setTopSectionHeight] = useState<number>(0);
  const [headSectionHeight, setHeadSectionHeight] = useState<number>(0);
  const [leaveTop, setLeaveTop] = useState(false);

  const { leftSection, topSection, headSection, setting } = useLayoutStore();
  useEffect(() => {
    setCollapsed(Boolean(setting?.navbarCollapsed));
  }, [setting]);

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
      <AppShell.Navbar
        style={{
          transition: 'width 0.2s',
        }}
      >
        <MainNavbar collapsed={collapsed} onCollapse={setCollapsed} />
      </AppShell.Navbar>
      <AppShell.Main>
        <Grid gutter={0}>
          <Grid.Col m={0} span={12}>
            {topSection && (
              <SectionBox
                onResize={setTopSectionHeight}
                shadow={(!setting?.fixedHeadSection || !headSection) && leaveTop}
              >
                {topSection}
              </SectionBox>
            )}
          </Grid.Col>
          {leftSection && (
            <Grid.Col span="content" style={{ zIndex: 2 }}>
              <Card
                p="sm"
                radius={0}
                shadow={leaveTop ? 'md' : undefined}
                h={`calc(100vh - ${(topSectionHeight || 0) + 60}px)`}
                style={{
                  borderRight: '1px solid var(--app-shell-border-color)',
                }}
              >
                {leftSection}
              </Card>
            </Grid.Col>
          )}
          <Grid.Col m={0} span="auto">
            {headSection && setting?.fixedHeadSection && (
              <SectionBox onResize={setHeadSectionHeight} shadow={leaveTop}>
                {headSection}
              </SectionBox>
            )}
            <ScrollArea
              h={`calc(100vh - ${(topSectionHeight || 0) + (setting?.fixedHeadSection ? headSectionHeight || 0 : 0) + 60}px)`}
              onScrollPositionChange={(position) => {
                setLeaveTop(position.y > 0);
              }}
            >
              {headSection && !setting?.fixedHeadSection && <SectionBox>{headSection}</SectionBox>}
              {children ?? <Outlet />}
            </ScrollArea>
          </Grid.Col>
        </Grid>
      </AppShell.Main>
    </AppShell>
  );
}
