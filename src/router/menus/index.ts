import { CheckPermissionOption } from 'src/store';

/**
 * 菜单项类型定义
 */
export type MenuItem = {
  id: string;
  label: string;
  icon?: string;
  path?: string;
  active?: boolean;
  children?: MenuItem[];
  hide?: boolean;
  type?: 'divider';
  description?: string;
  permissions?: CheckPermissionOption;
};

export type MenuItemGroup = {
  admin: MenuItem[];
  member: MenuItem[];
  company: MenuItem[];
};
