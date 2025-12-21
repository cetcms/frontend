import { Anchor, Card, Container, Divider, Group, Text, Title } from '@mantine/core';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router';

import {
  LoginWithCodeButton,
  LoginWithCodeForm,
  LoginWithGoogleButton,
  LoginWithPasswordButton,
  LoginWithPasswordForm,
  LoginWithWechatButton,
} from './components';

export const LoginPage = () => {
  const { t } = useTranslation();
  const [loginWith] = useState<'wechat' | 'google'>('wechat');
  const [searchParams, setSearchParams] = useSearchParams({
    mode: 'password',
  });

  return (
    <Container size={400} py="xl">
      <Title ta="center">{t('auth:page.title')}</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5} mb="lg">
        {t('auth:page.no_account')}{' '}
        <Anchor size="sm" component="button">
          {t('auth:page.create_account')}
        </Anchor>
      </Text>
      <Card w="100%" p="xl" withBorder mb="xl">
        <Group grow>
          {loginWith === 'wechat' ? <LoginWithWechatButton /> : <LoginWithGoogleButton />}
          {searchParams.get('mode') === 'password' ? (
            <LoginWithCodeButton onClick={() => setSearchParams({ mode: 'code' })} />
          ) : (
            <LoginWithPasswordButton onClick={() => setSearchParams({ mode: 'password' })} />
          )}
        </Group>

        <Divider label={t('auth:page.divider')} labelPosition="center" my="lg" />

        {searchParams.get('mode') === 'password' ? <LoginWithPasswordForm /> : <LoginWithCodeForm />}
      </Card>
    </Container>
  );
};
