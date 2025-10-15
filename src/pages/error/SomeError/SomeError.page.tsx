import { Button, Container, Group, Paper, Stack, Text, Title, ThemeIcon, MantineStyleProps } from '@mantine/core';
import { IconAlertTriangle, IconHome, IconRefresh } from '@tabler/icons-react';
import React from 'react';
import voca from 'voca';

export interface SomeErrorPageProps extends MantineStyleProps {
  error?: Error;
}

export const SomeErrorPage: React.FC<SomeErrorPageProps> = ({ error, ...props }) => {
  return (
    <Container size="sm" py="xl" {...props}>
      <Paper withBorder radius="md" p="xl">
        <Stack align="center" gap="md">
          <ThemeIcon size={64} radius="xl" color="yellow" variant="light">
            <IconAlertTriangle size={36} />
          </ThemeIcon>

          <Title order={2} ta="center">
            发生了点小问题
          </Title>
          <Text c="dimmed" ta="center">
            {voca.titleCase(error?.message || '哎呀！系统好像出故障了！')}
          </Text>
          <Text c="dimmed" ta="center">
            别担心，可能是临时小故障。你可以尝试刷新页面或返回首页继续浏览。
          </Text>
          <Group justify="center" mt="sm">
            <Button variant="default" leftSection={<IconRefresh size={16} />} onClick={() => window.location.reload()}>
              刷新页面
            </Button>
            <Button variant="default" leftSection={<IconHome size={16} />} onClick={() => (window.location.href = '/')}>
              返回首页
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
};
