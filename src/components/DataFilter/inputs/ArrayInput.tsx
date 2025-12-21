import { MultiSelect, Select, TextInput } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { FilterFieldType, FilterItemConfig, FilterFieldConfig, FilterFieldInputProps } from '../types';
import { buildNestedWhereFromAccessor } from '../utils';

// 为数组类型提供多种输入控件
const ArrayInputComponent: React.FC<FilterFieldInputProps> = ({ value, onChange, size, operator, options = [] }) => {
  const { t } = useTranslation(['components']);
  // 处理不同操作符对应的输入类型
  if (operator === 'isEmpty') {
    // isEmpty 使用布尔开关或分段控制，这里简化为文本输入 true/false
    return (
      <Select
        w={size === 'xs' ? 130 : 200}
        size={size}
        value={String(value)}
        onChange={(val) => onChange(val === 'true')}
        data={[
          { label: t('data_filter.true'), value: 'true' },
          { label: t('data_filter.false'), value: 'false' },
        ]}
      />
    );
  }

  if (operator === 'has') {
    // has 操作符需要单个值
    if (options.length) {
      return <Select w={size === 'xs' ? 130 : 200} size={size} data={options} value={value} onChange={onChange} />;
    }
    return (
      <TextInput w={size === 'xs' ? 130 : 200} size={size} value={value} onChange={(e) => onChange(e.target.value)} />
    );
  }

  // 其他操作符（equals, hasEvery, hasSome）使用多选
  const multiValue = Array.isArray(value)
    ? value
    : value
      ? String(value)
          .split(',')
          .map((v) => v.trim())
      : [];
  return (
    <MultiSelect w={size === 'xs' ? 130 : 200} size={size} data={options} value={multiValue} onChange={onChange} />
  );
};

// Array 类型字段的操作符
const arrayOperators = [
  { value: 'equals', label: 'components:data_filter.operators.equals' },
  { value: 'has', label: 'components:data_filter.operators.has' },
  { value: 'hasEvery', label: 'components:data_filter.operators.hasEvery' },
  { value: 'hasSome', label: 'components:data_filter.operators.hasSome' },
  { value: 'isEmpty', label: 'components:data_filter.operators.isEmpty' },
];

// 生成 Prisma 查询条件
const genPrismaWhere = (items: FilterItemConfig[], _fields: FilterFieldConfig[]) => {
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

    return buildNestedWhereFromAccessor(item.field, condition);
  });
};

// Array 字段类型的完整配置
export const ArrayType: FilterFieldType = {
  component: ArrayInputComponent,
  defaultOperator: 'has',
  operators: arrayOperators,
  genPrismaWhere,
};
