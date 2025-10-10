import { Button, Card, Group, InputWrapper, InputWrapperProps, Stack, TextInput } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';
import React from 'react';

export type DatasetSelectProps = InputWrapperProps & {};

export const DatasetSelect: React.FC<DatasetSelectProps> = (props) => {
  return (
    <InputWrapper {...props}>
      <Stack gap="xs">
        <Card withBorder>
          <Group justify="space-between">
            <Group gap="xs">
              <Button variant="filled" size="xs">
                添加
              </Button>
              <Button variant="default" size="xs">
                移除
              </Button>
            </Group>
            <Group gap="xs">
              <TextInput size="xs" placeholder="搜索列表" leftSection={<IconSearch size={14} />} />
              <Button size="xs">搜索</Button>
            </Group>
          </Group>
          <DataTable
            columns={[
              {
                width: '200px',
                accessor: 'name',
                title: '名称',
              },
              {
                accessor: 'description',
                title: '描述',
              },
              {
                width: '100px',
                accessor: 'action',
                title: '操作',
              },
            ]}
            records={[]}
          />
        </Card>
        <Button fullWidth variant="default">
          选择数据
        </Button>
      </Stack>
    </InputWrapper>
  );
};
