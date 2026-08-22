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
import { hasLength, isEmail, isNotEmpty, matchesField, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Upload } from 'src/components/FormInputs';
import { FormPageAction, FormPageErrors } from 'src/components/FormPage';
import { CreateOneMemberDocument, Status, UpdateOneMemberDocument, Member, MemberCreateInput } from 'src/graphql';
import { useParseApolloErrors } from 'src/hooks';
import { validates } from 'src/utils/validates';

export type MemberFormProps = {
  item?: Member;
};

export type MemberFormValues = MemberCreateInput & {
  confirmPassword: string;
};

export const MemberForm: React.FC<MemberFormProps> = ({ item }) => {
  const backTo = '/member/list';
  const { t } = useTranslation(['models', 'pages', 'common', 'validation']);
  const navigate = useNavigate();
  const [createMember, { loading: creating }] = useMutation(CreateOneMemberDocument);
  const [updateMember, { loading: updating }] = useMutation(UpdateOneMemberDocument);

  const [parseHandler, { errors, resetErrors }] = useParseApolloErrors();

  const form = useForm<MemberFormValues>({
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
        isNotEmpty(t('validation:inputRequired', { field: t('Member.email') })),
        isEmail(t('validation:formatInvalid', { field: t('Member.email') })),
      ]),
      name: isNotEmpty(t('validation:inputRequired', { field: t('Member.name') })),
      confirmPassword: (value, values) => {
        const required = isNotEmpty(
          t('validation:inputRequired', { field: t('common:confirmMatch', { field: t('Member.password') }) })
        );
        const matches = matchesField('password', t('validation:confirmMatch', { field: t('Member.password') }));
        if (values.password) {
          return validates([required, matches], value, values);
        }
      },
      password: (value, values) => {
        // 创建模式时密码为必填项，且验证密码长度不小于 6 个字符
        const required = isNotEmpty(t('validation:inputRequired', { field: t('Member.password') }));
        const minLength = hasLength({ min: 6 }, t('validation:minLength', { field: t('Member.password'), count: 6 }));
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
      updateMember({
        variables: { id: item.id, data },
      })
        .then(({ data }) => {
          const member = data?.updateOneMember as Member;
          notifications.show({
            color: 'green',
            title: t('pages:success_notification'),
            message: t('pages:update_member_success', { name: member.name }),
          });
          navigate(backTo);
        })
        .catch(parseHandler);
    } else {
      createMember({
        variables: { data },
      })
        .then(({ data }) => {
          const member = data?.createOneMember as Member;
          notifications.show({
            color: 'green',
            title: t('pages:success_notification'),
            message: t('pages:add_member_success', { name: member.name }),
          });
          navigate(backTo);
        })
        .catch(parseHandler);
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <LoadingOverlay visible={creating || updating} />
      <Stack maw={800} gap="md">
        <FormPageAction
          backTo={backTo}
          title={item ? t('pages:edit_member') : t('pages:add_member')}
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
              <TextInput withAsterisk label={t('Member.name')} {...form.getInputProps('name')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <TextInput withAsterisk label={t('Member.email')} {...form.getInputProps('email')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <PasswordInput withAsterisk={!item} label={t('Member.password')} {...form.getInputProps('password')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <PasswordInput
                withAsterisk={!item}
                label={t('common:confirmMatch', { field: t('Member.password') })}
                {...form.getInputProps('confirmPassword')}
              />
            </Grid.Col>
            <Grid.Col span={1}>
              <Select
                allowDeselect={false}
                label={t('Member.status')}
                data={[
                  { label: t('enum.Status.Enabled'), value: Status.Enabled },
                  { label: t('enum.Status.Disabled'), value: Status.Disabled },
                ]}
                {...form.getInputProps('status')}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Upload
                label={t('Member.avatar')}
                path="member/avatar"
                outputType="id"
                {...form.getInputProps('avatar')}
              />
            </Grid.Col>
          </Grid>
          <Divider mt="md" variant="dashed" />
          <Group py="xs">
            <Text size="xs" opacity={0.5}>
              {t('pages:member_tip')}
            </Text>
          </Group>
        </Card>
      </Stack>
    </form>
  );
};
