import { useQuery } from '@apollo/client/react';
import { Badge } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import {
  AdminRole,
  CompanyRole,
  PaginateCompanyRolesDocument,
  PaginationFragment,
  PermissionAlias,
  Status,
} from 'src/graphql';
import { PagePermissionOption, useAuthStore } from 'src/store';

export const CompanyRolePage: React.FC & PagePermissionOption = () => {
  const { t } = useTranslation('models');

  // 列表数据获取
  const { data, loading, refetch } = useQuery(PaginateCompanyRolesDocument, {
    fetchPolicy: 'network-only',
  });
  const { paginateCompanyRoles } = data || {};
  const pagination = (paginateCompanyRoles?.pagination || {}) as PaginationFragment;
  const items = paginateCompanyRoles?.items || [];

  // 权限检查
  const { checkPermission } = useAuthStore();
  const hasCreate = checkPermission(PermissionAlias.CreateOneCompanyRole);
  const hasEdit = checkPermission(PermissionAlias.UpdateOneCompanyRole);
  return (
    <DataTable
      editRoute={hasEdit ? { path: '/company/role/edit', paramFields: { id: 'id' } } : undefined}
      editDisabled={(item: CompanyRole) => !item.companyId}
      addRoutePath={hasCreate ? '/company/role/add' : undefined}
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
          title: t('CompanyRole.id'),
          type: 'string',
        },
        {
          accessor: 'name',
          title: t('CompanyRole.name'),
          type: 'string',
        },
        {
          accessor: 'code',
          title: t('CompanyRole.code'),
          type: 'string',
        },
        {
          accessor: 'permissions',
          title: t('AdminRole.permissions'),
          type: 'array',
          textAlign: 'center',
          width: '120px',
          render(_item) {
            const item: AdminRole = _item as any;
            return <Badge variant="light">{item.permissions?.length || 0} 项</Badge>;
          },
        },
        {
          accessor: 'status',
          title: t('CompanyRole.status'),
          type: 'enum',
          options: [
            { label: t('enum.Status.Enabled'), value: Status.Enabled },
            { label: t('enum.Status.Disabled'), value: Status.Disabled },
          ],
        },
        {
          accessor: 'createdAt',
          title: t('CompanyRole.createdAt'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('CompanyRole.updatedAt'),
          type: 'date',
        },
      ]}
    />
  );
};

CompanyRolePage.permissions = PermissionAlias.PaginateCompanyRoles;
