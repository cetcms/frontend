import { Group, Button, Divider } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import React from 'react';
import { Link } from 'react-router';

import { ColumnButton, ColumnButtonProps } from './ColumnButton';
import { FilterButton, FilterButtonProps } from './FilterButton';

export interface DataToolbarProps {
  addRoutePath?: string;
  fields?: FilterButtonProps['fields'];
  onFilterChange?: FilterButtonProps['onFilterChange'];
  columns: ColumnButtonProps['columns'];
  onChangeColumns: ColumnButtonProps['onChangeColumns'];
  append?: (current: React.ReactNode) => React.ReactNode;
  prepend?: (current: React.ReactNode) => React.ReactNode;
}

export const DataToolbar: React.FC<DataToolbarProps> = ({
  addRoutePath,
  columns,
  onChangeColumns,
  fields,
  onFilterChange,
  append,
  prepend,
}) => {
  const perpendCurrent = (
    <>
      {!!addRoutePath && (
        <Button leftSection={<IconPlus size={14} />} variant="filled" component={Link} to={addRoutePath}>
          添加
        </Button>
      )}
      {!!fields?.length && <FilterButton fields={fields} onFilterChange={onFilterChange} />}
      <Divider orientation="vertical" />
    </>
  );

  const columnButton = <ColumnButton columns={columns} onChangeColumns={onChangeColumns} />;
  const appendCurrent = <>{columnButton}</>;

  return (
    <Group m="md" justify="space-between">
      <Group>{prepend ? prepend(perpendCurrent) : perpendCurrent}</Group>
      <Group>{append ? append(appendCurrent) : appendCurrent}</Group>
    </Group>
  );
};
