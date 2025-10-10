import { Button, Group, Select } from '@mantine/core';
import React from 'react';

import { StringInput, NumberInput, DateInput, BooleanInput, EnumInput, ArrayInput } from './components';
import { FilterFieldConfig } from './types';
import { getOperatorsByFieldType } from './utils';

interface FilterItemProps {
  filter: {
    id: number;
    field: string;
    operator: string;
    value: any;
  };
  fields: FilterFieldConfig[];
  size: 'xs' | 'sm';
  onUpdate: (id: number, property: string, value: any) => void;
  onRemove: (id: number) => void;
}

export const FilterItem: React.FC<FilterItemProps> = ({ filter, fields, size, onUpdate, onRemove }) => {
  // 获取字段配置
  const getFieldConfig = (fieldName: string) => {
    return fields.find((field) => field.accessor === fieldName);
  };

  const fieldConfig = getFieldConfig(filter.field);

  // 渲染适合字段类型的输入控件
  const renderValueInput = () => {
    if (!fieldConfig) {
      return (
        <StringInput
          size={size}
          value={filter.value}
          onChange={(value) => onUpdate(filter.id, 'value', value)}
          operator={filter.operator}
        />
      );
    }

    switch (fieldConfig.type) {
      case 'number':
        return (
          <NumberInput size={size} value={filter.value} onChange={(value) => onUpdate(filter.id, 'value', value)} />
        );

      case 'date':
        return (
          <DateInput
            size={size}
            value={filter.value ? new Date(filter.value) : null}
            onChange={(value) => onUpdate(filter.id, 'value', value)}
          />
        );

      case 'boolean':
        return (
          <BooleanInput
            size={size}
            value={filter.value.toString()}
            onChange={(value) => onUpdate(filter.id, 'value', value === 'true')}
          />
        );

      case 'enum':
        return (
          <EnumInput
            size={size}
            value={filter.value}
            onChange={(value) => onUpdate(filter.id, 'value', value)}
            fieldConfig={fieldConfig}
            operator={filter.operator}
          />
        );

      case 'array':
        return (
          <ArrayInput
            size={size}
            value={filter.value}
            onChange={(value) => onUpdate(filter.id, 'value', value)}
            operator={filter.operator}
          />
        );

      default: // string 类型
        return (
          <StringInput
            size={size}
            value={filter.value}
            onChange={(value) => onUpdate(filter.id, 'value', value)}
            operator={filter.operator}
          />
        );
    }
  };

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
          value: field.accessor,
          label: field.title,
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
      {renderValueInput()}
      <Button size={size} variant="light" color="red" onClick={() => onRemove(filter.id)}>
        删除
      </Button>
    </Group>
  );
};
