import { Card, Group, Button, Popover, Divider, Chip } from '@mantine/core';
import { IconFilter2Search, IconX } from '@tabler/icons-react';
import React, { useState } from 'react';
import { EventBus, EventBusEnum } from 'src/utils';

import { DataFilter, FieldConfig } from './DataFilter';

export interface DataToolbarProps {
  fields?: FieldConfig[];
  onFilterChange?: (filter: any) => void;
}

const OPERATORS: Record<string, string> = {
  equals: '=',
  contains: '(*)',
  startsWith: '&(*)',
  endsWith: '(*)&',
  gt: '>',
  gte: '>=',
  lt: '<',
  lte: '<=',
  in: '[...]',
  not: '!=',
  notIn: '![...]',
};

const makeFilterPreview = (filter: any) => {
  const previews: any[] = [];
  if (filter.AND && Array.isArray(filter.AND)) {
    filter.AND.forEach((fields: any) => {
      const fieldViews = [];
      for (const fieldKey in fields) {
        const option = fields[fieldKey];
        for (const optionKey in option) {
          const value = option[optionKey];
          fieldViews.push(`${fieldKey}${OPERATORS[optionKey]}${value}`);
        }
      }
      previews.push(`[${fieldViews.join('&')}]`);
    });
  }
  return previews.join(' AND ');
};

export const DataToolbar: React.FC<DataToolbarProps> = ({ fields, onFilterChange }) => {
  const [opened, setOpened] = useState(false);
  const [filterPreview, setFilterPreview] = useState('');
  const handleFilterChange = (filter: any) => {
    onFilterChange?.(filter);
    setFilterPreview(makeFilterPreview(filter));
    setOpened(false);
  };
  return (
    <Card m="xs" withBorder>
      <Group>
        <Popover withArrow trapFocus opened={opened} onChange={setOpened} position="bottom-start" shadow="md">
          <Popover.Target>
            <Button
              variant="default"
              leftSection={<IconFilter2Search size={14} />}
              onClick={() => setOpened((o) => !o)}
            >
              过滤
            </Button>
          </Popover.Target>
          <Popover.Dropdown>
            <DataFilter fields={fields} onFilterChange={handleFilterChange} size="xs" />
          </Popover.Dropdown>
        </Popover>
        <Button variant="filled">创建</Button>
        <Divider orientation="vertical" />
        {filterPreview && (
          <Chip
            size="xs"
            variant="outline"
            icon={<IconX size={16} />}
            defaultChecked
            onClick={() => {
              EventBus.emit(EventBusEnum.ResetFilter);
            }}
          >
            {filterPreview}
          </Chip>
        )}
      </Group>
    </Card>
  );
};
