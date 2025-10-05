import { useQuery } from '@apollo/client/react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { PaginateAdminRolesDocument, PaginationFragment } from 'src/graphql';

export const AdminRolePage = () => {
  const { t } = useTranslation('models');
  const { data, loading } = useQuery(PaginateAdminRolesDocument, {});
  const { paginateAdminRoles } = data || {};
  const pagination = (paginateAdminRoles?.pagination || {}) as PaginationFragment;
  const items = paginateAdminRoles?.items || [];
  return (
    <DataTable
      loading={loading}
      pagination={pagination}
      records={items}
      columns={[
        {
          accessor: 'id',
          title: t('AdminRole.id'),
        },
        {
          accessor: 'name',
          title: t('AdminRole.name'),
        },
        {
          accessor: 'code',
          title: t('AdminRole.code'),
        },
        {
          accessor: 'status',
          title: t('AdminRole.status'),
        },
        {
          accessor: 'createdAt',
          title: t('AdminRole.createdAt'),
        },
        {
          accessor: 'updatedAt',
          title: t('AdminRole.updatedAt'),
        },
      ]}
    />
  );
};
