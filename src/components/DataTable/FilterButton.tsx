import { Button, Popover } from '@mantine/core';
import { IconFilter2Search } from '@tabler/icons-react';
import React, { useState } from 'react';

import { DataFilter, DataFilterProps } from '../DataFilter';

export interface FilterButtonProps {
  fields?: DataFilterProps['fields'];
  onFilterChange?: DataFilterProps['onFilterChange'];
  size?: 'xs' | 'sm';
}

export const FilterButton: React.FC<FilterButtonProps> = ({ fields = [], onFilterChange, size = 'xs' }) => {
  const [opened, setOpened] = useState(false);

  return (
    <Popover withArrow trapFocus opened={opened} onChange={setOpened} position="bottom-start" shadow="md">
      <Popover.Target>
        <Button
          variant="default"
          disabled={!fields.length}
          leftSection={<IconFilter2Search size={14} />}
          onClick={() => setOpened((o) => !o)}
        >
          过滤
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <DataFilter fields={fields} onFilterChange={onFilterChange} size={size} onClose={() => setOpened(false)} />
      </Popover.Dropdown>
    </Popover>
  );
};
