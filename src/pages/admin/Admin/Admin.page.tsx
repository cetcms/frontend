import { useQuery } from '@apollo/client/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { PaginateAdminsDocument, PaginationFragment, PermissionAlias, Status } from 'src/graphql';
import { PagePermissionOption, useAuthStore } from 'src/store';

export const AdminPage: React.FC & PagePermissionOption = () => {
  const { t } = useTranslation('models');

  // 列表数据获取
  const { data, loading, refetch } = useQuery(PaginateAdminsDocument, {
    fetchPolicy: 'network-only',
  });
  const { paginateAdmins } = data || {};
  const pagination = (paginateAdmins?.pagination || {}) as PaginationFragment;
  const items = paginateAdmins?.items || [];

  // 权限检查
  const { checkPermission } = useAuthStore();
  const hasCreate = checkPermission(PermissionAlias.CreateOneAdmin);
  const hasEdit = checkPermission(PermissionAlias.UpdateOneAdmin);
  return (
    <DataTable
      editRoute={hasEdit ? { path: '/admin/edit', paramFields: { id: 'id' } } : undefined}
      addRoutePath={hasCreate ? '/admin/add' : undefined}
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
          title: t('Admin.id'),
          type: 'string',
        },
        {
          accessor: 'avatarUrl',
          title: t('Admin.avatar'),
          type: 'image',
          hiddenFilter: true,
        },
        {
          accessor: 'email',
          title: t('Admin.email'),
          type: 'string',
        },
        {
          accessor: 'name',
          title: t('Admin.name'),
          type: 'string',
        },
        {
          accessor: 'status',
          title: t('Admin.status'),
          type: 'enum',
          options: [
            { label: t('enum.Status.Enabled'), value: Status.Enabled },
            { label: t('enum.Status.Disabled'), value: Status.Disabled },
          ],
        },
        {
          accessor: 'createdAt',
          title: t('Admin.createdAt'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('Admin.updatedAt'),
          type: 'date',
        },
      ]}
    />
  );
};

AdminPage.permissions = PermissionAlias.PaginateAdmins;
