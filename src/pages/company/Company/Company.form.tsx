import { useMutation } from '@apollo/client/react';
import { Card, Divider, Grid, Group, LoadingOverlay, Select, Stack, Text, TextInput } from '@mantine/core';
import { Form, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Upload } from 'src/components/FormInputs';
import { FormPageAction, FormPageErrors } from 'src/components/FormPage';
import { Company, CompanyCreateInput, CreateOneCompanyDocument, Status, UpdateOneCompanyDocument } from 'src/graphql';
import { useParseApolloErrors } from 'src/hooks';
import { PagePermissionOption } from 'src/store';

export type CompanyFormProps = {
  item?: Company;
};

export type CompanyFormValues = CompanyCreateInput;

export const CompanyForm: React.FC<CompanyFormProps> & PagePermissionOption = ({ item }) => {
  const backTo = '/company/list';
  const { t } = useTranslation('models');
  const navigate = useNavigate();
  const [createCompany, { loading: creating }] = useMutation(CreateOneCompanyDocument);
  const [updateCompany, { loading: updating }] = useMutation(UpdateOneCompanyDocument);

  const [parseHandler, { errors, resetErrors }] = useParseApolloErrors();

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
          const company = data?.updateOneCompany as Company;
          notifications.show({
            color: 'green',
            title: '成功提示',
            message: `已成功更新公司: ${company.name}`,
          });
          navigate(backTo);
        })
        .catch(parseHandler);
    } else {
      createCompany({
        variables: { data },
      })
        .then(({ data }) => {
          const company = data?.createOneCompany as Company;
          notifications.show({
            color: 'green',
            title: '成功提示',
            message: `已成功添加公司: ${company.name}`,
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
          title={item ? '编辑公司' : '添加公司'}
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
              提示：添加公司用于管理
            </Text>
          </Group>
        </Card>
      </Stack>
    </Form>
  );
};

CompanyForm.permissions = undefined;
