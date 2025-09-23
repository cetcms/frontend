import { Button, ButtonProps } from '@mantine/core';
import { IconMail } from '@tabler/icons-react';
import React from 'react';

export function LoginWithCodeButton(props: ButtonProps & { onClick?: () => void }) {
  return (
    <Button radius="xl" leftSection={<IconMail />} variant="default" {...props}>
      验证码登录
    </Button>
  );
}
