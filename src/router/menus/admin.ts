import { MenuItem } from 'src/router/menus';

const menus: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'navbar:dashboard',
    icon: 'solar:window-frame-line-duotone',
    path: '/dashboard',
  },
  {
    id: 'company',
    label: 'navbar:company',
    icon: 'solar:medal-ribbons-star-line-duotone',
    path: '/company',
    children: [
      {
        id: 'company-list',
        label: 'navbar:company-list',
        path: '/company/list',
        children: [
          {
            id: 'company-list-add',
            label: 'navbar:company-list-add',
            path: '/company/add',
            hide: true,
          },
          {
            id: 'company-list-edit',
            label: 'navbar:company-list-edit',
            path: '/company/edit',
            hide: true,
          },
        ],
      },
      {
        id: 'company-role',
        label: 'navbar:company-role',
        path: '/company/roles',
        children: [
          {
            id: 'company-role-add',
            label: 'navbar:company-role-add',
            path: '/company/role/add',
            hide: true,
          },
          {
            id: 'company-role-edit',
            label: 'navbar:company-role-edit',
            path: '/company/role/edit',
            hide: true,
          },
        ],
      },
    ],
  },
  {
    id: 'project',
    label: 'navbar:project',
    icon: 'solar:widget-2-line-duotone',
    path: '/project',
    children: [
      {
        id: 'website',
        label: 'navbar:website',
        path: '/project/website/list',
        children: [
          {
            id: 'website-add',
            label: 'navbar:website-add',
            path: '/project/website/add',
            hide: true,
          },
          {
            id: 'website-edit',
            label: 'navbar:website-edit',
            path: '/project/website/edit',
            hide: true,
          },
        ],
      },
    ],
  },
  {
    id: 'admin',
    label: 'navbar:admin',
    icon: 'solar:member-id-line-duotone',
    path: '/admin',
    children: [
      {
        id: 'admin-list',
        label: 'navbar:admin-list',
        path: '/admin/list',
        children: [
          {
            id: 'admin-list-add',
            label: 'navbar:admin-list-add',
            path: '/admin/add',
            hide: true,
          },
          {
            id: 'admin-list-edit',
            label: 'navbar:admin-list-edit',
            path: '/admin/edit',
            hide: true,
          },
        ],
      },
      {
        id: 'admin-role',
        label: 'navbar:admin-role',
        path: '/admin/roles',
        children: [
          {
            id: 'admin-role-add',
            label: 'navbar:admin-role-add',
            path: '/admin/role/add',
            hide: true,
          },
          {
            id: 'admin-role-edit',
            label: 'navbar:admin-role-edit',
            path: '/admin/role/edit',
            hide: true,
          },
        ],
      },
    ],
  },
  {
    id: 'member',
    label: 'navbar:member',
    icon: 'solar:members-group-rounded-line-duotone',
    path: '/member',
    children: [
      {
        id: 'member-add',
        label: 'navbar:member-add',
        path: '/member/add',
        hide: true,
      },
      {
        id: 'member-edit',
        label: 'navbar:member-edit',
        path: '/member/edit',
        hide: true,
      },
    ],
  },
  {
    id: 'media',
    label: 'navbar:media',
    icon: 'solar:folder-open-line-duotone',
    path: '/media',
  },
  {
    id: 'divider',
    type: 'divider',
    label: 'navbar:divider',
  },
  {
    id: 'setting',
    label: 'navbar:setting',
    icon: 'solar:settings-line-duotone',
    path: '/setting',
  },
];

export default menus;
