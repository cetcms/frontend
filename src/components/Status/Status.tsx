import { Badge } from '@mantine/core';
import React from 'react';

export const Status: React.FC<{ status: string }> = ({ status }) => {
  return <Badge variant="light">{status}</Badge>;
};
