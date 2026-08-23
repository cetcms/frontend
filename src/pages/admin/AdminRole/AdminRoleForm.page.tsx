import { useQuery } from '@apollo/client/react';
import { Group, LoadingOverlay } from '@mantine/core';
import { useSearchParams } from 'react-router';
import { FindOneAdminRoleDocument } from 'src/graphql';

import { AdminRoleForm } from './AdminRole.form';

export const AdminRoleFormPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { data, loading } = useQuery(FindOneAdminRoleDocument, {
    skip: !id,
    variables: { id: id ?? '' },
  });

  if (loading) {
    return <LoadingOverlay visible />;
  }
  return (
    <Group p="md" justify="start">
      <AdminRoleForm item={data?.findOneAdminRole} />
    </Group>
  );
};
