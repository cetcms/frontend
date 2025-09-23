import { Button, ButtonProps } from '@mantine/core';
import { IconPassword } from '@tabler/icons-react';
import React from 'react';

export const LoginWithPasswordButton: React.FC<ButtonProps & { onClick?: () => void }> = (props) => {
  return (
    <Button radius="xl" leftSection={<IconPassword />} variant="default" {...props}>
      密码登录
    </Button>
  );
};
