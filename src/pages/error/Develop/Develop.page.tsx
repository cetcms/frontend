import { Button, Container, Group, Paper, Stack, Text, Title, ThemeIcon } from '@mantine/core';
import { IconTool, IconHome, IconRefresh } from '@tabler/icons-react';
import React from 'react';
import { useNavigate } from 'react-router';

export const DevelopPage = () => {
  const navigate = useNavigate();

  return (
    <Container size="sm" py="xl">
      <Paper withBorder radius="md" p="xl">
        <Stack align="center" gap="md">
          <ThemeIcon size={64} radius="xl" color="blue" variant="light">
            <IconTool size={36} />
          </ThemeIcon>

          <Title order={2} ta="center">
            功能开发中
          </Title>
          <Text c="dimmed" ta="center">
            精彩内容正在全力施工中，请稍后再来探索吧！
          </Text>

          <Group justify="center" mt="sm">
            <Button variant="default" leftSection={<IconHome size={16} />} onClick={() => navigate('/')}>
              返回首页
            </Button>
            <Button variant="default" leftSection={<IconRefresh size={16} />} onClick={() => window.location.reload()}>
              刷新页面
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
};
