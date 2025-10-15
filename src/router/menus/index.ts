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
};

export type MenuItemGroup = {
  admin: MenuItem[];
  user: MenuItem[];
  company: MenuItem[];
};
