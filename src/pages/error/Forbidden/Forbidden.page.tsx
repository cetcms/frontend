import { Button, Container, Group, Paper, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import { IconShieldOff, IconRefresh, IconHome, IconLogin } from '@tabler/icons-react';
import React from 'react';
import { useNavigate } from 'react-router';

export const ForbiddenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container size="sm" py="xl">
      <Paper withBorder radius="md" p="xl">
        <Stack align="center" gap="md">
          <ThemeIcon size={64} radius="xl" color="red" variant="light">
            <IconShieldOff size={36} />
          </ThemeIcon>

          <Title order={2} ta="center">
            权限不足，无法访问该页面
          </Title>
          <Text c="dimmed" ta="center">
            抱歉，您当前的账户没有该页面的访问权限。若需要使用，请联系管理员为您的账户授权。
          </Text>

          <Group justify="center" mt="sm">
            <Button variant="default" leftSection={<IconHome size={16} />} onClick={() => navigate('/')}>
              返回首页
            </Button>
            <Button variant="default" leftSection={<IconLogin size={16} />} onClick={() => navigate('/auth/login')}>
              重新登录
            </Button>
            <Button variant="default" leftSection={<IconRefresh size={16} />} onClick={() => window.location.reload()}>
              刷新页面
            </Button>
          </Group>

          <Text size="sm" c="dimmed" ta="center">
            如果这是误报或临时问题，刷新或重新登录后再试一次。
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
};
