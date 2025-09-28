import { useQuery } from '@apollo/client/react';
import { DataTable } from 'src/components';
import { PaginateCompaniesDocument, PaginationFragment } from 'src/graphql';

export const CompanyPage = () => {
  const { data, loading } = useQuery(PaginateCompaniesDocument, {});
  const { paginateCompanies } = data || {};
  const pagination = (paginateCompanies?.pagination || {}) as PaginationFragment;
  const items = paginateCompanies?.items || [];
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
