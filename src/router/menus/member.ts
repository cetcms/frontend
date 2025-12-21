import { MenuItem } from 'src/router/menus';

const menus: MenuItem[] = [
  {
    id: 'dashboard',
    label: '仪表盘',
    icon: 'solar:window-frame-line-duotone',
    path: '/dashboard',
  },
  {
    id: 'company-list',
    label: '企业列表',
    icon: 'solar:medal-ribbons-star-line-duotone',
    path: '/company/list',
  },
  {
    id: 'notification-list',
    label: '消息列表',
    icon: 'solar:medal-ribbons-star-line-duotone',
    path: '/notification/list',
  },
];

export default menus;
