import { MenuItem } from 'src/router/menus';

/**
 * 菜单工具函数集合
 * 提供菜单操作的通用工具方法，提高代码复用性
 */

/**
 * 递归查找菜单项
 * @param items 菜单项数组
 * @param id 菜单项ID
 * @returns 找到的菜单项或undefined
 */
export const findMenuItem = (items: MenuItem[], id: string): MenuItem | undefined => {
  for (const item of items) {
    if (item.id === id) {
      return item;
    }
    if (item.children) {
      const found = findMenuItem(item.children, id);
      if (found) return found;
    }
  }
  return undefined;
};

/**
 * 递归查找菜单项路径（从根到目标项的完整路径）
 * @param items 菜单项数组
 * @param id 目标菜单项ID
 * @returns 菜单项路径数组
 */
export const findMenuItemPath = (items: MenuItem[], id: string): MenuItem[] => {
  for (const item of items) {
    if (item.id === id) {
      return [item];
    }
    if (item.children) {
      const childPath = findMenuItemPath(item.children, id);
      if (childPath.length > 0) {
        return [item, ...childPath];
      }
    }
  }
  return [];
};

/**
 * 根据路径查找匹配的菜单项
 * @param items 菜单项数组
 * @param pathname 当前路径
 * @returns 匹配的菜单项或null
 */
export const findMenuByPath = (items: MenuItem[], pathname: string): MenuItem | null => {
  // 清理URL中的查询参数和hash,避免干扰路径匹配
  const cleanPath = pathname.split('?')[0].split('#')[0];
  // 递归查找函数
  const findInItems = (menuItems: MenuItem[]): MenuItem | null => {
    for (const item of menuItems) {
      // 精确匹配当前项(使用清理后的路径)
      if (item.path === cleanPath) {
        return item;
      }

      // 递归查找子菜单
      if (item.children && item.children.length > 0) {
        const childMatch = findInItems(item.children);
        if (childMatch) {
          return childMatch;
        }
      }
    }
    return null;
  };

  // 首先尝试精确匹配
  const exactMatch = findInItems(items);
  if (exactMatch) {
    return exactMatch;
  }

  // 如果没有精确匹配，尝试前缀匹配（用于嵌套路由）
  // 但要确保不匹配根路径 '/'
  const findByPrefix = (menuItems: MenuItem[]): MenuItem | null => {
    for (const item of menuItems) {
      if (item.path && item.path !== '/' && cleanPath.startsWith(item.path)) {
        // 确保是完整的路径段匹配，避免部分匹配
        const nextChar = cleanPath[item.path.length];
        if (nextChar === '/' || nextChar === undefined) {
          return item;
        }
      }

      // 递归查找子菜单
      if (item.children && item.children.length > 0) {
        const childMatch = findByPrefix(item.children);
        if (childMatch) {
          return childMatch;
        }
      }
    }
    return null;
  };

  return findByPrefix(items);
};

/**
 * 获取需要展开的菜单ID列表（基于激活路径）
 * @param activePath 激活的菜单路径
 * @returns 需要展开的菜单ID数组
 */
export const getExpandedMenuIds = (activePath: MenuItem[]): string[] => {
  // 除了最后一个菜单项（叶子节点），其他都需要展开
  return activePath.slice(0, -1).map((item) => item.id);
};

/**
 * 检查菜单项是否在指定路径中
 * @param menuId 菜单项ID
 * @param pathIds 路径ID数组
 * @returns 是否在路径中
 */
export const isMenuInPath = (menuId: string, pathIds: string[]): boolean => {
  return pathIds.includes(menuId);
};

/**
 * 获取菜单项的所有子菜单ID
 * @param menuItem 菜单项
 * @returns 子菜单ID数组
 */
export const getChildMenuIds = (menuItem: MenuItem): string[] => {
  if (!menuItem.children) return [];

  const childIds: string[] = [];
  const collectIds = (items: MenuItem[]) => {
    items.forEach((item) => {
      childIds.push(item.id);
      if (item.children) {
        collectIds(item.children);
      }
    });
  };

  collectIds(menuItem.children);
  return childIds;
};

/**
 * 验证菜单结构的完整性
 * @param items 菜单项数组
 * @returns 验证结果和错误信息
 */
export const validateMenuStructure = (
  items: MenuItem[]
): {
  isValid: boolean;
  errors: string[];
} => {
  const errors: string[] = [];
  const seenIds = new Set<string>();

  const validateItem = (item: MenuItem, path: string[] = []) => {
    // 检查ID唯一性
    if (seenIds.has(item.id)) {
      errors.push(`重复的菜单ID: ${item.id}`);
    } else {
      seenIds.add(item.id);
    }

    // 检查必需字段
    if (!item.label) {
      errors.push(`菜单项 ${item.id} 缺少标签`);
    }

    // 检查循环引用
    if (path.includes(item.id)) {
      errors.push(`检测到循环引用: ${path.join(' -> ')} -> ${item.id}`);
      return;
    }

    // 递归验证子菜单
    if (item.children) {
      item.children.forEach((child) => {
        validateItem(child, [...path, item.id]);
      });
    }
  };

  items.forEach((item) => validateItem(item));

  return {
    isValid: errors.length === 0,
    errors,
  };
};
