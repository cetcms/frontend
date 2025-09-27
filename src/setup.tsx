import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import 'mantine-contextmenu/styles.layer.css';
import '@mantine/nprogress/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/charts/styles.css';
import 'src/styles/main.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { initializeI18n } from 'src/i18n';
import { ApolloProvider, InitializeProvider } from 'src/providers';
import { Router } from 'src/router';
import type { MenuItem, ThemeOptions } from 'src/store';

export interface SetupAppOptions {
  registerMenus?: (defaultMenuItems: MenuItem[]) => MenuItem[] | void | Promise<MenuItem[] | void>;
  registerTheme?: (themeOptions: ThemeOptions) => ThemeOptions | void | Promise<ThemeOptions | void>;
}

export const SetupApp = async (options?: SetupAppOptions) => {
  // 初始化i18n
  await initializeI18n();

  // 渲染
  const container = document.querySelector('#root');
  const root = createRoot(container as Element);
  root.render(
    <InitializeProvider setupOptions={options}>
      <ApolloProvider>
        <Router />
      </ApolloProvider>
    </InitializeProvider>
  );
};
