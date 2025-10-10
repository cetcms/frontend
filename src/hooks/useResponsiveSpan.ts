import React, { useEffect, useState } from 'react';

import { useResizeObserver } from './useResizeObserver';

export interface ResponsiveColumnOptions {
  columns?: number;
  minWidth: number;
  defaultSpan?: number;
}

export const useResponsiveSpan = ({
  columns = 12,
  minWidth = 300,
  defaultSpan = 1,
}: ResponsiveColumnOptions): [React.RefObject<null>, number] => {
  const [span, setSpan] = useState(defaultSpan);
  const [ref, rect] = useResizeObserver();
  useEffect(() => {
    const countWidth = (rect?.width || 0) / minWidth;
    if (countWidth > 1) {
      setSpan(Math.ceil(columns / Math.floor(countWidth)));
    } else {
      setSpan(columns);
    }
  }, [rect?.width, minWidth]); // 依赖 width，确保在 width 变化时重新计算

  return [ref, span];
};
