import { Box, Card } from '@mantine/core';
import { Welcome } from 'src/components';

export const BankPage = () => {
  return (
    <Box p="md" pt={0}>
      <Card withBorder>
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
      </Card>
    </Box>
  );
};
