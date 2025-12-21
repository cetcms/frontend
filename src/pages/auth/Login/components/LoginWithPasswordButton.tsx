import { Button, ButtonProps } from '@mantine/core';
import { IconPassword } from '@tabler/icons-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const LoginWithPasswordButton: React.FC<ButtonProps & { onClick?: () => void }> = (props) => {
  const { t } = useTranslation(['auth']);
  return (
    <Button radius="xl" leftSection={<IconPassword />} variant="default" {...props}>
      {t('button.password_login')}
    </Button>
  );
};
