import { useMutation } from '@apollo/client/react';
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconChartArcs } from '@tabler/icons-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ListWebsiteSeoPageQuery, PermissionAlias, PushPagesToUpdateDocument } from 'src/graphql';
import { useAuthStore } from 'src/store';

type WebsiteSeoPage = ListWebsiteSeoPageQuery['listWebsiteSeoPage'][number];

export interface PushPagesToUpdateProps {
  websiteId: string;
  selectedRecords: WebsiteSeoPage[];
}

export const PushPagesToUpdate: FC<PushPagesToUpdateProps> = ({ websiteId, selectedRecords }) => {
  const { t } = useTranslation(['pages', 'common']);
  const [pushPagesToUpdate, { loading }] = useMutation(PushPagesToUpdateDocument);

  const handleClick = async () => {
    try {
      await pushPagesToUpdate({
        variables: {
          id: websiteId,
          urls: selectedRecords.map((record) => record.url),
        },
      });
      notifications.show({
        color: 'green',
        title: t('pages:success_notification'),
        message: t('pages:push_pages_update_success'),
      });
    } catch (error) {
      // 如果推送失败,解除推送状态
      notifications.show({
        color: 'red',
        title: t('common:error'),
        message: String(error),
      });
    }
  };

  // 权限检查
  const { checkPermission } = useAuthStore();
  if (!checkPermission(PermissionAlias.PushPagesToUpdate)) {
    return null;
  }

  return (
    <>
      <Button
        disabled={selectedRecords.length === 0}
        leftSection={<IconChartArcs size={16} />}
        onClick={handleClick}
        loading={loading}
      >
        {t('pages:push_selected_update_seo', {
          count: selectedRecords.length,
        })}
      </Button>
    </>
  );
};
