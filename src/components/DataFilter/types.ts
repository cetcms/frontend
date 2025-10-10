// 定义字段类型
import { MantineColor } from '@mantine/core';

export interface FieldConfig {
  accessor: string;
  title: string;
  type: 'string' | 'number' | 'enum' | 'date' | 'boolean' | 'array';
  options?: { label: string; value: string; color?: MantineColor }[];
  operator?: string;
}
