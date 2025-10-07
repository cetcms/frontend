import { Group, Button, Divider } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router';

import { ColumnButton, ColumnButtonProps } from './ColumnButton/ColumnButton';
import { FilterButton, FilterButtonProps } from './FilterButton/FilterButton';

export interface DataToolbarProps {
  addRoutePath?: string;
  fields?: FilterButtonProps['fields'];
  onFilterChange?: FilterButtonProps['onFilterChange'];
  columns: ColumnButtonProps['columns'];
  onChangeColumns: ColumnButtonProps['onChangeColumns'];
}

export const DataToolbar: React.FC<DataToolbarProps> = ({
  addRoutePath,
  columns,
  onChangeColumns,
  fields,
  onFilterChange,
}) => {
  const leftGroup = (
    <Group>
      {!!addRoutePath && (
        <Button leftSection={<IconPlus size={14} />} variant="filled" component={Link} to={addRoutePath}>
          创建
        </Button>
      )}

      {!!fields?.length && <FilterButton fields={fields} onFilterChange={onFilterChange} />}
      <Divider orientation="vertical" />
    </Group>
  );

  return (
    <Group m="md" justify="space-between">
      {(!!addRoutePath || !!fields?.length) && leftGroup}
      <Group>
        <ColumnButton columns={columns} onChangeColumns={onChangeColumns} />
      </Group>
    </Group>
  );
};
