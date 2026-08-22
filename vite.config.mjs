import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      src: path.resolve(import.meta.dirname, 'src'),
      '~': path.resolve(import.meta.dirname, './'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
    exclude: ['tests/e2e/**/*', 'node_modules/**/*'],
  },
  server: {
    host: true,
    open: true,
  },
});
