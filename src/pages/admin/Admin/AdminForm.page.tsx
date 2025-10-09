import { useLazyQuery } from '@apollo/client/react';
import { Group, LoadingOverlay } from '@mantine/core';
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
    <Group p="md" justify="start">
      <AdminForm item={data?.findOneAdmin as Admin} />
    </Group>
  );
};
