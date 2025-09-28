import { useQuery } from '@apollo/client/react';
import { DataTable } from 'src/components';
import { PaginateAdminRolesDocument, PaginationFragment } from 'src/graphql';

export const AdminRolePage = () => {
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
          accessor: 'name',
          title: 'Name',
        },
      ]}
    />
  );
};
