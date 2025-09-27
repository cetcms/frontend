import { Box, Divider, Group, ScrollArea, Stack } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { useMenuStore } from 'src/store';

import { NavbarLink } from './private/NavbarLink';
import { TreeLinks } from './private/TreeLinks';

export interface SideNavbarProps {
  onCollapse?: (value: boolean) => void;
}

export const SideNavbar = ({ onCollapse }: SideNavbarProps) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { menuItems, activeItem, setActiveItemById, setItemPathByActiveId } = useMenuStore();

  // 初始化选中的菜单项ID
  const [activeLinkId, setActiveLinkId] = useState(() => {
    const currentPath = location.pathname;
    const currentLink = menuItems.find((link) => {
      // 如果当前路径以链接路径开头，则匹配
      if (link.path && currentPath.startsWith(link.path)) {
        return true;
      }
      // 如果有子菜单，检查子菜单路径是否匹配
      if (link.children?.length) {
        return link.children.some((child) => child.path === currentPath);
      }
      return false;
    });
    return currentLink?.id || menuItems[0].id;
  });

  // 只在组件挂载时设置初始activeLinkId，不再监听location.pathname的变化
  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = menuItems.find((link) => {
      if (link.path && currentPath.startsWith(link.path)) {
        return true;
      }
      // 检查子菜单路径是否匹配
      if (link.children) {
        return link.children.some((child) => child.path === currentPath);
      }
      return false;
    });
    setActiveLinkId(currentLink?.id || menuItems[0].id);
  }, [location.pathname]);

  useEffect(() => {
    setActiveItemById(activeLinkId);
    setItemPathByActiveId(activeLinkId);
  }, [activeLinkId]);

  useEffect(() => {
    onCollapse?.(!activeItem?.children?.length);
  }, [activeItem, onCollapse]);

  // 渲染菜单链接
  const links = menuItems.map((link) => (
    <NavbarLink
      {...link}
      collapsed
      key={link.id}
      label={t(link.label)}
      path={link.path || '#'}
      active={activeLinkId === link.id}
      onClick={() => {
        // 防止路由变化时的useEffect重新设置activeLinkId
        setActiveLinkId(link.id);
      }}
    />
  ));

  const ChildrenLinks = () => {
    if (activeItem?.children?.length) {
      return (
        <>
          <Divider orientation="vertical" h="100vh" />
          <Box p="sm" w="calc(100% - 63px)">
            <TreeLinks links={activeItem?.children || []} />
          </Box>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <Group align="start" gap="1">
        <ScrollArea>
          <Stack
            gap="xs"
            align="center"
            p="sm"
            style={{
              boxSizing: 'border-box',
              width: 60,
            }}
          >
            {links}
          </Stack>
        </ScrollArea>
        <ChildrenLinks />
      </Group>
    </>
  );
};
