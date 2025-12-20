import { useLazyQuery } from '@apollo/client/react';
import { Group, LoadingOverlay } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { FindOneMemberDocument, Member } from 'src/graphql';

import { MemberForm } from './Member.form';

export const MemberFormPage = () => {
  const [loading, setLoading] = useState(true);
  const [findOneMember, { data }] = useLazyQuery(FindOneMemberDocument);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  useEffect(() => {
    if (id) {
      findOneMember({ variables: { id } }).then(() => {
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
      <MemberForm item={data?.findOneMember as Member} />
    </Group>
  );
};
