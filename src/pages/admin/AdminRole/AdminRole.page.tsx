import { useQuery } from '@apollo/client/react';
import { Card } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { PaginateAdminRolesDocument, PaginationFragment } from 'src/graphql';

export const AdminRolePage = () => {
  const { data } = useQuery(PaginateAdminRolesDocument, {});
  const { paginateAdminRoles } = data || {};
  const pagination = (paginateAdminRoles?.pagination || {}) as PaginationFragment;
  const items = paginateAdminRoles?.items || [];
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
