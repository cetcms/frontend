import { MenuItem } from 'src/store';

export default function registerMenus(menus: MenuItem[]) {
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
