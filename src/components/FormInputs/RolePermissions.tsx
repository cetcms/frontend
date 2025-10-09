import { Accordion, Card, Center, Checkbox, InputWrapper, InputWrapperProps, SimpleGrid, Stack } from '@mantine/core';
import React from 'react';

export type RolePermissionsProps = InputWrapperProps & {};

const permissions = [
  {
    subject: 'UserResolver',
    subjectLabel: '用户模块',
    module: 'user',
    action: 'findSelfUser',
    actionLabel: '查询当前用户信息',
    targets: [],
  },
  {
    subject: 'UserResolver',
    subjectLabel: '用户模块',
    module: 'user',
    action: 'findOneUser',
    actionLabel: '查询单个用户',
    targets: [],
  },
  {
    subject: 'UserResolver',
    subjectLabel: '用户模块',
    module: 'user',
    action: 'paginateUsers',
    actionLabel: '分页查询用户',
    targets: [],
  },
  {
    subject: 'UserResolver',
    subjectLabel: '用户模块',
    module: 'user',
    action: 'createOneUser',
    actionLabel: '新增用户',
    targets: [],
  },
  {
    subject: 'UserResolver',
    subjectLabel: '用户模块',
    module: 'user',
    action: 'updateSelfUser',
    actionLabel: '修改当前用户信息',
    targets: [],
  },
  {
    subject: 'UserResolver',
    subjectLabel: '用户模块',
    module: 'user',
    action: 'updateOneUser',
    actionLabel: '修改用户',
    targets: [],
  },
  {
    subject: 'AdminCompanyResolver',
    subjectLabel: '管理员企业关联模块',
    module: 'admincompany',
    action: 'findOneAdminCompany',
    actionLabel: '查询单个管理员企业关联',
    targets: [],
  },
  {
    subject: 'AdminCompanyResolver',
    subjectLabel: '管理员企业关联模块',
    module: 'admincompany',
    action: 'paginateAdminCompanies',
    actionLabel: '分页查询管理员企业关联',
    targets: [],
  },
  {
    subject: 'AdminCompanyResolver',
    subjectLabel: '管理员企业关联模块',
    module: 'admincompany',
    action: 'createOneAdminCompany',
    actionLabel: '新增管理员企业关联',
    targets: [],
  },
  {
    subject: 'AdminCompanyResolver',
    subjectLabel: '管理员企业关联模块',
    module: 'admincompany',
    action: 'updateOneAdminCompany',
    actionLabel: '修改管理员企业关联',
    targets: [],
  },
  {
    subject: 'AdminCompanyResolver',
    subjectLabel: '管理员企业关联模块',
    module: 'admincompany',
    action: 'deleteAdminCompany',
    actionLabel: '删除管理员企业关联',
    targets: [],
  },
  {
    subject: 'AdminRoleResolver',
    subjectLabel: '管理员角色模块',
    module: 'adminrole',
    action: 'findOneAdminRole',
    actionLabel: '查询单个管理员角色',
    targets: [],
  },
  {
    subject: 'AdminRoleResolver',
    subjectLabel: '管理员角色模块',
    module: 'adminrole',
    action: 'paginateAdminRoles',
    actionLabel: '分页查询管理员角色',
    targets: [],
  },
  {
    subject: 'AdminRoleResolver',
    subjectLabel: '管理员角色模块',
    module: 'adminrole',
    action: 'createOneAdminRole',
    actionLabel: '新增管理员角色',
    targets: [],
  },
  {
    subject: 'AdminRoleResolver',
    subjectLabel: '管理员角色模块',
    module: 'adminrole',
    action: 'updateOneAdminRole',
    actionLabel: '修改管理员角色',
    targets: [],
  },
  {
    subject: 'AdminRoleResolver',
    subjectLabel: '管理员角色模块',
    module: 'adminrole',
    action: 'listAdminRolePermissions',
    actionLabel: '获取企业角色权限列表',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员模块',
    module: 'admin',
    action: 'findSelfAdmin',
    actionLabel: '查询当前管理员信息',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员模块',
    module: 'admin',
    action: 'findOneAdmin',
    actionLabel: '查询单个管理员',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员模块',
    module: 'admin',
    action: 'paginateAdmins',
    actionLabel: '分页查询管理员',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员模块',
    module: 'admin',
    action: 'createOneAdmin',
    actionLabel: '新增管理员',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员模块',
    module: 'admin',
    action: 'updateSelfAdmin',
    actionLabel: '修改当前管理员信息',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员模块',
    module: 'admin',
    action: 'updateOneAdmin',
    actionLabel: '修改管理员',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员模块',
    module: 'admin',
    action: 'findAdminById',
    actionLabel: '根据ID查询管理员',
    targets: [],
  },
  {
    subject: 'AdminResolver',
    subjectLabel: '管理员模块',
    module: 'admin',
    action: 'findAdminByEmail',
    actionLabel: '根据邮箱查询管理员',
    targets: [],
  },
  {
    subject: 'CompanyRoleResolver',
    subjectLabel: '企业角色模块',
    module: 'companyrole',
    action: 'findOneCompanyRole',
    actionLabel: '查询单个企业角色',
    targets: [],
  },
  {
    subject: 'CompanyRoleResolver',
    subjectLabel: '企业角色模块',
    module: 'companyrole',
    action: 'paginateCompanyRoles',
    actionLabel: '分页查询企业角色',
    targets: [],
  },
  {
    subject: 'CompanyRoleResolver',
    subjectLabel: '企业角色模块',
    module: 'companyrole',
    action: 'createOneCompanyRole',
    actionLabel: '新增企业角色',
    targets: [],
  },
  {
    subject: 'CompanyRoleResolver',
    subjectLabel: '企业角色模块',
    module: 'companyrole',
    action: 'updateOneCompanyRole',
    actionLabel: '修改企业角色',
    targets: [],
  },
  {
    subject: 'CompanyRoleResolver',
    subjectLabel: '企业角色模块',
    module: 'companyrole',
    action: 'listCompanyRolePermissions',
    actionLabel: '获取企业角色权限列表',
    targets: [],
  },
  {
    subject: 'CompanyUserResolver',
    subjectLabel: '企业用户关联模块',
    module: 'companyuser',
    action: 'findOneCompanyUser',
    actionLabel: '查询单个企业用户关联',
    targets: [],
  },
  {
    subject: 'CompanyUserResolver',
    subjectLabel: '企业用户关联模块',
    module: 'companyuser',
    action: 'paginateCompanyUsers',
    actionLabel: '分页查询企业用户关联',
    targets: [],
  },
  {
    subject: 'CompanyUserResolver',
    subjectLabel: '企业用户关联模块',
    module: 'companyuser',
    action: 'createOneCompanyUser',
    actionLabel: '新增企业用户关联',
    targets: [],
  },
  {
    subject: 'CompanyUserResolver',
    subjectLabel: '企业用户关联模块',
    module: 'companyuser',
    action: 'updateOneCompanyUser',
    actionLabel: '修改企业用户关联',
    targets: [],
  },
  {
    subject: 'CompanyResolver',
    subjectLabel: '企业模块',
    module: 'company',
    action: 'findSelfCompany',
    actionLabel: '查询当前企业信息',
    targets: [],
  },
  {
    subject: 'CompanyResolver',
    subjectLabel: '企业模块',
    module: 'company',
    action: 'findOneCompany',
    actionLabel: '查询单个企业',
    targets: [],
  },
  {
    subject: 'CompanyResolver',
    subjectLabel: '企业模块',
    module: 'company',
    action: 'paginateCompanies',
    actionLabel: '分页查询企业',
    targets: [],
  },
  {
    subject: 'CompanyResolver',
    subjectLabel: '企业模块',
    module: 'company',
    action: 'createOneCompany',
    actionLabel: '新增企业',
    targets: [],
  },
  {
    subject: 'CompanyResolver',
    subjectLabel: '企业模块',
    module: 'company',
    action: 'updateSelfCompany',
    actionLabel: '修改当前企业信息',
    targets: [],
  },
  {
    subject: 'CompanyResolver',
    subjectLabel: '企业模块',
    module: 'company',
    action: 'updateOneCompany',
    actionLabel: '修改企业',
    targets: [],
  },
];

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
