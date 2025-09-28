import { useQuery } from '@apollo/client/react';
import { Card } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { PaginateCompanyRolesDocument, PaginationFragment } from 'src/graphql';

export const CompanyRolePage = () => {
  const { data } = useQuery(PaginateCompanyRolesDocument, {});
  const { paginateCompanyRoles } = data || {};
  const pagination = (paginateCompanyRoles?.pagination || {}) as PaginationFragment;
  const items = paginateCompanyRoles?.items || [];
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
