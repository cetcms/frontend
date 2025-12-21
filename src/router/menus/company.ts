import { MenuItem } from 'src/router/menus';

const menus: MenuItem[] = [
  {
    id: 'dashboard',
    label: '仪表盘',
    icon: 'solar:window-frame-line-duotone',
    path: '/dashboard',
  },
  {
    id: 'project',
    label: '项目管理',
    icon: 'solar:widget-2-line-duotone',
    path: '/project',
    children: [
      {
        id: 'website',
        label: '网站列表',
        path: '/project/website/list',
        children: [
          {
            id: 'website-add',
            label: '添加网站',
            path: '/project/website/add',
            hide: true,
          },
          {
            id: 'website-edit',
            label: '编辑网站',
            path: '/project/website/edit',
            hide: true,
          },
        ],
      },
    ],
  },
  {
    id: 'company',
    label: '企业管理',
    icon: 'solar:medal-ribbons-star-line-duotone',
    path: '/company',
    children: [
      {
        id: 'company-role',
        label: '企业角色',
        path: '/company/roles',
        children: [
          {
            id: 'company-role-add',
            label: '添加企业角色',
            path: '/company/role/add',
            hide: true,
          },
          {
            id: 'company-role-edit',
            label: '编辑企业角色',
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
        id: 'member',
        label: '成员管理',
        icon: 'solar:members-group-rounded-line-duotone',
        path: '/member',
        children: [
          {
            id: 'member-add',
            label: '添加成员',
            path: '/member/add',
            hide: true,
          },
          {
            id: 'member-edit',
            label: '编辑成员',
            path: '/member/edit',
            hide: true,
          },
        ],
      },
    ],
  },
];

export default menus;
