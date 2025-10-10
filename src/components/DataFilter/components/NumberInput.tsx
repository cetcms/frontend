import { NumberInput as MantineNumberInput } from '@mantine/core';
import React from 'react';

interface NumberInputProps {
  value: number | undefined;
  onChange: (value: number | string) => void;
  size: 'xs' | 'sm';
  placeholder?: string;
}

export const NumberInput: React.FC<NumberInputProps> = ({ value, onChange, size, placeholder = '值' }) => {
  return (
    <MantineNumberInput
      w={size === 'xs' ? 130 : 200}
      size={size}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};
