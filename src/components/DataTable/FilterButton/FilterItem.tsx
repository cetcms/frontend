import { Button, Group, Select, TextInput, NumberInput, SegmentedControl, MultiSelect, Checkbox } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
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
    return fields.find((field) => field.accessor === fieldName);
  };

  const fieldConfig = getFieldConfig(filter.field);

  // 渲染适合字段类型的输入控件
  const renderValueInput = () => {
    if (!fieldConfig) {
      return (
        <TextInput
          w={size === 'xs' ? 130 : 200}
          size={size}
          placeholder="值"
          value={filter.value}
          onChange={(e) => onUpdate(filter.id, 'value', e.target.value)}
        />
      );
    }

    switch (fieldConfig.type) {
      case 'number':
        return (
          <NumberInput
            w={size === 'xs' ? 130 : 200}
            size={size}
            placeholder="值"
            value={filter.value}
            onChange={(value) => onUpdate(filter.id, 'value', value)}
          />
        );

      case 'date':
        return (
          <DateTimePicker
            w={size === 'xs' ? 130 : 200}
            size={size}
            placeholder="值"
            popoverProps={{ withinPortal: false }}
            value={filter.value ? new Date(filter.value) : null}
            onChange={(value: any) => onUpdate(filter.id, 'value', value)}
          />
        );

      case 'boolean':
        return (
          <SegmentedControl
            w={size === 'xs' ? 130 : 200}
            size={size}
            onChange={(value) => onUpdate(filter.id, 'value', value)}
            data={[
              { label: 'False', value: 'false' },
              { label: 'True', value: 'true' },
            ]}
          />
        );

      case 'enum': {
        // 检查操作符是否为 in 或 notIn，以决定是使用 MultiSelect 还是 Select
        const isMultiSelect = filter.operator === 'in' || filter.operator === 'notIn';

        if (isMultiSelect) {
          return (
            <MultiSelect
              w={size === 'xs' ? 130 : 200}
              size={size}
              placeholder="值"
              data={fieldConfig.options || []}
              value={Array.isArray(filter.value) ? filter.value : filter.value ? [filter.value] : []}
              comboboxProps={{ withinPortal: false }}
              onChange={(value) => onUpdate(filter.id, 'value', value)}
              clearable
            />
          );
        }
        return (
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
        );
      }

      case 'array': {
        // 根据操作符类型决定使用哪种输入控件
        switch (filter.operator) {
          case 'isEmpty':
            // isEmpty 使用与boolean类型相同的输入控件
            return (
              <SegmentedControl
                w={size === 'xs' ? 130 : 200}
                size={size}
                onChange={(value) => onUpdate(filter.id, 'value', value === 'true')}
                value={filter.value.toString()}
                data={[
                  { label: 'False', value: 'false' },
                  { label: 'True', value: 'true' },
                ]}
              />
            );
          default:
            // 所有其他操作符使用逗号分隔的文本输入框
            return (
              <TextInput
                w={size === 'xs' ? 130 : 200}
                size={size}
                placeholder="多个值用逗号分隔"
                value={Array.isArray(filter.value) ? filter.value.join(', ') : filter.value}
                onChange={(e) => onUpdate(filter.id, 'value', e.target.value)}
              />
            );
        }
      }

      default: // string 类型
        return (
          <TextInput
            w={size === 'xs' ? 130 : 200}
            size={size}
            placeholder="值"
            value={filter.value}
            onChange={(e) => onUpdate(filter.id, 'value', e.target.value)}
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
