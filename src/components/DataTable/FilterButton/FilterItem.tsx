import { Button, Group, Select, TextInput } from '@mantine/core';
import React from 'react';

import { FieldConfig } from './filter.types';
import { getOperatorsByFieldType } from './filter.utils';

interface FilterItemProps {
  filter: {
    id: number;
    field: string;
    operator: string;
    value: any;
  };
  fields: FieldConfig[];
  size: 'xs' | 'sm';
  onUpdate: (id: number, property: string, value: any) => void;
  onRemove: (id: number) => void;
}

export const FilterItem: React.FC<FilterItemProps> = ({ filter, fields, size, onUpdate, onRemove }) => {
  // 获取字段配置
  const getFieldConfig = (fieldName: string) => {
    return fields.find((field) => field.name === fieldName);
  };

  const fieldConfig = getFieldConfig(filter.field);

  return (
    <Group mt={size} gap={size}>
      <Select
        w={size === 'xs' ? 130 : 200}
        size={size}
        allowDeselect={false}
        placeholder="选择字段"
        value={filter.field}
        comboboxProps={{ withinPortal: false }}
        onChange={(value) => onUpdate(filter.id, 'field', value)}
        data={fields.map((field) => ({
          value: field.name,
          label: field.label,
        }))}
      />
      <Select
        w={size === 'xs' ? 130 : 150}
        size={size}
        allowDeselect={false}
        placeholder="操作符"
        value={filter.operator}
        comboboxProps={{ withinPortal: false }}
        onChange={(value) => onUpdate(filter.id, 'operator', value)}
        data={(() => {
          if (fieldConfig) {
            return getOperatorsByFieldType(fieldConfig.type);
          }
          return [];
        })()}
      />
      {fieldConfig?.type === 'select' ? (
        <Select
          w={size === 'xs' ? 130 : 200}
          size={size}
          placeholder="值"
          data={fieldConfig.options || []}
          value={filter.value}
          comboboxProps={{ withinPortal: false }}
          onChange={(value) => onUpdate(filter.id, 'value', value)}
          clearable
        />
      ) : (
        <TextInput
          w={size === 'xs' ? 130 : 200}
          size={size}
          placeholder="值"
          value={filter.value}
          onChange={(e) => onUpdate(filter.id, 'value', e.target.value)}
        />
      )}
      <Button size={size} variant="light" color="red" onClick={() => onRemove(filter.id)}>
        删除
      </Button>
    </Group>
  );
};
