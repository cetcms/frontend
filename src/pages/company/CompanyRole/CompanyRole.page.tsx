import { useQuery } from '@apollo/client/react';
import { Badge } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { AdminRole, PaginateCompanyRolesDocument, PaginationFragment, Status } from 'src/graphql';

export const CompanyRolePage = () => {
  const { t } = useTranslation('models');
  const { data, loading, refetch } = useQuery(PaginateCompanyRolesDocument, {
    fetchPolicy: 'network-only',
  });
  const { paginateCompanyRoles } = data || {};
  const pagination = (paginateCompanyRoles?.pagination || {}) as PaginationFragment;
  const items = paginateCompanyRoles?.items || [];
  return (
    <DataTable
      editRoute={{ path: '/company/role/edit', paramFields: { id: 'id' } }}
      addRoutePath="/company/role/add"
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
          title: t('CompanyRole.id'),
          type: 'string',
        },
        {
          accessor: 'name',
          title: t('CompanyRole.name'),
          type: 'string',
        },
        {
          accessor: 'code',
          title: t('CompanyRole.code'),
          type: 'string',
        },
        {
          accessor: 'permissions',
          title: t('AdminRole.permissions'),
          type: 'array',
          textAlign: 'center',
          width: '120px',
          render(_item) {
            const item: AdminRole = _item as any;
            return <Badge variant="light">{item.permissions?.length || 0} 项</Badge>;
          },
        },
        {
          accessor: 'status',
          title: t('CompanyRole.status'),
          type: 'enum',
          options: [
            { label: t('enum.Status.Enabled'), value: Status.Enabled },
            { label: t('enum.Status.Disabled'), value: Status.Disabled },
          ],
        },
        {
          accessor: 'createdAt',
          title: t('CompanyRole.createdAt'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('CompanyRole.updatedAt'),
          type: 'date',
        },
      ]}
    />
  );
};
