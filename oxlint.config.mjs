import { defineConfig } from 'oxlint';
import { oxlint } from 'oxc-config-mantine';

export default defineConfig({
  ...oxlint,
  rules: {
    ...oxlint.rules,
    // The project's existing style uses single-line `if` statements without braces.
    // oxc-config-mantine enables `curly: 'error'`; disabled here to keep the migration smooth.
    curly: 'off',
    // Preserve the arrow-function component convention enforced by the previous eslint-config-mantine.
    // Not included in oxc-config-mantine, so added explicitly.
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
    ],
  },
  ignorePatterns: [
    '**/*.{mjs,cjs,js,d.ts,d.mts}',
    'src/graphql/generated/*.ts',
    'tests/e2e/**/*.ts',
    'playwright.config.mjs',
    'dist',
    'storybook-static',
  ],
});
