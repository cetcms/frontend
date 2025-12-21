import { NumberInput as MantineNumberInput } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { FilterFieldType, FilterItemConfig, FilterFieldConfig, FilterFieldInputProps } from '../types';
import { buildNestedWhereFromAccessor } from '../utils';

const NumberInputComponent: React.FC<FilterFieldInputProps> = ({ value, onChange, size, placeholder }) => {
  const { t } = useTranslation(['components']);
  const actualPlaceholder = placeholder ?? t('data_filter.value');
  return (
    <MantineNumberInput
      w={size === 'xs' ? 130 : 200}
      size={size}
      placeholder={actualPlaceholder}
      value={value}
      onChange={onChange}
    />
  );
};

// Number 类型字段的操作符
const numberOperators = [
  { value: 'equals', label: 'components:data_filter.operators.equals' },
  { value: 'gt', label: 'components:data_filter.operators.gt' },
  { value: 'gte', label: 'components:data_filter.operators.gte' },
  { value: 'lt', label: 'components:data_filter.operators.lt' },
  { value: 'lte', label: 'components:data_filter.operators.lte' },
  { value: 'not', label: 'components:data_filter.operators.not' },
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
