import { Group, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLayoutStore } from 'src/store';

export interface PageHeaderProps {
  icon?: React.ReactNode;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  description?: string | React.ReactNode;
  rightSection?: React.ReactNode;
}

export function PageHeader(props: PageHeaderProps) {
  const { t } = useTranslation();
  const { pageInfo } = useLayoutStore();
  const icon = pageInfo?.icon || props.icon;
  const title = pageInfo?.title || props.title || 'common:undefined';
  const subtitle = pageInfo?.subtitle || props.subtitle;
  const description = pageInfo?.description || props.description;

  return (
    <Group justify="space-between">
      <Group p="md">
        {icon && (
          <ThemeIcon variant="light" radius="xl" size="xl">
            {icon}
          </ThemeIcon>
        )}
        <Stack gap={0}>
          <Group align="baseline" gap="xs">
            {typeof title === 'string' ? <Title order={3}>{t(title)}</Title> : title}
            {typeof subtitle === 'string' ? (
              <Text size="lg" c="dimmed">
                {t(subtitle)}
              </Text>
            ) : (
              subtitle || null
            )}
          </Group>
          {typeof description === 'string' ? (
            <Text size="sm" c="dimmed">
              {t(description)}
            </Text>
          ) : (
            description || null
          )}
        </Stack>
      </Group>
      <Group px="md" justify="right" align="center">
        {props.rightSection}
      </Group>
    </Group>
  );
}
