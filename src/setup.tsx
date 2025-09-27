import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import 'mantine-contextmenu/styles.layer.css';
import '@mantine/nprogress/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/charts/styles.css';
import './styles/main.scss';

import { MantineProvider } from '@mantine/core';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ApolloProvider, InitializeProvider, InitializeSetupOptions } from 'src/providers';
import { Router } from 'src/router';
import { theme } from 'src/theme';

import { initializeI18n } from './i18n';

export type SetupAppOptions = InitializeSetupOptions;

export const SetupApp = async (options?: SetupAppOptions) => {
  // 初始化i18n
  await initializeI18n();

  const container = document.querySelector('#root');
  const root = createRoot(container as Element);
  root.render(
    <React.StrictMode>
      <MantineProvider theme={theme}>
        <InitializeProvider setupOptions={options}>
          <ApolloProvider>
            <Router />
          </ApolloProvider>
        </InitializeProvider>
      </MantineProvider>
    </React.StrictMode>
  );
};
