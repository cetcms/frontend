import { useMutation } from '@apollo/client/react';
import { Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconChartArcs } from '@tabler/icons-react';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PermissionAlias, PushAllPagesToAnalyzeDocument } from 'src/graphql';
import { useAuthStore } from 'src/store';

export interface PushAllPagesToAnalyzeProps {
  websiteId: string;
  hasAnalyzingPages: boolean; // 从父组件接收计算好的状态
}

export const PushAllPagesToAnalyze: FC<PushAllPagesToAnalyzeProps> = ({ websiteId, hasAnalyzingPages }) => {
  const { t } = useTranslation(['pages', 'common']);
  const [pushAllPagesToAnalyze, { loading }] = useMutation(PushAllPagesToAnalyzeDocument);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const handleClick = async () => {
    if (hasAnalyzingPages) {
      notifications.show({
        color: 'yellow',
        title: t('common:warning'),
        message: t('pages:push_all_analyze_in_progress'),
      });
      return;
    }

    try {
      setDisabledButton(true);
      await pushAllPagesToAnalyze({
        variables: {
          id: websiteId,
        },
      });
      notifications.show({
        color: 'green',
        title: t('pages:success_notification'),
        message: t('pages:push_all_analyze_success'),
      });
    } catch (error) {
      notifications.show({
        color: 'red',
        title: t('common:error'),
        message: String(error),
      });
    }

    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  // 权限检查
  const { checkPermission } = useAuthStore();
  if (!checkPermission(PermissionAlias.PushAllPagesToAnalyze)) {
    return null;
  }

  // 按钮禁用条件: 正在加载中 或 有页面正在分析 或 刚推送过还未开始分析
  const isDisabled = loading || hasAnalyzingPages || disabledButton;

  return (
    <>
      <Button leftSection={<IconChartArcs size={16} />} onClick={handleClick} loading={loading} disabled={isDisabled}>
        {t('pages:push_all_analyze')}
      </Button>
    </>
  );
};
