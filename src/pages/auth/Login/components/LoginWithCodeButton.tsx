import { Button, ButtonProps } from '@mantine/core';
import { IconMail } from '@tabler/icons-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const LoginWithCodeButton: React.FC<ButtonProps & { onClick?: () => void }> = (props) => {
  const { t } = useTranslation(['auth']);
  return (
    <Button radius="xl" leftSection={<IconMail />} variant="default" {...props}>
      {t('button.code_login')}
    </Button>
  );
};
