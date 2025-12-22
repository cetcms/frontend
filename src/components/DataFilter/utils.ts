import { FieldTypes, FilterFieldConfig, FilterItemConfig } from './types';

// Prisma 查询操作符映射
export const OPERATORS: Record<string, string> = {
  equals: '等于',
  contains: '包含',
  startsWith: '以...开始',
  endsWith: '以...结束',
  gt: '大于',
  gte: '大于等于',
  lt: '小于',
  lte: '小于等于',
  in: '在...之中',
  not: '不等于',
  notIn: '不在...之中',
  has: '包含元素',
  hasEvery: '包含所有元素',
  hasSome: '包含某些元素',
  isEmpty: '为空',
};

// 获取指定字段类型的默认操作符
export const getDefaultOperator = (fieldType: FilterFieldConfig['type']) => {
  const fieldTypeDef = FieldTypes[fieldType] || FieldTypes.string;
  return fieldTypeDef.defaultOperator;
};

// 创建新的过滤条件项
export const createNewFilter = (fields: FilterFieldConfig[]) => {
  const firstField = fields[0];
  if (!firstField) {
    return { id: Date.now(), field: '', operator: 'equals', value: '' };
  }

  const defaultOperator = getDefaultOperator(firstField.type);
  // 对于 in 和 notIn 操作符，初始值应该是空数组
  const initialValue =
    defaultOperator === 'in' || defaultOperator === 'notIn' ? [] : defaultOperator === 'isEmpty' ? true : '';
  return { id: Date.now(), field: firstField.accessor, operator: defaultOperator, value: initialValue };
};

// 根据 accessor 构建嵌套的 Prisma where 结构，支持 "company.name" 等点号访问
// 目前默认使用 to-one 关系的 "is" 包裹；如需列表关系请在后续扩展为 "some/every/none"
export const buildNestedWhereFromAccessor = (accessor: string, leafCondition: any) => {
  const parts = accessor.split('.').filter(Boolean);
  if (parts.length === 0) return {};

  // 叶子字段
  const leafField = parts[parts.length - 1];
  let current: any = { [leafField]: leafCondition };

  // 由内向外包裹关系层，默认使用 is
  for (let i = parts.length - 2; i >= 0; i--) {
    const relation = parts[i];
    current = { [relation]: { is: current } };
  }

  return current;
};

// 生成 Prisma 查询结构
export const generatePrismaFilter = (
  filterFields: FilterItemConfig[],
  logicOperator: 'AND' | 'OR',
  fields: FilterFieldConfig[] = []
) => {
  const where: any = {};

  // 只有当有过滤条件时才添加逻辑操作符
  if (filterFields.some((filter) => filter.field)) {
    where[logicOperator] = [];

    // 按字段类型分组过滤条件
    const groupedFilters: Record<string, FilterItemConfig[]> = {};

    filterFields.forEach((filter) => {
      if (filter.field) {
        const fieldConfig = fields.find((f) => f.accessor === filter.field);

        const key = fieldConfig ? fieldConfig.type : 'string';

        if (!groupedFilters[key]) {
          groupedFilters[key] = [];
        }
        groupedFilters[key].push(filter);
      }
    });

    // 为每种字段类型生成查询条件
    Object.entries(groupedFilters).forEach(([fieldType, items]) => {
      const fieldTypeDef = FieldTypes[fieldType] || FieldTypes.string;
      const prismaConditions = fieldTypeDef.genPrismaWhere(items, fields);
      where[logicOperator].push(...prismaConditions);
    });

    // 如果没有有效条件，删除逻辑操作符键
    if (where[logicOperator].length === 0) {
      delete where[logicOperator];
    }
  }

  return where;
};

/**
 * 从嵌套对象中根据点号路径获取值
 * @param obj 对象
 * @param path 点号分隔的路径，如 "company.name"
 * @returns 值或 undefined
 */
const getNestedValue = (obj: any, path: string): any => {
  const parts = path.split('.');
  let current = obj;

  for (const part of parts) {
    if (current === null || current === undefined) {
      return undefined;
    }
    current = current[part];
  }

  return current;
};

/**
 * 检查单个值是否满足过滤条件
 * @param value 要检查的值
 * @param operator 操作符
 * @param filterValue 过滤值
 * @returns 是否满足条件
 */
