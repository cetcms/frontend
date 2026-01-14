import { useMutation } from '@apollo/client/react';
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconChartArcs } from '@tabler/icons-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PermissionAlias, PushPagesToAnalyzeDocument, WebsiteSeoPage } from 'src/graphql';
import { useAuthStore } from 'src/store';

export interface PushPagesToAnalyzeProps {
  websiteId: string;
  selectedRecords: WebsiteSeoPage[];
}

export const PushPagesToAnalyze: FC<PushPagesToAnalyzeProps> = ({ websiteId, selectedRecords }) => {
  const { t } = useTranslation(['pages', 'common']);
  const [pushPagesToAnalyze, { loading }] = useMutation(PushPagesToAnalyzeDocument);

  const handleClick = async () => {
    try {
      await pushPagesToAnalyze({
        variables: {
          id: websiteId,
          urls: selectedRecords.map((record) => record.url),
        },
      });
      notifications.show({
        color: 'green',
        title: t('pages:success_notification'),
        message: t('pages:push_pages_analyze_success'),
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
  if (!checkPermission(PermissionAlias.PushPagesToAnalyze)) {
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
        {t('pages:push_selected_analyze', {
          count: selectedRecords.length,
        })}
      </Button>
    </>
  );
};
