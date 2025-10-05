import { ActionIcon, Checkbox, Popover, Stack } from '@mantine/core';
import { IconTallymark4 } from '@tabler/icons-react';
import { DataTableColumn } from 'mantine-datatable';
import React, { useCallback, useState } from 'react';

export type ColumnButtonProps = {
  columns: DataTableColumn[];
  onChangeColumns: (columns: DataTableColumn[]) => void;
};

export const ColumnButton: React.FC<ColumnButtonProps> = ({ columns, onChangeColumns }) => {
  const [checkedColumns, setCheckedColumns] = useState<string[]>(columns.map((c) => c.accessor));
  const handleChange = useCallback(
    (checked: string[]) => {
      setCheckedColumns(checked);
      onChangeColumns(columns.filter((column) => checked.includes(column.accessor)));
    },
    [columns]
  );
  return (
    <Popover position="bottom" withArrow shadow="md">
      <Popover.Target>
        <ActionIcon variant="default">
          <IconTallymark4 size={18} />
        </ActionIcon>
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
