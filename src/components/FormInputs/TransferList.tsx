import {
  ActionIcon,
  Box,
  Button,
  Card,
  Checkbox,
  Combobox,
  Divider,
  Group,
  InputWrapper,
  InputWrapperProps,
  Paper,
  ScrollArea,
  Stack,
  TextInput,
  useCombobox,
} from '@mantine/core';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import React, { useState } from 'react';

type TransferDirection = 'right' | 'left';

interface TransferListData<T = any> {
  items: T[];
  search?: (items: T[], keyword: string) => T[];
  optionRender?: (item: T) => React.ReactNode;
  bottomSection?: (items: T[]) => React.ReactNode;
  idAccessor: string;
}

interface RenderListProps<T = any> {
  data: TransferListData<T>;
  direction: TransferDirection;
  onSelectAll: () => void;
  onTransfer: (items: T[]) => void;
  selectedItems: T[];
  onSelectedItemsChange: (items: T[]) => void;
}

const RenderList = <T extends Record<string, any>>({
  data,
  direction,
  onSelectAll,
  onTransfer,
  selectedItems,
  onSelectedItemsChange,
}: RenderListProps<T>) => {
  const combobox = useCombobox();
  const [keyword, setKeyword] = useState('');

  const handleItemSelect = (item: T) => {
    const isSelected = selectedItems.some((v) => v[data.idAccessor] === item[data.idAccessor]);
    if (isSelected) {
      onSelectedItemsChange(selectedItems.filter((v) => v[data.idAccessor] !== item[data.idAccessor]));
    } else {
      onSelectedItemsChange([...selectedItems, item]);
    }
  };

  const items = (data.search && keyword ? data.search(data.items, keyword) : data.items).map((item) => (
    <Combobox.Option
      value={item[data.idAccessor]}
      key={item[data.idAccessor]}
      active={selectedItems.some((v) => v[data.idAccessor] === item[data.idAccessor])}
      onMouseOver={() => combobox.resetSelectedOption()}
      onClick={() => handleItemSelect(item)}
    >
      <Group gap="sm" wrap="nowrap">
        <Checkbox
          checked={selectedItems.some((v) => v[data.idAccessor] === item[data.idAccessor])}
          onChange={() => {}}
          aria-hidden
          tabIndex={-1}
          style={{ pointerEvents: 'none' }}
        />
        <Box>{data.optionRender ? data.optionRender(item) : item[data.idAccessor]}</Box>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        const item = data.items.find((i) => i[data.idAccessor] === val);
        if (item) {
          handleItemSelect(item);
        }
      }}
    >
      <Stack gap="xs" w="100%" style={{ alignSelf: 'stretch' }}>
        <Combobox.EventsTarget>
          <Group gap="xs" wrap="nowrap" style={{ flexDirection: direction === 'left' ? 'row-reverse' : 'row' }}>
            <Button w="70px" size="xs" variant="default" onClick={onSelectAll}>
              全选
            </Button>
            <ActionIcon
              size={30}
              variant="default"
              onClick={() => {
                onTransfer(selectedItems);
                onSelectedItemsChange([]);
              }}
            >
              {direction === 'right' ? <IconChevronRight size="1rem" /> : <IconChevronLeft size="1rem" />}
            </ActionIcon>
            <TextInput
              size="xs"
              placeholder="Search..."
              value={keyword}
              styles={{ root: { width: '100%' } }}
              onChange={(event) => {
                setKeyword(event.currentTarget.value);
                combobox.updateSelectedOptionIndex();
              }}
            />
          </Group>
        </Combobox.EventsTarget>
        <Card h="300px" p="xs" withBorder component={ScrollArea}>
          <Combobox.Options>{items.length > 0 ? items : <Combobox.Empty>空数据列表</Combobox.Empty>}</Combobox.Options>
        </Card>
        {data.bottomSection && data.bottomSection(data.items)}
      </Stack>
    </Combobox>
  );
};

export type TransferListProps<T = any> = InputWrapperProps & {
  onDataChange: (sourceItems: T[], targetItems: T[]) => void;
  searchFilter?: (items: T[], search: string) => T[];
  optionRender?: (item: T) => React.ReactNode;
  sourceBottomSection?: (items: T[]) => React.ReactNode;
  targetBottomSection?: (items: T[]) => React.ReactNode;
  idAccessor?: string;
  sourceItems: T[];
  targetItems: T[];
  value?: T[];
  onChange?: (value: T[]) => void;
};

export const TransferList = <T extends Record<string, any>>({
  sourceItems,
  targetItems,
  onDataChange,
  searchFilter,
  optionRender,
  targetBottomSection,
  sourceBottomSection,
  idAccessor = 'id',
  value,
  onChange,
  ...others
}: TransferListProps<T>) => {
  const [selectedSourceItems, setSelectedSourceItems] = useState<T[]>([]);
  const [selectedTargetItems, setSelectedTargetItems] = useState<T[]>([]);

  const sourceData: TransferListData<T> = {
    items: sourceItems,
    search: searchFilter,
    optionRender,
    bottomSection: sourceBottomSection,
    idAccessor,
  };

  const targetData: TransferListData<T> = {
    items: targetItems,
    search: searchFilter,
    optionRender,
    bottomSection: targetBottomSection,
    idAccessor,
  };

  const handleTransferToTarget = (items: T[]) => {
    const newSourceItems = sourceItems.filter(
      (sourceItem) => !items.some((item) => item[idAccessor] === sourceItem[idAccessor])
    );
    const newTargetItems = [...targetItems, ...items];
    onDataChange(newSourceItems, newTargetItems);
    // 如果提供了 onChange 回调，则调用它
    if (onChange) {
      onChange(newTargetItems);
    }
  };

  const handleTransferToSource = (items: T[]) => {
    const newTargetItems = targetItems.filter(
      (targetItem) => !items.some((item) => item[idAccessor] === targetItem[idAccessor])
    );
    const newSourceItems = [...sourceItems, ...items];
    onDataChange(newSourceItems, newTargetItems);
    // 如果提供了 onChange 回调，则调用它
    if (onChange) {
      onChange(newTargetItems);
    }
  };

  return (
    <InputWrapper {...others}>
      <Card p="xs" withBorder>
        <Group wrap="nowrap">
          <RenderList
            data={sourceData}
            direction="right"
            selectedItems={selectedSourceItems}
            onSelectedItemsChange={setSelectedSourceItems}
            onSelectAll={() => {
              if (selectedSourceItems.length === sourceItems.length) {
                setSelectedSourceItems([]);
              } else {
                setSelectedSourceItems(sourceItems);
              }
            }}
            onTransfer={handleTransferToTarget}
          />
          <Divider orientation="vertical" />
          <RenderList
            data={targetData}
            direction="left"
            selectedItems={selectedTargetItems}
            onSelectedItemsChange={setSelectedTargetItems}
            onSelectAll={() => {
              if (selectedTargetItems.length === targetItems.length) {
                setSelectedTargetItems([]);
              } else {
                setSelectedTargetItems(targetItems);
              }
            }}
            onTransfer={handleTransferToSource}
          />
        </Group>
      </Card>
    </InputWrapper>
  );
};
