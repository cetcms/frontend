import { Card, Collapse, SimpleGrid, TextInput, Text, Group, Button, Grid } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import React from 'react';

export const DataToolbar = () => {
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <Card m="xs" withBorder>
      <Grid columns={10}>
        <Grid.Col span={8}>
          <SimpleGrid cols={4}>
            <TextInput placeholder="Name" label="Name" />
            <TextInput placeholder="Status" label="Status" />
            <TextInput placeholder="Error as boolean" label="Error as boolean" />
            <TextInput placeholder="Name" label="Name" />
          </SimpleGrid>
        </Grid.Col>
        <Grid.Col span={2}>
          <Group align="end" justify="end" h="100%">
            <Button variant="default">重置</Button>
            <Button variant="filled">搜索</Button>
            <Button
              variant="subtle"
              onClick={toggle}
              rightSection={opened ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
            >
              {opened ? '收起' : '展开'}
            </Button>
          </Group>
        </Grid.Col>
      </Grid>
      <Collapse in={opened}>
        <SimpleGrid cols={5} pt="md">
          <TextInput placeholder="名称" label="名称" />
          <TextInput placeholder="Status" label="Status" />
          <TextInput placeholder="Name" label="Name" />
          <TextInput placeholder="Name" label="Name" />
          <TextInput placeholder="Name" label="Name" />
          <TextInput placeholder="Name" label="Name" />
          <TextInput placeholder="Status" label="Status" />
        </SimpleGrid>
      </Collapse>
    </Card>
  );
};
