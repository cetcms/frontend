import { Group } from '@mantine/core';
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton } from 'src/components';

export type ActionColumnProps = {
  item: any;
  editRoute?: { path: string; paramFields: Record<string, string> };
  viewRoute?: { path: string; paramFields: Record<string, string> };
  onDelete?: (item: any) => void;
};

export const ActionColumn: React.FC<ActionColumnProps> = ({ item, editRoute, viewRoute, onDelete }) => {
  const { t } = useTranslation();
  const handleSearchQuery = useCallback(
    (item: any, paramFields: Record<string, string>): string => {
      return Object.entries(paramFields)
        .map(([key, value]) => {
          return `${key}=${item[value]}`;
        })
        .join('&');
    },
    [item]
  );
  return (
    <>
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
    </>
  );
};
