import { useQuery } from '@apollo/client/react';
import { LoadingOverlay } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router';
import { DataTable } from 'src/components';
import { ListWebsiteSeoPageDocument, PermissionAlias } from 'src/graphql';
import { PagePermissionOption } from 'src/store';

const PAGE_SIZE = 13;

export const WebsitePagesPage: React.FC & PagePermissionOption = () => {
  const { t } = useTranslation(['models', 'pages', 'common']);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [page, setPage] = useState(1);
  const [records, setRecords] = useState<any[]>([]);

  // 列表数据获取
  const { data, loading } = useQuery(ListWebsiteSeoPageDocument, {
    variables: { id: id || '' },
    skip: !id,
    fetchPolicy: 'network-only',
  });
  const items = data?.listWebsiteSeoPage || [];

  // 非远程分页处理
  useEffect(() => {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE;
    setRecords(items.slice(from, to));
  }, [page, items]);

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
      totalRecords={items.length}
      recordsPerPage={PAGE_SIZE}
      page={page}
      onPageChange={(p) => setPage(p)}
      onChangeRequest={(params) => {
        console.log('params', params);
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
