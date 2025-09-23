/**
 * 网格布局数据展示组件
 * 参考DataTable组件接口设计
 * @author AI Assistant
 */
import { SimpleGrid, Card, Text, Box, ScrollArea, Stack, Group } from '@mantine/core';
import { DataTableColumn } from 'mantine-datatable';
import React from 'react';

// 网格数据组件属性接口
export interface GridDataProps<T = any> {
  /** 数据记录数组 */
  data: T[];
  /** 列配置，用于确定显示哪些字段 */
  columns: DataTableColumn<T>[];
  /** 自定义渲染函数 */
  renderItem?: (item: T, index: number) => React.ReactNode;
  /** 容器高度 */
  height?: number | string;
  /** 网格列数配置 */
  cols?: { base?: number; xs?: number; sm?: number; md?: number; lg?: number; xl?: number };
  /** 卡片间距 */
  spacing?: string | number;
  /** 是否显示边框 */
  withBorder?: boolean;
  /** 是否显示阴影 */
  withShadow?: boolean;
  /** 卡片点击事件 */
  onItemClick?: (item: T, index: number) => void;
}

/**
 * 网格布局数据展示组件
 * 以卡片形式展示数据，支持自定义渲染和响应式布局
 */
export const GridData = <T extends Record<string, any> = any>({
  data,
  columns,
  renderItem,
  height = 600,
  cols = { base: 1, xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
  spacing = 'md',
  withBorder = true,
  withShadow = true,
  onItemClick,
}: GridDataProps<T>) => {
  /**
   * 获取字段值
   * 支持点号分隔的嵌套对象访问
   */
  const getFieldValue = (record: T, accessor: string): any => {
    return accessor.split('.').reduce((obj, key) => obj?.[key], record);
  };

  /**
   * 渲染默认卡片内容
   */
  const renderDefaultCard = (item: T, index: number) => {
    // 过滤掉隐藏的列
    const visibleColumns = columns.filter((col) => !col.hidden);

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
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
          }
        }}
        onMouseLeave={(e) => {
          if (onItemClick) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = withShadow ? '0 1px 3px rgba(0, 0, 0, 0.1)' : 'none';
          }
        }}
      >
        <Stack gap="xs">
          {visibleColumns.map((column, colIndex) => {
            const value = getFieldValue(item, column.accessor as string);
            const displayValue = column.render ? column.render(item, index) : value;

            // 跳过空值
            if (displayValue === null || displayValue === undefined || displayValue === '') {
              return null;
            }

            return (
              <Group key={colIndex} justify="space-between" wrap="nowrap">
                <Text size="sm" c="dimmed" fw={500} style={{ minWidth: 80, flexShrink: 0 }}>
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
      </Card>
    );
  };

  return (
    <ScrollArea h={height}>
      <SimpleGrid cols={cols} spacing={spacing}>
        {data.map((item, index) => {
          return renderItem ? renderItem(item, index) : renderDefaultCard(item, index);
        })}
      </SimpleGrid>
    </ScrollArea>
  );
};

export default GridData;
