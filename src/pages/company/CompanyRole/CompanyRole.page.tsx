import { useQuery } from '@apollo/client/react';
import { DataTable } from 'src/components';
import { PaginateCompanyRolesDocument, PaginationFragment } from 'src/graphql';

export const CompanyRolePage = () => {
  const { data, loading } = useQuery(PaginateCompanyRolesDocument, {});
  const { paginateCompanyRoles } = data || {};
  const pagination = (paginateCompanyRoles?.pagination || {}) as PaginationFragment;
  const items = paginateCompanyRoles?.items || [];
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
