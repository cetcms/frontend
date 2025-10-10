import { Button, Group, Select } from '@mantine/core';
import React from 'react';

import * as FieldTypes from './inputs';
import { FilterFieldConfig } from './types';

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
      // 默认使用 String 类型
      const StringInput = FieldTypes.StringType.component;
      return (
        <StringInput
          size={size}
          value={filter.value}
          onChange={(value) => onUpdate(filter.id, 'value', value)}
          operator={filter.operator}
        />
      );
    }

    // 根据字段类型渲染相应的输入组件
    switch (fieldConfig.type) {
      case 'number': {
        const NumberInput = FieldTypes.NumberType.component;
        return (
          <NumberInput size={size} value={filter.value} onChange={(value) => onUpdate(filter.id, 'value', value)} />
        );
      }

      case 'date': {
        const DateInput = FieldTypes.DateType.component;
        return (
          <DateInput
            size={size}
            value={filter.value ? new Date(filter.value) : null}
            onChange={(value) => onUpdate(filter.id, 'value', value)}
          />
        );
      }

      case 'boolean': {
        const BooleanInput = FieldTypes.BooleanType.component;
        return (
          <BooleanInput size={size} value={filter.value} onChange={(value) => onUpdate(filter.id, 'value', value)} />
        );
      }

      case 'enum': {
        const EnumInput = FieldTypes.EnumType.component;
        return (
          <EnumInput
            size={size}
            value={filter.value}
            onChange={(value) => onUpdate(filter.id, 'value', value)}
            fieldConfig={fieldConfig}
            operator={filter.operator}
          />
        );
      }

      case 'array': {
        const ArrayInput = FieldTypes.ArrayType.component;
        return (
          <ArrayInput
            size={size}
            value={filter.value}
            onChange={(value) => onUpdate(filter.id, 'value', value)}
            operator={filter.operator}
          />
        );
      }

      default: {
        // string 类型
        const StringInput = FieldTypes.StringType.component;
        return (
          <StringInput
            size={size}
            value={filter.value}
            onChange={(value) => onUpdate(filter.id, 'value', value)}
            operator={filter.operator}
          />
        );
      }
    }
  };

  // 获取字段类型对应的操作符
  const getOperators = () => {
    if (!fieldConfig) return [];

    switch (fieldConfig.type) {
      case 'number':
        return FieldTypes.NumberType.operators;
      case 'date':
        return FieldTypes.DateType.operators;
      case 'boolean':
        return FieldTypes.BooleanType.operators;
      case 'enum':
        return FieldTypes.EnumType.operators;
      case 'array':
        return FieldTypes.ArrayType.operators;
      default:
        return FieldTypes.StringType.operators;
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
        data={getOperators()}
      />
      {renderValueInput()}
      <Button size={size} variant="light" color="red" onClick={() => onRemove(filter.id)}>
        删除
      </Button>
    </Group>
  );
};
