/**
 * 垂直列表布局数据展示组件
 * 参考DataTable组件接口设计
 * @author AI Assistant
 */
import { Stack, Card, Text, Box, ScrollArea, Group, Divider, Avatar, Badge } from '@mantine/core';
import { DataTableColumn } from 'mantine-datatable';
import React from 'react';

// 列表数据组件属性接口
export interface ListDataProps<T = any> {
  /** 数据记录数组 */
  data: T[];
  /** 列配置，用于确定显示哪些字段 */
  columns: DataTableColumn<T>[];
  /** 自定义渲染函数 */
  renderItem?: (item: T, index: number) => React.ReactNode;
  /** 容器高度 */
  height?: number | string;
  /** 列表项间距 */
  spacing?: string | number;
  /** 是否显示边框 */
  withBorder?: boolean;
  /** 是否显示阴影 */
  withShadow?: boolean;
  /** 是否显示分割线 */
  withDivider?: boolean;
  /** 列表项点击事件 */
  onItemClick?: (item: T, index: number) => void;
  /** 主要字段（用于突出显示） */
  primaryField?: string;
  /** 次要字段（用于副标题显示） */
  secondaryField?: string;
  /** 头像字段（用于显示头像） */
  avatarField?: string;
  /** 状态字段（用于显示状态徽章） */
  statusField?: string;
}

/**
 * 垂直列表布局数据展示组件
 * 以列表卡片形式展示数据，适合展示详细信息
 */
export function ListData<T extends Record<string, any> = any>({
  data,
  columns,
  renderItem,
  height = 600,
  spacing = 'xs',
  withBorder = true,
  withShadow = false,
  withDivider = true,
  onItemClick,
  primaryField,
  secondaryField,
  avatarField,
  statusField,
}: ListDataProps<T>) {
  /**
   * 获取字段值
   * 支持点号分隔的嵌套对象访问
   */
  const getFieldValue = (record: T, accessor: string): any => {
    return accessor.split('.').reduce((obj, key) => obj?.[key], record);
  };

  /**
   * 获取列配置
   */
  const getColumnByAccessor = (accessor: string) => {
    return columns.find((col) => col.accessor === accessor);
  };

  /**
   * 渲染默认列表项内容
   */
  const renderDefaultListItem = (item: T, index: number) => {
    // 过滤掉隐藏的列
    const visibleColumns = columns.filter((col) => !col.hidden);

    // 获取主要字段和次要字段
    const primaryValue = primaryField ? getFieldValue(item, primaryField) : null;
    const secondaryValue = secondaryField ? getFieldValue(item, secondaryField) : null;
    const avatarValue = avatarField ? getFieldValue(item, avatarField) : null;
    const statusValue = statusField ? getFieldValue(item, statusField) : null;

    // 获取主要字段和次要字段的列配置
    const primaryColumn = primaryField ? getColumnByAccessor(primaryField) : null;
    const secondaryColumn = secondaryField ? getColumnByAccessor(secondaryField) : null;
    const statusColumn = statusField ? getColumnByAccessor(statusField) : null;

    // 过滤掉已经在头部显示的字段
    const detailColumns = visibleColumns.filter(
      (col) =>
        col.accessor !== primaryField &&
        col.accessor !== secondaryField &&
        col.accessor !== avatarField &&
        col.accessor !== statusField
    );

    return (
      <Card
        key={index}
        p="md"
        withBorder={withBorder}
        shadow={withShadow ? 'sm' : undefined}
        style={{
          cursor: onItemClick ? 'pointer' : 'default',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        }}
        onClick={() => onItemClick?.(item, index)}
        onMouseEnter={(e) => {
          if (onItemClick) {
            e.currentTarget.style.transform = 'translateX(4px)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
          }
        }}
        onMouseLeave={(e) => {
          if (onItemClick) {
            e.currentTarget.style.transform = 'translateX(0)';
            e.currentTarget.style.boxShadow = withShadow ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none';
          }
        }}
      >
        <Stack gap="sm">
          {/* 头部信息：头像、主标题、次标题、状态 */}
          {(primaryValue || secondaryValue || avatarValue || statusValue) && (
            <Group justify="space-between" wrap="nowrap">
              <Group gap="md" style={{ flex: 1, minWidth: 0 }}>
                {/* 头像 */}
                {avatarValue && <Avatar src={avatarValue} size="md" radius="sm" />}

                {/* 主标题和次标题 */}
                <Box style={{ flex: 1, minWidth: 0 }}>
                  {primaryValue && (
                    <Text
                      fw={600}
                      size="md"
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {primaryColumn?.render ? primaryColumn.render(item, index) : String(primaryValue)}
                    </Text>
                  )}
                  {secondaryValue && (
                    <Text
                      c="dimmed"
                      size="sm"
                      style={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {secondaryColumn?.render ? secondaryColumn.render(item, index) : String(secondaryValue)}
                    </Text>
                  )}
                </Box>
              </Group>

              {/* 状态徽章 */}
              {statusValue && (
                <Box style={{ flexShrink: 0 }}>
                  {statusColumn?.render ? (
                    statusColumn.render(item, index)
                  ) : (
                    <Badge variant="light" size="sm">
                      {String(statusValue)}
                    </Badge>
                  )}
                </Box>
              )}
            </Group>
          )}

          {/* 分割线 */}
          {withDivider &&
            detailColumns.length > 0 &&
            (primaryValue || secondaryValue || avatarValue || statusValue) && <Divider />}

          {/* 详细信息 */}
          {detailColumns.length > 0 && (
            <Stack gap="xs">
              {detailColumns.map((column, colIndex) => {
                const value = getFieldValue(item, column.accessor as string);
                const displayValue = column.render ? column.render(item, index) : value;

                // 跳过空值
                if (displayValue === null || displayValue === undefined || displayValue === '') {
                  return null;
                }

                return (
                  <Group key={colIndex} justify="space-between" wrap="nowrap">
                    <Text size="sm" c="dimmed" fw={500} style={{ minWidth: 100, flexShrink: 0 }}>
                      {column.title ||
                        String(column.accessor)
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/^./, (str) => str.toUpperCase())}
                    </Text>
                    <Box style={{ flex: 1, textAlign: column.textAlign || 'left' }}>
                      {React.isValidElement(displayValue) ? (
                        displayValue
                      ) : (
                        <Text
                          size="sm"
                          style={{
                            wordBreak: 'break-word',
                            ...(column.ellipsis && {
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                            }),
                            ...(column.noWrap && {
                              whiteSpace: 'nowrap',
                            }),
                          }}
                        >
                          {String(displayValue)}
                        </Text>
                      )}
                    </Box>
                  </Group>
                );
              })}
            </Stack>
          )}
        </Stack>
      </Card>
    );
  };

  return (
    <ScrollArea h={height}>
      <Stack gap={spacing}>
        {data.map((item, index) => {
          return renderItem ? renderItem(item, index) : renderDefaultListItem(item, index);
        })}
      </Stack>
    </ScrollArea>
  );
}

export default ListData;
