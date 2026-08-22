import { defineConfig } from 'oxfmt';
import { oxfmt } from 'oxc-config-mantine';

export default defineConfig({
  ...oxfmt,
  printWidth: 120,
  sortImports: {
    sortSideEffects: false,
    newlinesBetween: true,
    groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'unknown'],
  },
  ignorePatterns: [
    '*.d.ts',
    '*.mdx',
    '*.md',
    'dist',
    'storybook-static',
    'src/graphql/generated',
    'tests/reports',
  ],
});
