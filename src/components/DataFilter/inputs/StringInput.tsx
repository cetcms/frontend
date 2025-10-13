import { TextInput } from '@mantine/core';
import React from 'react';

import { FilterFieldType, FilterItemConfig, FilterFieldConfig, FilterFieldInputProps } from '../types';

const StringInputComponent: React.FC<FilterFieldInputProps> = ({ value, onChange, size, placeholder = '值' }) => {
  return (
    <TextInput
      w={size === 'xs' ? 130 : 200}
      size={size}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

// String 类型字段的操作符
const stringOperators = [
  { value: 'contains', label: '包含' },
  { value: 'equals', label: '等于' },
  { value: 'startsWith', label: '以...开始' },
  { value: 'endsWith', label: '以...结束' },
  { value: 'not', label: '不等于' },
];

// 生成 Prisma 查询条件
const genPrismaWhere = (items: FilterItemConfig[], _fields: FilterFieldConfig[]) => {
  return items.map((item) => {
    const condition: any = {};
    condition[item.operator] = item.value;
    return {
      [item.field]: condition,
    };
  });
};

// String 字段类型的完整配置
export const StringType: FilterFieldType = {
  component: StringInputComponent,
  defaultOperator: 'contains',
  operators: stringOperators,
  genPrismaWhere,
};
