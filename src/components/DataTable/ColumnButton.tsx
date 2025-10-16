import { Button, Checkbox, Popover, Stack } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconTallymark4 } from '@tabler/icons-react';
import { DataTableColumn } from 'mantine-datatable';
import React, { useCallback, useEffect, useMemo, useState } from 'react';

export type ColumnButtonProps = {
  columns: DataTableColumn[];
  onChangeColumns: (columns: DataTableColumn[]) => void;
};

export const ColumnButton: React.FC<ColumnButtonProps> = ({ columns, onChangeColumns }) => {
  const STORAGE_PREFIX = 'datatable:columns:';
  const storageKey = useMemo(() => `${STORAGE_PREFIX}${window.location.pathname}`, []);
  const [checkedColumns, setCheckedColumns] = useState<string[]>(columns.map((c) => c.accessor));
  const [storedChecked, setStoredChecked] = useLocalStorage<string[]>({
    key: storageKey,
    defaultValue: columns.map((c) => c.accessor),
    getInitialValueInEffect: true,
  });

  const arraysEqual = (a: string[], b: string[]) => a.length === b.length && a.every((v, i) => b[i] === v);

  // 初始化时读取并应用持久化的列选择
  useEffect(() => {
    const validAccessors = columns.map((c) => c.accessor);
    let nextChecked = (storedChecked || []).filter((a) => validAccessors.includes(a));
    if (validAccessors.includes('id') && !nextChecked.includes('id')) {
      nextChecked = ['id', ...nextChecked];
    }
    if (!nextChecked.length) {
      nextChecked = validAccessors;
    }
    if (!arraysEqual(nextChecked, checkedColumns)) {
      setCheckedColumns(nextChecked);
      onChangeColumns(columns.filter((column) => nextChecked.includes(column.accessor)));
    }
  }, [columns, storageKey, storedChecked]);

  const handleChange = useCallback(
    (checked: string[]) => {
      const validAccessors = columns.map((c) => c.accessor);
      let nextChecked = checked.filter((a) => validAccessors.includes(a));
      if (validAccessors.includes('id') && !nextChecked.includes('id')) {
        nextChecked = ['id', ...nextChecked];
      }
      setCheckedColumns(nextChecked);
      onChangeColumns(columns.filter((column) => nextChecked.includes(column.accessor)));
      setStoredChecked(nextChecked);
    },
    [columns, storageKey, setStoredChecked]
  );
  return (
    <Popover position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button variant="default" leftSection={<IconTallymark4 size={18} />}>
          列表字段
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Checkbox.Group value={checkedColumns} onChange={(checked) => handleChange(checked)} withAsterisk>
          <Stack gap="xs" pr="md">
            {columns?.map((column) => (
              <Checkbox
                size="xs"
                label={column.title}
                key={column.accessor}
                value={column.accessor}
                disabled={column.accessor === 'id'}
              />
            ))}
          </Stack>
        </Checkbox.Group>
      </Popover.Dropdown>
    </Popover>
  );
};
