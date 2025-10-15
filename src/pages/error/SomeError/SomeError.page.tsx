import { Box, Button, Container, Group, MantineStyleProps, Text, Title } from '@mantine/core';
import React from 'react';
import voca from 'voca';

import classes from './SomeError.module.scss';

export interface SomeErrorPageProps extends MantineStyleProps {
  error?: Error;
}

export const SomeErrorPage: React.FC<SomeErrorPageProps> = ({ error, ...props }) => {
  return (
    <Container {...props} className={classes.root}>
      <Box>
        <Text className={classes.label}>500</Text>
        <Title className={classes.title}>{voca.titleCase(error?.message || 'Something bad just happened...')}</Title>
        <Text size="lg" ta="center" className={classes.description}>
          别担心，你可能碰到了一个不太常见的小插曲。如果你对这感兴趣，随时给我们留言，或者试试刷新页面，再次访问看看
        </Text>
        <Group justify="center">
          <Button variant="white" size="md" onClick={() => window.location.reload()}>
            Refresh the page
          </Button>
        </Group>
      </Box>
    </Container>
  );
};
