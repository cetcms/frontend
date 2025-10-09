import { useQuery } from '@apollo/client/react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { PaginateUsersDocument, PaginationFragment, Status } from 'src/graphql';

export const UserPage = () => {
  const { t } = useTranslation('models');
  const { data, loading, refetch } = useQuery(PaginateUsersDocument, {
    fetchPolicy: 'network-only',
  });
  const { paginateUsers } = data || {};
  const pagination = (paginateUsers?.pagination || {}) as PaginationFragment;
  const items = paginateUsers?.items || [];
  return (
    <DataTable
      editRoute={{ path: '/user/edit', paramFields: { id: 'id' } }}
      addRoutePath="/user/add"
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
      columns={[
        {
          accessor: 'id',
          title: t('User.id'),
          type: 'string',
        },
        {
          accessor: 'name',
          title: t('User.name'),
          type: 'string',
        },
        {
          accessor: 'email',
          title: t('User.email'),
          type: 'string',
        },
        {
          accessor: 'status',
          title: t('User.status'),
          type: 'enum',
          options: [
            { label: t('enum.Status.Enabled'), value: Status.Enabled },
            { label: t('enum.Status.Disabled'), value: Status.Disabled },
          ],
        },
        {
          accessor: 'createdAt',
          title: t('User.createdAt'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('User.updatedAt'),
          type: 'date',
        },
      ]}
    />
  );
};