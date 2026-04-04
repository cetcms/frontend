import { MantineProvider } from '@mantine/core';
import { render as testingLibraryRender } from '@testing-library/react';
import React from 'react';
import { useThemeStore } from 'src/store';

function Wrapper({ children }: { children: React.ReactNode }) {
  const { theme } = useThemeStore();
  return (
    <MantineProvider theme={theme} env="test">
      {children}
    </MantineProvider>
  );
}

export function render(ui: React.ReactNode) {
  return testingLibraryRender(ui, {
    wrapper: Wrapper,
  });
}
