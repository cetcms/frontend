import { useQuery } from '@apollo/client/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { PaginateWebsitesDocument, PaginationFragment, PermissionAlias, WebsiteCms } from 'src/graphql';
import { PagePermissionOption, useAuthStore } from 'src/store';

export const WebsitePage: React.FC & PagePermissionOption = () => {
  const { t } = useTranslation(['models', 'pages']);

  // 列表数据获取
  const { data, loading, refetch } = useQuery(PaginateWebsitesDocument, {
    fetchPolicy: 'network-only',
  });
  const { paginateWebsites } = data || {};
  const pagination = (paginateWebsites?.pagination || {}) as PaginationFragment;
  const items = paginateWebsites?.items || [];

  // 权限检查
  const { checkPermission } = useAuthStore();
  const hasCreate = checkPermission(PermissionAlias.CreateOneWebsite);
  const hasEdit = checkPermission(PermissionAlias.UpdateOneWebsite);

  return (
    <DataTable
      editRoute={hasEdit ? { path: '/project/website/edit', paramFields: { id: 'id' } } : undefined}
      addRoutePath={hasCreate ? '/project/website/add' : undefined}
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
          title: t('Website.id'),
          type: 'string',
        },
        {
          accessor: 'title',
          title: t('Website.title'),
          type: 'string',
        },
        {
          accessor: 'cms',
          title: t('Website.cms'),
          type: 'enum',
          options: [
            { label: 'WordPress', value: WebsiteCms.WordPress },
            { label: 'Strapi', value: WebsiteCms.Strapi },
            { label: 'Directus', value: WebsiteCms.Directus },
          ],
        },
        {
          accessor: 'cmsApiUrl',
          title: t('Website.cmsApiUrl'),
          type: 'string',
        },
        {
          accessor: 'description',
          title: t('Website.description'),
          type: 'string',
        },
        {
          accessor: 'createdAt',
          title: t('Website.createdAt'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('Website.updatedAt'),
          type: 'date',
        },
      ]}
    />
  );
};

WebsitePage.permissions = PermissionAlias.PaginateWebsites;
