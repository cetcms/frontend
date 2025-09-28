import { useQuery } from '@apollo/client/react';
import { Card } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { PaginateAdminsDocument, PaginationFragment } from 'src/graphql';

export const AdminPage = () => {
  const { data } = useQuery(PaginateAdminsDocument, {});
  const { paginateAdmins } = data || {};
  const pagination = (paginateAdmins?.pagination || {}) as PaginationFragment;
  const items = paginateAdmins?.items || [];
  return (
    <Card m="xs" withBorder>
      <DataTable
        columns={[
          {
            accessor: 'name',
            title: 'Name',
          },
        ]}
        records={items || []}
        page={pagination?.page || 1}
        recordsPerPage={pagination?.take || 10}
        totalRecords={pagination?.totalCount || 0}
        onPageChange={(page) => {
          console.log(page);
        }}
      />
    </Card>
  );
};
