import { useQuery } from '@apollo/client/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { PaginateCompaniesDocument, PaginationFragment, PermissionAlias, Status } from 'src/graphql';
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
  const { checkPermission } = useAuthStore();
  const hasCreate = checkPermission(PermissionAlias.CreateOneCompany);
  const hasEdit = checkPermission(PermissionAlias.UpdateOneCompany);
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
