import { useQuery } from '@apollo/client/react';
import { Group } from '@mantine/core';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { DataTable, IconButton } from 'src/components';
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
      columns={[
        {
          accessor: 'id',
          title: t('Admin.id'),
          type: 'string',
        },
        {
          accessor: 'email',
          title: t('Admin.email'),
          type: 'string',
        },
        {
          accessor: 'name',
          title: t('Admin.name'),
          type: 'string',
        },
        {
          accessor: 'status',
          title: t('Admin.status'),
          type: 'enum',
          options: [
            { label: '启用', value: Status.Enabled },
            { label: '禁用', value: Status.Disabled },
          ],
        },
        {
          accessor: 'createdAt',
          title: t('Admin.createdAt'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('Admin.updatedAt'),
          type: 'date',
        },
        {
          accessor: 'actions',
          title: t('actions'),
          textAlign: 'center',
          width: 200,
          render: () => (
            <Group gap="xs" justify="center">
              <IconButton tooltip={t('view')} icon={IconEye} onClick={() => {}} />
              <IconButton tooltip={t('edit')} icon={IconEdit} onClick={() => {}} />
              <IconButton tooltip={t('delete')} icon={IconTrash} onClick={() => {}} />
            </Group>
          ),
        },
      ]}
    />
  );
};
