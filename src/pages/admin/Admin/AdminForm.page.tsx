import { useQuery } from '@apollo/client/react';
import { Group, LoadingOverlay } from '@mantine/core';
import { useSearchParams } from 'react-router';
import { Admin, FindOneAdminDocument } from 'src/graphql';

import { AdminForm } from './Admin.form';

export const AdminFormPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { data, loading } = useQuery(FindOneAdminDocument, {
    skip: !id,
    variables: { id: id ?? '' },
  });

  if (loading) {
    return <LoadingOverlay visible />;
  }
  return (
    <Group p="md" justify="start">
      <AdminForm item={data?.findOneAdmin as Admin} />
    </Group>
  );
};
