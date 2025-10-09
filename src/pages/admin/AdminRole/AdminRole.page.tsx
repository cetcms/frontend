import { useQuery } from '@apollo/client/react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { PaginateAdminRolesDocument, PaginationFragment, Status } from 'src/graphql';

export const AdminRolePage = () => {
  const { t } = useTranslation('models');
  const { data, loading, refetch } = useQuery(PaginateAdminRolesDocument, {
    fetchPolicy: 'network-only',
  });
  const { paginateAdminRoles } = data || {};
  const pagination = (paginateAdminRoles?.pagination || {}) as PaginationFragment;
  const items = paginateAdminRoles?.items || [];
  return (
    <DataTable
      editRoute={{ path: '/admin/role/edit', paramFields: { id: 'id' } }}
      addRoutePath="/admin/role/add"
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