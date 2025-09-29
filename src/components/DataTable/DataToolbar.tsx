import { Card, Group, Button, Popover } from '@mantine/core';
import React, { useState } from 'react';

import { DataFilter, FieldConfig } from './DataFilter';

export interface DataToolbarProps {
  fields?: FieldConfig[];
  onFilterChange?: (filter: any) => void;
}

export const DataToolbar: React.FC<DataToolbarProps> = ({ fields, onFilterChange }) => {
  const [opened, setOpened] = useState(false);
  const handleFilterChange = (filter: any) => {
    onFilterChange?.(filter);
    setOpened(false);
  };
  return (
    <Card m="xs" withBorder>
      <Group>
        <Popover withArrow trapFocus opened={opened} onChange={setOpened} position="bottom-start" shadow="md">
          <Popover.Target>
            <Button variant="default" onClick={() => setOpened((o) => !o)}>
              过滤
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <DataFilter fields={fields} onFilterChange={handleFilterChange} size="xs" />
          </Popover.Dropdown>
        </Popover>
        <Button variant="filled">创建</Button>
      </Group>
    </Card>
  );
};
