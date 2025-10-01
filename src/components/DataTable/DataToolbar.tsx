import { Card, Group, Button, Divider } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import React from 'react';

import { FilterButton, FilterButtonProps } from './FilterButton';

export interface DataToolbarProps {
  fields?: FilterButtonProps['fields'];
  onFilterChange?: (filter: any) => void;
}

export const DataToolbar: React.FC<DataToolbarProps> = ({ fields, onFilterChange }) => {
  return (
    <Card m="xs" withBorder>
      <Group>
        <Button leftSection={<IconPlus size={14} />} variant="filled">
          创建
        </Button>
        {!!fields?.length && <FilterButton fields={fields} onFilterChange={onFilterChange} />}
        <Divider orientation="vertical" />
      </Group>
    </Card>
  );
};
