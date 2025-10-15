import { useQuery } from '@apollo/client/react';
import { Badge } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { AdminRole, PaginateAdminRolesDocument, PaginationFragment, PermissionAlias, Status } from 'src/graphql';
import { PagePermissionOption, useAuthStore } from 'src/store';

export const AdminRolePage: React.FC & PagePermissionOption = () => {
  const { t } = useTranslation('models');

  // 列表数据获取
  const { data, loading, refetch } = useQuery(PaginateAdminRolesDocument, {
    fetchPolicy: 'network-only',
  });
  const { paginateAdminRoles } = data || {};
  const pagination = (paginateAdminRoles?.pagination || {}) as PaginationFragment;
  const items = paginateAdminRoles?.items || [];

  // 权限检查
  const { checkPermission } = useAuthStore();
  const hasCreate = checkPermission(PermissionAlias.CreateOneAdmin);
  const hasEdit = checkPermission(PermissionAlias.UpdateOneAdmin);
  return (
    <DataTable
      editRoute={hasEdit ? { path: '/admin/role/edit', paramFields: { id: 'id' } } : undefined}
      addRoutePath={hasCreate ? '/admin/role/add' : undefined}
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
          title: t('AdminRole.id'),
          type: 'string',
        },
        {
          accessor: 'name',
          title: t('AdminRole.name'),
          type: 'string',
        },
        {
          accessor: 'code',
          title: t('AdminRole.code'),
          type: 'string',
        },
        {
          accessor: 'permissions',
          title: t('AdminRole.permissions'),
          type: 'array',
          textAlign: 'center',
          render(_item) {
            const item: AdminRole = _item as any;
            return <Badge variant="light">{item.permissions?.length || 0} 项</Badge>;
          },
        },
        {
          accessor: 'status',
          title: t('AdminRole.status'),
          type: 'enum',
          options: [
            { label: t('enum.Status.Enabled'), value: Status.Enabled },
            { label: t('enum.Status.Disabled'), value: Status.Disabled },
          ],
        },
        {
          accessor: 'createdAt',
          title: t('AdminRole.createdAt'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('AdminRole.updatedAt'),
          type: 'date',
        },
      ]}
    />
  );
};

AdminRolePage.permissions = PermissionAlias.PaginateAdminRoles;
