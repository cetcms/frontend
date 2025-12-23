import { useQuery } from '@apollo/client/react';
import { LoadingOverlay } from '@mantine/core';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router';
import { DataTable } from 'src/components';
import { filterLocalData } from 'src/components/DataFilter/utils';
import { ListWebsiteSeoPageDocument, PermissionAlias } from 'src/graphql';
import { PushAllPagesToAnalyze } from 'src/pages/projects/Website/components';
import { PagePermissionOption, useAuthStore } from 'src/store';

const PAGE_SIZE = 10;

export const WebsitePagesPage: React.FC & PagePermissionOption = () => {
  const { t } = useTranslation(['models', 'pages', 'common']);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [page, setPage] = useState(1);
  const [filterWhere, setFilterWhere] = useState<any>({});

  // 列表数据获取
  const { data, loading } = useQuery(ListWebsiteSeoPageDocument, {
    variables: { id: id || '' },
    skip: !id,
    fetchPolicy: 'network-only',
  });
  const items = data?.listWebsiteSeoPage || [];

  // 应用本地过滤
  const filteredItems = useMemo(() => {
    return filterLocalData(items, filterWhere);
  }, [items, filterWhere]);

  // 计算当前页数据
  const records = useMemo(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    return filteredItems.slice(from, to);
  }, [page, filteredItems]);

  // 权限检查
  const { isAdmin } = useAuthStore();

  if (loading) {
    return <LoadingOverlay visible />;
  }

  if (!id) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <p>
          {t('common:error')}: {t('pages:website_id_required', '网站ID缺失')}
        </p>
      </div>
    );
  }

  return (
    <DataTable
      loading={loading}
      records={records}
      totalRecords={filteredItems.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
      onChangeRequest={(params) => {
        // 应用本地筛选
        if (params.where !== undefined) {
          // 使用 JSON 序列化比较，避免对象引用问题
          const newWhere = JSON.stringify(params.where);
          const oldWhere = JSON.stringify(filterWhere);
          if (newWhere !== oldWhere) {
            setFilterWhere(params.where);
            setPage(1); // 重置到第一页
          }
        }
      }}
      toolbarPrepend={(current) => {
        return (
          <>
            {isAdmin && <PushAllPagesToAnalyze websiteId={id} />}
            {current}
          </>
        );
      }}
      columns={[
        {
          accessor: 'id',
          title: 'ID',
          type: 'number',
        },
        {
          accessor: 'title',
          title: t('pages:website_title', '标题'),
          type: 'string',
        },
        {
          accessor: 'documentTitle',
          title: t('pages:document_title', '文档标题'),
          type: 'string',
        },
        {
          accessor: 'url',
          title: 'URL',
          type: 'string',
        },
        {
          accessor: 'contentType',
          title: t('pages:content_type', '内容类型'),
          type: 'string',
        },
        {
          accessor: 'apiId',
          title: 'API ID',
          type: 'string',
        },
      ]}
    />
  );
};

WebsitePagesPage.permissions = PermissionAlias.ListWebsiteSeoPage;
