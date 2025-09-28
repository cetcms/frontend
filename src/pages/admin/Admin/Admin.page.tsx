import { useQuery } from '@apollo/client/react';
import { DataTable } from 'src/components';
import { PaginateAdminsDocument, PaginationFragment, Status } from 'src/graphql';

export const AdminPage = () => {
  const { data, loading, refetch } = useQuery(PaginateAdminsDocument, {});
  const { paginateAdmins } = data || {};
  const pagination = (paginateAdmins?.pagination || {}) as PaginationFragment;
  const items = paginateAdmins?.items || [];
  return (
    <DataTable
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
      filterFields={[
        { name: 'name', label: '姓名', type: 'text' },
        { name: 'email', label: '邮箱', type: 'text' },
        {
          name: 'status',
          label: '状态',
          type: 'select',
          options: [
            { label: '启用', value: Status.Enabled },
            { label: '禁用', value: Status.Disabled },
          ],
        },
      ]}
      columns={[
        {
          accessor: 'name',
          title: 'Name',
        },
      ]}
    />
  );
};
