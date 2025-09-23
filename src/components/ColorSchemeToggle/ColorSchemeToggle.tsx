import { useMantineColorScheme } from '@mantine/core';
import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { IconButton } from 'src/components';

export const ColorSchemeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const { t } = useTranslation();

  const nextColorScheme = () => {
    const schemes = ['light', 'dark', 'auto'];
    const currentIndex = schemes.indexOf(colorScheme);
    const nextIndex = (currentIndex + 1) % schemes.length;
    setColorScheme(schemes[nextIndex] as 'light' | 'dark' | 'auto');
  };

  const icon = {
    light: IconSun,
    dark: IconMoon,
    auto: IconDeviceDesktop,
  }[colorScheme];

  const Icon = icon || IconSun;

  return (
    <IconButton
      icon={Icon}
      tooltip={t(`layout:color-scheme.${colorScheme}`)}
      onClick={nextColorScheme}
      aria-label="Toggle color scheme"
    />
  );
};
