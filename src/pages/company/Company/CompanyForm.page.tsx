import { useLazyQuery } from '@apollo/client/react';
import { Box, LoadingOverlay } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Company, FindOneCompanyDocument } from 'src/graphql';

import { CompanyForm } from './Company.form';

export const CompanyFormPage = () => {
  const [loading, setLoading] = useState(true);
  const [findOneCompany, { data }] = useLazyQuery(FindOneCompanyDocument);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
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
    <Box m="md">
      <CompanyForm item={data?.findOneCompany as Company} />
    </Box>
  );
};
