import { useMutation } from '@apollo/client/react';
import {
  Card,
  Divider,
  Grid,
  Group,
  LoadingOverlay,
  PasswordInput,
  Select,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { Form, hasLength, isEmail, isNotEmpty, matchesField, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Upload } from 'src/components/FormInputs';
import { FormPageAction, FormPageErrors } from 'src/components/FormPage';
import { CreateOneUserDocument, Status, UpdateOneUserDocument, User, UserCreateInput } from 'src/graphql';
import { useParseApolloErrors } from 'src/hooks';
import { validates } from 'src/validator';

export type UserFormProps = {
  item?: User;
};

export type UserFormValues = UserCreateInput & {
  confirmPassword: string;
};

export const UserForm: React.FC<UserFormProps> = ({ item }) => {
  const backTo = '/user/list';
  const { t } = useTranslation('models');
  const navigate = useNavigate();
  const [createUser, { loading: creating }] = useMutation(CreateOneUserDocument);
  const [updateUser, { loading: updating }] = useMutation(UpdateOneUserDocument);

  const [parseHandler, { errors, resetErrors }] = useParseApolloErrors();

  const form = useForm<UserFormValues>({
    initialValues: {
      email: item?.email || '',
      name: item?.name || '',
      status: item?.status || Status.Enabled,
      avatar: item?.avatar || '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      email: validates([
        isNotEmpty(t('validation:inputRequired', { field: t('User.email') })),
        isEmail(t('validation:formatInvalid', { field: t('User.email') })),
      ]),
      name: isNotEmpty(t('validation:inputRequired', { field: t('User.name') })),
      confirmPassword: (value, values) => {
        const required = isNotEmpty(
          t('validation:inputRequired', { field: t('confirmMatch', { field: t('User.password') }) })
        );
        const matches = matchesField('password', t('validation:confirmMatch', { field: t('User.password') }));
        if (values.password) {
          return validates([required, matches], value, values);
        }
      },
      password: (value, values) => {
        // 创建模式时密码为必填项，且验证密码长度不小于 6 个字符
        const required = isNotEmpty(t('validation:inputRequired', { field: t('User.password') }));
        const minLength = hasLength({ min: 6 }, t('validation:minLength', { field: t('User.password'), count: 6 }));
        if (!item) {
          return validates([required, minLength], value, values);
        }
        // 编辑模式下只有填写了密码才做检查
        else if (value) {
          return minLength(value);
        }
        return null;
      },
    },
  });

  const handleSubmit = () => {
    resetErrors();
    const { hasErrors } = form.validate();
    if (hasErrors) return;
    const data = {
      email: form.values.email,
      name: form.values.name,
      password: form.values.password,
      status: form.values.status,
      avatar: form.values.avatar,
    };
    if (item) {
      updateUser({
        variables: { id: item.id, data },
      })
        .then(({ data }) => {
          const user = data?.updateOneUser as User;
          notifications.show({
            color: 'green',
            title: '成功提示',
            message: `已成功更新用户: ${user.name}`,
          });
          navigate(backTo);
        })
        .catch(parseHandler);
    } else {
      createUser({
        variables: { data },
      })
        .then(({ data }) => {
          const user = data?.createOneUser as User;
          notifications.show({
            color: 'green',
            title: '成功提示',
            message: `已成功添加用户: ${user.name}`,
          });
          navigate(backTo);
        })
        .catch(parseHandler);
    }
  };

  return (
    <Form form={form} onSubmit={handleSubmit}>
      <LoadingOverlay visible={creating || updating} />
      <Stack maw={800} gap="md">
        <FormPageAction
          backTo={backTo}
          title={item ? '编辑用户' : '添加用户'}
          isDirty={form.isDirty()}
          onReset={() => {
            form.reset();
            resetErrors();
          }}
        />
        <Card withBorder>
          <FormPageErrors errors={errors} />
          <Grid columns={2}>
            <Grid.Col span={1}>
              <TextInput withAsterisk label={t('User.name')} {...form.getInputProps('name')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <TextInput withAsterisk label={t('User.email')} {...form.getInputProps('email')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <PasswordInput withAsterisk={!item} label={t('User.password')} {...form.getInputProps('password')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <PasswordInput
                withAsterisk={!item}
                label={t('confirmMatch', { field: t('User.password') })}
                {...form.getInputProps('confirmPassword')}
              />
            </Grid.Col>
            <Grid.Col span={1}>
              <Select
                allowDeselect={false}
                label={t('User.status')}
                data={[
                  { label: t('enum.Status.Enabled'), value: Status.Enabled },
                  { label: t('enum.Status.Disabled'), value: Status.Disabled },
                ]}
                {...form.getInputProps('status')}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Upload label={t('User.avatar')} path="user/avatar" outputType="id" {...form.getInputProps('avatar')} />
            </Grid.Col>
          </Grid>
          <Divider mt="md" variant="dashed" />
          <Group py="xs">
            <Text size="xs" opacity={0.5}>
              提示：添加用户用于登录
            </Text>
          </Group>
        </Card>
      </Stack>
    </Form>
  );
};
