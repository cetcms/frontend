// 定义字段类型
import { MantineColor } from '@mantine/core';
import React from 'react';

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

export interface FilterFieldType<T> {
  component: React.FC<T>;
  defaultOperator: string;
  operators: Array<{ label: string; value: string }>;
  genPrismaWhere: (items: FilterItemConfig[], fields: FilterFieldConfig[]) => any;
}