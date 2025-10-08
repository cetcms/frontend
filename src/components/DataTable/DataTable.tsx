import { Card } from '@mantine/core';
import { DataTableProps as MDataTableProps, DataTable as MDataTable, DataTableColumn } from 'mantine-datatable';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pagination, PaginationFragment } from 'src/graphql';

import { ActionColumn, ActionColumnProps } from './ActionColumn';
import { columnsHandler } from './columns.handler';
import { DataToolbar } from './DataToolbar';
import { FieldConfig } from './FilterButton';

export type RequestParams = {
  page: number;
  skip: number;
  take: number;
  where: any;
};

export type DataTableProps = {
  pagination?: Pagination | PaginationFragment;
  loading?: boolean;
  addRoutePath?: string;
  editRoute?: ActionColumnProps['editRoute'];
  viewRoute?: ActionColumnProps['viewRoute'];
  onChangeRequest?: (params: RequestParams) => void;
  onDeleteItem?: (item: any) => any;
  columns: Array<
    DataTableColumn & {
      type?: FieldConfig['type'];
      options?: FieldConfig['options'];
    }
  >;
} & MDataTableProps;

export const DataTable: React.FC<DataTableProps> = ({
  pagination,
  loading,
  editRoute,
  viewRoute,
  addRoutePath,
  onDeleteItem,
  onChangeRequest,
  ...props
}) => {
  const { t } = useTranslation();
  const [where, setWhere] = useState({});
  props.highlightOnHover = true;
  props.verticalSpacing = 'xs';
  props.verticalAlign = 'center';
  props.fz = 'xs';
  props.minHeight = 300;
  props.styles = {
    ...props.styles,
    table: {
      ...props.styles?.table,
      backgroundColor: 'transparent',
    },
    root: {
      ...props.styles?.root,
      backgroundColor: 'transparent',
    },
  };

  props.defaultColumnProps = {
    ...props.defaultColumnProps,
    noWrap: true,
    ellipsis: true,
  };

  if (pagination && pagination.totalCount > pagination.take) {
    props.page = pagination?.page || 1;
    props.recordsPerPage = pagination?.take || 10;
    props.totalRecords = pagination?.totalCount || 0;
    props.onPageChange = (page) => {
      if (onChangeRequest) {
        const take = props.recordsPerPage || 10;
        onChangeRequest({
          page,
          take,
          skip: (page - 1) * take,
          where,
        });
      }
    };
  }

  const handleFilterChange = (filter: any) => {
    setWhere(filter);
    if (onChangeRequest) {
      const page = props.page || pagination?.page || 1;
      const take = props.recordsPerPage || pagination?.take || 10;
      onChangeRequest({
        page,
        take,
        skip: (page - 1) * take,
        where: filter,
      });
    }
  };

  const [columns, setColumns] = useState(props.columns);
  const onChangeColumns = (columns: DataTableColumn[]) => {
    const access = columns.map((column) => column.accessor);
    setColumns(props.columns.filter((c) => access.includes(c.accessor)));
  };

  const expandColumns: DataTableColumn[] = [];
  if (editRoute || viewRoute) {
    expandColumns.push({
      accessor: 'actions',
      title: t('actions'),
      textAlign: 'right',
      width: 200,
      render: (item: any) => <ActionColumn item={item} viewRoute={viewRoute} editRoute={editRoute} />,
    });
  }

  const filterFields = props.columns.reduce((res: FieldConfig[], col) => {
    if (col.type) {
      res.push({
        title: String(col.title),
        accessor: col.accessor,
        type: col.type,
      });
    }
    return res;
  }, []);
  return (
    <>
      <DataToolbar
        addRoutePath={addRoutePath}
        fields={filterFields}
        onFilterChange={handleFilterChange}
        onChangeColumns={onChangeColumns}
        columns={props.columns}
      />
      <Card m="md" withBorder>
        <MDataTable {...props} columns={[...columnsHandler(columns), ...expandColumns]} />
      </Card>
    </>
  );
};
