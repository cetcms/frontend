import { Button, Popover } from '@mantine/core';
import { IconFilter2Search } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { FilterItemConfig, DataFilter, DataFilterProps } from '../DataFilter';

export interface FilterButtonProps {
  fields?: DataFilterProps['fields'];
  onFilterChange?: DataFilterProps['onFilterChange'];
  size?: 'xs' | 'sm';
  config?: FilterItemConfig;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ fields = [], onFilterChange, size = 'xs' }) => {
  const { t } = useTranslation(['components']);
  const [opened, setOpened] = useState(false);
  const [filterFields, setFilterFields] = useState<FilterItemConfig[]>([]);
  const [logicOperator, setLogicOperator] = useState<'AND' | 'OR'>('AND');

  return (
    <Popover withArrow trapFocus opened={opened} onChange={setOpened} position="bottom-start" shadow="md">
      <Popover.Target>
        <Button
          variant="default"
          disabled={!fields.length}
          leftSection={<IconFilter2Search size={14} />}
          onClick={() => setOpened((o) => !o)}
        >
          {t('data_table.filter')}
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <DataFilter
          fields={fields}
          onFilterChange={onFilterChange}
          size={size}
          onClose={() => setOpened(false)}
          filterFields={filterFields}
          setFilterFields={setFilterFields}
          logicOperator={logicOperator}
          setLogicOperator={setLogicOperator}
        />
      </Popover.Dropdown>
    </Popover>
  );
};
