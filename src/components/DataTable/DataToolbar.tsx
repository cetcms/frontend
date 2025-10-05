import { Card, Group, Button, Divider } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import React from 'react';

import { ColumnButton, ColumnButtonProps } from './ColumnButton/ColumnButton';
import { FilterButton, FilterButtonProps } from './FilterButton/FilterButton';

export interface DataToolbarProps {
  fields?: FilterButtonProps['fields'];
  onFilterChange?: FilterButtonProps['onFilterChange'];
  columns: ColumnButtonProps['columns'];
  onChangeColumns: ColumnButtonProps['onChangeColumns'];
}

export const DataToolbar: React.FC<DataToolbarProps> = ({ columns, onChangeColumns, fields, onFilterChange }) => {
  return (
    <Card m="xs" withBorder>
      <Group justify="space-between">
        <Group>
          <Button leftSection={<IconPlus size={14} />} variant="filled">
            创建
          </Button>
          {!!fields?.length && <FilterButton fields={fields} onFilterChange={onFilterChange} />}
          <Divider orientation="vertical" />
        </Group>
        <Group>
          <ColumnButton columns={columns} onChangeColumns={onChangeColumns} />
        </Group>
      </Group>
    </Card>
  );
};
