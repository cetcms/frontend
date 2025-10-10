import {
  Accordion,
  Box,
  Card,
  Center,
  Checkbox,
  InputWrapper,
  InputWrapperProps,
  LoadingOverlay,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { PermissionItem } from 'src/graphql';

export type RolePermissionsProps = InputWrapperProps & {
  value?: string[];
  onChange?: (value: string[]) => void;
  disabled?: boolean; // 组件级禁用
  allowSelect?: string[]; // 允许选中的action
  allowUnselect?: string[]; // 允许取消选中的action
  permissions?: PermissionItem[];
  loading?: boolean;
};

interface TreeNode {
  id: string;
  label: string;
  value: string;
  children?: TreeNode[];
}

/**
 * 将 permissions 转换为嵌套树结构，按照 module > subject > action 层级
 * @param permissions 权限列表
 * @returns 嵌套树结构
 */
export const buildPermissionTree = (permissions: PermissionItem[]): TreeNode[] => {
  const moduleMap: Record<string, TreeNode> = {};
  const subjectMap: Record<string, TreeNode> = {};

  // 先收集所有唯一的模块
  permissions.forEach((permission) => {
    if (!moduleMap[permission.group]) {
      moduleMap[permission.group] = {
        id: permission.group,
        label: permission.group,
        value: permission.group,
        children: [],
      };
    }
  });

  // 收集所有唯一的主题，并关联到对应模块
  permissions.forEach((permission) => {
    const subjectId = `${permission.group}-${permission.subject}`;
    if (!subjectMap[subjectId]) {
      subjectMap[subjectId] = {
        id: subjectId,
        label: permission.subjectLabel,
        value: permission.subject,
        children: [],
      };

      // 将主题添加到对应模块的子节点中
      moduleMap[permission.group].children!.push(subjectMap[subjectId]);
    }
  });

  // 添加操作到对应的主体下
  permissions.forEach((permission) => {
    const subjectId = `${permission.group}-${permission.subject}`;
    const actionNode: TreeNode = {
      id: `${permission.group}-${permission.subject}-${permission.action}`,
      label: permission.actionLabel,
      value: `${permission.subject}:${permission.action}`,
    };

    subjectMap[subjectId].children!.push(actionNode);
  });

  // 返回模块数组作为根节点
  return Object.values(moduleMap);
};

export const RolePermissions: React.FC<RolePermissionsProps> = ({
  value = [],
  onChange,
  disabled = false,
  allowSelect = undefined,
  allowUnselect = undefined,
  permissions = [],
  loading = false,
  ...props
}) => {
  const { t } = useTranslation('permissions');
  const [permissionsTree, setPermissionsTree] = useState<TreeNode[]>([]);
  const [checkedValues, setCheckedValues] = useState<string[]>(value);
  const skipEffectRef = useRef(false);

  useEffect(() => {
    setPermissionsTree(buildPermissionTree(permissions));
  }, [permissions]);

  // 当外部 value 变化时更新内部状态
  useEffect(() => {
    if (!skipEffectRef.current) {
      setCheckedValues(value);
    }
    skipEffectRef.current = false;
  }, [value]);

  const handleActionChange = (actionValue: string, checked: boolean) => {
    // 如果action被禁用，则不处理变化
    if (
      disabled ||
      (checked && allowSelect !== undefined && !allowSelect.includes(actionValue)) ||
      (!checked && allowUnselect !== undefined && !allowUnselect.includes(actionValue))
    ) {
      return;
    }

    const newCheckedValues = checked
      ? [...checkedValues, actionValue]
      : checkedValues.filter((value) => value !== actionValue);

    skipEffectRef.current = true;
    setCheckedValues(newCheckedValues);
    onChange?.(newCheckedValues);
  };

  const handleSubjectChange = (subjectNode: TreeNode, checked: boolean) => {
    // 如果组件被禁用，则不处理变化
    if (disabled) {
      return;
    }

    const actionValues = subjectNode.children?.map((child) => child.value) || [];
    let newCheckedValues = [...checkedValues];

    if (checked) {
      // 添加所有允许选中的子项
      actionValues.forEach((value) => {
        if (!newCheckedValues.includes(value) && (allowSelect === undefined || allowSelect.includes(value))) {
          newCheckedValues.push(value);
        }
      });
    } else {
      // 移除所有允许取消选中的子项
      newCheckedValues = newCheckedValues.filter((value) => {
        // 如果action不允许取消选中，保持原状态
        if (allowUnselect !== undefined && !allowUnselect.includes(value)) {
          return true;
        }
        // 否则根据操作决定是否移除
        return !actionValues.includes(value);
      });
    }

    skipEffectRef.current = true;
    setCheckedValues(newCheckedValues);
    onChange?.(newCheckedValues);
  };

  const handleModuleChange = (moduleNode: TreeNode, checked: boolean) => {
    // 如果组件被禁用，则不处理变化
    if (disabled) {
      return;
    }

    const allActionValues: string[] = [];

    // 获取模块下所有操作
    moduleNode.children?.forEach((subject) => {
      subject.children?.forEach((action) => {
        allActionValues.push(action.value);
      });
    });

    let newCheckedValues = [...checkedValues];

    if (checked) {
      // 添加所有允许选中的子项
      allActionValues.forEach((value) => {
        if (!newCheckedValues.includes(value) && (allowSelect === undefined || allowSelect.includes(value))) {
          newCheckedValues.push(value);
        }
      });
    } else {
      // 移除所有允许取消选中的子项
      newCheckedValues = newCheckedValues.filter((value) => {
        // 如果action不允许取消选中，保持原状态
        if (allowUnselect !== undefined && !allowUnselect.includes(value)) {
          return true;
        }
        // 否则根据操作决定是否移除
        return !allActionValues.includes(value);
      });
    }

    skipEffectRef.current = true;
    setCheckedValues(newCheckedValues);
    onChange?.(newCheckedValues);
  };

  // 检查是否所有可操作的子项都被选中
  const isAllChildrenChecked = (node: TreeNode): boolean => {
    if (!node.children || node.children.length === 0) {
      // 叶子节点，直接返回选中状态
      return checkedValues.includes(node.value);
    }

    // 非叶子节点，检查所有子节点
    return node.children.every((child) => {
      // 如果是操作节点，直接检查是否被选中
      if (!child.children || child.children.length === 0) {
        return checkedValues.includes(child.value);
      }
      // 递归检查子节点
      return isAllChildrenChecked(child);
    });
  };

  // 检查是否有可操作的子项被选中
  const isSomeChildrenChecked = (node: TreeNode): boolean => {
    if (!node.children || node.children.length === 0) {
      // 叶子节点，直接返回选中状态
      return checkedValues.includes(node.value);
    }

    // 非叶子节点，检查所有子节点
    return node.children.some((child) => {
      // 如果是操作节点，直接检查是否被选中
      if (!child.children || child.children.length === 0) {
        return checkedValues.includes(child.value);
      }
      // 递归检查子节点
      return isSomeChildrenChecked(child);
    });
  };

  // 检查主题级别是否所有子项都被禁用选中
  const isAllChildrenDisabledSelect = (node: TreeNode): boolean => {
    if (!node.children || node.children.length === 0) {
      return false; // 叶子节点不适用
    }

    // 检查所有子节点是否都是操作节点且都被禁用选中
    const allAreActions = node.children.every((child) => !child.children || child.children.length === 0);
    if (!allAreActions) {
      return false;
    }

    // 当allowSelect未定义时，表示所有都可以选中，所以没有禁用选中的项
    if (allowSelect === undefined) {
      return false;
    }

    // 检查所有操作节点是否都被禁用选中（不在allowSelect中且未被选中）
    return node.children.every((child) => {
      return !allowSelect.includes(child.value) && !checkedValues.includes(child.value);
    });
  };

  // 检查主题级别是否所有子项都被禁用取消选中
  const isAllChildrenDisabledUnselect = (node: TreeNode): boolean => {
    if (!node.children || node.children.length === 0) {
      return false; // 叶子节点不适用
    }

    // 检查所有子节点是否都是操作节点且都被禁用取消选中
    const allAreActions = node.children.every((child) => !child.children || child.children.length === 0);
    if (!allAreActions) {
      return false;
    }

    // 当allowUnselect未定义时，表示所有都可以取消选中，所以没有禁用取消选中的项
    if (allowUnselect === undefined) {
      return false;
    }

    // 检查所有操作节点是否都被禁用取消选中（不在allowUnselect中且已被选中）
    return node.children.every((child) => {
      return !allowUnselect.includes(child.value) && checkedValues.includes(child.value);
    });
  };

  // 检查是否所有子项都实际禁用（无法更改状态）
  const isAllChildrenActuallyDisabled = (node: TreeNode): boolean => {
    if (!node.children || node.children.length === 0) {
      return false; // 叶子节点不适用
    }

    // 检查所有子节点是否都是操作节点
    const allAreActions = node.children.every((child) => !child.children || child.children.length === 0);
    if (!allAreActions) {
      return false;
    }

    // 检查所有操作节点是否都实际禁用
    return node.children.every((child) => {
      // 如果allowSelect定义了但不包含该值，且未选中，则禁用选中
      const isDisabledSelect =
        allowSelect !== undefined && !allowSelect.includes(child.value) && !checkedValues.includes(child.value);
      // 如果allowUnselect定义了但不包含该值，且已选中，则禁用取消选中
      const isDisabledUnselect =
        allowUnselect !== undefined && !allowUnselect.includes(child.value) && checkedValues.includes(child.value);
      // 只有当禁用选中且禁用取消选中同时满足，或者其中一种满足且无法更改状态时才视为实际禁用
      return isDisabledSelect || isDisabledUnselect;
    });
  };

  // 检查模块级别是否所有子项都被禁用选中
  const isAllModuleChildrenDisabledSelect = (node: TreeNode): boolean => {
    if (!node.children || node.children.length === 0) {
      return false; // 叶子节点不适用
    }

    // 检查模块下所有主题是否都被禁用选中
    return node.children.every((subject) => {
      return isAllChildrenDisabledSelect(subject);
    });
  };

  // 检查模块级别是否所有子项都被禁用取消选中
  const isAllModuleChildrenDisabledUnselect = (node: TreeNode): boolean => {
    if (!node.children || node.children.length === 0) {
      return false; // 叶子节点不适用
    }

    // 检查模块下所有主题是否都被禁用取消选中
    return node.children.every((subject) => {
      return isAllChildrenDisabledUnselect(subject);
    });
  };

  // 检查模块级别是否所有子项都实际禁用
  const isAllModuleChildrenActuallyDisabled = (node: TreeNode): boolean => {
    if (!node.children || node.children.length === 0) {
      return false; // 叶子节点不适用
    }

    // 检查模块下所有主题是否都实际禁用
    return node.children.every((subject) => {
      return isAllChildrenActuallyDisabled(subject);
    });
  };

  const renderTree = (nodes: TreeNode[]) => {
    return nodes.map((node) => {
      // 如果是操作级别（没有子节点）
      if (!node.children || node.children.length === 0) {
        const isActionDisabled =
          disabled ||
          (checkedValues.includes(node.value) && allowUnselect !== undefined && !allowUnselect.includes(node.value)) ||
          (!checkedValues.includes(node.value) && allowSelect !== undefined && !allowSelect.includes(node.value));
        return (
          <Box key={node.id} onClick={(event) => event.stopPropagation()}>
            <Checkbox
              label={t(`action.${node.value.replace(':', '.')}`)}
              checked={checkedValues.includes(node.value)}
              onChange={(event) => handleActionChange(node.value, event.currentTarget.checked)}
              onMouseDown={(event) => event.stopPropagation()}
              disabled={isActionDisabled}
            />
          </Box>
        );
      }

      // 如果是主题级别（有操作子节点）
      if (node.children.every((child) => !child.children || child.children.length === 0)) {
        const allChecked = isAllChildrenChecked(node);
        const someChecked = isSomeChildrenChecked(node);
        const indeterminate = someChecked && !allChecked;
        const allDisabledSelect = isAllChildrenDisabledSelect(node);
        const allDisabledUnselect = isAllChildrenDisabledUnselect(node);
        const allActuallyDisabled = isAllChildrenActuallyDisabled(node);
        // 结合原有的禁用逻辑和新的实际禁用逻辑
        const isSubjectDisabled =
          disabled || allActuallyDisabled || (allChecked && allDisabledUnselect) || (!allChecked && allDisabledSelect);

        return (
          <Card withBorder p="xs" key={node.id}>
            <Stack gap="xs">
              <Box onClick={(event) => event.stopPropagation()}>
                <Checkbox
                  label={t(`subject.${node.value}`)}
                  checked={allChecked}
                  indeterminate={indeterminate}
                  onChange={(event) => handleSubjectChange(node, event.currentTarget.checked)}
                  onMouseDown={(event) => event.stopPropagation()}
                  disabled={isSubjectDisabled}
                />
              </Box>
              <SimpleGrid spacing="xs" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}>
                {renderTree(node.children)}
              </SimpleGrid>
            </Stack>
          </Card>
        );
      }

      // 如果是模块级别（有主题子节点）
      const allChecked = isAllChildrenChecked(node);
      const someChecked = isSomeChildrenChecked(node);
      const indeterminate = someChecked && !allChecked;
      const allDisabledSelect = isAllModuleChildrenDisabledSelect(node);
      const allDisabledUnselect = isAllModuleChildrenDisabledUnselect(node);
      const allActuallyDisabled = isAllModuleChildrenActuallyDisabled(node);
      // 结合原有的禁用逻辑和新的实际禁用逻辑
      const isModuleDisabled =
        disabled || allActuallyDisabled || (allChecked && allDisabledUnselect) || (!allChecked && allDisabledSelect);

      return (
        <Accordion.Item value={node.id} key={node.id} style={{ overflow: 'hidden' }}>
          <Center>
            <Accordion.Control>
              <Box onClick={(event) => event.stopPropagation()} style={{ float: 'left' }}>
                <Checkbox
                  label={t(`group.${node.value}`)}
                  checked={allChecked}
                  indeterminate={indeterminate}
                  onChange={(event) => {
                    event.stopPropagation();
                    handleModuleChange(node, event.currentTarget.checked);
                  }}
                  onMouseDown={(event) => event.stopPropagation()}
                  disabled={isModuleDisabled}
                />
              </Box>
            </Accordion.Control>
          </Center>
          <Accordion.Panel>
            <Stack gap="xs">{renderTree(node.children || [])}</Stack>
          </Accordion.Panel>
        </Accordion.Item>
      );
    });
  };

  return (
    <InputWrapper {...props}>
      {!permissionsTree?.length || loading ? (
        <Card withBorder p="xs">
          <LoadingOverlay visible={loading} loaderProps={{ size: 'xs' }} />
          <Center>
            <Text size="xs" opacity={0.5}>
              No permissions found
            </Text>
          </Center>
        </Card>
      ) : (
        <Accordion variant="contained">{renderTree(permissionsTree)}</Accordion>
      )}
    </InputWrapper>
  );
};
