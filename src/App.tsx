import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { ApolloProvider } from 'src/providers';

import { Router } from './router';
import { theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <ApolloProvider>
        <Router />
      </ApolloProvider>
    </MantineProvider>
  );
}
