import { Breadcrumbs, Button, Text } from '@mantine/core';
import React from 'react';
import { NavLink } from 'react-router';
import { Iconify } from 'src/components';
import { useMenuStore, MenuItem } from 'src/store';

/**
 * 面包屑导航组件
 * 显示当前激活菜单的完整路径
 */
export const Breadcrumb: React.FC = () => {
  const { activePath } = useMenuStore();

  const items = activePath.map((item: MenuItem, index: number) => (
    <Button
      key={index}
      size="compact-sm"
      component={NavLink}
      leftSection={!index && <Iconify icon={item.icon || ''} fontSize={16} />}
      variant={activePath.length - 1 === index ? 'transparent' : 'subtle'}
      color={activePath.length - 1 === index ? 'dark' : 'gray'}
      to={item.path || '#'}
    >
      {item.label}
    </Button>
  ));

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
