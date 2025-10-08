import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import tsEslint from "typescript-eslint";
import mantine from "eslint-config-mantine";

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export default [
  ...mantine,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tsEslint.configs.recommended,
  {
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      react: reactPlugin,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-var-requires': 'error',

      // 异步处理
      'require-await': 'error',
      'no-return-await': 'error',

      // 错误处理
      'prefer-promise-reject-errors': 'error',

      // Import 相关规则
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'import/no-unresolved': 'off', // TypeScript 处理
      'import/no-duplicates': 'error',
      'import/no-unused-modules': 'warn',

      // React 相关规则
      'react/function-component-definition': [2, {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }],


      // Prettier 相关 - 只保留与格式化相关的配置
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'es5',
          tabWidth: 2,
          printWidth: 120,
        },
      ],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', 'src/graphql/generated/*.ts'] },
  {
    files: ['**/*.story.tsx'],
    rules: { 'no-console': 'off' },
  },
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['./tsconfig.json'],
      },
    },
  }
];
