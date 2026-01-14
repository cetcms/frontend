import { useLazyQuery } from '@apollo/client/react';
import { Group, LoadingOverlay } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import { FindOneWebsiteDocument, Website } from 'src/graphql';
import { PagePermissionOption } from 'src/store';

import { WebsiteForm } from './Website.form';

export const WebsiteFormPage: React.FC & PagePermissionOption = () => {
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  const [findOneWebsite, { data }] = useLazyQuery(FindOneWebsiteDocument);

  useEffect(() => {
    if (id) {
      findOneWebsite({ variables: { id } }).then(() => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [id, findOneWebsite]);

  if (loading) {
    return <LoadingOverlay visible />;
  }

  return (
    <Group p="md" justify="start">
      <WebsiteForm item={data?.findOneWebsite as Website} />
    </Group>
  );
};

// 注：添加和编辑页面共用同一个组件，此处的权限是编辑时的权限
// 如果需要更细粒度的权限控制，应该分开为两个组件：WebsiteAddPage 和 WebsiteEditPage
// 目前为了兼容添加页面，这里不设置权限，由菜单和路由守卫来控制访问
// WebsiteFormPage.permissions = {
//   AND: [PermissionAlias.FindOneWebsite],
// };
