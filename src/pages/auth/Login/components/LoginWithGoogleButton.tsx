import { Button } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const LoginWithGoogleButton = () => {
  const { t } = useTranslation(['auth']);
  return (
    <Button radius="xl" leftSection={<IconBrandGoogle />} variant="default">
      {t('button.google_login')}
    </Button>
  );
};
