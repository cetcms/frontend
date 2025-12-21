import { useMutation } from '@apollo/client/react';
import {
  Card,
  Divider,
  Grid,
  Group,
  JsonInput,
  LoadingOverlay,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core';
import { Form, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { CompanySelect } from 'src/components/FormInputs';
import { FormPageAction, FormPageErrors } from 'src/components/FormPage';
import {
  CreateOneWebsiteDocument,
  UpdateOneWebsiteDocument,
  Website,
  WebsiteCreateInput,
  WebsiteCms,
} from 'src/graphql';
import { useParseApolloErrors } from 'src/hooks';
import { useAuthStore } from 'src/store';

export type WebsiteFormProps = {
  item?: Website;
};

export type WebsiteFormValues = Omit<WebsiteCreateInput, 'company'> & {
  companyId: string;
};

export const WebsiteForm: React.FC<WebsiteFormProps> = ({ item }) => {
  const backTo = '/project/website/list';
  const { t } = useTranslation('common');
  const navigate = useNavigate();
  const { auth } = useAuthStore();
  const [createWebsite, { loading: creating }] = useMutation(CreateOneWebsiteDocument);
  const [updateWebsite, { loading: updating }] = useMutation(UpdateOneWebsiteDocument);

  const [parseHandler, { errors, resetErrors }] = useParseApolloErrors();

  const form = useForm<WebsiteFormValues>({
    initialValues: {
      title: item?.title || '',
      description: item?.description || '',
      cms: item?.cms || undefined,
      cmsApiUrl: item?.cmsApiUrl || '',
      cmsApiToken: item?.cmsApiToken || '',
      cmsConfig: item?.cmsConfig || '',
      companyId: item?.companyId || auth?.companyId || '',
    },
    validate: {
      title: isNotEmpty(t('请输入网站标题')),
      companyId: isNotEmpty(t('企业ID不能为空')),
    },
  });

  const handleSubmit = () => {
    resetErrors();
    const { hasErrors } = form.validate();
    if (hasErrors) return;

    const data: any = {
      title: form.values.title,
      description: form.values.description || undefined,
      cms: form.values.cms || undefined,
      cmsApiUrl: form.values.cmsApiUrl || undefined,
      cmsApiToken: form.values.cmsApiToken || undefined,
      cmsConfig: form.values.cmsConfig || undefined,
    };

    if (item) {
      updateWebsite({
        variables: { id: item.id, data },
      })
        .then(({ data }) => {
          const website = data?.updateOneWebsite as Website;
          notifications.show({
            color: 'green',
            title: '成功提示',
            message: `已成功更新网站: ${website.title}`,
          });
          navigate(backTo);
        })
        .catch(parseHandler);
    } else {
      // 创建时需要关联 company
      createWebsite({
        variables: {
          data: {
            ...data,
            company: {
              connect: {
                id: form.values.companyId,
              },
            },
          },
        },
      })
        .then(({ data }) => {
          const website = data?.createOneWebsite as Website;
          notifications.show({
            color: 'green',
            title: '成功提示',
            message: `已成功添加网站: ${website.title}`,
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
          title={item ? '编辑网站' : '添加网站'}
          isDirty={form.isDirty()}
          onReset={() => {
            form.reset();
            resetErrors();
          }}
        />
        <Card withBorder>
          <FormPageErrors errors={errors} />
          <Grid columns={2}>
            <Grid.Col span={2}>
              <TextInput withAsterisk label="网站标题" {...form.getInputProps('title')} />
            </Grid.Col>
            <Grid.Col span={2}>
              <Textarea label="描述" {...form.getInputProps('description')} />
            </Grid.Col>
            <Grid.Col span={2}>
              <CompanySelect label="关联企业" {...form.getInputProps('companyId')} required />
            </Grid.Col>
            <Grid.Col span={1}>
              <Select
                allowDeselect
                label="CMS类型"
                data={[
                  { label: 'WordPress', value: WebsiteCms.WordPress },
                  { label: 'Strapi', value: WebsiteCms.Strapi },
                  { label: 'Directus', value: WebsiteCms.Directus },
                ]}
                {...form.getInputProps('cms')}
              />
            </Grid.Col>
            <Grid.Col span={1}>
              <TextInput label="CMS API 地址" {...form.getInputProps('cmsApiUrl')} />
            </Grid.Col>
            <Grid.Col span={2}>
              <TextInput label="CMS API Token" type="password" {...form.getInputProps('cmsApiToken')} />
            </Grid.Col>
            <Grid.Col span={2}>
              <JsonInput
                label="CMS 配置 (JSON)"
                placeholder='{"key": "value"}'
                minRows={4}
                formatOnBlur
                autosize
                {...form.getInputProps('cmsConfig')}
              />
            </Grid.Col>
          </Grid>
          <Divider mt="md" variant="dashed" />
          <Group py="xs">
            <Text size="xs" opacity={0.5}>
              提示：添加网站用于管理内容
            </Text>
          </Group>
        </Card>
      </Stack>
    </Form>
  );
};
