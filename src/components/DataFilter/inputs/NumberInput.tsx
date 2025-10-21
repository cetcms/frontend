import { NumberInput as MantineNumberInput } from '@mantine/core';
import React from 'react';

import { FilterFieldType, FilterItemConfig, FilterFieldConfig, FilterFieldInputProps } from '../types';
import { buildNestedWhereFromAccessor } from '../utils';

const NumberInputComponent: React.FC<FilterFieldInputProps> = ({ value, onChange, size, placeholder = '值' }) => {
  return (
    <MantineNumberInput
      w={size === 'xs' ? 130 : 200}
      size={size}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

// Number 类型字段的操作符
const numberOperators = [
  { value: 'equals', label: '等于' },
  { value: 'gt', label: '大于' },
  { value: 'gte', label: '大于等于' },
  { value: 'lt', label: '小于' },
  { value: 'lte', label: '小于等于' },
  { value: 'not', label: '不等于' },
];

// 生成 Prisma 查询条件
const genPrismaWhere = (items: FilterItemConfig[], _fields: FilterFieldConfig[]) => {
  return items.map((item) => {
    const condition: any = {};
    condition[item.operator] = item.value;
    return buildNestedWhereFromAccessor(item.field, condition);
  });
};

// Number 字段类型的完整配置
export const NumberType: FilterFieldType = {
  component: NumberInputComponent,
  defaultOperator: 'equals',
  operators: numberOperators,
  genPrismaWhere,
};
