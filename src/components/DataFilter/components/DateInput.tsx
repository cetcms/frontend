import { DateTimePicker, DateStringValue } from '@mantine/dates';
import React from 'react';

interface DateInputProps {
  value: Date | null;
  onChange: (value: DateStringValue | null) => void;
  size: 'xs' | 'sm';
  placeholder?: string;
}

export const DateInput: React.FC<DateInputProps> = ({ value, onChange, size, placeholder = '值' }) => {
  return (
    <DateTimePicker
      w={size === 'xs' ? 130 : 200}
      size={size}
      placeholder={placeholder}
      popoverProps={{ withinPortal: false }}
      value={value}
      onChange={onChange}
    />
  );
};
