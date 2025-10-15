import { useMutation } from '@apollo/client/react';
import { Anchor, Button, Center, Checkbox, Group, Modal, PasswordInput, Stack, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router';
import { Captcha } from 'src/components';
import { Login, LoginDocument, Target } from 'src/graphql';
import { useAuthStore } from 'src/store';

interface LoginFormValues {
  email: string;
  password: string;
  captcha: {
    token: string;
    key: string;
  };
}

export const LoginWithPasswordForm = () => {
  const { t } = useTranslation(['auth']);
  const [searchParams] = useSearchParams();
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
      password: (value) => (value.length < 6 ? 'Password should include at least 6 characters' : null),
    },
  });

  const target = searchParams.get('target') as Target;
  const { setLogin } = useAuthStore();
  const [loginMutation, { loading }] = useMutation(LoginDocument);
  const handleSubmit = (values: LoginFormValues) => {
    loginMutation({
      variables: {
        input: {
          account: values.email,
          password: values.password,
          target: target || undefined,
        },
      },
    }).then(({ data }) => {
      if (data?.login) {
        setLogin(data.login as Login);
        location.reload();
      }
    });
  };

  return (
    <form onSubmit={form.onSubmit(open)}>
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
            onCompleted={(token, key) => {
              close();
              form.setFieldValue('captcha', {
                token,
                key,
              });
              handleSubmit(form.values);
            }}
          />
        </Center>
      </Modal>
      <Stack>
        <TextInput
          required
          label={t('label.email')}
          placeholder={t('placeholder.email')}
          {...form.getInputProps('email')}
        />
        <PasswordInput
          required
          label={t('label.password')}
          placeholder={t('placeholder.password')}
          {...form.getInputProps('password')}
        />{' '}
        <Group justify="space-between">
          <Checkbox label={t('label.remember')} />
          <Anchor component="button" size="sm">
            {t('button.forgot')}?
          </Anchor>
        </Group>
      </Stack>

      <Group justify="space-between" mt="xl">
        <Button type="submit" radius="xl" loading={loading} w="100%">
          {t('button.login')}
        </Button>
      </Group>
    </form>
  );
};
