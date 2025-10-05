// 定义字段类型
export interface FieldConfig {
  accessor: string;
  title: string;
  type: 'string' | 'number' | 'enum' | 'date' | 'boolean';
  options?: { label: string; value: string }[];
  operator?: string;
}
