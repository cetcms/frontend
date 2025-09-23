import { AppShell, Button, Group, ScrollArea, Stack } from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { menuLinks } from 'src/config/menuLinks';

import { NavbarLink } from './private/NavbarLink';

export interface MainNavbarProps {
  collapsed?: boolean;
  onCollapse?: (value: boolean) => void;
}

export const MainNavbar = ({ onCollapse, collapsed: defaultCollapsed }: MainNavbarProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  const [activeLinkId, setActiveLinkId] = useState(() => {
    const currentPath = location.pathname;
    const currentLink = menuLinks.find((link) => {
      if (link.path && currentPath.startsWith(link.path)) {
        return true;
      }
      if (link.children?.length) {
        return link.children.some((child) => child.path === currentPath);
      }
      return false;
    });
    return currentLink?.id || menuLinks[0].id;
  });

  // 只在组件挂载时设置初始activeLinkId，不再监听location.pathname的变化
  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = menuLinks.find((link) => {
      if (link.path && currentPath.startsWith(link.path)) {
        return true;
      }
      if (link.children) {
        return link.children.some((child) => child.path === currentPath);
      }
      return false;
    });
    setActiveLinkId(currentLink?.id || menuLinks[0].id);
  }, [location.pathname]);

  useEffect(() => {
    onCollapse?.(collapsed);
  }, [collapsed, onCollapse]);

  useEffect(() => {
    setCollapsed(defaultCollapsed || false);
  }, [defaultCollapsed]);

  const links = menuLinks.map((link) => (
    <NavbarLink
      {...link}
      key={link.id}
      label={t(link.label)}
      path={link.path || '#'}
      active={activeLinkId === link.id}
      onClick={() => {
        // 防止路由变化时的useEffect重新设置activeLinkId
        setActiveLinkId(link.id);
      }}
      collapsed={collapsed}
    />
  ));

  return (
    <>
      {/* 主菜单区域 */}
      <AppShell.Section grow component={ScrollArea}>
        <Stack
          gap="xs"
          align="center"
          p="sm"
          style={{
            boxSizing: 'border-box',
            width: collapsed ? 60 : 160,
          }}
        >
          {links}
        </Stack>
      </AppShell.Section>

      {/* 用户信息区域 */}
      <AppShell.Section>
        <Group justify="center" py="md" />
        <Button
          fullWidth
          radius={0}
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? t('navbar:expand') : t('navbar:collapse')}
        >
          {collapsed ? <IconChevronRight /> : <IconChevronLeft />}
        </Button>
      </AppShell.Section>
    </>
  );
};