const matchesCondition = (value: any, operator: string, filterValue: any): boolean => {
  // 处理空值情况
  if (value === null || value === undefined) {
    if (operator === 'isEmpty') {
      return filterValue === true;
    }
    return false;
  }

  // 处理空字符串的特殊情况：空字符串不应该匹配非空的搜索值
  if (value === '' && filterValue && filterValue !== '') {
    // 空字符串只在以下情况返回 true:
    // 1. 操作符是 not（不等于非空值）
    // 2. 操作符是 notIn（不在列表中）
    if (operator === 'not' || operator === 'notIn') {
      return true;
    }
    // 其他所有操作符都返回 false
    return false;
  }

  switch (operator) {
    // String 操作符
    case 'contains':
      return String(value).toLowerCase().includes(String(filterValue).toLowerCase());
    case 'equals':
      return value === filterValue;
    case 'startsWith':
      return String(value).toLowerCase().startsWith(String(filterValue).toLowerCase());
    case 'endsWith':
      return String(value).toLowerCase().endsWith(String(filterValue).toLowerCase());
    case 'not':
      return value !== filterValue;

    // Number 操作符
    case 'gt':
      return Number(value) > Number(filterValue);
    case 'gte':
      return Number(value) >= Number(filterValue);
    case 'lt':
      return Number(value) < Number(filterValue);
    case 'lte':
      return Number(value) <= Number(filterValue);

    // Enum 操作符
    case 'in':
      return Array.isArray(filterValue) && filterValue.includes(value);
    case 'notIn':
      return Array.isArray(filterValue) && !filterValue.includes(value);

    // Array 操作符
    case 'has':
      return Array.isArray(value) && value.includes(filterValue);
    case 'hasEvery':
      return Array.isArray(value) && Array.isArray(filterValue) && filterValue.every((v) => value.includes(v));
    case 'hasSome':
      return Array.isArray(value) && Array.isArray(filterValue) && filterValue.some((v) => value.includes(v));
    case 'isEmpty':
      if (Array.isArray(value)) {
        return filterValue ? value.length === 0 : value.length > 0;
      }
      return filterValue ? !value : !!value;

    // Boolean 操作符
    case 'is':
      return value === filterValue;

    default:
      return false;
  }
};

/**
 * 本地数据筛选工具方法
 * 根据 DataFilter 生成的 where 条件对本地数据进行筛选
 *
 * @param data 要筛选的数据数组
 * @param where 筛选条件对象（由 generatePrismaFilter 生成）
 * @returns 筛选后的数据数组
 *
 * @example
 * ```ts
 * const data = [
 *   { id: 1, title: 'Hello', contentType: 'Single' },
 *   { id: 2, title: 'World', contentType: 'Collection' },
 * ];
 *
 * const where = { AND: [{ id: { equals: 1 } }] };
 * const filtered = filterLocalData(data, where);
 * // 结果: [{ id: 1, title: 'Hello', contentType: 'Single' }]
 * ```
 */
export const filterLocalData = <T extends Record<string, any>>(data: T[], where: any): T[] => {
  if (!where || Object.keys(where).length === 0) {
    return data;
  }

  return data.filter((item) => {
    // 处理 AND 逻辑
    if (where.AND && Array.isArray(where.AND)) {
      return where.AND.every((condition: any) => matchesItem(item, condition));
    }

    // 处理 OR 逻辑
    if (where.OR && Array.isArray(where.OR)) {
      return where.OR.some((condition: any) => matchesItem(item, condition));
    }

    // 直接条件匹配
    return matchesItem(item, where);
  });
};

/**
 * 检查单个数据项是否满足条件
 * @param item 数据项
 * @param condition 条件对象
 * @returns 是否满足条件
 */
const matchesItem = (item: any, condition: any): boolean => {
  // 遍历条件的每个字段
  for (const [field, value] of Object.entries(condition)) {
    // 跳过 AND/OR
    if (field === 'AND' || field === 'OR') {
      continue;
    }

    // 处理嵌套关系 (如 { company: { is: { name: { contains: 'xxx' } } } })
    if (typeof value === 'object' && value !== null) {
      // 检查是否是关系查询 (is, some, every, none)
      if ('is' in value) {
        const nestedValue = getNestedValue(item, field);
        if (!matchesItem(nestedValue, value.is)) {
          return false;
        }
        continue;
      }

      // 处理数组关系 (some, every, none)
      if ('some' in value) {
        const arrayValue = getNestedValue(item, field);
        if (!Array.isArray(arrayValue) || !arrayValue.some((v) => matchesItem(v, value.some))) {
          return false;
        }
        continue;
      }

      if ('every' in value) {
        const arrayValue = getNestedValue(item, field);
        if (!Array.isArray(arrayValue) || !arrayValue.every((v) => matchesItem(v, value.every))) {
          return false;
        }
        continue;
      }

      if ('none' in value) {
        const arrayValue = getNestedValue(item, field);
        if (!Array.isArray(arrayValue) || arrayValue.some((v) => matchesItem(v, value.none))) {
          return false;
        }
        continue;
      }

      // 处理操作符条件 (如 { id: { equals: 1 } })
      const itemValue = getNestedValue(item, field);
      for (const [operator, operatorValue] of Object.entries(value)) {
        if (!matchesCondition(itemValue, operator, operatorValue)) {
          return false;
        }
      }
    } else {
      // 直接值比较
      const itemValue = getNestedValue(item, field);
      if (itemValue !== value) {
        return false;
      }
    }
  }

  return true;
};
