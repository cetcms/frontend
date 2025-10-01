import { Card } from '@mantine/core';
import { DataTableProps as MDataTableProps, DataTable as MDataTable } from 'mantine-datatable';
import React from 'react';
import { DataToolbar } from 'src/components/DataTable/DataToolbar';
import { Pagination, PaginationFragment } from 'src/graphql';

import { FieldConfig } from './FilterButton';

export type RequestParams = {
  page: number;
  skip: number;
  take: number;
  where: any;
};

export type DataTableProps = MDataTableProps & {
  pagination?: Pagination | PaginationFragment;
  loading?: boolean;
  filterFields?: FieldConfig[];
  onChangeRequest?: (params: RequestParams) => void;
};

export const DataTable: React.FC<DataTableProps> = ({
  pagination,
  loading,
  filterFields,
  onChangeRequest,
  ...props
}) => {
  const [where, setWhere] = React.useState({});

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

  return (
    <>
      <DataToolbar fields={filterFields} onFilterChange={handleFilterChange} />
      <Card m="xs" withBorder>
        <MDataTable {...props} />
      </Card>
    </>
  );
};
