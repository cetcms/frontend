import { Group } from '@mantine/core';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import { DataTableColumn } from 'mantine-datatable';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton } from 'src/components';

export type ActionsColumnOptions = {
  editRoute?: { path: string; paramFields: Record<string, string> };
  viewRoute?: { path: string; paramFields: Record<string, string> };
  onDelete?: (item: any) => void;
};

const handleSearchQuery = (item: any, paramFields: Record<string, string>): string => {
  return Object.entries(paramFields)
    .map(([key, value]) => {
      return `${key}=${item[value]}`;
    })
    .join('&');
};

export const actionsColumn = ({ editRoute, viewRoute, onDelete }: ActionsColumnOptions) => {
  const { t } = useTranslation();
  if (!editRoute && !viewRoute && !onDelete) {
    return null;
  }
  const result: DataTableColumn = {
    accessor: 'actions',
    title: t('actions'),
    textAlign: 'center',
    width: 200,
    render: (item: any) => {
      return (
        <Group gap="xs" justify="center">
          {editRoute && (
            <IconButton
              icon={IconEdit}
              tooltip={t('edit')}
              to={{ pathname: editRoute.path, search: handleSearchQuery(item, editRoute.paramFields) }}
            />
          )}
          {viewRoute && (
            <IconButton
              icon={IconEye}
              tooltip={t('view')}
              to={{ pathname: viewRoute.path, search: handleSearchQuery(item, viewRoute.paramFields) }}
            />
          )}
          {onDelete && <IconButton icon={IconTrash} tooltip={t('delete')} />}
        </Group>
      );
    },
  };
  return result;
};
