import { Button, Card, Center, Modal, Stack, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandWechat } from '@tabler/icons-react';
import { QRCodeSVG } from 'qrcode.react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const LoginWithWechatButton = () => {
  const { t } = useTranslation(['auth']);
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title={t('wechat.modal_title')} centered>
        <Center pb="xl" h={400}>
          <Stack justify="center">
            <Card>
              <QRCodeSVG size={200} value="https://reactjs.org/" />
            </Card>
            <Text ta="center">{t('wechat.scan_tip')}</Text>
          </Stack>
        </Center>
      </Modal>
      <Button radius="xl" leftSection={<IconBrandWechat />} variant="default" onClick={open}>
        {t('button.wechat_login')}
      </Button>
    </>
  );
};
