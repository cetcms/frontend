/**
 * 通用分页数据处理组件
 * 支持多种布局模式（Grid、List、DataTable）、分页、筛选搜索等功能
 * @author AI Assistant
 */
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  Loader,
  Pagination,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { IconFilter, IconGrid3x3, IconList, IconRefresh, IconSearch, IconTable, IconX } from '@tabler/icons-react';
import { DataTable, DataTableColumn } from 'mantine-datatable';
import React, { useCallback, useEffect, useState } from 'react';

import { GridData, ListData } from './includes';

// 布局模式类型
export type LayoutMode = 'grid' | 'list' | 'datatable';

// 排序配置
export interface SortConfig {
  field: string;
  direction: 'asc' | 'desc';
}

// 筛选配置
export interface FilterConfig {
  field: string;
  value: any;
  operator?: 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'startsWith' | 'endsWith';
}

// 搜索配置
export interface SearchConfig {
  query: string;
  fields: string[]; // 搜索的字段
}

// 分页配置
export interface PaginationConfig {
  page: number;
  pageSize: number;
  total: number;
}

// 数据获取方法的参数
export interface DataFetchParams {
  pagination?: PaginationConfig;
  sort?: SortConfig;
  filters?: FilterConfig[];
  search?: SearchConfig;
}

// 数据获取方法的返回值
export interface DataFetchResult<T = any> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

// 筛选字段配置
export interface FilterFieldConfig {
  field: string;
  label: string;
  type: 'text' | 'select' | 'date' | 'number';
  options?: { label: string; value: any }[]; // 用于select类型
  placeholder?: string;
}

// 组件属性接口
export interface DataSectionProps<T = any> {
  // 基础配置
  title?: string;

  // 数据获取方法
  fetchData: (params: DataFetchParams) => Promise<DataFetchResult<T>>;

  // 布局配置
  defaultLayout?: LayoutMode;
  enabledLayouts?: LayoutMode[];

  // 分页配置
  enablePagination?: boolean;
  defaultPageSize?: number;
  pageSizeOptions?: number[];

  // 搜索配置
  enableSearch?: boolean;
  searchFields?: string[];
  searchPlaceholder?: string;

  // 筛选配置
  enableFilter?: boolean;
  filterFields?: FilterFieldConfig[];

  // 排序配置
  enableSort?: boolean;
  defaultSort?: SortConfig;

  // DataTable配置
  columns: DataTableColumn<T>[];

  // Grid和List布局的渲染函数
  renderGridItem?: (item: T, index: number) => React.ReactNode;
  renderListItem?: (item: T, index: number) => React.ReactNode;

  // 样式配置
  height?: number | string;

  // 其他配置
  loading?: boolean;
  error?: string;
  emptyText?: string;
}

/**
 * 通用分页数据处理组件
 * 支持多种布局模式、分页、筛选搜索等功能
 */
