import { useMutation } from '@apollo/client/react';
import { Card, Divider, Grid, Group, LoadingOverlay, Select, Stack, Text, TextInput } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Upload } from 'src/components/FormInputs';
import { FormPageAction, FormPageErrors } from 'src/components/FormPage';
import {
  CompanyFragment,
  CompanyCreateInput,
  CreateOneCompanyDocument,
  Status,
  UpdateOneCompanyDocument,
} from 'src/graphql';
import { useOnAuthClient, useParseApolloErrors } from 'src/hooks';
import { PagePermissionOption } from 'src/store';

export type CompanyFormProps = {
  item?: CompanyFragment;
};

export type CompanyFormValues = CompanyCreateInput;

export const CompanyForm: React.FC<CompanyFormProps> & PagePermissionOption = ({ item }) => {
  const { t } = useTranslation(['models', 'pages', 'validation']);
  const navigate = useNavigate();
  const [createCompany, { loading: creating }] = useMutation(CreateOneCompanyDocument);
  const [updateCompany, { loading: updating }] = useMutation(UpdateOneCompanyDocument);

  const [parseHandler, { errors, resetErrors }] = useParseApolloErrors();
  const backTo = useOnAuthClient({
    default: '/company/list',
    company: '',
  });

  const form = useForm<CompanyFormValues>({
    initialValues: {
      name: item?.name || '',
      alias: item?.alias || '',
      code: item?.code || '',
      logo: item?.logo || '',
      description: item?.description || '',
      status: item?.status || Status.Enabled,
    },
    validate: {
      name: isNotEmpty(t('validation:inputRequired', { field: t('Company.name') })),
      code: isNotEmpty(t('validation:inputRequired', { field: t('Company.code') })),
    },
  });

  const handleSubmit = () => {
    resetErrors();
    const { hasErrors } = form.validate();
    if (hasErrors) return;
    const data = {
      name: form.values.name,
      alias: form.values.alias,
      code: form.values.code,
      logo: form.values.logo,
      description: form.values.description,
      status: form.values.status,
    };
    if (item) {
      updateCompany({
        variables: { id: item.id, data },
      })
        .then(({ data }) => {
          const company = data?.updateOneCompany as CompanyFragment;
          notifications.show({
            color: 'green',
            title: t('pages:success_notification'),
            message: t('pages:update_company_success', { name: company.name }),
          });
          setTimeout(() => {
            location.reload();
          }, 1000);
        })
        .catch(parseHandler);
    } else {
      createCompany({
        variables: { data },
      })
        .then(({ data }) => {
          const company = data?.createOneCompany as CompanyFragment;
          notifications.show({
            color: 'green',
            title: t('pages:success_notification'),
            message: t('pages:add_company_success', { name: company.name }),
          });
          navigate('/company/list');
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
              <TextInput withAsterisk label={t('Company.name')} {...form.getInputProps('name')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <TextInput withAsterisk label={t('Company.code')} {...form.getInputProps('code')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <TextInput label={t('Company.alias')} {...form.getInputProps('alias')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <Select
                allowDeselect={false}
                label={t('Company.status')}
                data={[
                  { label: t('enum.Status.Enabled'), value: Status.Enabled },
                  { label: t('enum.Status.Disabled'), value: Status.Disabled },
                ]}
                {...form.getInputProps('status')}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <TextInput label={t('Company.description')} {...form.getInputProps('description')} />
            </Grid.Col>
            <Grid.Col span={2}>
              <Upload label={t('Company.logo')} path="company/logo" outputType="id" {...form.getInputProps('logo')} />
            </Grid.Col>
          </Grid>
          <Divider mt="md" variant="dashed" />
          <Group py="xs">
            <Text size="xs" opacity={0.5}>
              {t('pages:company_tip')}
            </Text>
          </Group>
        </Card>
      </Stack>
    </form>
  );
};

CompanyForm.permissions = undefined;
