import { useLazyQuery } from '@apollo/client/react';
import { Group, LoadingOverlay } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { FindOneUserDocument, User } from 'src/graphql';

import { UserForm } from './User.form';

export const UserFormPage = () => {
  const [loading, setLoading] = useState(true);
  const [findOneUser, { data }] = useLazyQuery(FindOneUserDocument);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  useEffect(() => {
    if (id) {
      findOneUser({ variables: { id } }).then(() => {
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
    <Group p="md" justify="center">
      <UserForm item={data?.findOneUser as User} />
    </Group>
  );
};
