import { Accordion, Card, Center, Checkbox, InputWrapper, InputWrapperProps, SimpleGrid, Stack } from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';

export type RolePermissionsProps = InputWrapperProps & {
  value?: string[];
  onChange?: (value: string[]) => void;
  disabled?: boolean; // 组件级禁用
  disabledActions?: string[]; // action value级禁用
};

interface PermissionItem {
  subject: string;
  subjectLabel: string;
  group: string;
  action: string;
  actionLabel: string;
  targets: any[];
}

interface TreeNode {
  id: string;
  label: string;
  value: string;
  children?: TreeNode[];
}

export const permissions: PermissionItem[] = [
  {
    subject: 'UserResolver',
    subjectLabel: '用户管理',
    group: 'User',
    action: 'findSelfUser',
    actionLabel: '查询当前用户信息',
    targets: [],
  },
  {
    subject: 'UserResolver',
    subjectLabel: '用户管理',
    group: 'User',
    action: 'findOneUser',
    actionLabel: '查询单个用户',
    targets: [],
  },
  {
    subject: 'UserResolver',
    subjectLabel: '用户管理',
    group: 'User',
    action: 'paginateUsers',
    actionLabel: '分页查询用户',
    targets: [],
  },
  {
    subject: 'UserResolver',
    subjectLabel: '用户管理',
    group: 'User',
    action: 'createOneUser',
    actionLabel: '新增用户',
    targets: [],
  },
  {
    subject: 'UserResolver',
    subjectLabel: '用户管理',
    group: 'User',
    action: 'updateSelfUser',
    actionLabel: '修改当前用户信息',
    targets: [],
  },
  {
    subject: 'UserResolver',
    subjectLabel: '用户管理',
    group: 'User',
    action: 'updateOneUser',
    actionLabel: '修改用户',
    targets: [],
  },
  {
    subject: 'AdminCompanyResolver',
    subjectLabel: '管理员企业管理',
    group: 'Admin',
    action: 'findOneAdminCompany',
    actionLabel: '查询单个管理员企业关联',
    targets: [],
  },
  {
    subject: 'AdminCompanyResolver',
    subjectLabel: '管理员企业管理',
    group: 'Admin',
    action: 'paginateAdminCompanies',
    actionLabel: '分页查询管理员企业关联',
    targets: [],
  },
  {
    subject: 'AdminCompanyResolver',
    subjectLabel: '管理员企业管理',
    group: 'Admin',
    action: 'createOneAdminCompany',
    actionLabel: '新增管理员企业关联',
    targets: [],
  },
  {
    subject: 'AdminCompanyResolver',
    subjectLabel: '管理员企业管理',
    group: 'Admin',
    action: 'updateOneAdminCompany',
    actionLabel: '修改管理员企业关联',
    targets: [],
  },
  {
    subject: 'AdminCompanyResolver',
    subjectLabel: '管理员企业管理',
    group: 'Admin',
    action: 'deleteAdminCompany',
    actionLabel: '删除管理员企业关联',
    targets: [],
  },
  {
    subject: 'AdminRoleResolver',
    subjectLabel: '管理员角色管理',
    group: 'Admin',
    action: 'findOneAdminRole',
    actionLabel: '查询单个管理员角色',
    targets: [],
  },
  {
    subject: 'AdminRoleResolver',
    subjectLabel: '管理员角色管理',
    group: 'Admin',
    action: 'paginateAdminRoles',
    actionLabel: '分页查询管理员角色',
    targets: [],
  },
  {
    subject: 'AdminRoleResolver',
    subjectLabel: '管理员角色管理',
    group: 'Admin',
    action: 'createOneAdminRole',
    actionLabel: '新增管理员角色',
    targets: [],
  },
  {
    subject: 'AdminRoleResolver',
    subjectLabel: '管理员角色管理',
    group: 'Admin',
    action: 'updateOneAdminRole',
    actionLabel: '修改管理员角色',
    targets: [],
  },
  {
    subject: 'AdminRoleResolver',
    subjectLabel: '管理员角色管理',
    group: 'Admin',
    action: 'listAdminRolePermissions',
    actionLabel: '获取企业角色权限列表',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员管理',
    group: 'Admin',
    action: 'findSelfAdmin',
    actionLabel: '查询当前管理员信息',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员管理',
    group: 'Admin',
    action: 'findOneAdmin',
    actionLabel: '查询单个管理员',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员管理',
    group: 'Admin',
    action: 'paginateAdmins',
    actionLabel: '分页查询管理员',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员管理',
    group: 'Admin',
    action: 'createOneAdmin',
    actionLabel: '新增管理员',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员管理',
    group: 'Admin',
    action: 'updateSelfAdmin',
    actionLabel: '修改当前管理员信息',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员管理',
    group: 'Admin',
    action: 'updateOneAdmin',
    actionLabel: '修改管理员',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员管理',
    group: 'Admin',
    action: 'findAdminById',
    actionLabel: '根据ID查询管理员',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员管理',
    group: 'Admin',
    action: 'findAdminByEmail',
    actionLabel: '根据邮箱查询管理员',
    targets: [],
  },
  {
    subject: 'CompanyRoleResolver',
    subjectLabel: '企业角色管理',
    group: 'Company',
    action: 'findOneCompanyRole',
    actionLabel: '查询单个企业角色',
    targets: [],
  },
  {
    subject: 'CompanyRoleResolver',
    subjectLabel: '企业角色管理',
    group: 'Company',
    action: 'paginateCompanyRoles',
    actionLabel: '分页查询企业角色',
    targets: [],
  },
  {
    subject: 'CompanyRoleResolver',
    subjectLabel: '企业角色管理',
    group: 'Company',
    action: 'createOneCompanyRole',
    actionLabel: '新增企业角色',
    targets: [],
  },
  {
    subject: 'CompanyRoleResolver',
    subjectLabel: '企业角色管理',
    group: 'Company',
    action: 'updateOneCompanyRole',
    actionLabel: '修改企业角色',
    targets: [],
  },
  {
    subject: 'CompanyRoleResolver',
    subjectLabel: '企业角色管理',
    group: 'Company',
    action: 'listCompanyRolePermissions',
    actionLabel: '获取企业角色权限列表',
    targets: [],
  },
  {
    subject: 'CompanyUserResolver',
    subjectLabel: '企业用户管理',
    group: 'Company',
    action: 'findOneCompanyUser',
    actionLabel: '查询单个企业用户关联',
    targets: [],
  },
  {
    subject: 'CompanyUserResolver',
    subjectLabel: '企业用户管理',
    group: 'Company',
    action: 'paginateCompanyUsers',
    actionLabel: '分页查询企业用户关联',
    targets: [],
  },
  {
    subject: 'CompanyUserResolver',
    subjectLabel: '企业用户管理',
    group: 'Company',
    action: 'createOneCompanyUser',
    actionLabel: '新增企业用户关联',
    targets: [],
  },
  {
    subject: 'CompanyUserResolver',
    subjectLabel: '企业用户管理',
    group: 'Company',
    action: 'updateOneCompanyUser',
    actionLabel: '修改企业用户关联',
    targets: [],
  },
  {
    subject: 'CompanyResolver',
    subjectLabel: '企业管理',
    group: 'Company',
    action: 'findSelfCompany',
    actionLabel: '查询当前企业信息',
    targets: [],
  },
  {
    subject: 'CompanyResolver',
    subjectLabel: '企业管理',
    group: 'Company',
    action: 'findOneCompany',
    actionLabel: '查询单个企业',
    targets: [],
  },
  {
    subject: 'CompanyResolver',
    subjectLabel: '企业管理',
    group: 'Company',
    action: 'paginateCompanies',
    actionLabel: '分页查询企业',
    targets: [],
  },
  {
    subject: 'CompanyResolver',
    subjectLabel: '企业管理',
    group: 'Company',
    action: 'createOneCompany',
    actionLabel: '新增企业',
    targets: [],
  },
  {
    subject: 'CompanyResolver',
    subjectLabel: '企业管理',
    group: 'Company',
    action: 'updateSelfCompany',
    actionLabel: '修改当前企业信息',
    targets: [],
  },
  {
    subject: 'CompanyResolver',
    subjectLabel: '企业管理',
    group: 'Company',
    action: 'updateOneCompany',
    actionLabel: '修改企业',
    targets: [],
  },
];
/**
 * 将 permissions 转换为嵌套树结构，按照 module > subject > action 层级
 * @param permissions 权限列表
 * @returns 嵌套树结构
 */
