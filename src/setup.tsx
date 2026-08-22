import '@mantine/charts/styles.css';
import '@mantine/core/styles.layer.css';
import '@mantine/dates/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';
import 'mantine-contextmenu/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import 'src/styles/main.scss';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { initializeI18n } from 'src/i18n';
import { ApolloProvider, InitializeProvider } from 'src/providers';
import { Router } from 'src/router';
import { MenuItemGroup } from 'src/router/menus';
import type { ThemeOptions } from 'src/store';

export interface SetupAppOptions {
  registerMenus?: (defaultMenus: MenuItemGroup) => MenuItemGroup | void | Promise<MenuItemGroup | void>;
  registerTheme?: (themeOptions: ThemeOptions) => ThemeOptions | void | Promise<ThemeOptions | void>;
}

export const SetupApp = async (options?: SetupAppOptions) => {
  // 初始化i18n
  await initializeI18n();

  // 渲染
  const container = document.querySelector('#root');
  const root = createRoot(container as Element);
  root.render(
    <ApolloProvider>
      <InitializeProvider setupOptions={options}>
        <Notifications position="top-center" limit={3} />
        <ModalsProvider>
          <Router />
        </ModalsProvider>
      </InitializeProvider>
    </ApolloProvider>
  );
};
