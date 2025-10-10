import React, { useEffect, useMemo, useState } from 'react';

import { useResizeObserver } from './useResizeObserver';

export interface ResponsiveColsOptions {
  minWidth: number;
}

export const useResponsiveCols = ({ minWidth }: ResponsiveColsOptions): [React.MutableRefObject<null>, number] => {
  const [cols, setCols] = useState(0);
  const [ref, rect] = useResizeObserver();
  useEffect(() => {
    const value = (rect?.width || 0) / minWidth;
    if (value > 0 && value < 1) {
      setCols(1);
    } else {
      setCols(Math.floor(value));
    }
  }, [rect?.width, minWidth]); // 依赖 width，确保在 width 变化时重新计算

  return useMemo(() => [ref, cols], [ref, cols]);
};
