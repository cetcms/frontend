import { useQuery } from '@apollo/client/react';
import { ActionIcon, Avatar, Badge, Group, Menu, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBell } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { ListSelfNotificationsDocument, Notification } from 'src/graphql';
import { useDate } from 'src/hooks/useDate';
import { localeOutput } from 'src/i18n';

interface ActionNotificationProps {
  notifications?: Notification[];
  onNotificationClick?: (notification: Notification) => void;
}

export const ActionNotification = ({ onNotificationClick }: ActionNotificationProps) => {
  const { t } = useTranslation();
  const [opened, { toggle }] = useDisclosure();
  const { data, loading } = useQuery(ListSelfNotificationsDocument);
  const { formatFriendlyTime } = useDate();

  const handleNotificationClick = (notification: Notification) => {
    onNotificationClick?.(notification);
  };

  return (
    <Menu shadow="md" width={320} opened={opened} onChange={toggle} withArrow>
      <Menu.Target>
        <ActionIcon variant="default" radius="xl" pos="relative" style={{ overflow: 'visible' }} loading={loading}>
          <IconBell size={20} stroke={1.5} />
          <Badge size="xs" pos="absolute" right="-7px" top="-7px">
            {data?.listSelfNotifications?.length || 0}
          </Badge>
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>{t('layout:notifications.title')}</Menu.Label>
        {data?.listSelfNotifications?.map((notification) => (
          <Menu.Item key={notification.id} onClick={() => handleNotificationClick(notification)}>
            <Group wrap="nowrap">
              <Avatar src={notification.sender} size="md" radius="xl" />
              <Stack gap={0}>
                <Text size="sm" fw={500}>
                  {t(`models:enum.${t('models:Notification._enums.type')}.${notification.type}`)}
                </Text>
                <Text size="xs" c="dimmed">
                  {localeOutput(notification.content)}
                </Text>
                <Text size="xs" c="dimmed" mt={4}>
                  {formatFriendlyTime(new Date(notification.createdAt))}
                </Text>
              </Stack>
            </Group>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
