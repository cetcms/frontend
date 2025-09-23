import { Button } from '@mantine/core';
import { IconBrandGoogle } from '@tabler/icons-react';
import React from 'react';

export const LoginWithGoogleButton = () => {
  return (
    <Button radius="xl" leftSection={<IconBrandGoogle />} variant="default">
      谷歌登录
    </Button>
  );
};
