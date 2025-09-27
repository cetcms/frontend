import { Breadcrumbs, Button } from '@mantine/core';
import React from 'react';
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
      leftSection={<Iconify icon={item.icon || ''} fontSize={16} />} 
      key={index} 
      size="xs" 
      variant="light"
    >
      {item.label}
    </Button>
  ));

  return (
    <Breadcrumbs>{items}</Breadcrumbs>
  );
};
