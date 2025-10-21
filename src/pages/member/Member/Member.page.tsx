import { useQuery } from '@apollo/client/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { PaginateMembersDocument, PaginationFragment, PermissionAlias, Status } from 'src/graphql';
import { PagePermissionOption, useAuthStore } from 'src/store';

import { BindToCompany } from './components';

export const MemberPage: React.FC & PagePermissionOption = () => {
  const { t } = useTranslation('models');

  // 列表数据获取
  const { data, loading, refetch } = useQuery(PaginateMembersDocument, {
    fetchPolicy: 'network-only',
  });
  const { paginateMembers } = data || {};
  const pagination = (paginateMembers?.pagination || {}) as PaginationFragment;
  const items = paginateMembers?.items || [];

  // 权限检查
  const { checkPermission, isCompany } = useAuthStore();
  const hasCreate = checkPermission(PermissionAlias.CreateOneCompany);
  const hasEdit = checkPermission(PermissionAlias.UpdateOneCompany);
  return (
    <DataTable
      editRoute={hasEdit ? { path: '/member/edit', paramFields: { id: 'id' } } : undefined}
      addRoutePath={hasCreate ? '/member/add' : undefined}
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
          title: t('Member.id'),
          type: 'string',
        },
        {
          accessor: 'avatarUrl',
          title: t('Member.email'),
          type: 'image',
          hiddenFilter: true,
        },
        {
          accessor: 'name',
          title: t('Member.name'),
          type: 'string',
        },
        {
          accessor: 'email',
          title: t('Member.email'),
          type: 'string',
        },
        {
          accessor: 'status',
          title: t('Member.status'),
          type: 'enum',
          options: [
            { label: t('enum.Status.Enabled'), value: Status.Enabled },
            { label: t('enum.Status.Disabled'), value: Status.Disabled },
          ],
        },
        {
          accessor: 'createdAt',
          title: t('Member.createdAt'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('Member.updatedAt'),
          type: 'date',
        },
      ]}
      toolbarPrepend={(current) => {
        return (
          <>
            {isCompany && <BindToCompany />}
            {current}
          </>
        );
      }}
    />
  );
};

MemberPage.permissions = PermissionAlias.PaginateMembers;
