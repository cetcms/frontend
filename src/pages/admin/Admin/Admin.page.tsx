import { useQuery } from '@apollo/client/react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { PaginateAdminsDocument, PaginationFragment, Status } from 'src/graphql';

export const AdminPage = () => {
  const { t } = useTranslation('models');
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
        { name: 'name', label: t('Admin.name'), type: 'text' },
        { name: 'email', label: t('Admin.email'), type: 'text' },
        { name: 'updatedAt', label: t('Admin.updatedAt'), type: 'date' },
        {
          name: 'status',
          label: t('Admin.status'),
          type: 'select',
          options: [
            { label: '启用', value: Status.Enabled },
            { label: '禁用', value: Status.Disabled },
          ],
        },
      ]}
      columns={[
        {
          accessor: 'email',
          title: t('Admin.email'),
        },
        {
          accessor: 'name',
          title: t('Admin.name'),
        },
        {
          accessor: 'status',
          title: t('Admin.status'),
        },
        {
          accessor: 'createdAt',
          title: t('Admin.createdAt'),
        },
        {
          accessor: 'updatedAt',
          title: t('Admin.updatedAt'),
        },
      ]}
    />
  );
};
