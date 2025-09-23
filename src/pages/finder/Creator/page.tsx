import { Card, SimpleGrid, Stack } from '@mantine/core';
import React from 'react';

import { CreatorItem } from './includes';

export const CreatorFilter: React.FC = () => {
  return (
    <Card withBorder radius="md">
      box
    </Card>
  );
};

export const CreatorPage: React.FC = () => {
  return (
    <Stack p="md">
      <CreatorFilter />
      <SimpleGrid cols={6}>
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
        <CreatorItem />
      </SimpleGrid>
    </Stack>
  );
};
