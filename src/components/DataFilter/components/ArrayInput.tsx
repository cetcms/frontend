import { TextInput, SegmentedControl } from '@mantine/core';
import React from 'react';

interface ArrayInputProps {
  value: string | boolean;
  onChange: (value: string | boolean) => void;
  size: 'xs' | 'sm';
  operator: string;
  placeholder?: string;
}

export const ArrayInput: React.FC<ArrayInputProps> = ({ value, onChange, size, operator }) => {
  // 根据操作符类型决定使用哪种输入控件
  switch (operator) {
    case 'isEmpty':
      // isEmpty 使用与boolean类型相同的输入控件
      return (
        <SegmentedControl
          w={size === 'xs' ? 130 : 200}
          size={size}
          onChange={(val) => onChange(val === 'true')}
          value={value.toString()}
          data={[
            { label: 'False', value: 'false' },
            { label: 'True', value: 'true' },
          ]}
        />
      );
    default:
      // 所有其他操作符使用逗号分隔的文本输入框
      return (
        <TextInput
          w={size === 'xs' ? 130 : 200}
          size={size}
          placeholder="多个值用逗号分隔"
          value={value.toString()}
          onChange={(e) => onChange(e.target.value)}
        />
      );
  }
};
