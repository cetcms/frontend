import { TextInput, SegmentedControl } from '@mantine/core';
import React from 'react';

import { FilterFieldType, FilterItemConfig, FilterFieldConfig, FilterFieldInputProps } from '../types';

const ArrayInputComponent: React.FC<FilterFieldInputProps> = ({
  value,
  onChange,
  size,
  operator,
  placeholder = '值',
}) => {
  // 根据操作符类型决定使用哪种输入控件
  switch (operator) {
    case 'isEmpty':
      // isEmpty 使用与boolean类型相同的输入控件
      return (
        <SegmentedControl
          w={size === 'xs' ? 130 : 200}
          size={size}
          onChange={(val) => onChange(val === 'true')}
          value={value.toString()}
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
          placeholder={placeholder}
          value={value.toString()}
          onChange={(e) => onChange(e.target.value)}
        />
      );
  }
};

// Array 类型字段的操作符
const arrayOperators = [
  { value: 'equals', label: '等于' },
  { value: 'has', label: '包含元素' },
  { value: 'hasEvery', label: '包含所有元素' },
  { value: 'hasSome', label: '包含某些元素' },
  { value: 'isEmpty', label: '为空' },
];

// 生成 Prisma 查询条件
const genPrismaWhere = (items: FilterItemConfig[], fields: FilterFieldConfig[]) => {
  return items.map((item) => {
    const condition: any = {};

    switch (item.operator) {
      case 'isEmpty':
        // isEmpty 操作符只需要布尔值
        condition[item.operator] = item.value;
        break;
      case 'has':
        // has 操作符需要单个值
        condition[item.operator] = item.value;
        break;
      default:
        // equals, hasEvery, hasSome 操作符需要数组值
        // 处理逗号分隔的字符串值
        if (typeof item.value === 'string') {
          condition[item.operator] = item.value
            .split(',')
            .map((v: string) => v.trim())
            .filter((v: string) => v !== '');
        } else if (Array.isArray(item.value)) {
          condition[item.operator] = item.value;
        } else if (item.value) {
          condition[item.operator] = [item.value];
        } else {
          condition[item.operator] = [];
        }
    }

    return {
      [item.field]: condition,
    };
  });
};

// Array 字段类型的完整配置
export const ArrayType: FilterFieldType = {
  component: ArrayInputComponent,
  defaultOperator: 'has',
  operators: arrayOperators,
  genPrismaWhere,
};
