import { Card, Group, Button, Divider } from '@mantine/core';
import React from 'react';

import { FilterButton, FieldConfig } from './FilterButton';

export interface DataToolbarProps {
  fields?: FieldConfig[];
  onFilterChange?: (filter: any) => void;
}

export const DataToolbar: React.FC<DataToolbarProps> = ({ fields, onFilterChange }) => {
  return (
    <Card m="xs" withBorder>
      <Group>
        {!!fields?.length && <FilterButton fields={fields} onFilterChange={onFilterChange} />}
        <Button variant="filled">创建</Button>
        <Divider orientation="vertical" />
      </Group>
    </Card>
  );
};
