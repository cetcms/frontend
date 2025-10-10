import { useMutation, useQuery } from '@apollo/client/react';
import { Card, Divider, Grid, Group, LoadingOverlay, Select, Stack, Text, TextInput, Textarea } from '@mantine/core';
import { Form, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { RolePermissions } from 'src/components/FormInputs/RolePermissions';
import { FormPageAction, FormPageErrors } from 'src/components/FormPage';
import {
  AdminRole,
  AdminRoleCreateInput,
  CreateOneAdminRoleDocument,
  ListAdminRolePermissionDocument,
  PermissionItem,
  Status,
  UpdateOneAdminRoleDocument,
} from 'src/graphql';
import { useParseApolloErrors } from 'src/hooks';

export type AdminRoleFormProps = {
  item?: AdminRole;
};

export type AdminRoleFormValues = AdminRoleCreateInput;

export const AdminRoleForm: React.FC<AdminRoleFormProps> = ({ item }) => {
  const backTo = '/admin/roles';
  const { t } = useTranslation('models');
  const navigate = useNavigate();
  const [createAdminRole, { loading: creating }] = useMutation(CreateOneAdminRoleDocument);
  const [updateAdminRole, { loading: updating }] = useMutation(UpdateOneAdminRoleDocument);
  const permissions = useQuery(ListAdminRolePermissionDocument);

  const [parseHandler, { errors, resetErrors }] = useParseApolloErrors();

  const form = useForm<AdminRoleFormValues>({
    initialValues: {
      name: item?.name || '',
      code: item?.code || '',
      description: item?.description || '',
      status: item?.status || Status.Enabled,
      permissions: item?.permissions || [],
    },
    validate: {
      name: isNotEmpty(t('validation:inputRequired', { field: t('AdminRole.name') })),
      code: isNotEmpty(t('validation:inputRequired', { field: t('AdminRole.code') })),
    },
  });

  const handleSubmit = () => {
    resetErrors();
    const { hasErrors } = form.validate();
    if (hasErrors) return;
    const data = {
      name: form.values.name,
      code: form.values.code,
      description: form.values.description,
      status: form.values.status,
    };
    if (item) {
      updateAdminRole({
        variables: { id: item.id, data },
      })
        .then(({ data }) => {
          const adminRole = data?.updateOneAdminRole as AdminRole;
          notifications.show({
            color: 'green',
            title: '成功提示',
            message: `已成功更新管理员角色: ${adminRole.name}`,
          });
          navigate(backTo);
        })
        .catch(parseHandler);
    } else {
      createAdminRole({
        variables: { data },
      })
        .then(({ data }) => {
          const adminRole = data?.createOneAdminRole as AdminRole;
          notifications.show({
            color: 'green',
            title: '成功提示',
            message: `已成功添加管理员角色: ${adminRole.name}`,
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
          title={item ? '编辑管理员角色' : '添加管理员角色'}
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
              <TextInput withAsterisk label={t('AdminRole.name')} {...form.getInputProps('name')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <TextInput withAsterisk label={t('AdminRole.code')} {...form.getInputProps('code')} />
            </Grid.Col>
            <Grid.Col span={2}>
              <Textarea label={t('AdminRole.description')} {...form.getInputProps('description')} />
            </Grid.Col>
            <Grid.Col span={2}>
              <Select
                allowDeselect={false}
                label={t('AdminRole.status')}
                data={[
                  { label: t('enum.Status.Enabled'), value: Status.Enabled },
                  { label: t('enum.Status.Disabled'), value: Status.Disabled },
                ]}
                {...form.getInputProps('status')}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <RolePermissions
                label={t('AdminRole.permissions')}
                loading={permissions.loading}
                permissions={(permissions.data?.listAdminRolePermission?.items || []) as PermissionItem[]}
                enabledUnselect={[
                  'UserResolver:findOneUser',
                  'UserResolver:paginateUsers',
                  'UserResolver:createOneUser',
                  'UserResolver:updateOneUser',
                ]}
                enabledSelect={[]}
                {...form.getInputProps('permissions')}
              />
            </Grid.Col>
          </Grid>
          <Divider mt="md" variant="dashed" />
          <Group py="xs">
            <Text size="xs" opacity={0.5}>
              提示：管理员角色用于控制管理员的权限
            </Text>
          </Group>
        </Card>
      </Stack>
    </Form>
  );
};
