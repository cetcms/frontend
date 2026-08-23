import { useQuery } from '@apollo/client/react';
import { LoadingOverlay } from '@mantine/core';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router';
import { DataTable } from 'src/components';
import { filterLocalData } from 'src/components/DataFilter/utils';
import { ListWebsiteSeoPageDocument, ListWebsiteSeoPageQuery, PermissionAlias, SeoAnalysisStatus } from 'src/graphql';
import { PagePermissionOption, useAuthStore } from 'src/store';

import { PushAllPagesToAnalyze, PushPagesToAnalyze, PushPagesToUpdate } from './components';

type WebsiteSeoPage = ListWebsiteSeoPageQuery['listWebsiteSeoPage'][number];

const PAGE_SIZE = 10;
const POLLING_INTERVAL = 5000; // 5秒轮询一次

export const WebsitePagesPage: React.FC & PagePermissionOption = () => {
  const { t } = useTranslation(['models', 'pages', 'common']);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [page, setPage] = useState(1);
  const [filterWhere, setFilterWhere] = useState<any>({});
  const [selectedRecords, setSelectedRecords] = useState<WebsiteSeoPage[]>([]);

  // 列表数据获取
  const { data, loading, startPolling, stopPolling } = useQuery(ListWebsiteSeoPageDocument, {
    variables: { id: id || '' },
    skip: !id,
    fetchPolicy: 'cache-and-network', // 先使用缓存,然后静默更新
    notifyOnNetworkStatusChange: false, // 网络状态变化时不触发 loading
  });
  const items = data?.listWebsiteSeoPage || [];

  // 判断是否有页面正在分析中
  const hasAnalyzingPages = useMemo(() => {
    return items.some(
      (item) => item.status === SeoAnalysisStatus.Analyzing || item.status === SeoAnalysisStatus.Queued
    );
  }, [items]);

  // 根据分析状态控制轮询
  useEffect(() => {
    if (hasAnalyzingPages) {
      startPolling(POLLING_INTERVAL);
    } else {
      stopPolling();
    }

    // 组件卸载时停止轮询
    return () => {
      stopPolling();
    };
  }, [hasAnalyzingPages, startPolling, stopPolling]);

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
  const { isAdmin, checkPermission } = useAuthStore();
  const hasSelection = checkPermission(PermissionAlias.PushPagesToAnalyze);

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
      selectedRecords={hasSelection ? selectedRecords : undefined}
      onSelectedRecordsChange={
        hasSelection
          ? (records) => {
              setSelectedRecords(records as WebsiteSeoPage[]);
            }
          : undefined
      }
      isRecordSelectable={(record: any) => {
        return ![SeoAnalysisStatus.Analyzing, SeoAnalysisStatus.Queued].includes(record.status);
      }}
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
            {isAdmin && <PushAllPagesToAnalyze websiteId={id} hasAnalyzingPages={hasAnalyzingPages} />}
            {current}
            {isAdmin && hasSelection && <PushPagesToAnalyze websiteId={id} selectedRecords={selectedRecords} />}
            {isAdmin && hasSelection && <PushPagesToUpdate websiteId={id} selectedRecords={selectedRecords} />}
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
          accessor: 'url',
          title: 'URL',
          type: 'string',
        },
        {
          accessor: 'score',
          title: 'Score',
          type: 'number',
        },
        {
          accessor: 'status',
          title: t('pages:status', '状态'),
          type: 'enum',
          options: [
            {
              label: t('pages:status_queued', '排队中'),
              value: SeoAnalysisStatus.Queued,
              color: 'yellow',
            },
            {
              label: t('pages:status_analyzing', '分析中'),
              value: SeoAnalysisStatus.Analyzing,
              color: 'yellow',
            },
            {
              label: t('pages:status_analyzed', '已分析'),
              value: SeoAnalysisStatus.Completed,
              color: 'green',
            },
            {
              label: t('pages:status_failed', '失败'),
              value: SeoAnalysisStatus.Failed,
              color: 'red',
            },
            {
              label: t('pages:status_timeout', '超时'),
              value: SeoAnalysisStatus.Timeout,
              color: 'red',
            },
            {
              label: t('pages:status_none', '未分析'),
              value: SeoAnalysisStatus.None,
              color: 'gray',
            },
          ],
        },
        {
          accessor: 'documentTitle',
          title: t('pages:document_type', '页面分类'),
          type: 'string',
        },
        {
          accessor: 'contentType',
          title: t('pages:data_type', '数据类型'),
          type: 'string',
        },
      ]}
    />
  );
};

WebsitePagesPage.permissions = PermissionAlias.ListWebsiteSeoPage;
