import { useQuery } from '@apollo/client/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { PaginateUsersDocument, PaginationFragment, PermissionAlias, Status } from 'src/graphql';
import { PagePermissionOption, useAuthStore } from 'src/store';

export const UserPage: React.FC & PagePermissionOption = () => {
  const { t } = useTranslation('models');

  // 列表数据获取
  const { data, loading, refetch } = useQuery(PaginateUsersDocument, {
    fetchPolicy: 'network-only',
  });
  const { paginateUsers } = data || {};
  const pagination = (paginateUsers?.pagination || {}) as PaginationFragment;
  const items = paginateUsers?.items || [];

  // 权限检查
  const { checkPermission } = useAuthStore();
  const hasCreate = checkPermission(PermissionAlias.CreateOneCompany);
  const hasEdit = checkPermission(PermissionAlias.UpdateOneCompany);
  return (
    <DataTable
      editRoute={hasEdit ? { path: '/user/edit', paramFields: { id: 'id' } } : undefined}
      addRoutePath={hasCreate ? '/user/add' : undefined}
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
          title: t('User.id'),
          type: 'string',
        },
        {
          accessor: 'avatarUrl',
          title: t('User.email'),
          type: 'image',
          hiddenFilter: true,
        },
        {
          accessor: 'name',
          title: t('User.name'),
          type: 'string',
        },
        {
          accessor: 'email',
          title: t('User.email'),
          type: 'string',
        },
        {
          accessor: 'status',
          title: t('User.status'),
          type: 'enum',
          options: [
            { label: t('enum.Status.Enabled'), value: Status.Enabled },
            { label: t('enum.Status.Disabled'), value: Status.Disabled },
          ],
        },
        {
          accessor: 'createdAt',
          title: t('User.createdAt'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('User.updatedAt'),
          type: 'date',
        },
      ]}
    />
  );
};

UserPage.permissions = PermissionAlias.PaginateUsers;
