import { useLazyQuery } from '@apollo/client/react';
import { Group, LoadingOverlay } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { FindOneWebsiteDocument, PermissionAlias, Website } from 'src/graphql';
import { PagePermissionOption } from 'src/store';

import { WebsiteForm } from './Website.form';

export const WebsiteFormPage: React.FC & PagePermissionOption = () => {
  const [loading, setLoading] = useState(true);
  const [findOneWebsite, { data }] = useLazyQuery(FindOneWebsiteDocument);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  useEffect(() => {
    if (id) {
      findOneWebsite({ variables: { id } }).then(() => {
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
      <WebsiteForm item={data?.findOneWebsite as Website} />
    </Group>
  );
};

WebsiteFormPage.permissions = {
  AND: [PermissionAlias.FindOneWebsite],
};
