import { Button, Group, SegmentedControl, Popover } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconFilter2Search } from '@tabler/icons-react';
import React, { useState } from 'react';

import { FieldConfig } from './filter.types';
import { createNewFilter, generatePrismaFilter, getDefaultOperator } from './filter.utils';
import { FilterItem } from './FilterItem';

export interface FilterButtonProps {
  fields?: FieldConfig[];
  onFilterChange?: (filter: any) => void;
  size?: 'xs' | 'sm';
}

export const FilterButton: React.FC<FilterButtonProps> = ({ fields = [], onFilterChange, size = 'xs' }) => {
  const [opened, setOpened] = useState(false);

  // 获取字段列表
  const [filterFields, setFilterFields] = useState<Array<{ id: number; field: string; operator: string; value: any }>>(
    []
  );

  // 添加逻辑操作符状态 (AND/OR)
  const [logicOperator, setLogicOperator] = useState<'AND' | 'OR'>('AND');

  const form = useForm({
    initialValues: {
      filters: filterFields,
    },
  });

  // 添加新的过滤条件
  const addFilter = () => {
    setFilterFields([...filterFields, createNewFilter(fields)]);
  };

  // 删除过滤条件
  const removeFilter = (id: number) => {
    const newFilters = filterFields.filter((filter) => filter.id !== id);
    setFilterFields(newFilters);
    if (!newFilters.length && onFilterChange) {
      onFilterChange({});
    }
  };

  // 更新过滤条件
  const updateFilter = (id: number, property: string, value: any) => {
    const newFilters = filterFields.map((filter) => {
      if (filter.id === id) {
        // 如果更改的是字段，则重置操作符为该字段类型的默认操作符
        if (property === 'field') {
          const fieldConfig = fields.find((f) => f.accessor === value);
          if (fieldConfig) {
            const defaultOperator = getDefaultOperator(fieldConfig.type);
            // 对于 in 和 notIn 操作符，值应该是数组
            const newValue =
              defaultOperator === 'in' || defaultOperator === 'notIn' ? [] : defaultOperator === 'isEmpty' ? true : '';
            return { ...filter, [property]: value, operator: defaultOperator, value: newValue };
          }
        }
        // 如果更改的是操作符，需要检查操作符类型来调整值的类型
        else if (property === 'operator') {
          const fieldConfig = fields.find((f) => f.accessor === filter.field);
          if (fieldConfig) {
            // 处理 array 类型字段
            if (fieldConfig.type === 'array') {
              switch (value) {
                case 'isEmpty':
                  // isEmpty 操作符需要布尔值
                  return { ...filter, [property]: value, value: true };
                default:
                  // 所有其他操作符使用字符串值
                  return { ...filter, [property]: value, value: Array.isArray(filter.value) ? '' : filter.value };
              }
            }
            // 处理 in/notIn 操作符
            else if (value === 'in' || value === 'notIn') {
              // 如果新操作符是 in 或 notIn，而当前值不是数组，则将值转换为数组
              if (!Array.isArray(filter.value)) {
                return { ...filter, [property]: value, value: [] };
              }
            }
            // 如果新操作符不是 in 或 notIn，而当前值是数组，则取第一个值或空字符串
            else if (value !== 'in' && value !== 'notIn' && Array.isArray(filter.value)) {
              return { ...filter, [property]: value, value: filter.value.length > 0 ? filter.value[0] : '' };
            }
          }
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

    const prismaFilter = generatePrismaFilter(filterFields, logicOperator, fields);
    if (onFilterChange) {
      onFilterChange(prismaFilter);
    }
    setOpened(false);
  };

  // 重置过滤器
  const resetFilter = () => {
    setFilterFields([]);
    setLogicOperator('AND'); // 重置逻辑操作符为默认值
    form.clearErrors();
    if (onFilterChange) {
      onFilterChange({});
    }
  };

  // 判断是否有有效的过滤条件
  const hasValidFilters = filterFields.length > 0 && filterFields.some((filter) => filter.field);

  return (
    <Popover withArrow trapFocus opened={opened} onChange={setOpened} position="bottom-start" shadow="md">
      <Popover.Target>
        <Button
          variant="default"
          disabled={!fields.length}
          leftSection={<IconFilter2Search size={14} />}
          onClick={() => setOpened((o) => !o)}
        >
          过滤
        </Button>
      </Popover.Target>
      <Popover.Dropdown>
        {/* 添加逻辑操作符选择器 */}
        <Group gap={size}>
          <Button w="130" disabled={!fields.length} size={size} variant="default" onClick={addFilter}>
            添加条件
          </Button>
          <SegmentedControl
            size={size}
            w="130"
            value={logicOperator}
            disabled={!hasValidFilters}
            style={{ outline: '1px solid var(--app-shell-border-color)', outlineOffset: '-1px' }}
            onChange={(value) => setLogicOperator(value as 'AND' | 'OR')}
            data={[
              { label: 'AND (且)', value: 'AND' },
              { label: 'OR (或)', value: 'OR' },
            ]}
          />
          <Button w="130" size={size} variant="filled" onClick={applyFilter} disabled={!hasValidFilters}>
            应用过滤
          </Button>
          <Button size={size} variant="light" onClick={resetFilter} disabled={!hasValidFilters}>
            重置
          </Button>
        </Group>

        {filterFields.map((filter) => (
          <FilterItem
            key={filter.id}
            filter={filter}
            fields={fields}
            size={size}
            onUpdate={updateFilter}
            onRemove={removeFilter}
          />
        ))}
      </Popover.Dropdown>
    </Popover>
  );
};
