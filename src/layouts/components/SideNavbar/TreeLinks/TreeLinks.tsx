import { Divider, NavLink, ScrollArea, ScrollAreaProps, Stack } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { Iconify } from 'src/components';
import { MenuItem } from 'src/router/menus';
import { useAuthStore, useMenuStore } from 'src/store';

import { LinkArrow } from './LinkArrow';

/**
 * 单个菜单链接渲染组件的属性
 */
interface RenderLinkProps {
  link: MenuItem;
  parentMenuId?: string;
}

/**
 * 单个菜单链接渲染组件
 * 负责渲染单个菜单项，支持多级嵌套和状态管理
 */
const RenderLink: React.FC<RenderLinkProps> = ({ link }) => {
  const { t } = useTranslation(['navbar']);
  const { checkPermission } = useAuthStore();
  const { isMenuActive, isMenuExpanded, hasActiveChild, setMenuExpanded } = useMenuStore();

  // 处理分割线类型
  if (link.type === 'divider') {
    return <Divider size="xs" />;
  }

  const children = link.children?.filter((child) => !child.hide);
  const childrenCount = children?.length || 0;

  // 判断当前菜单项的激活状态
  const isCurrentActive = isMenuActive(link.id);
  const isCurrentExpanded = isMenuExpanded(link.id);
  const hasCurrentActiveChild = hasActiveChild(link.id);
  /**
   * 处理有子菜单的菜单项
   */
  if (children && childrenCount > 0) {
    const activeChildIndex = children.findIndex((child) => isMenuActive(child.id));

    // 当有激活的子项时，自动展开父菜单
    React.useEffect(() => {
      if (hasCurrentActiveChild && !isCurrentExpanded) {
        setMenuExpanded(link.id, true);
      }
    }, [hasCurrentActiveChild, isCurrentExpanded, link.id, setMenuExpanded, link.label]);

    return (
      <NavLink
        key={link.id}
        label={t(link.label) || link.label}
        leftSection={<Iconify icon={link.icon || 'solar:stop-circle-line-duotone'} fontSize={16} />}
        style={{
          borderRadius: 'var(--mantine-radius-default)',
          backgroundColor: hasCurrentActiveChild ? 'var(--mantine-color-primary-light)' : undefined,
        }}
        disabled={!checkPermission(link.permissions)}
        opened={isCurrentExpanded}
        onChange={(opened) => setMenuExpanded(link.id, opened)}
        active={isCurrentActive}
        childrenOffset={10}
      >
        {children.map((child, index) => {
          const isChildActive = isMenuActive(child.id);
          return (
            <NavLink
              key={child.id}
              component={Link}
              to={child.path || '#'}
              label={t(child.label) || child.label}
              active={isChildActive}
              disabled={!checkPermission(child.permissions)}
              leftSection={
                <LinkArrow
                  isLast={index === childrenCount - 1}
                  isActive={isChildActive}
                  isBefore={activeChildIndex > -1 && index < activeChildIndex}
                  isAfter={activeChildIndex > -1 && index > activeChildIndex}
                />
              }
              style={{
                borderRadius: 'var(--mantine-radius-default)',
                padding: '0px 8px',
                backgroundColor: 'transparent',
              }}
            />
          );
        })}
      </NavLink>
    );
  }

  /**
   * 处理叶子菜单项（无子菜单）
   */
  return (
    <NavLink
      key={link.id}
      component={Link}
      to={link.path || '#'}
      label={t(link.label) || link.label}
      disabled={!checkPermission(link.permissions)}
      leftSection={<Iconify icon={link.icon || 'solar:stop-circle-line-duotone'} fontSize={16} />}
      active={isCurrentActive}
      style={{ borderRadius: 'var(--mantine-radius-default)' }}
    />
  );
};

/**
 * 树形菜单链接组件的属性
 */
export interface TreeLinksProps {
  links?: MenuItem[];
  parentMenuId?: string;
}

/**
 * 树形菜单链接组件
 * 负责渲染多级菜单结构，管理菜单的展开/收起状态
 */
export const TreeLinks: React.FC<TreeLinksProps & ScrollAreaProps> = ({ links = [], parentMenuId, ...props }) => {
  return (
    <ScrollArea {...props}>
      <Stack gap="xs" p="xs">
        {links.map((link) => (
          <RenderLink key={link.id} link={link} parentMenuId={parentMenuId} />
        ))}
      </Stack>
    </ScrollArea>
  );
};
