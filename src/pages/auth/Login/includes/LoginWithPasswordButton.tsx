import { Button, ButtonProps } from '@mantine/core';
import { IconPassword } from '@tabler/icons-react';
import React from 'react';

export function LoginWithPasswordButton(props: ButtonProps & { onClick?: () => void }) {
  return (
    <Button radius="xl" leftSection={<IconPassword />} variant="default" {...props}>
      密码登录
    </Button>
  );
}
