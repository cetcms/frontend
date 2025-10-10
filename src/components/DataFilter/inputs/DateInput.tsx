import { DateTimePicker, DateStringValue } from '@mantine/dates';
import React from 'react';

import { FilterFieldType, FilterItemConfig, FilterFieldConfig } from '../types';

interface DateInputProps {
  value: Date | null;
  onChange: (value: DateStringValue | null) => void;
  size: 'xs' | 'sm';
  placeholder?: string;
}

const DateInputComponent: React.FC<DateInputProps> = ({ value, onChange, size, placeholder = '值' }) => {
  return (
    <DateTimePicker
      w={size === 'xs' ? 130 : 200}
      size={size}
      placeholder={placeholder}
      popoverProps={{ withinPortal: false }}
      value={value}
      onChange={onChange}
    />
  );
};

// Date 类型字段的操作符
const dateOperators = [
  { value: 'equals', label: '等于' },
  { value: 'gt', label: '晚于' },
  { value: 'gte', label: '晚于等于' },
  { value: 'lt', label: '早于' },
  { value: 'lte', label: '早于等于' },
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

// Date 字段类型的完整配置
export const DateType: FilterFieldType<DateInputProps> = {
  component: DateInputComponent,
  defaultOperator: 'equals',
  operators: dateOperators,
  genPrismaWhere,
};
