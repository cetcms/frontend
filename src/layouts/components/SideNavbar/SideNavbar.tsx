import { Box, Divider, Group, ScrollArea, Stack } from '@mantine/core';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { useAuthStore, useMenuStore } from 'src/store';

import { NavbarLink } from './NavbarLink';
import { TreeLinks } from './TreeLinks';

export interface SideNavbarProps {
  onCollapse?: (value: boolean) => void;
  width: number;
}

/**
 * 侧边导航栏组件
 * 负责渲染主菜单和子菜单，管理菜单的激活状态和展开/收起逻辑
 */
export const SideNavbar = ({ onCollapse, width }: SideNavbarProps) => {
  const { t } = useTranslation();
  const { checkPermission, isAdmin, isUser, isCompany } = useAuthStore();
  const location = useLocation();

  // 使用优化后的菜单状态管理
  const { menuItems, activeItem, setActiveMenuByPath, setActiveMenuById, isMenuActive } = useMenuStore();

  /**
   * 路径变化时自动更新激活菜单
   * 使用统一的状态同步方法，确保所有相关状态保持一致
   */
  useEffect(() => {
    setActiveMenuByPath(location.pathname);
  }, [location.pathname, setActiveMenuByPath]);

  /**
   * 根据激活菜单的子菜单数量控制侧边栏的展开/收起状态
   * 有子菜单时展开，无子菜单时收起
   */
  useEffect(() => {
    // 管理员菜单永不收起：强制设置为不折叠
    if (isAdmin || isUser) {
      onCollapse?.(false);
      return;
    }
    const hasChildren = Boolean(activeItem?.children?.filter((child) => !child.hide)?.length);
    onCollapse?.(!hasChildren);
  }, [activeItem, onCollapse, isAdmin, isUser]);

  /**
   * 处理主菜单项点击事件
   * @param menuId 被点击的菜单项ID
   */
  const handleMenuClick = (menuId: string) => {
    setActiveMenuById(menuId);
  };

  /**
   * 渲染主菜单链接列表
   */
  const renderMainMenuLinks = (collapsed: boolean) => {
    return menuItems
      .filter((link) => !link.hide)
      .map(({ children, ...link }) => (
        <NavbarLink
          {...link}
          collapsed={collapsed}
          disabled={!checkPermission(link.permissions)}
          width={width - 2}
          key={link.id}
          label={t(link.label)}
          path={link.path || '#'}
          active={isMenuActive(link.id)}
          onClick={() => handleMenuClick(link.id)}
        />
      ));
  };

  /**
   * 渲染子菜单区域
   * 只有当激活的菜单项有子菜单时才显示
   */
  const renderChildrenLinks = () => {
    const children = activeItem?.children?.filter((child) => !child.hide);
    if (!activeItem || !children?.length) {
      return null;
    }

    return (
      <>
        <Divider orientation="vertical" h="100vh" />
        <Box w={`calc(100% - ${width + 1}px)`}>
          <TreeLinks links={children} parentMenuId={activeItem.id} />
        </Box>
      </>
    );
  };

  // 管理员：使用子菜单列表风格展示全部菜单
  if (isAdmin) {
    const allLinks = menuItems.filter((link) => !link.hide);
    return <TreeLinks links={allLinks} />;
  }

  // 用户：使用主菜单风格展示全部菜单（用户菜单没有子级）
  if (isUser) {
    return (
      <ScrollArea>
        <Stack p="xs" gap="xs" align="center" style={{ boxSizing: 'border-box', width: width - 2 }}>
          {renderMainMenuLinks(false)}
        </Stack>
      </ScrollArea>
    );
  }

  // 企业：保持现有模式不变（主菜单 + 子菜单）
  if (isCompany) {
    return (
      <Group align="start" gap="1">
        {/* 主菜单区域 */}
        <ScrollArea>
          <Stack
            p="xs"
            gap="xs"
            align="center"
            style={{
              boxSizing: 'border-box',
              width: width - 2,
            }}
          >
            {renderMainMenuLinks(true)}
          </Stack>
        </ScrollArea>

        {/* 子菜单区域 */}
        {renderChildrenLinks()}
      </Group>
    );
  }

  // 默认：保持现有模式（用于未知类型场景）
  return (
    <Group align="start" gap="1">
      {/* 主菜单区域 */}
      <ScrollArea>
        <Stack
          p="xs"
          gap="xs"
          align="center"
          style={{
            boxSizing: 'border-box',
            width: width - 2,
          }}
        >
          {renderMainMenuLinks(true)}
        </Stack>
      </ScrollArea>

      {/* 子菜单区域 */}
      {renderChildrenLinks()}
    </Group>
  );
};
