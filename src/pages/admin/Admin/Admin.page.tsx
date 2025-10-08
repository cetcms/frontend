import { useMutation, useQuery } from '@apollo/client/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { PaginateAdminsDocument, PaginationFragment, Status, UpdateOneAdminDocument } from 'src/graphql';

export const AdminPage = () => {
  const { t } = useTranslation('models');
  const { data, loading, refetch } = useQuery(PaginateAdminsDocument, {
    fetchPolicy: 'network-only',
  });
  const [_] = useMutation(UpdateOneAdminDocument);
  const { paginateAdmins } = data || {};
  const pagination = (paginateAdmins?.pagination || {}) as PaginationFragment;
  const items = paginateAdmins?.items || [];
  return (
    <DataTable
      editRoute={{ path: '/admin/edit', paramFields: { id: 'id' } }}
      addRoutePath="/admin/add"
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
