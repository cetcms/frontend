import { MenuItem } from 'src/router/menus';

const menus: MenuItem[] = [
  {
    id: 'dashboard',
    label: '仪表盘',
    icon: 'solar:window-frame-line-duotone',
    path: '/dashboard',
  },
  {
    id: 'company',
    label: '企业管理',
    icon: 'solar:medal-ribbons-star-line-duotone',
    path: '/company',
    children: [
      {
        id: 'company-role',
        label: '公司角色',
        path: '/company/roles',
        children: [
          {
            id: 'company-role-add',
            label: '添加公司角色',
            path: '/company/role/add',
            hide: true,
          },
          {
            id: 'company-role-edit',
            label: '编辑公司角色',
            path: '/company/role/edit',
            hide: true,
          },
        ],
      },
      {
        id: 'company-list-edit',
        label: '企业信息',
        path: '/company/edit',
      },
      {
        id: 'user',
        label: '用户管理',
        icon: 'solar:users-group-rounded-line-duotone',
        path: '/user',
        children: [
          {
            id: 'user-add',
            label: '添加用户',
            path: '/user/add',
            hide: true,
          },
          {
            id: 'user-edit',
            label: '编辑用户',
            path: '/user/edit',
            hide: true,
          },
        ],
      },
    ],
  },
];

export default menus;
