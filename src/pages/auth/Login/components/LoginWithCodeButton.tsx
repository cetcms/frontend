import { Button, ButtonProps } from '@mantine/core';
import { IconMail } from '@tabler/icons-react';
import React from 'react';

export const LoginWithCodeButton: React.FC<ButtonProps & { onClick?: () => void }> = (props) => {
  return (
    <Button radius="xl" leftSection={<IconMail />} variant="default" {...props}>
      验证码登录
    </Button>
  );
};
