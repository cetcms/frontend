import { useQuery } from '@apollo/client/react';
import { Group, LoadingOverlay } from '@mantine/core';
import React from 'react';
import { useSearchParams } from 'react-router';
import { Company, FindOneCompanyDocument, PermissionAlias } from 'src/graphql';
import { PagePermissionOption, useAuthStore } from 'src/store';

import { CompanyForm } from './Company.form';

export const CompanyFormPage: React.FC & PagePermissionOption = () => {
  const { auth } = useAuthStore();
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id') || auth?.companyId;
  const { data, loading } = useQuery(FindOneCompanyDocument, {
    skip: !id,
    variables: { id: id ?? '' },
  });

  if (loading) {
    return <LoadingOverlay visible />;
  }
  return (
    <Group p="md" justify="start">
      <CompanyForm item={data?.findOneCompany as Company} />
    </Group>
  );
};

CompanyFormPage.permissions = {
  AND: [PermissionAlias.FindOneCompany],
};
