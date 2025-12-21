import { useLazyQuery } from '@apollo/client/react';
import { Avatar, Button, Divider, Popover, rem, Stack, Text, TextInput, NavLink } from '@mantine/core';
import { IconChevronDown, IconLogout, IconSearch } from '@tabler/icons-react';
import { useDebounceFn } from 'ahooks';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Company, CompanyWhereInput, PaginateCompaniesDocument, Pagination } from 'src/graphql';
import { useSwitchAuthCompany } from 'src/hooks';
import { useAuthStore } from 'src/store';

export const CurrentCompany = () => {
  const { t } = useTranslation(['layout']);
  // 当前企业
  const { company, admin } = useAuthStore();
  const whereNot: CompanyWhereInput = {};
  if (company) whereNot.id = { not: { equals: company.id } };

  // 切换企业认证
  const [switchAuthCompany, { loading }] = useSwitchAuthCompany();
  // 列表数据获取
  const [loadCompanies, result] = useLazyQuery(PaginateCompaniesDocument, {
    fetchPolicy: 'network-only',
  });
  const take = 10;
  const paginateCompanies = result?.data?.paginateCompanies || {};
  const companies = (paginateCompanies.items || []) as Company[];
  const pagination = (paginateCompanies.pagination || {}) as Pagination;

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
          {pagination?.totalCount > take && (
            <TextInput
              leftSection={<IconSearch size={14} />}
              placeholder={t('layout:company.search-placeholder')}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
                handleSearch.run(e.target.value);
              }}
            />
          )}
          {!!companies?.length && (
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
          )}
          {!!companies?.length && <Divider />}
          <Button
            size="xs"
            variant="default"
            fullWidth
            rightSection={<IconLogout size={16} />}
            onClick={() => switchAuthCompany()}
            disabled={loading}
          >
            {admin ? t('layout:company.back-to-admin') : t('layout:company.back-to-member')}
          </Button>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
};
