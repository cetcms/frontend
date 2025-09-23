import { createTheme, MantineColorsTuple, virtualColor } from '@mantine/core';

const main: MantineColorsTuple = [
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

const sub: MantineColorsTuple = [
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

export const theme = createTheme({
  primaryColor: 'primary',
  colors: {
    main,
    sub,
    primary: virtualColor({
      name: 'primary',
      dark: 'sub',
      light: 'main',
    }),
  },
});
