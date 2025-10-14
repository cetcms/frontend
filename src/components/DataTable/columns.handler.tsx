import { ActionIcon, Badge, Group, Text, Tooltip, Image, HoverCard } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconClock, IconHash } from '@tabler/icons-react';
import { useCopyToClipboard } from '@uidotdev/usehooks';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import { DataTableProps } from 'src/components';

export const columnsHandler = (columns: DataTableProps['columns']) => {
  return columns.map((column) => {
    if (column.type && column.type === 'date') {
      column.width = 150;
      column.textAlign = 'center';
      column.render = (item: any) => {
        const { t } = useTranslation();
        return (
          <Group justify="center" gap={0}>
            <Group gap={10} ta="left">
              <IconClock size={14} />
              <Text size="xs" fz={10} style={{ whiteSpace: 'pre-line' }}>
                {dayjs(item[column.accessor]).format(t('YYYY-MM-DD HH:mm:ss'))}
              </Text>
            </Group>
          </Group>
        );
      };
      return column;
    }

    if (column.type === 'image') {
      column.width = 100;
      column.textAlign = 'center';
      column.render = (item: any) => (
        <HoverCard
          width={300}
          position="left"
          withArrow
          shadow="md"
          openDelay={100}
          closeDelay={100}
          disabled={!item[column.accessor]}
        >
          <HoverCard.Target>
            <Image
              src={item[column.accessor]}
              radius="xs"
              fit="contain"
              width={30}
              height={30}
              fallbackSrc="/images/no-image.svg"
            />
          </HoverCard.Target>
          <HoverCard.Dropdown p="xs">
            <Image src={item[column.accessor]} radius="sm" fit="contain" width={300} height={300} />
          </HoverCard.Dropdown>
        </HoverCard>
      );
    }

    if (column.type === 'enum') {
      column.width = 150;
      column.textAlign = 'center';
      column.render = (item: any) => {
        const option = column.options?.find((option: any) => option.value === item[column.accessor]);
        return (
          <Badge color={option?.color} variant="light">
            {option?.label}
          </Badge>
        );
      };
      return column;
    }

    if (column.accessor === 'id') {
      column.width = 40;
      column.render = (item: any) => {
        const { t } = useTranslation();
        const [_, copyToClipboard] = useCopyToClipboard();
        const handleCopyToClipboard = (value: string) => {
          copyToClipboard(value);
          notifications.show({
            title: t('ID 复制成功'),
            message: '',
          });
        };
        return (
          <Tooltip label={item.id} position="right" withArrow>
            <ActionIcon mt={4} size="xs" variant="default" onClick={() => handleCopyToClipboard(item.id)}>
              <IconHash size={13} />
            </ActionIcon>
          </Tooltip>
        );
      };
      return column;
    }

    return column;
  });
};
