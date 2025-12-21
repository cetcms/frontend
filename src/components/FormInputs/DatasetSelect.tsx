import { Button, Card, Group, InputWrapper, InputWrapperProps, Stack, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';
import React from 'react';
import { useTranslation } from 'react-i18next';

export type DatasetSelectProps = InputWrapperProps & {};

export const DatasetSelect: React.FC<DatasetSelectProps> = (props) => {
  const { t } = useTranslation(['components']);
  return (
    <InputWrapper {...props}>
      <Stack gap="xs">
        <Card withBorder>
          <Group justify="space-between">
            <Group gap="xs">
              <Button variant="filled" size="xs">
                {t('dataset_select.add')}
              </Button>
              <Button variant="default" size="xs">
                {t('dataset_select.remove')}
              </Button>
            </Group>
            <Group gap="xs">
              <TextInput
                size="xs"
                placeholder={t('dataset_select.search_list')}
                leftSection={<IconSearch size={14} />}
              />
              <Button size="xs">{t('dataset_select.search')}</Button>
            </Group>
          </Group>
          <DataTable
            columns={[
              {
                width: '200px',
                accessor: 'name',
                title: t('dataset_select.name'),
              },
              {
                accessor: 'description',
                title: t('dataset_select.description'),
              },
              {
                width: '100px',
                accessor: 'action',
                title: t('dataset_select.action'),
              },
            ]}
            records={[]}
          />
        </Card>
        <Button fullWidth variant="default">
          {t('dataset_select.select_data')}
        </Button>
      </Stack>
    </InputWrapper>
  );
};
