import { SegmentedControl } from '@mantine/core';
import React from 'react';

import { FilterFieldType, FilterItemConfig, FilterFieldConfig } from '../types';

interface BooleanInputProps {
  value: boolean;
  onChange: (value: boolean) => void;
  size: 'xs' | 'sm';
}

const BooleanInputComponent: React.FC<BooleanInputProps> = ({ value, onChange, size }) => {
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
};

// Boolean 类型字段的操作符
const booleanOperators = [
  { value: 'equals', label: '等于' },
  { value: 'not', label: '不等于' },
];

// 生成 Prisma 查询条件
const genPrismaWhere = (items: FilterItemConfig[], fields: FilterFieldConfig[]) => {
  return items.map((item) => {
    const condition: any = {};
    condition[item.operator] = item.value;
    return {
      [item.field]: condition,
    };
  });
};

// Boolean 字段类型的完整配置
export const BooleanType: FilterFieldType<BooleanInputProps> = {
  component: BooleanInputComponent,
  defaultOperator: 'equals',
  operators: booleanOperators,
  genPrismaWhere,
};
