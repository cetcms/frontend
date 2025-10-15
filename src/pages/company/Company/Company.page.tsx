import { useMutation, useQuery } from '@apollo/client/react';
import { Center } from '@mantine/core';
import { IconLogin2 } from '@tabler/icons-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable, IconButton } from 'src/components';
import {
  Company,
  Login,
  PaginateCompaniesDocument,
  PaginationFragment,
  PermissionAlias,
  Status,
  SwitchAuthCompanyDocument,
} from 'src/graphql';
import { PagePermissionOption, useAuthStore } from 'src/store';

export const CompanyPage: React.FC & PagePermissionOption = () => {
  const { t } = useTranslation('models');

  // 列表数据获取
  const { data, loading, refetch } = useQuery(PaginateCompaniesDocument, {
    fetchPolicy: 'network-only',
  });
  const { paginateCompanies } = data || {};
  const pagination = (paginateCompanies?.pagination || {}) as PaginationFragment;
  const items = paginateCompanies?.items || [];

  // 权限检查
  const { checkPermission, setLogin } = useAuthStore();
  const hasCreate = checkPermission(PermissionAlias.CreateOneCompany);
  const hasEdit = checkPermission(PermissionAlias.UpdateOneCompany);

  const [switchAuthCompany] = useMutation(SwitchAuthCompanyDocument);
  const handleSwitchAuthCompany = async (companyId: string) => {
    const { data } = await switchAuthCompany({
      variables: {
        companyId,
      },
    });
    if (data?.switchAuthCompany) {
      setLogin(data.switchAuthCompany as Login);
      location.replace('/');
    }
  };

  return (
    <DataTable
      editRoute={hasEdit ? { path: '/company/edit', paramFields: { id: 'id' } } : undefined}
      addRoutePath={hasCreate ? '/company/add' : undefined}
      onChangeRequest={(params) => {
        refetch({
          take: params.take,
          skip: params.skip,
          where: params.where,
        });
      }}
      loading={loading}
      pagination={pagination}
      records={items}
      columns={[
        {
          accessor: 'id',
          title: t('Company.id'),
          type: 'string',
        },
        {
          accessor: 'logoUrl',
          title: t('Company.logo'),
          type: 'image',
          hiddenFilter: true,
        },
        {
          accessor: 'name',
          title: t('Company.name'),
          type: 'string',
        },
        {
          accessor: 'alias',
          title: t('Company.alias'),
          type: 'string',
        },
        {
          accessor: 'login',
          title: '登录到公司',
          textAlign: 'center',
          width: 200,
          render: (item) => {
            const company = item as Company;
            return (
              <Center>
                <IconButton icon={IconLogin2} tooltip={t('edit')} onClick={() => handleSwitchAuthCompany(company.id)} />
              </Center>
            );
          },
        },
        {
          accessor: 'code',
          title: t('Company.code'),
          type: 'string',
        },
        {
          accessor: 'description',
          title: t('Company.description'),
          type: 'string',
        },
        {
          accessor: 'status',
          title: t('Company.status'),
          type: 'enum',
          options: [
            { label: t('enum.Status.Enabled'), value: Status.Enabled },
            { label: t('enum.Status.Disabled'), value: Status.Disabled },
          ],
        },
        {
          accessor: 'createdAt',
          title: t('Company.createdAt'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('Company.updatedAt'),
          type: 'date',
        },
      ]}
    />
  );
};

CompanyPage.permissions = PermissionAlias.PaginateCompanies;
