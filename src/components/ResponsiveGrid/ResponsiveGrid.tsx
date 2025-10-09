import { SimpleGrid, SimpleGridProps } from '@mantine/core';
import React, { useMemo } from 'react';
import { useResponsiveCols } from 'src/hooks';

export interface ResponsiveGridProps extends SimpleGridProps {
  colsMinWidth: number;
}

export const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ colsMinWidth, ...props }) => {
  const [gridRef, cols] = useResponsiveCols({
    minWidth: colsMinWidth,
  });
  if (!cols) {
    props.children = null;
  }
  return useMemo(() => <SimpleGrid ref={gridRef} cols={cols} {...props} />, [cols, props]);
};
