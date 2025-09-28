import { Button, Card, Grid, Group, Select, SegmentedControl, TextInput, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useState } from 'react';

// 定义字段类型
export interface FieldConfig {
  name: string;
  label: string;
  type: 'text' | 'number' | 'select' | 'date' | 'boolean';
  options?: { label: string; value: string }[];
  operator?: string;
}

export interface DataFilterProps {
  fields?: FieldConfig[];
  onFilterChange?: (filter: any) => void;
}

// Prisma 查询操作符映射
const OPERATORS: Record<string, string> = {
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
const getOperatorsByFieldType = (fieldType: FieldConfig['type']) => {
  switch (fieldType) {
    case 'text':
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
    case 'select':
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

// 获取字段配置
const getFieldConfig = (fields: FieldConfig[], fieldName: string) => {
  return fields.find((field) => field.name === fieldName);
};

export const DataFilter: React.FC<DataFilterProps> = ({ fields = [], onFilterChange }) => {
  const [filterFields, setFilterFields] = useState<Array<{ id: number; field: string; operator: string; value: any }>>([
    { id: Date.now(), field: fields[0]?.name || '', operator: 'contains', value: '' },
  ]);

  // 添加逻辑操作符状态 (AND/OR)
  const [logicOperator, setLogicOperator] = useState<'AND' | 'OR'>('AND');

  const form = useForm({
    initialValues: {
      filters: filterFields,
    },

    // 添加表单验证规则
    validate: {
      filters: (value) => {
        for (let i = 0; i < value.length; i++) {
          const filter = value[i];
          if (!filter.field) {
            return `第${i + 1}行: 字段不能为空`;
          }
          if (!filter.operator) {
            return `第${i + 1}行: 操作符不能为空`;
          }
        }
        return null;
      },
    },
  });

  // 当过滤条件改变时，生成 Prisma 查询结构
  const generatePrismaFilter = () => {
    const where: any = {};

    // 只有当有过滤条件时才添加逻辑操作符
    if (filterFields.some((filter) => filter.field)) {
      where[logicOperator] = [];

      filterFields.forEach((filter) => {
        if (filter.field) {
          const condition: any = {};
          condition[filter.operator] = filter.value;
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

  // 添加新的过滤条件
  const addFilter = () => {
    setFilterFields([
      ...filterFields,
      { id: Date.now(), field: fields[0]?.name || '', operator: 'contains', value: '' },
    ]);
  };

  // 删除过滤条件
  const removeFilter = (id: number) => {
    if (filterFields.length <= 1) return;
    const newFilters = filterFields.filter((filter) => filter.id !== id);
    setFilterFields(newFilters);
  };

  // 更新过滤条件
  const updateFilter = (id: number, property: string, value: any) => {
    const newFilters = filterFields.map((filter) => {
      if (filter.id === id) {
        // 如果更改的是字段，则重置操作符为该字段类型的默认操作符
        if (property === 'field') {
          const fieldConfig = getFieldConfig(fields, value);
          const operators = fieldConfig ? getOperatorsByFieldType(fieldConfig.type) : [];
          const defaultOperator = operators.length > 0 ? operators[0].value : 'equals';
          return { ...filter, [property]: value, operator: defaultOperator };
        }
        return { ...filter, [property]: value };
      }
      return filter;
    });
    setFilterFields(newFilters);
  };

  // 应用过滤器
  const applyFilter = () => {
    // 更新表单值
    form.setValues({ filters: filterFields });

    // 验证表单
    const validation = form.validate();
    if (validation.hasErrors) {
      return;
    }

    const prismaFilter = generatePrismaFilter();
    if (onFilterChange) {
      onFilterChange(prismaFilter);
    }
  };

  // 重置过滤器
  const resetFilter = () => {
    setFilterFields([{ id: Date.now(), field: fields[0]?.name || '', operator: 'contains', value: '' }]);
    setLogicOperator('AND'); // 重置逻辑操作符为默认值
    form.clearErrors();
    if (onFilterChange) {
      onFilterChange({});
    }
  };

  return (
    <Card m="xs" withBorder>
      {/* 添加逻辑操作符选择器 */}
      <Group mb="md">
        <SegmentedControl
          value={logicOperator}
          onChange={(value) => setLogicOperator(value as 'AND' | 'OR')}
          data={[
            { label: 'AND (且)', value: 'AND' },
            { label: 'OR (或)', value: 'OR' },
          ]}
        />
      </Group>

      <Grid>
        {filterFields.map((filter, index) => (
          <Grid.Col span={12} key={filter.id}>
            <Group grow>
              <Select
                placeholder="选择字段"
                data={fields.map((field) => ({ value: field.name, label: field.label }))}
                value={filter.field}
                onChange={(value) => updateFilter(filter.id, 'field', value)}
                clearable
                error={
                  form.errors.filters &&
                  form.errors.filters.toString().includes(`第${index + 1}行`) &&
                  form.errors.filters.toString().includes('字段不能为空')
                }
              />
              <Select
                placeholder="操作符"
                data={(() => {
                  const fieldConfig = getFieldConfig(fields, filter.field);
                  if (fieldConfig) {
                    return getOperatorsByFieldType(fieldConfig.type);
                  }
                  return Object.entries(OPERATORS).map(([value, label]) => ({ value, label }));
                })()}
                value={filter.operator}
                onChange={(value) => updateFilter(filter.id, 'operator', value)}
                error={
                  form.errors.filters &&
                  form.errors.filters.toString().includes(`第${index + 1}行`) &&
                  form.errors.filters.toString().includes('操作符不能为空')
                }
              />
              {(() => {
                const fieldConfig = fields.find((f) => f.name === filter.field);
                if (fieldConfig?.type === 'select') {
                  return (
                    <Select
                      placeholder="值"
                      data={fieldConfig.options || []}
                      value={filter.value}
                      onChange={(value) => updateFilter(filter.id, 'value', value)}
                      clearable
                    />
                  );
                }
                return (
                  <TextInput
                    placeholder="值"
                    value={filter.value}
                    onChange={(e) => updateFilter(filter.id, 'value', e.target.value)}
                  />
                );
              })()}
              <Button variant="light" color="red" onClick={() => removeFilter(filter.id)}>
                删除
              </Button>
            </Group>
            {form.errors.filters && form.errors.filters.toString().includes(`第${index + 1}行`) && (
              <Text c="red" size="sm" mt={5}>
                {form.errors.filters}
              </Text>
            )}
          </Grid.Col>
        ))}
      </Grid>
      <Group mt="md">
        <Button onClick={addFilter}>添加条件</Button>
        <Button onClick={applyFilter} color="blue">
          应用过滤
        </Button>
        <Button onClick={resetFilter} variant="outline">
          重置
        </Button>
      </Group>
      {form.errors.filters && !form.errors.filters.toString().includes('第') && (
        <Text c="red" size="sm" mt={10}>
          {form.errors.filters}
        </Text>
      )}
    </Card>
  );
};
