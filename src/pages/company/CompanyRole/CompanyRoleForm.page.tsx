import { useQuery } from '@apollo/client/react';
import { Group, LoadingOverlay } from '@mantine/core';
import { useSearchParams } from 'react-router';
import { CompanyRole, FindOneCompanyRoleDocument } from 'src/graphql';

import { CompanyRoleForm } from './CompanyRole.form';

export const CompanyRoleFormPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { data, loading } = useQuery(FindOneCompanyRoleDocument, {
    skip: !id,
    variables: { id: id ?? '' },
  });

  if (loading) {
    return <LoadingOverlay visible />;
  }
  return (
    <Group p="md" justify="start">
      <CompanyRoleForm item={data?.findOneCompanyRole as CompanyRole} />
    </Group>
  );
};
