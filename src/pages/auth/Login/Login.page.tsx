import { useMutation } from '@apollo/client/react';
import { Anchor, Button, Checkbox, Container, Paper, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Login, LoginDocument, Target } from 'src/graphql/generated/graphql';
import { useAuthStore } from 'src/store/auth';

import classes from './Login.module.scss';

export function LoginPage() {
  const { setLogin } = useAuthStore();
  const [loginMutation] = useMutation(LoginDocument, {
    fetchPolicy: 'network-only',
  });
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },
    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: string) => (value.length < 6 ? 'Password must have at least 6 letters' : null),
      termsOfService: (value: boolean) => (value ? null : 'You must agree to terms of service'),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    loginMutation({
      variables: {
        input: {
          account: values.email,
          password: values.password,
          target: Target.Admin,
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
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Text className={classes.subtitle}>
        Do not have an account yet? <Anchor>Create account</Anchor>
      </Text>

      <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            key={form.key('password')}
            {...form.getInputProps('password')}
            mt="md"
            radius="md"
          />
          <Checkbox
            mt="md"
            label="I agree to sell my privacy"
            key={form.key('termsOfService')}
            {...form.getInputProps('termsOfService', { type: 'checkbox' })}
          />
          <Button fullWidth mt="xl" radius="md" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
