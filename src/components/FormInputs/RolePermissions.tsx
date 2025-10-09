import { Accordion, Card, Center, Checkbox, InputWrapper, InputWrapperProps, SimpleGrid, Stack } from '@mantine/core';
import React from 'react';

export type RolePermissionsProps = InputWrapperProps & {};

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

// 测试函数，用于验证构建树的方法是否正确
export const testBuildPermissionTree = () => {
  const tree = buildPermissionTree(permissions);
  console.log('Permission Tree:', tree);
};

testBuildPermissionTree();

export const RolePermissions: React.FC<RolePermissionsProps> = () => {
  return (
    <InputWrapper>
      <Accordion variant="contained">
        {['Module1', 'Module2'].map((module, index) => (
          <Accordion.Item value={module} key={index} style={{ overflow: 'hidden' }}>
            <Center>
              <Accordion.Control>
                <Checkbox defaultChecked label={module} />
              </Accordion.Control>
            </Center>
            <Accordion.Panel>
              <Stack gap="xs">
                {['Subject1', 'Subject2'].map((subject, index) => (
                  <Card withBorder p="xs" key={index}>
                    <Stack gap="xs">
                      <Checkbox defaultChecked label={subject} indeterminate />
                      <SimpleGrid spacing="xs" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                        {['Action1', 'Action2'].map((action, index) => (
                          <Checkbox defaultChecked label={action} key={index} />
                        ))}
                      </SimpleGrid>
                    </Stack>
                  </Card>
                ))}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </InputWrapper>
  );
};
