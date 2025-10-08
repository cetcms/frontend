import React from 'react';
import { useThemeMode } from 'src/hooks';

export const Background = () => {
  const theme = useThemeMode();
  return (
    <>
      <div
        style={{
          backgroundColor: 'var(--mantine-color-primary-9)',
          position: 'fixed',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          opacity: 0.02,
          zIndex: -1,
        }}
      />
      <div
        style={{
          backgroundColor: theme === 'dark' ? 'white' : 'black',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.02,
          zIndex: -1,
        }}
      />
    </>
  );
};
