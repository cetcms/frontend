import { Button, Group, Select } from '@mantine/core';
import React from 'react';

import { FilterFieldConfig, FieldTypes, FilterFieldInputProps } from './types';

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
      const StringInput = FieldTypes.string.component;
      return (
        <StringInput
          size={size}
          value={filter.value}
          onChange={(value: string) => onUpdate(filter.id, 'value', value)}
          operator={filter.operator}
        />
      );
    }

    // 根据字段类型渲染相应的输入组件
    const fieldType = FieldTypes[fieldConfig.type] || FieldTypes.string;
    const InputComponent = fieldType.component;

    // 准备传递给输入组件的属性
    const inputProps: FilterFieldInputProps = {
      size,
      value: filter.value,
      onChange: (value: any) => onUpdate(filter.id, 'value', value),
      operator: filter.operator,
      options: fieldConfig.options,
    };

    return <InputComponent {...inputProps} />;
  };

  // 获取字段类型对应的操作符
  const getOperators = () => {
    if (!fieldConfig) return FieldTypes.string.operators;

    const fieldType = FieldTypes[fieldConfig.type] || FieldTypes.string;
    return fieldType.operators;
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
