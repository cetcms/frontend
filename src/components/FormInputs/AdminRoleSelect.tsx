import { useQuery } from '@apollo/client/react';
import { Select, SelectProps } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { AdminRoleFragment, AdminRoleWhereInput, PaginateAdminRolesDocument } from 'src/graphql';

export const AdminRoleSelect: React.FC<SelectProps> = (props) => {
  const [where, setWhere] = useState<AdminRoleWhereInput>(() => {
    if (props.value) {
      return { OR: [{ id: { equals: props.value } }, { id: { not: { equals: '' } } }] };
    }
    return {};
  });
  const { data, loading } = useQuery(PaginateAdminRolesDocument, {
    variables: {
      where,
    },
  });
  const handleSearchChange = (value: string) => {
    const OR: AdminRoleWhereInput[] = [];
    if (props.value) {
      OR.push({ id: { equals: props.value } });
    }
    OR.push({ name: { contains: value } });
    OR.push({ code: { contains: value } });
    OR.push({ description: { contains: value } });
    OR.push({ id: { not: { equals: '' } } });
    setWhere({ OR });
  };
  const handleData = (items: AdminRoleFragment[]) => {
    return items.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  };

  // 自动选择第一个选项的逻辑
  useEffect(() => {
    if (!loading && data?.paginateAdminRoles?.items?.length && !props.value) {
      const firstRole = data.paginateAdminRoles.items[0];
      // 调用 onChange 方法设置第一个选项为默认值
      if (props.onChange) {
        props.onChange(firstRole.id, { value: firstRole.id, label: firstRole.name });
      }
    }
  }, [data, loading, props.value, props.onChange]);

  return (
    <Select
      {...props}
      searchable
      onSearchChange={handleSearchChange}
      data={handleData(data?.paginateAdminRoles.items ?? [])}
    />
  );
};
