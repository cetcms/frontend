import { TextInput } from '@mantine/core';
import React from 'react';

interface StringInputProps {
  value: string;
  onChange: (value: string) => void;
  size: 'xs' | 'sm';
  placeholder?: string;
  operator: string;
}

export const StringInput: React.FC<StringInputProps> = ({ value, onChange, size, placeholder = '值', operator }) => {
  // 对于数组操作符，处理逗号分隔的值
  const isCommaSeparated = ['in', 'notIn'].includes(operator);

  return (
    <TextInput
      w={size === 'xs' ? 130 : 200}
      size={size}
      placeholder={isCommaSeparated ? '多个值用逗号分隔' : placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
