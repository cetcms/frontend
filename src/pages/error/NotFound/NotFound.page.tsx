import { Button, Container, SimpleGrid, Text, Title } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router';

import { NotFoundImage } from './NotFound.image';
import classes from './NotFound.module.scss';

export function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container className={classes.root}>
      <SimpleGrid spacing={{ base: 40, sm: 80 }} cols={{ base: 1, sm: 2 }} pb={100} pt={60} py={80}>
        <div className={classes.mobileImage}>
          <NotFoundImage />
        </div>
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text c="dimmed" size="lg">
            Page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to
            another URL. If you think this is an error contact support.
          </Text>
          <Button variant="outline" size="md" mt="xl" className={classes.control} onClick={() => navigate('/')}>
            Get back to home page
          </Button>
        </div>
        <div className={classes.desktopImage}>
          <NotFoundImage />
        </div>
      </SimpleGrid>
    </Container>
  );
}
