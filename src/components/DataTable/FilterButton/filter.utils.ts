import { FieldConfig } from './filter.types';

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
};

// 根据字段类型获取可用操作符
export const getOperatorsByFieldType = (fieldType: FieldConfig['type']) => {
  switch (fieldType) {
    case 'string':
      return [
        { value: 'contains', label: '包含' },
        { value: 'equals', label: '等于' },
        { value: 'startsWith', label: '以...开始' },
        { value: 'endsWith', label: '以...结束' },
        { value: 'not', label: '不等于' },
      ];
    case 'number':
      return [
        { value: 'equals', label: '等于' },
        { value: 'gt', label: '大于' },
        { value: 'gte', label: '大于等于' },
        { value: 'lt', label: '小于' },
        { value: 'lte', label: '小于等于' },
        { value: 'not', label: '不等于' },
      ];
    case 'date':
      return [
        { value: 'equals', label: '等于' },
        { value: 'gt', label: '晚于' },
        { value: 'gte', label: '晚于等于' },
        { value: 'lt', label: '早于' },
        { value: 'lte', label: '早于等于' },
        { value: 'not', label: '不等于' },
      ];
    case 'boolean':
      return [
        { value: 'equals', label: '等于' },
        { value: 'not', label: '不等于' },
      ];
    case 'enum':
      return [
        { value: 'equals', label: '等于' },
        { value: 'not', label: '不等于' },
        { value: 'in', label: '在...之中' },
        { value: 'notIn', label: '不在...之中' },
      ];
    default:
      return Object.entries(OPERATORS).map(([value, label]) => ({ value, label }));
  }
};

// 获取指定字段类型的默认操作符
export const getDefaultOperator = (fieldType: FieldConfig['type']) => {
  const operators = getOperatorsByFieldType(fieldType);
  return operators.length > 0 ? operators[0].value : 'equals';
};

// 创建新的过滤条件项
export const createNewFilter = (fields: FieldConfig[]) => {
  const firstField = fields[0];
  if (!firstField) {
    return { id: Date.now(), field: '', operator: 'equals', value: '' };
  }

  const defaultOperator = getDefaultOperator(firstField.type);
  // 对于 in 和 notIn 操作符，初始值应该是空数组
  const initialValue = defaultOperator === 'in' || defaultOperator === 'notIn' ? [] : '';
  return { id: Date.now(), field: firstField.accessor, operator: defaultOperator, value: initialValue };
};

// 生成 Prisma 查询结构
export const generatePrismaFilter = (filterFields: any[], logicOperator: 'AND' | 'OR') => {
  const where: any = {};

  // 只有当有过滤条件时才添加逻辑操作符
  if (filterFields.some((filter) => filter.field)) {
    where[logicOperator] = [];

    filterFields.forEach((filter) => {
      if (filter.field) {
        const condition: any = {};

        // 处理 in 和 notIn 操作符，确保值是数组
        if (filter.operator === 'in' || filter.operator === 'notIn') {
          // 确保值是数组格式
          if (Array.isArray(filter.value)) {
            condition[filter.operator] = filter.value;
          } else if (filter.value) {
            // 如果不是数组但有值，转换为单元素数组
            condition[filter.operator] = [filter.value];
          } else {
            // 如果没有值，使用空数组
            condition[filter.operator] = [];
          }
        } else {
          condition[filter.operator] = filter.value;
        }

        where[logicOperator].push({
          [filter.field]: condition,
        });
      }
    });

    // 如果没有有效条件，删除逻辑操作符键
    if (where[logicOperator].length === 0) {
      delete where[logicOperator];
    }
  }

  return where;
};
