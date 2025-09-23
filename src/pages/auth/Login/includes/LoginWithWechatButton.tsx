import { Button, Card, Center, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandWechat } from '@tabler/icons-react';
import { QRCodeSVG } from 'qrcode.react';
import React from 'react';

export const LoginWithWechatButton: React.FC = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="微信登录" centered>
        <Center pb="xl" h={400}>
          <Stack justify="center">
            <Card>
              <QRCodeSVG size={200} value="https://reactjs.org/" />
            </Card>
            <Text ta="center">打开微信扫描二维码登录</Text>
          </Stack>
        </Center>
      </Modal>
      <Button radius="xl" leftSection={<IconBrandWechat />} variant="default" onClick={open}>
        微信登录
      </Button>
    </>
  );
};
