import { useMutation, useQuery } from '@apollo/client/react';
import {
  Alert,
  Card,
  Divider,
  Grid,
  Group,
  LoadingOverlay,
  PasswordInput,
  Select,
  SelectProps,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { Form, hasLength, isEmail, isNotEmpty, matchesField, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconExclamationCircle } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { FormPageAction } from 'src/components/FormPage';
import {
  Admin,
  AdminCreateInput,
  AdminRole,
  AdminRoleWhereInput,
  CreateOneAdminDocument,
  PaginateAdminRolesDocument,
  Status,
  UpdateOneAdminDocument,
} from 'src/graphql';
import { useParseApolloErrors } from 'src/hooks/useParseApolloErrors';
import { validates } from 'src/validator';

export type AdminFormProps = {
  item?: Admin;
};

const RoleSelect: React.FC<SelectProps> = (props) => {
  const [where, setWhere] = useState<AdminRoleWhereInput>(() => {
    if (props.value) {
      return { OR: [{ id: { equals: props.value } }, { id: { not: { equals: '' } } }] };
    }
    return {};
  });
  const { data, loading } = useQuery(PaginateAdminRolesDocument, {
    variables: {
      where,
    },
  });
  const handleSearchChange = (value: string) => {
    const OR: AdminRoleWhereInput[] = [];
    if (props.value) {
      OR.push({ id: { equals: props.value } });
    }
    OR.push({ name: { contains: value } });
    OR.push({ code: { contains: value } });
    OR.push({ description: { contains: value } });
    OR.push({ id: { not: { equals: '' } } });
    setWhere({ OR });
  };
  const handleData = (items: AdminRole[]) => {
    return items.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  };

  // 自动选择第一个选项的逻辑
  useEffect(() => {
    if (!loading && data?.paginateAdminRoles?.items?.length && !props.value) {
      const firstRole = data.paginateAdminRoles.items[0] as AdminRole;
      // 调用 onChange 方法设置第一个选项为默认值
      if (props.onChange) {
        props.onChange(firstRole.id, { value: firstRole.id, label: firstRole.name });
      }
    }
  }, [data, loading, props.value, props.onChange]);

  return (
    <Select
      {...props}
      searchable
      onSearchChange={handleSearchChange}
      data={handleData((data?.paginateAdminRoles.items ?? []) as AdminRole[])}
    />
  );
};

export type AdminFormValues = AdminCreateInput & {
  confirmPassword: string;
};

export const AdminForm: React.FC<AdminFormProps> = ({ item }) => {
  const backTo = '/admin/list';
  const { t } = useTranslation('models');
  const navigate = useNavigate();
  const [createAdmin, { loading: creating }] = useMutation(CreateOneAdminDocument);
  const [updateAdmin, { loading: updating }] = useMutation(UpdateOneAdminDocument);

  const [parseHandler, { errors, resetErrors }] = useParseApolloErrors();

  const form = useForm<AdminFormValues>({
    initialValues: {
      email: item?.email || '',
      name: item?.name || '',
      status: item?.status || Status.Enabled,
      password: '',
      confirmPassword: '',
      role: item ? { connect: { id: item?.roleId } } : { connect: { id: '' } },
    },
    validate: {
      email: validates([
        isNotEmpty(t('validation:inputRequired', { field: t('Admin.email') })),
        isEmail(t('validation:formatInvalid', { field: t('Admin.email') })),
      ]),
      name: isNotEmpty(t('validation:inputRequired', { field: t('Admin.name') })),
      role: { connect: { id: isNotEmpty(t('validation:selectRequired', { field: t('Admin.role') })) } },
      confirmPassword: (value, values) => {
        const required = isNotEmpty(
          t('validation:inputRequired', { field: t('confirmMatch', { field: t('Admin.password') }) })
        );
        const matches = matchesField('password', t('validation:confirmMatch', { field: t('Admin.password') }));
        if (values.password) {
          return validates([required, matches], value, values);
        }
      },
      password: (value, values) => {
        // 创建模式时密码为必填项，且验证密码长度不小于 6 个字符
        const required = isNotEmpty(t('validation:inputRequired', { field: t('Admin.password') }));
        const minLength = hasLength({ min: 6 }, t('validation:minLength', { field: t('Admin.password'), count: 6 }));
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
      role: form.values.role,
      status: form.values.status,
    };
    if (item) {
      updateAdmin({
        variables: { id: item.id, data },
      })
        .then(({ data }) => {
          const admin = data?.updateOneAdmin as Admin;
          notifications.show({
            color: 'green',
            title: '成功提示',
            message: `已成功更新管理员: ${admin.name}`,
          });
          navigate(backTo);
        })
        .catch(parseHandler);
    } else {
      createAdmin({
        variables: { data },
      })
        .then(({ data }) => {
          const admin = data?.createOneAdmin as Admin;
          notifications.show({
            color: 'green',
            title: '成功提示',
            message: `已成功添加管理员: ${admin.name}`,
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
          title={item ? '编辑管理员' : '添加管理员'}
          isDirty={form.isDirty()}
          onReset={() => {
            form.reset();
            resetErrors();
          }}
        />
        <Card withBorder>
          {Array.from(errors).map(([key, error]) => (
            <Alert
              p="xs"
              mb="md"
              key={key}
              color="red"
              title={error.message}
              icon={<IconExclamationCircle size={16} />}
            >
              {error?.errors?.map((error, index) => (
                <Text size="xs" opacity={0.5} key={index}>
                  {error.message} [{error.path}]
                </Text>
              ))}
            </Alert>
          ))}
          <Grid columns={2}>
            <Grid.Col span={1}>
              <TextInput withAsterisk label={t('Admin.name')} {...form.getInputProps('name')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <TextInput withAsterisk label={t('Admin.email')} {...form.getInputProps('email')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <PasswordInput withAsterisk={!item} label={t('Admin.password')} {...form.getInputProps('password')} />
            </Grid.Col>
            {form.values.password && (
              <Grid.Col span={1}>
                <PasswordInput
                  withAsterisk={!item}
                  label={t('confirmMatch', { field: t('Admin.password') })}
                  {...form.getInputProps('confirmPassword')}
                />
              </Grid.Col>
            )}
            <Grid.Col span={1}>
              <Select
                allowDeselect={false}
                label={t('Admin.status')}
                data={[
                  { label: t('enum.Status.Enabled'), value: Status.Enabled },
                  { label: t('enum.Status.Disabled'), value: Status.Disabled },
                ]}
                {...form.getInputProps('status')}
              />
            </Grid.Col>
            <Grid.Col span={1}>
              <RoleSelect
                withAsterisk
                allowDeselect={false}
                label={t('Admin.role')}
                {...form.getInputProps('role.connect.id')}
              />
            </Grid.Col>
          </Grid>
          <Divider mt="md" variant="dashed" />
          <Group py="xs">
            <Text size="xs" opacity={0.5}>
              提示：添加管理员用于登录
            </Text>
          </Group>
        </Card>
      </Stack>
    </Form>
  );
};
