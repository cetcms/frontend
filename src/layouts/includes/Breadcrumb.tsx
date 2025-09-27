import { Breadcrumbs, Button } from '@mantine/core';
import React from 'react';
import { Iconify } from 'src/components';
import { useMenuStore } from 'src/store';

export const Breadcrumb: React.FC = () => {
  const { itemPath } = useMenuStore();
  const items = itemPath.map((item, index) => (
    <Button leftSection={<Iconify icon={item.icon || ''} fontSize={16} />} key={index} size="xs" variant="light">
      {item.label}
    </Button>
  ));

  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
    </>
  );
};
