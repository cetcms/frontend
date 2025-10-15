import { Box, Button, Center, Container, Group, Paper, Stack, Text, Title } from '@mantine/core';
import { IconHome, IconRefresh } from '@tabler/icons-react';
import React from 'react';
import { useNavigate } from 'react-router';

import { NotFoundImage } from './NotFound.image';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container size="md" py="xl">
      <Paper withBorder radius="md" p="xl">
        <Stack align="center" gap="md">
          <Center w="100%">
            <Box maw={300} w="90%">
              <NotFoundImage />
            </Box>
          </Center>
          <Title order={2} ta="center">
            页面不存在或已移除
          </Title>
          <Text c="dimmed" ta="center">
            您访问的页面可能已被移动、删除或地址输入有误。请检查链接，或返回首页继续浏览。
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
