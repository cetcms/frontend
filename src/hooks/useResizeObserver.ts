import React, { useEffect, useRef, useState } from 'react';

export const useResizeObserver = (): [React.Ref<null>, DOMRectReadOnly | undefined] => {
  const ref = useRef(null);
  const [rect, setRect] = useState<DOMRectReadOnly>();
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setRect(entry.contentRect);
      }
    });
    if (ref && ref.current) {
      resizeObserver.observe(ref.current);
    }
    return () => {
      if (ref && ref.current) {
        resizeObserver.unobserve(ref.current);
      }
    };
  });
  return [ref, rect];
};
