import { MenuItem } from 'src/router/menus';

const menus: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'navbar:dashboard',
    icon: 'solar:window-frame-line-duotone',
    path: '/dashboard',
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
    id: 'company',
    label: 'navbar:company',
    icon: 'solar:medal-ribbons-star-line-duotone',
    path: '/company',
    children: [
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
      {
        id: 'company-list-edit',
        label: 'navbar:company-info',
        path: '/company/edit',
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
    ],
  },
];

export default menus;
