import { useMutation } from '@apollo/client/react';
import { Button } from '@mantine/core';
import { IconChartArcs } from '@tabler/icons-react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PermissionAlias, PushAllPagesToAnalyzeDocument } from 'src/graphql';
import { useAuthStore } from 'src/store';

export interface PushAllPagesToAnalyzeProps {
  websiteId: string;
}

export const PushAllPagesToAnalyze: FC<PushAllPagesToAnalyzeProps> = ({ websiteId }) => {
  const { t } = useTranslation(['pages', 'common']);
  const [pushAllPagesToAnalyze] = useMutation(PushAllPagesToAnalyzeDocument);

  const handleClick = async () => {
    await pushAllPagesToAnalyze({
      variables: {
        id: websiteId,
      },
    });
  };

  // 权限检查
  const { checkPermission } = useAuthStore();
  if (!checkPermission(PermissionAlias.PushAllPagesToAnalyze)) {
    return null;
  }
  return (
    <>
      <Button leftSection={<IconChartArcs size={16} />} onClick={handleClick}>
        {t('pages:push_all_analyze')}
      </Button>
    </>
  );
};
