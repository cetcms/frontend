import { MenuItem } from 'src/store';

export default function registerMenus(menus: MenuItem[]) {
  menus.push({
    id: 'company',
    label: '企业管理',
    icon: 'solar:medal-ribbons-star-line-duotone',
    path: '/company',
    children: [
      {
        id: 'company-list',
        label: '公司列表',
        icon: 'solar:users-group-rounded-line-duotone',
        path: '/test-level-2/list',
      },
      {
        id: 'company-add',
        label: '添加公司',
        path: '/test-level-2/add',
        icon: 'solar:medal-ribbons-star-line-duotone',
        children: [
          {
            id: 'company-3-list',
            label: '公司列表',
            path: '/test-level-3/list',
          },
          {
            id: 'company-3-add',
            label: '添加公司',
            path: '/test-level-3/add',
            children: [
              {
                id: 'company-4-list',
                label: '公司列表',
                path: '/test-level-3/list',
              },
              {
                id: 'company-4-add',
                label: '添加公司',
                path: '/test-level-3/add',
              },
            ],
          },
        ],
      },
    ],
  });

  menus.push({
    id: 'website',
    label: '用户管理',
    icon: 'solar:users-group-rounded-line-duotone',
    path: '/user',
  });

  menus.push({
    id: 'media',
    label: '媒体资源',
    icon: 'solar:folder-open-line-duotone',
    path: '/media',
  });

  menus.push({
    id: 'admin',
    label: '系统账号',
    icon: 'solar:user-id-line-duotone',
    path: '/admin',
  });

  menus.push({
    id: 'statistics',
    label: '日志统计',
    icon: 'solar:radar-2-line-duotone',
    path: '/statistics',
  });

  menus.push({
    id: 'divider',
    type: 'divider',
    label: '分割线',
  });

  menus.push({
    id: 'setting',
    label: '系统设置',
    icon: 'solar:settings-line-duotone',
    path: '/setting',
  });
}
