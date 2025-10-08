import { useLazyQuery } from '@apollo/client/react';
import { Box, LoadingOverlay } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { Admin, FindOneAdminDocument } from 'src/graphql';

import { AdminForm } from './Admin.form';

export const AdminFormPage = () => {
  const [loading, setLoading] = useState(true);
  const [findOneAdmin, { data }] = useLazyQuery(FindOneAdminDocument);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  useEffect(() => {
    if (id) {
      findOneAdmin({ variables: { id } }).then(() => {
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
      <AdminForm item={data?.findOneAdmin as Admin} />
    </Box>
  );
};
