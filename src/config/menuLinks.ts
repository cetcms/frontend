import { Icon, IconAdCircle, IconGps, IconReplaceUser, IconSettings, IconSpaces, IconWorld } from '@tabler/icons-react';

export interface MenuLinkItem {
  id: string;
  label: string;
  icon?: Icon;
  path?: string;
  active?: boolean;
  children?: MenuLinkItem[];
  type?: 'divider';
  description?: string;
}

export const menuLinks: MenuLinkItem[] = [
  {
    id: 'dashboard',
    label: '仪表盘',
    icon: IconGps,
    path: '/dashboard',
  },
  {
    id: 'finder',
    label: '红人馆',
    icon: IconWorld,
    path: '/find/creator',
  },
  {
    id: 'website',
    label: '网站管理',
    icon: IconWorld,
    path: '/website',
  },
  {
    id: 'media',
    label: '媒体运营',
    icon: IconSpaces,
    path: '/media',
  },
  {
    id: 'marketing',
    label: '数字营销',
    icon: IconAdCircle,
    path: '/marketing',
  },
  {
    id: 'customers',
    label: '客户转化',
    icon: IconReplaceUser,
    path: '/customers',
  },
  {
    id: 'divider',
    type: 'divider',
    label: '分割线',
  },
  {
    id: 'setting',
    label: '系统设置',
    icon: IconSettings,
    path: '/setting',
  },
];
