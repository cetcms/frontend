import { useQuery } from '@apollo/client/react';
import { Group, LoadingOverlay } from '@mantine/core';
import { useSearchParams } from 'react-router';
import { FindOneMemberDocument } from 'src/graphql';

import { MemberForm } from './Member.form';

export const MemberFormPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const { data, loading } = useQuery(FindOneMemberDocument, {
    skip: !id,
    variables: { id: id ?? '' },
  });

  if (loading) {
    return <LoadingOverlay visible />;
  }
  return (
    <Group p="md" justify="start">
      <MemberForm item={data?.findOneMember} />
    </Group>
  );
};
