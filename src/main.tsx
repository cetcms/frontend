import '@mantine/core/styles.layer.css';
import 'mantine-datatable/styles.layer.css';
import 'mantine-contextmenu/styles.layer.css';
import '@mantine/nprogress/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/charts/styles.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import { initializeI18n } from './i18n';

import './styles/main.scss';

// 初始化应用
(async () => {
  // 初始化i18n
  await initializeI18n();

  const container = document.querySelector('#root');
  const root = createRoot(container as Element);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
})();
