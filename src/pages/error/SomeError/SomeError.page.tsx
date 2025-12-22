import { Button, Container, Group, Paper, Stack, Text, Title, ThemeIcon, MantineStyleProps } from '@mantine/core';
import { IconAlertTriangle, IconHome, IconRefresh } from '@tabler/icons-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import voca from 'voca';

export interface SomeErrorPageProps extends MantineStyleProps {
  error?: Error;
}

export const SomeErrorPage: React.FC<SomeErrorPageProps> = ({ error, ...props }) => {
  const { t } = useTranslation('pages');
  return (
    <Container size="sm" py="xl" {...props}>
      <Paper withBorder radius="md" p="xl">
        <Stack align="center" gap="md">
          <ThemeIcon size={64} radius="xl" color="yellow" variant="light">
            <IconAlertTriangle size={36} />
          </ThemeIcon>

          <Title order={2} ta="center">
            {t('error_title')}
          </Title>
          <Text c="dimmed" ta="center">
            {voca.titleCase(error?.message || t('system_error'))}
          </Text>
          <Text c="dimmed" ta="center">
            {t('error_description')}
          </Text>
          <Group justify="center" mt="sm">
            <Button variant="default" leftSection={<IconRefresh size={16} />} onClick={() => window.location.reload()}>
              {t('refresh_page')}
            </Button>
            <Button variant="default" leftSection={<IconHome size={16} />} onClick={() => (window.location.href = '/')}>
              {t('back_to_home')}
            </Button>
          </Group>
        </Stack>
      </Paper>
    </Container>
  );
};
