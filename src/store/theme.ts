import { createTheme, MantineThemeOverride, MantineColorsTuple, virtualColor } from '@mantine/core';
import { create } from 'zustand';

const light: MantineColorsTuple = [
  '#ecf3ff',
  '#d9e3f6',
  '#b0c4e9',
  '#85a3de',
  '#6187d3',
  '#4a75ce',
  '#3e6dcc',
  '#2f5cb5',
  '#2751a3',
  '#194691',
];
const dark: MantineColorsTuple = [
  '#e7f4ff',
  '#d3e5fd',
  '#a8c8f3',
  '#79a9ea',
  '#528fe3',
  '#3a7edf',
  '#2a76de',
  '#1b64c6',
  '#0e59b2',
  '#004d9e',
];

const THEME_KEY = 'primary';
const THEME_DARK_KEY = `${THEME_KEY}-dark`;
const THEME_LIGHT_KEY = `${THEME_KEY}-light`;
const theme: MantineThemeOverride = {
  primaryColor: THEME_KEY,
  colors: {
    [THEME_DARK_KEY]: dark,
    [THEME_LIGHT_KEY]: light,
    [THEME_KEY]: virtualColor({
      name: THEME_KEY,
      dark: THEME_DARK_KEY,
      light: THEME_LIGHT_KEY,
    }),
  },
};

export type ThemeOptions = {
  dark?: MantineColorsTuple;
  light?: MantineColorsTuple;
};

export interface ThemeStore {
  theme: MantineThemeOverride;
  options: ThemeOptions;
  setTheme: (options: ThemeOptions) => void;
}

export const useThemeStore = create<ThemeStore>((set) => ({
  setTheme: (options) =>
    set(() => {
      if (theme.colors) {
        if (options.dark) theme.colors[THEME_DARK_KEY] = options.dark;
        if (options.light) theme.colors[THEME_LIGHT_KEY] = options.light;
      }
      return { theme: createTheme(theme) };
    }),
  theme: createTheme(theme),
  options: {
    dark,
    light,
  },
}));
