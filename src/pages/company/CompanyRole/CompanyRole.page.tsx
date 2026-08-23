import { useQuery } from '@apollo/client/react';
import { Badge } from '@mantine/core';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import {
  PaginateCompanyRolesDocument,
  PaginateCompanyRolesQuery,
  PaginationFragment,
  PermissionAlias,
  Status,
} from 'src/graphql';
import { PagePermissionOption, useAuthStore } from 'src/store';

type CompanyRoleItem = NonNullable<NonNullable<PaginateCompanyRolesQuery['paginateCompanyRoles']>['items']>[number];

export const CompanyRolePage: React.FC & PagePermissionOption = () => {
  const { t } = useTranslation(['models', 'pages']);
  const { isAdmin, isCompany } = useAuthStore();

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
      editDisabled={(item: CompanyRoleItem) => !item.companyId && !isAdmin}
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
          accessor: 'company.name',
          title: t('pages:role_owner'),
          type: 'string',
          textAlign: 'center',
          render: (_item) => {
            const item = _item as CompanyRoleItem;
            if (!item?.company) {
              return (
                <Badge variant="light" color="red">
                  {t('pages:system_role')}
                </Badge>
              );
            }
            if (isCompany) {
              return <Badge variant="light">{t('pages:company_role')}</Badge>;
            }
            return <Badge variant="light">{item.company.name}</Badge>;
          },
        },
        {
          accessor: 'permissions',
          title: t('CompanyRole.permissions'),
          type: 'array',
          textAlign: 'center',
          width: '120px',
          render(_item) {
            const item = _item as CompanyRoleItem;
            return (
              <Badge variant="light">
                {item.permissions?.length || 0} {t('pages:items')}
              </Badge>
            );
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
