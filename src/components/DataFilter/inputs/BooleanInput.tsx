import { SegmentedControl } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { FilterFieldType, FilterItemConfig, FilterFieldConfig, FilterFieldInputProps } from '../types';
import { buildNestedWhereFromAccessor } from '../utils';

const BooleanInputComponent: React.FC<FilterFieldInputProps> = ({ value, onChange, size }) => {
  const { t } = useTranslation(['components']);
  return (
    <SegmentedControl
      w={size === 'xs' ? 130 : 200}
      size={size}
      onChange={(val) => onChange(val === 'true')}
      value={value.toString()}
      data={[
        { label: t('data_filter.false'), value: 'false' },
        { label: t('data_filter.true'), value: 'true' },
      ]}
    />
  );
};

// Boolean 类型字段的操作符
const booleanOperators = [
  { value: 'equals', label: 'components:data_filter.operators.equals' },
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

// Boolean 字段类型的完整配置
export const BooleanType: FilterFieldType = {
  component: BooleanInputComponent,
  defaultOperator: 'equals',
  operators: booleanOperators,
  genPrismaWhere,
};
