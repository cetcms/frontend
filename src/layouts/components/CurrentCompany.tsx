import { useLazyQuery } from '@apollo/client/react';
import { Avatar, Button, Divider, Popover, rem, Stack, TextInput } from '@mantine/core';
import { IconChevronDown, IconLogout, IconSearch } from '@tabler/icons-react';
import { PaginateCompaniesDocument } from 'src/graphql';
import { useSwitchAuthCompany } from 'src/hooks';
import { useAuthStore } from 'src/store';

export const CurrentCompany = () => {
  const { company, admin } = useAuthStore();
  // 切换公司认证
  const [switchAuthCompany, { loading }] = useSwitchAuthCompany();
  // 列表数据获取
  const [loadCompanies] = useLazyQuery(PaginateCompaniesDocument, {
    fetchPolicy: 'network-only',
  });
  if (!company) {
    return null;
  }
  return (
    <Popover
      disabled={loading}
      position="bottom"
      withArrow
      shadow="md"
      styles={{
        dropdown: {
          padding: rem(10),
        },
      }}
    >
      <Popover.Target>
        <Button
          size="xs"
          radius="xl"
          variant="default"
          leftSection={<Avatar src={company?.logo} size={24} radius={24} />}
          rightSection={<IconChevronDown size={16} />}
        >
          {company?.name}
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Stack gap="xs">
          <TextInput leftSection={<IconSearch size={14} />} placeholder="搜索公司" />
          <Button
            size="xs"
            fullWidth
            variant="default"
            leftSection={<Avatar src={company?.logo} size={24} radius={24} />}
          >
            {company?.name}
          </Button>
          <Divider />
          <Button
            size="xs"
            variant="default"
            fullWidth
            rightSection={<IconLogout size={16} />}
            onClick={() => switchAuthCompany()}
            loading={loading}
          >
            {admin ? '退回管理员平台' : '退回个人账号平台'}
          </Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};
