import { useState } from 'react';

export const useThemeMode = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  setInterval(() => {
    const storedTheme = document.querySelector('html')?.getAttribute('data-mantine-color-scheme');
    if (storedTheme) {
      setTheme(storedTheme as 'light' | 'dark');
    }
  }, 50);

  return theme;
};
