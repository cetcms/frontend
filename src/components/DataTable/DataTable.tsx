import { Card } from '@mantine/core';
import { DataTableProps as MDataTableProps, DataTable as MDataTable } from 'mantine-datatable';
import React from 'react';
import { Pagination, PaginationFragment } from 'src/graphql';

import { DataFilter } from './DataFilter';

export type DataTableProps = MDataTableProps & {
  pagination?: Pagination | PaginationFragment;
  loading?: boolean;
};

export const DataTable: React.FC<DataTableProps> = ({ pagination, loading, ...props }) => {
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
      console.log(page);
    };
  }

  return (
    <>
      <DataFilter
        fields={[
          { name: 'name', label: '姓名', type: 'text' },
          { name: 'email', label: '邮箱', type: 'text' },
          {
            name: 'status',
            label: '状态',
            type: 'select',
            options: [
              { label: '启用', value: 'ACTIVE' },
              { label: '禁用', value: 'INACTIVE' },
            ],
          },
        ]}
        onFilterChange={(filter) => console.log(filter)}
      />
      <Card m="xs" withBorder>
        <MDataTable {...props} />
      </Card>
    </>
  );
};
