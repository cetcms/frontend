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
        id: 'company-list',
        label: '公司列表',
        path: '/company/list',
        children: [
          {
            id: 'company-list-add',
            label: '添加公司',
            path: '/company/add',
            hide: true,
          },
          {
            id: 'company-list-edit',
            label: '编辑公司',
            path: '/company/edit',
            hide: true,
          },
        ],
      },
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
    ],
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
            label: '添加成员',
            path: '/project/website/add',
            hide: true,
          },
          {
            id: 'website-edit',
            label: '编辑成员',
            path: '/project/website/edit',
            hide: true,
          },
        ],
      },
    ],
  },
  {
    id: 'admin',
    label: '系统管理员',
    icon: 'solar:member-id-line-duotone',
    path: '/admin',
    children: [
      {
        id: 'admin-list',
        label: '管理员列表',
        path: '/admin/list',
        children: [
          {
            id: 'admin-list-add',
            label: '添加管理员',
            path: '/admin/add',
            hide: true,
          },
          {
            id: 'admin-list-edit',
            label: '编辑管理员',
            path: '/admin/edit',
            hide: true,
          },
        ],
      },
      {
        id: 'admin-role',
        label: '管理员角色',
        path: '/admin/roles',
        children: [
          {
            id: 'admin-role-add',
            label: '添加管理员角色',
            path: '/admin/role/add',
            hide: true,
          },
          {
            id: 'admin-role-edit',
            label: '编辑管理员角色',
            path: '/admin/role/edit',
            hide: true,
          },
        ],
      },
    ],
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
  {
    id: 'media',
    label: '媒体资源',
    icon: 'solar:folder-open-line-duotone',
    path: '/media',
  },
  {
    id: 'divider',
    type: 'divider',
    label: '分割线',
  },
  {
    id: 'setting',
    label: '系统设置',
    icon: 'solar:settings-line-duotone',
    path: '/setting',
  },
];

export default menus;
