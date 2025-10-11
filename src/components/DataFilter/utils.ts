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
