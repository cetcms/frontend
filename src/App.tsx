import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { ApolloProvider, InitializeProvider } from 'src/providers';

import { Router } from './router';
import { theme } from './theme';

export const App = () => {
  return (
    <InitializeProvider>
      <MantineProvider theme={theme}>
        <ApolloProvider>
          <Router />
        </ApolloProvider>
      </MantineProvider>
    </InitializeProvider>
  );
};
