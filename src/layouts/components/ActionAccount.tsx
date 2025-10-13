import { useLazyQuery } from '@apollo/client/react';
import { ActionIcon, Avatar, Group, Menu, rem, Text } from '@mantine/core';
import { IconChevronRight, IconLogout, IconSettings } from '@tabler/icons-react';
import React from 'react';
import { LogoutDocument } from 'src/graphql/generated/graphql';
import { useAuthStore } from 'src/store';

export const ActionAccount = () => {
  // const theme = useMantineTheme();
  const { clearLogin, clearAuth, auth } = useAuthStore();
  const [logout, { loading }] = useLazyQuery(LogoutDocument);
  const { user, admin } = auth || {};
  return (
    <Group justify="center">
      <Menu
        disabled={loading}
        withArrow
        width={230}
        position="bottom"
        transitionProps={{ transition: 'pop' }}
        withinPortal
      >
        <Menu.Target>
          <ActionIcon ml={8} variant="transparent" radius="xl" style={{ overflow: 'visible' }}>
            <Avatar style={{ cursor: 'pointer' }} variant="filled" radius="xl" src="-" alt="it's me" />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item rightSection={<IconChevronRight style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}>
            <Group>
              <Avatar radius="xl" src="-" />
              <div>
                <Text fw={500}>{admin?.name || user?.name || '--'}</Text>
                <Text size="xs" c="dimmed">
                  {admin?.email || user?.email || '--'}
                </Text>
              </div>
            </Group>
          </Menu.Item>

          <Menu.Divider />

          <Menu.Item leftSection={<IconSettings style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}>
            账号设置
          </Menu.Item>
          <Menu.Item
            onClick={() => {
              logout().then(() => {
                clearAuth();
                clearLogin();
                location.reload();
              });
            }}
            leftSection={<IconLogout style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
          >
            退出系统
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </Group>
  );
};