export const buildPermissionTree = (permissions: PermissionItem[]): TreeNode[] => {
  const moduleMap: Record<string, TreeNode> = {};
  const subjectMap: Record<string, TreeNode> = {};

  // 先收集所有唯一的模块
  permissions.forEach((permission) => {
    if (!moduleMap[permission.group]) {
      moduleMap[permission.group] = {
        id: permission.group,
        label: permission.group,
        value: permission.group,
        children: [],
      };
    }
  });

  // 收集所有唯一的主题，并关联到对应模块
  permissions.forEach((permission) => {
    const subjectId = `${permission.group}-${permission.subject}`;
    if (!subjectMap[subjectId]) {
      subjectMap[subjectId] = {
        id: subjectId,
        label: permission.subjectLabel,
        value: permission.subject,
        children: [],
      };

      // 将主题添加到对应模块的子节点中
      moduleMap[permission.group].children!.push(subjectMap[subjectId]);
    }
  });

  // 添加操作到对应的主体下
  permissions.forEach((permission) => {
    const subjectId = `${permission.group}-${permission.subject}`;
    const actionNode: TreeNode = {
      id: `${permission.group}-${permission.subject}-${permission.action}`,
      label: permission.actionLabel,
      value: `${permission.subject}:${permission.action}`,
    };

    subjectMap[subjectId].children!.push(actionNode);
  });

  // 返回模块数组作为根节点
  return Object.values(moduleMap);
};

