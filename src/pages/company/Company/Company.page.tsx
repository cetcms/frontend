import { useQuery } from '@apollo/client/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { PaginateCompaniesDocument, PaginationFragment, Status } from 'src/graphql';

export const CompanyPage = () => {
  const { t } = useTranslation('models');
  const { data, loading, refetch } = useQuery(PaginateCompaniesDocument, {
    fetchPolicy: 'network-only',
  });
  const { paginateCompanies } = data || {};
  const pagination = (paginateCompanies?.pagination || {}) as PaginationFragment;
  const items = paginateCompanies?.items || [];
  return (
    <DataTable
      editRoute={{ path: '/company/edit', paramFields: { id: 'id' } }}
      addRoutePath="/company/add"
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
          title: t('Company.id'),
          type: 'string',
        },
        {
          accessor: 'name',
          title: t('Company.name'),
          type: 'string',
        },
        {
          accessor: 'alias',
          title: t('Company.alias'),
          type: 'string',
        },
        {
          accessor: 'code',
          title: t('Company.code'),
          type: 'string',
        },
        {
          accessor: 'description',
          title: t('Company.description'),
          type: 'string',
        },
        {
          accessor: 'status',
          title: t('Company.status'),
          type: 'enum',
          options: [
            { label: t('enum.Status.Enabled'), value: Status.Enabled },
            { label: t('enum.Status.Disabled'), value: Status.Disabled },
          ],
        },
        {
          accessor: 'createdAt',
          title: t('Company.createdAt'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('Company.updatedAt'),
          type: 'date',
        },
      ]}
    />
  );
};
