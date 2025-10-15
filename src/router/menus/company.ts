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
    ],
  },
];

export default menus;
