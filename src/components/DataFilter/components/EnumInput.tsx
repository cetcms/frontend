import { Select, MultiSelect } from '@mantine/core';
import React from 'react';

import { FilterFieldConfig } from '../types';

interface EnumInputProps {
  value: string | string[];
  onChange: (value: string | string[] | null) => void;
  size: 'xs' | 'sm';
  fieldConfig: FilterFieldConfig;
  operator: string;
  placeholder?: string;
}

export const EnumInput: React.FC<EnumInputProps> = ({
  value,
  onChange,
  size,
  fieldConfig,
  operator,
  placeholder = '值',
}) => {
  // 检查操作符是否为 in 或 notIn，以决定是使用 MultiSelect 还是 Select
  const isMultiSelect = operator === 'in' || operator === 'notIn';

  if (isMultiSelect) {
    return (
      <MultiSelect
        w={size === 'xs' ? 130 : 200}
        size={size}
        placeholder={placeholder}
        data={fieldConfig.options || []}
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
      placeholder={placeholder}
      data={fieldConfig.options || []}
      value={value as string}
      comboboxProps={{ withinPortal: false }}
      onChange={(value) => onChange(value)}
      clearable
    />
  );
};
