import { useLazyQuery } from '@apollo/client/react';
import { Box, LoadingOverlay } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { CompanyRole, FindOneCompanyRoleDocument } from 'src/graphql';

import { CompanyRoleForm } from './CompanyRole.form';

export const CompanyRoleFormPage = () => {
  const [loading, setLoading] = useState(true);
  const [findOneCompanyRole, { data }] = useLazyQuery(FindOneCompanyRoleDocument);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  useEffect(() => {
    if (id) {
      findOneCompanyRole({ variables: { id } }).then(() => {
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
    <Box m="md">
      <CompanyRoleForm item={data?.findOneCompanyRole as CompanyRole} />
    </Box>
  );
};
