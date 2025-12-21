import { Select, MultiSelect } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { FilterFieldType, FilterItemConfig, FilterFieldConfig, FilterFieldInputProps } from '../types';
import { buildNestedWhereFromAccessor } from '../utils';

const EnumInputComponent: React.FC<FilterFieldInputProps> = ({
  value,
  onChange,
  size,
  options,
  operator,
  placeholder,
}) => {
  const { t } = useTranslation(['components']);
  const actualPlaceholder = placeholder ?? t('data_filter.value');
  // 检查操作符是否为 in 或 notIn，以决定是使用 MultiSelect 还是 Select
  const isMultiSelect = operator === 'in' || operator === 'notIn';

  if (isMultiSelect) {
    return (
      <MultiSelect
        w={size === 'xs' ? 130 : 200}
        size={size}
        placeholder={actualPlaceholder}
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
      placeholder={actualPlaceholder}
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
  { value: 'equals', label: 'components:data_filter.operators.equals' },
  { value: 'not', label: 'components:data_filter.operators.not' },
  { value: 'in', label: 'components:data_filter.operators.in' },
  { value: 'notIn', label: 'components:data_filter.operators.notIn' },
];

// 生成 Prisma 查询条件
const genPrismaWhere = (items: FilterItemConfig[], _fields: FilterFieldConfig[]) => {
  return items.map((item) => {
    const condition: any = {};

    // 处理 in 和 notIn 操作符，确保值是数组
    if ((item.operator === 'in' || item.operator === 'notIn') && !Array.isArray(item.value)) {
      condition[item.operator] = item.value ? [item.value] : [];
    } else {
      condition[item.operator] = item.value;
    }

    return buildNestedWhereFromAccessor(item.field, condition);
  });
};

// Enum 字段类型的完整配置
export const EnumType: FilterFieldType = {
  component: EnumInputComponent,
  defaultOperator: 'equals',
  operators: enumOperators,
  genPrismaWhere,
};
