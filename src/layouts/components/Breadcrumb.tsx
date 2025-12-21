import { Breadcrumbs, Button, Text } from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router';
import { Iconify } from 'src/components';
import type { MenuItem } from 'src/router/menus';
import { useMenuStore } from 'src/store';

/**
 * 面包屑导航组件
 * 显示当前激活菜单的完整路径
 */
export const Breadcrumb: React.FC = () => {
  const { activePath } = useMenuStore();

  const items = activePath.map((item: MenuItem, index: number) => {
    const isLast = activePath.length - 1 === index;
    const hasPath = Boolean(item.path && item.path !== '#');
    const isClickable = hasPath && !isLast;

    return (
      <Button
        key={index}
        size="compact-sm"
        component={isClickable ? NavLink : 'div'}
        leftSection={!index && <Iconify icon={item.icon || ''} fontSize={16} />}
        variant={isLast ? 'transparent' : 'subtle'}
        color={isLast ? 'dark' : 'gray'}
        to={isClickable ? item.path : undefined}
        disabled={!isClickable}
        style={{
          cursor: isClickable ? 'pointer' : 'default',
          opacity: !isClickable && !isLast ? 0.6 : 1,
        }}
      >
        {item.label}
      </Button>
    );
  });

  return (
    <Breadcrumbs
      separatorMargin="0"
      separator={
        <Text size="xs" c="dimmed">
          /
        </Text>
      }
    >
      {items}
    </Breadcrumbs>
  );
};
