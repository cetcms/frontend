import { useQuery } from '@apollo/client/react';
import { DataTable } from 'src/components';
import { PaginateUsersDocument, PaginationFragment } from 'src/graphql';

export const UserPage = () => {
  const { data, loading } = useQuery(PaginateUsersDocument, {});
  const { paginateUsers } = data || {};
  const pagination = (paginateUsers?.pagination || {}) as PaginationFragment;
  const items = paginateUsers?.items || [];
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
