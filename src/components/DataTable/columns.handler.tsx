import { ActionIcon, Box, Group, Text, Tooltip } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconClock, IconHash } from '@tabler/icons-react';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { DataTableProps, Status } from 'src/components';

export const columnsHandler = (columns: DataTableProps['columns']) => {
  const { t } = useTranslation();
  return columns.map((column) => {
    if (column.type && column.type === 'date') {
      column.width = 130;
      column.textAlign = 'center';
      column.render = (item: any) => (
        <Group gap={10} ta="left">
          <IconClock size={14} />
          <Box w="calc(100% - 30px)">
            <Text size="xs" fz={10} style={{ whiteSpace: 'pre-line' }}>
              {dayjs(item[column.accessor]).format(t('YYYY-MM-DD HH:mm:ss'))}
            </Text>
          </Box>
        </Group>
      );
    }

    if (column.accessor === 'status') {
      column.render = (item: any) => <Status status={item.status} />;
    }

    const [_, copyToClipboard] = useCopyToClipboard();
    const handleCopyToClipboard = (value: string) => {
      copyToClipboard(value);
      notifications.show({
        title: t('ID 复制成功'),
        message: '',
      });
    };
    if (column.accessor === 'id') {
      column.width = 40;
      column.render = (item: any) => (
        <Tooltip label={item.id} position="right" withArrow>
          <ActionIcon mt={4} size="xs" variant="default" onClick={() => handleCopyToClipboard(item.id)}>
            <IconHash size={13} />
          </ActionIcon>
        </Tooltip>
      );
    }
    return column;
  });
};