export function DataSection<T extends Record<string, any> = any>({
  title,
  fetchData,
  defaultLayout = 'datatable',
  enabledLayouts = ['grid', 'list', 'datatable'],
  enablePagination = true,
  defaultPageSize = 10,
  pageSizeOptions = [10, 20, 50, 100],
  enableSearch = true,
  searchFields = [],
  searchPlaceholder = '搜索...',
  enableFilter = true,
  filterFields = [],
  // enableSort = true,
  defaultSort,
  columns,
  renderGridItem,
  renderListItem,
  height = 600,
  loading: externalLoading = false,
  error: externalError,
  emptyText = '暂无数据',
}: DataSectionProps<T>) {
  // 状态管理
  const [layout, setLayout] = useState<LayoutMode>(defaultLayout);
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 分页状态
  const [pagination, setPagination] = useState<PaginationConfig>({
    page: 1,
    pageSize: defaultPageSize,
    total: 0,
  });

  // 搜索状态
  const [searchQuery, setSearchQuery] = useState('');

  // 筛选状态
  const [filters, setFilters] = useState<FilterConfig[]>([]);

  // 排序状态
  const [sort, _setSort] = useState<SortConfig | undefined>(defaultSort);

  // 显示筛选面板
  const [showFilters, setShowFilters] = useState(false);

  /**
   * 加载数据
   */
  const loadData = useCallback(async () => {
    if (externalLoading) return;

    setLoading(true);
    setError(null);

    try {
      const params: DataFetchParams = {
        pagination: enablePagination ? pagination : undefined,
        sort,
        filters: filters.length > 0 ? filters : undefined,
        search:
          searchQuery && searchFields.length > 0
            ? {
                query: searchQuery,
                fields: searchFields,
              }
            : undefined,
      };

      const result = await fetchData(params);

      setData(result.data);
      if (enablePagination) {
        setPagination((prev) => ({
          ...prev,
          total: result.total,
          page: result.page,
          pageSize: result.pageSize,
        }));
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '数据加载失败');
    } finally {
      setLoading(false);
    }
  }, [
    fetchData,
    pagination.page,
    pagination.pageSize,
    sort,
    filters,
    searchQuery,
    searchFields,
    enablePagination,
    externalLoading,
  ]);

  // 初始加载和依赖变化时重新加载
  useEffect(() => {
    loadData();
  }, [loadData]);

  /**
   * 处理分页变化
   */
  const handlePageChange = useCallback((page: number) => {
    setPagination((prev) => ({ ...prev, page }));
  }, []);

  /**
   * 处理页面大小变化
   */
  const handlePageSizeChange = useCallback((pageSize: string) => {
    setPagination((prev) => ({ ...prev, page: 1, pageSize: parseInt(pageSize, 10) }));
  }, []);

  /**
   * 处理搜索
   */
  const handleSearch = useCallback(
    (query: string) => {
      setSearchQuery(query);
      if (enablePagination) {
        setPagination((prev) => ({ ...prev, page: 1 }));
      }
    },
    [enablePagination]
  );

  /**
   * 处理筛选变化
   */
  const handleFilterChange = useCallback(
    (field: string, value: any, operator: FilterConfig['operator'] = 'eq') => {
      setFilters((prev) => {
        const newFilters = prev.filter((f) => f.field !== field);
        if (value !== null && value !== undefined && value !== '') {
          newFilters.push({ field, value, operator });
        }
        return newFilters;
      });
      if (enablePagination) {
        setPagination((prev) => ({ ...prev, page: 1 }));
      }
    },
    [enablePagination]
  );

  /**
   * 清除所有筛选
   */
  const handleClearFilters = useCallback(() => {
    setFilters([]);
    setSearchQuery('');
    if (enablePagination) {
      setPagination((prev) => ({ ...prev, page: 1 }));
    }
  }, [enablePagination]);

  /**
   * 刷新数据
   */
  const handleRefresh = useCallback(() => {
    loadData();
  }, [loadData]);

  // 计算是否显示分页
  const showPagination = enablePagination && pagination.total > pagination.pageSize;

  // 计算总页数
  const totalPages = Math.ceil(pagination.total / pagination.pageSize);

  // 渲染布局切换按钮
  const renderLayoutSwitcher = () => {
    if (enabledLayouts.length <= 1) return null;

    return (
      <Group gap="xs">
        {enabledLayouts.includes('grid') && (
          <ActionIcon
            variant={layout === 'grid' ? 'filled' : 'subtle'}
            onClick={() => setLayout('grid')}
            title="网格布局"
          >
            <IconGrid3x3 size={16} />
          </ActionIcon>
        )}
        {enabledLayouts.includes('list') && (
          <ActionIcon
            variant={layout === 'list' ? 'filled' : 'subtle'}
            onClick={() => setLayout('list')}
            title="列表布局"
          >
            <IconList size={16} />
          </ActionIcon>
        )}
        {enabledLayouts.includes('datatable') && (
          <ActionIcon
            variant={layout === 'datatable' ? 'filled' : 'subtle'}
            onClick={() => setLayout('datatable')}
            title="表格布局"
          >
            <IconTable size={16} />
          </ActionIcon>
        )}
      </Group>
    );
  };

  // 渲染搜索框
  const renderSearchBox = () => {
    if (!enableSearch || searchFields.length === 0) return null;

    return (
      <TextInput
        placeholder={searchPlaceholder}
        value={searchQuery}
        onChange={(e) => handleSearch(e.target.value)}
        leftSection={<IconSearch size={16} />}
        style={{ minWidth: 200 }}
      />
    );
  };

  // 渲染筛选器
  const renderFilters = () => {
    if (!enableFilter || filterFields.length === 0) return null;

    return (
      <>
        <ActionIcon
          variant={showFilters ? 'filled' : 'subtle'}
          onClick={() => setShowFilters(!showFilters)}
          title="筛选"
        >
          <IconFilter size={16} />
        </ActionIcon>

        {showFilters && (
          <Paper p="md" mt="md" withBorder>
            <Group justify="space-between" mb="md">
              <Text fw={500}>筛选条件</Text>
              <Group gap="xs">
                <Button variant="subtle" size="xs" onClick={handleClearFilters} leftSection={<IconX size={14} />}>
                  清除筛选
                </Button>
              </Group>
            </Group>

            <Group gap="md">
              {filterFields.map((field) => {
                const currentFilter = filters.find((f) => f.field === field.field);

                if (field.type === 'select') {
                  return (
                    <Select
                      key={field.field}
                      label={field.label}
                      placeholder={field.placeholder || `选择${field.label}`}
                      data={field.options || []}
                      value={currentFilter?.value || null}
                      onChange={(value) => handleFilterChange(field.field, value)}
                      clearable
                      style={{ minWidth: 150 }}
                    />
                  );
                }

                return (
                  <TextInput
                    key={field.field}
                    label={field.label}
                    placeholder={field.placeholder || `输入${field.label}`}
                    value={currentFilter?.value || ''}
                    onChange={(e) => handleFilterChange(field.field, e.target.value, 'contains')}
                    style={{ minWidth: 150 }}
                  />
                );
              })}
            </Group>
          </Paper>
        )}
      </>
    );
  };

  // 渲染工具栏
  const renderToolbar = () => {
    return (
      <Group justify="space-between" mb="md">
        <Group>
          {title && (
            <Text size="lg" fw={600}>
              {title}
            </Text>
          )}
        </Group>

        <Group gap="md">
          {renderSearchBox()}
          {renderFilters()}

          <ActionIcon variant="subtle" onClick={handleRefresh} title="刷新" loading={loading || externalLoading}>
            <IconRefresh size={16} />
          </ActionIcon>

          {renderLayoutSwitcher()}
        </Group>
      </Group>
    );
  };

  // 渲染分页组件
  const renderPagination = () => {
    if (!showPagination) return null;

    return (
      <Group justify="space-between" mt="md">
        <Group gap="md">
          <Text size="sm" c="dimmed">
            共 {pagination.total} 条记录
          </Text>

          <Group gap="xs">
            <Text size="sm" c="dimmed">
              每页显示
            </Text>
            <Select
              size="xs"
              value={pagination.pageSize.toString()}
              onChange={(value) => handlePageSizeChange(String(value || '0'))}
              data={pageSizeOptions.map((size) => ({
                label: size.toString(),
                value: size.toString(),
              }))}
              style={{ width: 80 }}
            />
            <Text size="sm" c="dimmed">
              条
            </Text>
          </Group>
        </Group>

        <Pagination total={totalPages} value={pagination.page} onChange={handlePageChange} size="sm" />
      </Group>
    );
  };

  // 渲染内容区域
  const renderContent = () => {
    const isLoading = loading || externalLoading;
    const currentError = error || externalError;

    if (isLoading) {
      return (
        <Center h={200}>
          <Loader size="lg" />
        </Center>
      );
    }

    if (currentError) {
      return (
        <Center h={200}>
          <Stack align="center" gap="md">
            <Text c="red" size="sm">
              {currentError}
            </Text>
            <Button variant="light" onClick={handleRefresh}>
              重试
            </Button>
          </Stack>
        </Center>
      );
    }

    if (data.length === 0) {
      return (
        <Center h={200}>
          <Text c="dimmed">{emptyText}</Text>
        </Center>
      );
    }

    switch (layout) {
      case 'grid':
        return <GridData data={data} columns={columns} renderItem={renderGridItem} height={height} />;

      case 'list':
        return <ListData data={data} columns={columns} renderItem={renderListItem} height={height} />;

      case 'datatable':
      default:
        return <DataTable records={data} columns={columns} height={height} fetching={isLoading} />;
    }
  };

  return (
    <Box>
      {renderToolbar()}
      {showFilters && filterFields.length > 0 && <Box mb="md">{/* 筛选面板已在renderFilters中渲染 */}</Box>}
      {renderContent()}
      {renderPagination()}
    </Box>
  );
}

export default DataSection;
