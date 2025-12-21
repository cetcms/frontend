import { useQuery } from '@apollo/client/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { DataTable } from 'src/components';
import { PaginateWebsitesDocument, PaginationFragment, PermissionAlias, WebsiteCms } from 'src/graphql';
import { PagePermissionOption, useAuthStore } from 'src/store';

export const WebsitePage: React.FC & PagePermissionOption = () => {
  const { t } = useTranslation('common');

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
          title: 'ID',
          type: 'string',
        },
        {
          accessor: 'title',
          title: '网站标题',
          type: 'string',
        },
        {
          accessor: 'cms',
          title: 'CMS类型',
          type: 'enum',
          options: [
            { label: 'WordPress', value: WebsiteCms.WordPress },
            { label: 'Strapi', value: WebsiteCms.Strapi },
            { label: 'Directus', value: WebsiteCms.Directus },
          ],
        },
        {
          accessor: 'cmsApiUrl',
          title: 'API地址',
          type: 'string',
        },
        {
          accessor: 'description',
          title: '描述',
          type: 'string',
        },
        {
          accessor: 'createdAt',
          title: t('创建时间'),
          type: 'date',
        },
        {
          accessor: 'updatedAt',
          title: t('更新时间'),
          type: 'date',
        },
      ]}
    />
  );
};

WebsitePage.permissions = PermissionAlias.PaginateWebsites;
