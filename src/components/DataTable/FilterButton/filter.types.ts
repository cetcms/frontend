// 定义字段类型
export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'date' | 'boolean';
  options?: { label: string; value: string }[];
  operator?: string;
}
