import { Card } from '@mantine/core';
import React from 'react';

export interface DataFilterProps {
  fields?: Array<any>;
}

export const DataFilter: React.FC<DataFilterProps> = (props) => {
  return (
    <Card m="xs" withBorder>
      DataFilter
    </Card>
  );
};
