import { DateTimePicker } from '@mantine/dates';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { FilterFieldType, FilterItemConfig, FilterFieldConfig, FilterFieldInputProps } from '../types';
import { buildNestedWhereFromAccessor } from '../utils';

const DateInputComponent: React.FC<FilterFieldInputProps> = ({ value, onChange, size, placeholder }) => {
  const { t } = useTranslation(['components']);
  const actualPlaceholder = placeholder ?? t('data_filter.value');
  return (
    <DateTimePicker
      w={size === 'xs' ? 130 : 200}
      size={size}
      placeholder={actualPlaceholder}
      popoverProps={{ withinPortal: false }}
      value={new Date(value)}
      onChange={onChange}
    />
  );
};

// Date 类型字段的操作符
const dateOperators = [
  { value: 'equals', label: 'components:data_filter.operators.equals' },
  { value: 'gt', label: 'components:data_filter.operators.lt_time' },
  { value: 'gte', label: 'components:data_filter.operators.lte_time' },
  { value: 'lt', label: 'components:data_filter.operators.gt_time' },
  { value: 'lte', label: 'components:data_filter.operators.gte_time' },
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

// Date 字段类型的完整配置
export const DateType: FilterFieldType = {
  component: DateInputComponent,
  defaultOperator: 'equals',
  operators: dateOperators,
  genPrismaWhere,
};
