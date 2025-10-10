import { SegmentedControl } from '@mantine/core';
import React from 'react';

interface BooleanInputProps {
  value: string;
  onChange: (value: string) => void;
  size: 'xs' | 'sm';
}

export const BooleanInput: React.FC<BooleanInputProps> = ({ value, onChange, size }) => {
  return (
    <SegmentedControl
      w={size === 'xs' ? 130 : 200}
      size={size}
      onChange={onChange}
      value={value}
      data={[
        { label: 'False', value: 'false' },
        { label: 'True', value: 'true' },
      ]}
    />
  );
};
