import { useMutation, useQuery } from '@apollo/client/react';
import { Card, Divider, Grid, Group, LoadingOverlay, Select, Stack, Text, TextInput, Textarea } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { RolePermissions } from 'src/components/FormInputs/RolePermissions';
import { FormPageAction, FormPageErrors } from 'src/components/FormPage';
import {
  CompanyRoleFragment,
  CompanyRoleCreateInput,
  CreateOneCompanyRoleDocument,
  ListCompanyRolePermissionDocument,
  PermissionGroupItemFragment,
  Status,
  UpdateOneCompanyRoleDocument,
} from 'src/graphql';
import { useParseApolloErrors } from 'src/hooks';

export type CompanyRoleFormProps = {
  item?: CompanyRoleFragment;
};

export type CompanyRoleFormValues = CompanyRoleCreateInput;

export const CompanyRoleForm: React.FC<CompanyRoleFormProps> = ({ item }) => {
  const backTo = '/company/roles';
  const { t } = useTranslation(['models', 'pages', 'validation']);
  const navigate = useNavigate();
  const [createCompanyRole, { loading: creating }] = useMutation(CreateOneCompanyRoleDocument);
  const [updateCompanyRole, { loading: updating }] = useMutation(UpdateOneCompanyRoleDocument);
  const permissions = useQuery(ListCompanyRolePermissionDocument, {
    variables: {
      where: item?.id ? { id: item?.id } : undefined,
    },
  });

  const [parseHandler, { errors, resetErrors }] = useParseApolloErrors();

  const form = useForm<CompanyRoleFormValues>({
    initialValues: {
      name: item?.name || '',
      code: item?.code || '',
      description: item?.description || '',
      status: item?.status || Status.Enabled,
      permissions: item?.permissions || [],
    },
    validate: {
      name: isNotEmpty(t('validation:inputRequired', { field: t('CompanyRole.name') })),
      code: isNotEmpty(t('validation:inputRequired', { field: t('CompanyRole.code') })),
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
      permissions: form.values.permissions,
    };
    if (item) {
      updateCompanyRole({
        variables: { id: item.id, data },
      })
        .then(({ data }) => {
          const companyRole = data?.updateOneCompanyRole as CompanyRoleFragment;
          notifications.show({
            color: 'green',
            title: t('pages:success_notification'),
            message: t('pages:update_company_role_success', { name: companyRole.name }),
          });
          navigate(backTo);
        })
        .catch(parseHandler);
    } else {
      createCompanyRole({
        variables: { data },
      })
        .then(({ data }) => {
          const companyRole = data?.createOneCompanyRole as CompanyRoleFragment;
          notifications.show({
            color: 'green',
            title: t('pages:success_notification'),
            message: t('pages:add_company_role_success', { name: companyRole.name }),
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
          title={item ? t('pages:edit_company_role') : t('pages:add_company_role')}
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
              <TextInput withAsterisk label={t('CompanyRole.name')} {...form.getInputProps('name')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <TextInput withAsterisk label={t('CompanyRole.code')} {...form.getInputProps('code')} />
            </Grid.Col>
            <Grid.Col span={2}>
              <Textarea label={t('CompanyRole.description')} {...form.getInputProps('description')} />
            </Grid.Col>
            <Grid.Col span={2}>
              <Select
                allowDeselect={false}
                label={t('CompanyRole.status')}
                data={[
                  { label: t('enum.Status.Enabled'), value: Status.Enabled },
                  { label: t('enum.Status.Disabled'), value: Status.Disabled },
                ]}
                {...form.getInputProps('status')}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <RolePermissions
                label={t('CompanyRole.permissions')}
                loading={permissions.loading}
                permissions={
                  (permissions.data?.listCompanyRolePermission?.groups || []) as PermissionGroupItemFragment[]
                }
                allowUnselect={permissions.data?.listCompanyRolePermission?.allowUnselect}
                allowSelect={permissions.data?.listCompanyRolePermission?.allowSelect}
                {...form.getInputProps('permissions')}
              />
            </Grid.Col>
          </Grid>
          <Divider mt="md" variant="dashed" />
          <Group py="xs">
            <Text size="xs" opacity={0.5}>
              {t('pages:company_role_tip')}
            </Text>
          </Group>
        </Card>
      </Stack>
    </form>
  );
};
