import { useLazyQuery } from '@apollo/client/react';
import { Button, Card, Divider, Grid, Group, PasswordInput, Select, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowLeft, IconCheck } from '@tabler/icons-react';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { Admin, AdminUpdateInput, FindOneAdminDocument, Status } from 'src/graphql';

export type AdminFormProps = {
  id?: string;
};

export const AdminForm: React.FC<AdminFormProps> = ({ id }) => {
  const { t } = useTranslation('models');
  const [findOneAdmin] = useLazyQuery(FindOneAdminDocument);
  const form = useForm<AdminUpdateInput & { confirmPassword: string }>({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
      status: Status.Enabled,
    },
    validate: {
      email: (value) => (value && value.length < 5 ? t('Admin.email.minLength') : null),
      name: (value) => (value && value.length < 5 ? t('Admin.name.minLength') : null),
      password: (value) => (value && value.length < 5 ? t('Admin.password.minLength') : null),
      confirmPassword: (value) => (value.length < 5 ? t('Admin.confirmPassword.minLength') : null),
    },
  });

  const initialValues = useCallback(
    (id: string) => {
      findOneAdmin({ variables: { id } }).then(({ data }) => {
        if (data?.findOneAdmin) {
          const admin = data.findOneAdmin as Admin;
          form.setValues({
            email: admin.email,
            name: admin.name,
            status: admin.status,
          });
        }
      });
    },
    [id]
  );

  const resetValues = () => {
    form.reset();
    if (id) initialValues(id);
  };

  useEffect(() => {
    if (id) initialValues(id);
  }, [id]);

  const handleSubmit = () => {
    console.log(form.values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack maw={800} gap="md">
        <Group justify="space-between">
          <Group>
            <Button variant="default" component={Link} to="/admin/list">
              <IconArrowLeft size={16} />
            </Button>
            {id ? <Text>编辑管理员信息</Text> : <Text>添加管理员信息</Text>}
          </Group>
          <Group justify="center">
            <Button variant="default" onClick={() => resetValues()}>
              重置
            </Button>
            <Button leftSection={<IconCheck size={14} />}>保存</Button>
          </Group>
        </Group>
        <Card withBorder>
          <Grid columns={2}>
            <Grid.Col span={1}>
              <TextInput label={t('Admin.name')} {...form.getInputProps('name')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <TextInput label={t('Admin.email')} {...form.getInputProps('email')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <PasswordInput label={t('Admin.password')} {...form.getInputProps('password')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <PasswordInput label={t('confirmPassword')} {...form.getInputProps('confirm_password')} />
            </Grid.Col>
            <Grid.Col span={1}>
              <Select
                label={t('Admin.status')}
                data={[
                  { label: t('enum.Status.Enabled'), value: Status.Enabled },
                  { label: t('enum.Status.Disabled'), value: Status.Disabled },
                ]}
                {...form.getInputProps('status')}
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
    </form>
  );
};
