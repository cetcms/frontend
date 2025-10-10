import { useQuery } from '@apollo/client/react';
import { Badge } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { AdminRole, PaginateAdminRolesDocument, PaginationFragment, Status } from 'src/graphql';

export const AdminRolePage = () => {
  const { t } = useTranslation('models');
  const adminRoles = useQuery(PaginateAdminRolesDocument, {
    fetchPolicy: 'network-only',
  });
  return (
    <DataTable
      editRoute={{ path: '/admin/role/edit', paramFields: { id: 'id' } }}
      addRoutePath="/admin/role/add"
      onChangeRequest={(params) => {
        adminRoles.refetch({
          take: params.take,
          skip: params.skip,
          where: params.where,
        });
      }}
      loading={adminRoles.loading}
      pagination={adminRoles.data?.paginateAdminRoles?.pagination as PaginationFragment}
      records={adminRoles.data?.paginateAdminRoles?.items || []}
      columns={[
        {
          accessor: 'id',
          title: t('AdminRole.id'),
          type: 'string',
        },
        {
          accessor: 'name',
          title: t('AdminRole.name'),
          type: 'string',
        },
        {
          accessor: 'code',
          title: t('AdminRole.code'),
          type: 'string',
        },
        {
          accessor: 'permissions',
          title: t('AdminRole.permissions'),
          type: 'array',
          textAlign: 'center',
          render(_item) {
            const item: AdminRole = _item as any;
            return <Badge variant="light">{item.permissions?.length || 0} 项</Badge>;
          },
        },
        {
          accessor: 'status',
          title: t('AdminRole.status'),
          type: 'enum',
          options: [
            { label: t('enum.Status.Enabled'), value: Status.Enabled },
            { label: t('enum.Status.Disabled'), value: Status.Disabled },
          ],
        },
        {
          accessor: 'createdAt',
          title: t('AdminRole.createdAt'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('AdminRole.updatedAt'),
          type: 'date',
        },
      ]}
    />
  );
};
