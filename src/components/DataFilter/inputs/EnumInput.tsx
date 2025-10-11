import { Select, MultiSelect } from '@mantine/core';
import React from 'react';

import { FilterFieldType, FilterItemConfig, FilterFieldConfig, FilterFieldInputProps } from '../types';

const EnumInputComponent: React.FC<FilterFieldInputProps> = ({
  value,
  onChange,
  size,
  options,
  operator,
  placeholder = '值',
}) => {
  // 检查操作符是否为 in 或 notIn，以决定是使用 MultiSelect 还是 Select
  const isMultiSelect = operator === 'in' || operator === 'notIn';

  if (isMultiSelect) {
    return (
      <MultiSelect
        w={size === 'xs' ? 130 : 200}
        size={size}
        placeholder={placeholder}
        data={options || []}
        value={Array.isArray(value) ? value : value ? [value] : []}
        comboboxProps={{ withinPortal: false }}
        onChange={onChange}
        clearable
      />
    );
  }

  return (
    <Select
      w={size === 'xs' ? 130 : 200}
      size={size}
      placeholder={placeholder}
      data={options || []}
      value={value as string}
      comboboxProps={{ withinPortal: false }}
      onChange={(value) => onChange(value)}
      clearable
    />
  );
};

// Enum 类型字段的操作符
const enumOperators = [
  { value: 'equals', label: '等于' },
  { value: 'not', label: '不等于' },
  { value: 'in', label: '在...之中' },
  { value: 'notIn', label: '不在...之中' },
];

// 生成 Prisma 查询条件
const genPrismaWhere = (items: FilterItemConfig[], fields: FilterFieldConfig[]) => {
  return items.map((item) => {
    const condition: any = {};

    // 处理 in 和 notIn 操作符，确保值是数组
    if ((item.operator === 'in' || item.operator === 'notIn') && !Array.isArray(item.value)) {
      condition[item.operator] = item.value ? [item.value] : [];
    } else {
      condition[item.operator] = item.value;
    }

    return {
      [item.field]: condition,
    };
  });
};

// Enum 字段类型的完整配置
export const EnumType: FilterFieldType = {
  component: EnumInputComponent,
  defaultOperator: 'equals',
  operators: enumOperators,
  genPrismaWhere,
};
