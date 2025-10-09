import { useLazyQuery } from '@apollo/client/react';
import { Box, LoadingOverlay } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { AdminRole, FindOneAdminRoleDocument } from 'src/graphql';

import { AdminRoleForm } from './AdminRole.form';

export const AdminRoleFormPage = () => {
  const [loading, setLoading] = useState(true);
  const [findOneAdminRole, { data }] = useLazyQuery(FindOneAdminRoleDocument);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  useEffect(() => {
    if (id) {
      findOneAdminRole({ variables: { id } }).then(() => {
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
      <AdminRoleForm item={data?.findOneAdminRole as AdminRole} />
    </Box>
  );
};