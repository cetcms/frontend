import { useLazyQuery } from '@apollo/client/react';
import { Group, LoadingOverlay } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Company, FindOneCompanyDocument, PermissionAlias } from 'src/graphql';
import { PagePermissionOption, useAuthStore } from 'src/store';

import { CompanyForm } from './Company.form';

export const CompanyFormPage: React.FC & PagePermissionOption = () => {
  const { auth } = useAuthStore();
  const [loading, setLoading] = useState(true);
  const [findOneCompany, { data }] = useLazyQuery(FindOneCompanyDocument);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id') || auth?.companyId;
  useEffect(() => {
    if (id) {
      findOneCompany({ variables: { id } }).then(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id]);

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
