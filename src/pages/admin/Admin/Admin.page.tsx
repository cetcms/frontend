import { useQuery } from '@apollo/client/react';
import { DataTable } from 'src/components';
import { PaginateAdminsDocument, PaginationFragment } from 'src/graphql';

export const AdminPage = () => {
  const { data, loading } = useQuery(PaginateAdminsDocument, {});
  const { paginateAdmins } = data || {};
  const pagination = (paginateAdmins?.pagination || {}) as PaginationFragment;
  const items = paginateAdmins?.items || [];
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
