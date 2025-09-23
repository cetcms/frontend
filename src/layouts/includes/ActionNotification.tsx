import { ActionIcon, Avatar, Badge, Group, Menu, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBell } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  avatar?: string;
}

interface ActionNotificationProps {
  notifications?: Notification[];
  onNotificationClick?: (notification: Notification) => void;
}

const defaultNotifications: Notification[] = [
  {
    id: '1',
    title: '系统通知',
    message: '您的账户已成功创建',
    time: '刚刚',
    read: false,
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
  },
  {
    id: '2',
    title: '系统更新',
    message: '系统将在今晚进行例行维护',
    time: '2小时前',
    read: true,
    avatar: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
  },
];

export const ActionNotification = ({
  notifications = defaultNotifications,
  onNotificationClick,
}: ActionNotificationProps) => {
  const { t } = useTranslation();
  const [opened, { toggle }] = useDisclosure();

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleNotificationClick = (notification: Notification) => {
    onNotificationClick?.(notification);
  };

  return (
    <Menu shadow="md" width={320} opened={opened} onChange={toggle} withArrow>
      <Menu.Target>
        <ActionIcon variant="default" radius="xl" pos="relative" style={{ overflow: 'visible' }}>
          <IconBell size={20} stroke={1.5} />
          {unreadCount > 0 && (
            <Badge size="xs" pos="absolute" right="-7px" top="-7px">
              {unreadCount}
            </Badge>
          )}
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>{t('layout:notifications.title')}</Menu.Label>
        {notifications.map((notification) => (
          <Menu.Item key={notification.id} onClick={() => handleNotificationClick(notification)}>
            <Group wrap="nowrap">
              <Avatar src={notification.avatar} size="md" radius="xl" />
              <Stack gap={0}>
                <Text size="sm" fw={500}>
                  {notification.title}
                </Text>
                <Text size="xs" c="dimmed">
                  {notification.message}
                </Text>
                <Text size="xs" c="dimmed" mt={4}>
                  {notification.time}
                </Text>
              </Stack>
            </Group>
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};
