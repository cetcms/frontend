import { useQuery } from '@apollo/client/react';
import { Select, SelectProps } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { CompanyRole, CompanyRoleWhereInput, PaginateCompanyRolesDocument } from 'src/graphql';

export const CompanyRoleSelect: React.FC<SelectProps> = (props) => {
  const [where, setWhere] = useState<CompanyRoleWhereInput>(() => {
    if (props.value) {
      return { OR: [{ id: { equals: props.value } }, { id: { not: { equals: '' } } }] };
    }
    return {};
  });
  const { data, loading } = useQuery(PaginateCompanyRolesDocument, {
    variables: {
      where,
    },
  });
  const handleSearchChange = (value: string) => {
    const OR: CompanyRoleWhereInput[] = [];
    if (props.value) {
      OR.push({ id: { equals: props.value } });
    }
    OR.push({ name: { contains: value } });
    OR.push({ code: { contains: value } });
    OR.push({ description: { contains: value } });
    OR.push({ id: { not: { equals: '' } } });
    setWhere({ OR });
  };
  const handleData = (items: CompanyRole[]) => {
    return items.map((item) => ({
      value: item.id,
      label: item.name,
    }));
  };

  // 自动选择第一个选项的逻辑
  useEffect(() => {
    if (!loading && data?.paginateCompanyRoles?.items?.length && !props.value) {
      const firstRole = data.paginateCompanyRoles.items[0] as CompanyRole;
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
      data={handleData((data?.paginateCompanyRoles.items ?? []) as CompanyRole[])}
    />
  );
};
