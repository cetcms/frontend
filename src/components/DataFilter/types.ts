// 定义字段类型
import { MantineColor } from '@mantine/core';
import React from 'react';

import { ArrayType, BooleanType, DateType, EnumType, NumberType, StringType } from './inputs';

export interface FilterFieldConfig {
  accessor: string;
  title: string;
  type: 'string' | 'number' | 'enum' | 'date' | 'boolean' | 'array';
  options?: { label: string; value: string; color?: MantineColor }[];
  operator?: string;
}

// 定义过滤器项类型
export interface FilterItemConfig {
  id: number;
  field: string;
  operator: string;
  value: any;
}

export interface FilterFieldType {
  component: React.FC<FilterFieldInputProps>;
  defaultOperator: string;
  operators: Array<{ label: string; value: string }>;
  genPrismaWhere: (items: FilterItemConfig[], fields: FilterFieldConfig[]) => any;
}

export interface FilterFieldInputProps {
  value: any;
  onChange: (value: any) => void;
  size: 'xs' | 'sm';
  options?: FilterFieldConfig['options'];
  operator?: string;
  placeholder?: string;
}

// 统一字段类型注册表
export const FieldTypes: Record<string, FilterFieldType> = {
  string: StringType,
  number: NumberType,
  date: DateType,
  boolean: BooleanType,
  enum: EnumType,
  array: ArrayType,
};
