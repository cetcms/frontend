import { Button, Center, Group, Input, Modal, PinInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure, useLocalStorage } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Captcha } from 'src/components';

interface LoginFormValues {
  email: string;
  password: string;
  captcha: {
    token: string;
    key: string;
  };
}

export function LoginWithCodeForm() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
      captcha: {
        token: '',
        key: '',
      },
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length <= 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const handleSubmit = (_values: LoginFormValues) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const [resendTime, setResendTime] = useState(0);
  const [captchaSendDateTime, setCaptchaSendDateTime] = useLocalStorage({
    key: 'captchaSendDateTime',
    defaultValue: localStorage.getItem('captchaSendDateTime'),
  });

  const handleCountdown = () => {
    const interval = setInterval(() => {
      setResendTime((prev) => {
        if (prev === 0) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    if (captchaSendDateTime) {
      const now = new Date();
      const sendTime = new Date(captchaSendDateTime);
      const diff = now.getTime() - sendTime.getTime();
      const diffSeconds = Math.floor(diff / 1000);
      if (diffSeconds < 60) {
        setResendTime(60 - diffSeconds);
        handleCountdown();
      }
    }
  }, []);
  const handleSendCode = () => {
    if (resendTime > 0) {
      return;
    }
    setCaptchaSendDateTime(new Date().toUTCString());
    setResendTime(60);
    handleCountdown();
  };

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <Modal
        size={320}
        opened={opened}
        onClose={close}
        centered
        withCloseButton={false}
        styles={{ body: { padding: 0, paddingTop: 8 } }}
      >
        <Center h={90}>
          <Captcha
            onCompleted={(token: any, key: any) => {
              close();
              form.setFieldValue('captcha', {
                token,
                key,
              });
              handleSendCode();
            }}
          />
        </Center>
      </Modal>
      <Stack>
        <TextInput
          required
          label={t('auth:login.email.label')}
          placeholder={t('auth:login.email.placeholder')}
          {...form.getInputProps('email')}
          rightSectionProps={{
            style: {
              overflow: 'hidden',
              borderLeft: '1px solid var(--input-bd)',
              width: 'auto',
            },
          }}
          rightSection={
            <Button
              px="xs"
              fullWidth
              variant="light"
              disabled={resendTime > 0}
              onClick={() => {
                if (form.values.captcha.token) {
                  handleSendCode();
                } else {
                  open();
                }
              }}
            >
              {resendTime > 0 ? (
                <>
                  <span style={{ width: '2em', display: 'inline-block' }}>{resendTime}</span>
                  秒后重发
                </>
              ) : (
                '发送验证码'
              )}
            </Button>
          }
        />

        <Input.Wrapper required label={t('auth:login.password.label')}>
          <PinInput size="lg" length={6} type="number" {...form.getInputProps('password')} />
        </Input.Wrapper>
      </Stack>

      <Group justify="space-between" mt="xl">
        <Button type="submit" radius="xl" loading={loading} w="100%">
          {t('auth:login.submit')}
        </Button>
      </Group>
    </form>
  );
}
