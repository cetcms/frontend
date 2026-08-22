import { useEffect, useState } from 'react';
import type { SetupAppOptions } from 'src/setup';
import { useThemeStore } from 'src/store';

export const useRegisterTheme = (registerTheme: SetupAppOptions['registerTheme']) => {
  const { options, theme, setTheme } = useThemeStore();
  const [loading, setLoading] = useState(Boolean(registerTheme));
  useEffect(() => {
    if (registerTheme) {
      const defaultOptions = JSON.parse(JSON.stringify(options));
      Promise.resolve(registerTheme(defaultOptions)).then((newOptions) => {
        if (newOptions) {
          setTheme(newOptions);
        } else {
          setTheme(defaultOptions);
        }
        setLoading(false);
      });
    }
  }, []);

  return {
    theme,
    loading,
  };
};
