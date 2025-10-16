import { useLazyQuery } from '@apollo/client/react';
import { Avatar, Button, Divider, Popover, rem, Stack, Text, TextInput, NavLink } from '@mantine/core';
import { IconChevronDown, IconLogout, IconSearch } from '@tabler/icons-react';
import { useDebounceFn } from 'ahooks';
import { useState } from 'react';
import { Company, CompanyWhereInput, PaginateCompaniesDocument } from 'src/graphql';
import { useSwitchAuthCompany } from 'src/hooks';
import { useAuthStore } from 'src/store';

export const CurrentCompany = () => {
  // 当前公司
  const { company, admin } = useAuthStore();
  const whereNot: CompanyWhereInput = {};
  if (company) whereNot.id = { not: { equals: company.id } };

  // 切换公司认证
  const [switchAuthCompany, { loading }] = useSwitchAuthCompany();
  // 列表数据获取
  const [loadCompanies, result] = useLazyQuery(PaginateCompaniesDocument, {
    fetchPolicy: 'network-only',
  });
  const take = 10;
  const companies = (result?.data?.paginateCompanies.items || []) as Company[];

  const [searchValue, setSearchValue] = useState('');
  const handleSearch = useDebounceFn(
    (value: string) => {
      const where: CompanyWhereInput = {};
      if (value) {
        where.OR = [
          { ...whereNot, name: { contains: value } },
          { ...whereNot, alias: { contains: value } },
          { ...whereNot, description: { contains: value } },
        ];
      } else {
        where.OR = [whereNot];
      }
      loadCompanies({
        variables: { take, where },
      });
    },
    { wait: 300 }
  );

  // 保持输入框稳定渲染与受控，避免加载状态导致的卸载和闪动

  if (!company) {
    return null;
  }
  return (
    <Popover
      width={280}
      position="bottom"
      withArrow
      shadow="md"
      onChange={(opened) => {
        if (opened) {
          loadCompanies({ variables: { take, where: whereNot } });
        }
      }}
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
          <TextInput
            leftSection={<IconSearch size={14} />}
            placeholder="搜索公司"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
              handleSearch.run(e.target.value);
            }}
          />
          <Stack gap={0}>
            {companies.map((company) => (
              <NavLink
                label={
                  <Text lineClamp={1} w="100%" size="xs">
                    {company?.name}
                  </Text>
                }
                key={company.id}
                leftSection={<Avatar src={company?.logo} size={24} radius={24} />}
                onClick={() => switchAuthCompany(company.id)}
              />
            ))}
          </Stack>
          {!!companies?.length && <Divider />}
          <Button
            size="xs"
            variant="default"
            fullWidth
            rightSection={<IconLogout size={16} />}
            onClick={() => switchAuthCompany()}
            disabled={loading}
          >
            {admin ? '退回管理员平台' : '退回个人账号平台'}
          </Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};
