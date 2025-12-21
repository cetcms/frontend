import { MenuItem } from 'src/router/menus';

const menus: MenuItem[] = [
  {
    id: 'dashboard',
    label: 'navbar:dashboard',
    icon: 'solar:window-frame-line-duotone',
    path: '/dashboard',
  },
  {
    id: 'company-list',
    label: 'navbar:company-list',
    icon: 'solar:medal-ribbons-star-line-duotone',
    path: '/company/list',
  },
  {
    id: 'notification-list',
    label: 'navbar:notification-list',
    icon: 'solar:medal-ribbons-star-line-duotone',
    path: '/notification/list',
  },
];

export default menus;
