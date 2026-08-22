import { Button, Checkbox, Popover, Stack } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { IconTallymark4 } from '@tabler/icons-react';
import { DataTableColumn } from 'mantine-datatable';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export type ColumnButtonProps = {
  columns: DataTableColumn[];
  onChangeColumns: (columns: DataTableColumn[]) => void;
};

export const ColumnButton: React.FC<ColumnButtonProps> = ({ columns, onChangeColumns }) => {
  const { t } = useTranslation(['components']);
  const STORAGE_PREFIX = 'datatable:columns:';
  const storageKey = useMemo(() => `${STORAGE_PREFIX}${window.location.pathname}`, []);
  const [storedChecked, setStoredChecked] = useLocalStorage<string[]>({
    key: storageKey,
    defaultValue: columns.map((c) => c.accessor),
    getInitialValueInEffect: false,
  });

  // 从持久化状态派生有效勾选列：校验、强制保留 id 列、空值兜底
  const checkedColumns = useMemo(() => {
    const validAccessors = columns.map((c) => c.accessor);
    let nextChecked = (storedChecked || []).filter((a) => validAccessors.includes(a));
    if (validAccessors.includes('id') && !nextChecked.includes('id')) {
      nextChecked = ['id', ...nextChecked];
    }
    if (!nextChecked.length) {
      nextChecked = validAccessors;
    }
    return nextChecked;
  }, [columns, storedChecked]);

  // 仅当有效列发生变化时通知父级（副作用，不触发 setState）
  const notifiedKeyRef = useRef('');
  useEffect(() => {
    const key = checkedColumns.join(',');
    if (key !== notifiedKeyRef.current) {
      notifiedKeyRef.current = key;
      onChangeColumns(columns.filter((column) => checkedColumns.includes(column.accessor)));
    }
  }, [checkedColumns, columns, onChangeColumns]);

  const handleChange = useCallback(
    (checked: string[]) => {
      setStoredChecked(checked);
    },
    [setStoredChecked]
  );
  return (
    <Popover position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button variant="default" leftSection={<IconTallymark4 size={18} />}>
          {t('data_table.column_fields')}
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