export const RolePermissions: React.FC<RolePermissionsProps> = ({
  value = [],
  onChange,
  disabled = false,
  disabledActions = [],
  ...props
}) => {
  const permissionsTree = buildPermissionTree(permissions);
  const [checkedValues, setCheckedValues] = useState<string[]>(value);
  const skipEffectRef = useRef(false);

  // 当外部 value 变化时更新内部状态
  useEffect(() => {
    if (!skipEffectRef.current) {
      setCheckedValues(value);
    }
    skipEffectRef.current = false;
  }, [value]);

  const handleActionChange = (actionValue: string, checked: boolean) => {
    // 如果action被禁用，则不处理变化
    if (disabled || disabledActions.includes(actionValue)) {
      return;
    }

    const newCheckedValues = checked
      ? [...checkedValues, actionValue]
      : checkedValues.filter((value) => value !== actionValue);

    skipEffectRef.current = true;
    setCheckedValues(newCheckedValues);
    onChange?.(newCheckedValues);
  };

  const handleSubjectChange = (subjectNode: TreeNode, checked: boolean) => {
    // 如果组件被禁用，则不处理变化
    if (disabled) {
      return;
    }

    const actionValues = subjectNode.children?.map((child) => child.value) || [];
    let newCheckedValues = [...checkedValues];

    if (checked) {
      // 添加所有未禁用的子项
      actionValues.forEach((value) => {
        if (!newCheckedValues.includes(value) && !disabledActions.includes(value)) {
          newCheckedValues.push(value);
        }
      });
    } else {
      // 移除所有未禁用的子项
      newCheckedValues = newCheckedValues.filter((value) => {
        // 如果action被禁用，保持原状态
        if (disabledActions.includes(value)) {
          return true;
        }
        // 否则根据操作决定是否移除
        return !actionValues.includes(value);
      });
    }

    skipEffectRef.current = true;
    setCheckedValues(newCheckedValues);
    onChange?.(newCheckedValues);
  };

  const handleModuleChange = (moduleNode: TreeNode, checked: boolean) => {
    // 如果组件被禁用，则不处理变化
    if (disabled) {
      return;
    }

    const allActionValues: string[] = [];

    // 获取模块下所有操作
    moduleNode.children?.forEach((subject) => {
      subject.children?.forEach((action) => {
        allActionValues.push(action.value);
      });
    });

    let newCheckedValues = [...checkedValues];

    if (checked) {
      // 添加所有未禁用的子项
      allActionValues.forEach((value) => {
        if (!newCheckedValues.includes(value) && !disabledActions.includes(value)) {
          newCheckedValues.push(value);
        }
      });
    } else {
      // 移除所有未禁用的子项
      newCheckedValues = newCheckedValues.filter((value) => {
        // 如果action被禁用，保持原状态
        if (disabledActions.includes(value)) {
          return true;
        }
        // 否则根据操作决定是否移除
        return !allActionValues.includes(value);
      });
    }

    skipEffectRef.current = true;
    setCheckedValues(newCheckedValues);
    onChange?.(newCheckedValues);
  };

  // 检查是否所有子项都被选中（忽略被禁用的项）
  const isAllChildrenChecked = (node: TreeNode): boolean => {
    if (!node.children || node.children.length === 0) {
      // 叶子节点，直接返回选中状态
      return checkedValues.includes(node.value);
    }

    // 非叶子节点，检查所有子节点
    return node.children.every((child) => {
      // 如果是操作节点且被禁用，跳过检查
      if ((!child.children || child.children.length === 0) && disabledActions.includes(child.value)) {
        return true; // 忽略被禁用的操作
      }
      return isAllChildrenChecked(child);
    });
  };

  // 检查是否有部分子项被选中（忽略被禁用的项）
  const isSomeChildrenChecked = (node: TreeNode): boolean => {
    if (!node.children || node.children.length === 0) {
      // 叶子节点，直接返回选中状态
      return checkedValues.includes(node.value);
    }

    // 非叶子节点，检查所有子节点
    return node.children.some((child) => {
      // 如果是操作节点且被禁用，跳过检查
      if ((!child.children || child.children.length === 0) && disabledActions.includes(child.value)) {
        return false; // 忽略被禁用的操作
      }
      return isSomeChildrenChecked(child);
    });
  };

  const renderTree = (nodes: TreeNode[]) => {
    return nodes.map((node) => {
      // 如果是操作级别（没有子节点）
      if (!node.children || node.children.length === 0) {
        const isActionDisabled = disabled || disabledActions.includes(node.value);
        return (
          <Checkbox
            key={node.id}
            label={node.label}
            checked={checkedValues.includes(node.value)}
            onChange={(event) => handleActionChange(node.value, event.currentTarget.checked)}
            disabled={isActionDisabled}
          />
        );
      }

      // 如果是主题级别（有操作子节点）
      if (node.children.every((child) => !child.children || child.children.length === 0)) {
        const allChecked = isAllChildrenChecked(node);
        const someChecked = isSomeChildrenChecked(node);
        const indeterminate = someChecked && !allChecked;

        return (
          <Card withBorder p="xs" key={node.id}>
            <Stack gap="xs">
              <Checkbox
                label={node.label}
                checked={allChecked}
                indeterminate={indeterminate}
                onChange={(event) => handleSubjectChange(node, event.currentTarget.checked)}
                disabled={disabled}
              />
              <SimpleGrid spacing="xs" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {renderTree(node.children)}
              </SimpleGrid>
            </Stack>
          </Card>
        );
      }

      // 如果是模块级别（有主题子节点）
      const allChecked = isAllChildrenChecked(node);
      const someChecked = isSomeChildrenChecked(node);
      const indeterminate = someChecked && !allChecked;

      return (
        <Accordion.Item value={node.id} key={node.id} style={{ overflow: 'hidden' }}>
          <Center>
            <Accordion.Control>
              <Checkbox
                label={node.label}
                checked={allChecked}
                indeterminate={indeterminate}
                onChange={(event) => handleModuleChange(node, event.currentTarget.checked)}
                disabled={disabled}
              />
            </Accordion.Control>
          </Center>
          <Accordion.Panel>
            <Stack gap="xs">{renderTree(node.children || [])}</Stack>
          </Accordion.Panel>
        </Accordion.Item>
      );
    });
  };

  return (
    <InputWrapper {...props}>
      <Accordion variant="contained">{renderTree(permissionsTree)}</Accordion>
    </InputWrapper>
  );
};
