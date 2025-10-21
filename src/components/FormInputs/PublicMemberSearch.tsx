import { useLazyQuery } from '@apollo/client/react';
import {
  Combobox,
  TextInput,
  useCombobox,
  Group,
  Avatar,
  Box,
  ActionIcon,
  Loader,
  TextInputProps,
} from '@mantine/core';
import { IconX, IconSearch } from '@tabler/icons-react';
import { useDebounce } from 'ahooks';
import React, { useEffect, useMemo, useState } from 'react';
import { ListSearchMembersDocument, FindOneMemberDocument, Member } from 'src/graphql';

export type PublicMemberSearchProps = Omit<TextInputProps, 'onChange'> & {
  value?: string | null;
  onChange?: (value: string | null, option?: { value: string; label: string; member: Member }) => void;
  placeholder?: string;
  allowDeselect?: boolean;
  disabled?: boolean;
};

export const PublicMemberSearch: React.FC<PublicMemberSearchProps> = ({
  value,
  onChange,
  placeholder = '搜索成员',
  allowDeselect = true,
  disabled = false,
  ...textInputProps
}) => {
  const combobox = useCombobox();
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword.trim(), { wait: 300 });
  const [selected, setSelected] = useState<Member | null>(null);

  const [searchMembers, { data, loading }] = useLazyQuery(ListSearchMembersDocument);
  const [findOneMember, { data: findData }] = useLazyQuery(FindOneMemberDocument);

  const items = (data?.listSearchMembers?.items ?? []) as Member[];

  useEffect(() => {
    if (debouncedKeyword) {
      searchMembers({ variables: { keyword: debouncedKeyword } });
      combobox.openDropdown();
    } else {
      combobox.closeDropdown();
    }
  }, [debouncedKeyword, searchMembers]);

  useEffect(() => {
    if (value) {
      // 如果已有选中值，加载详情以显示标签
      if (!selected || selected.id !== value) {
        findOneMember({ variables: { id: value } });
      }
    } else {
      setSelected(null);
    }
  }, [value]);

  useEffect(() => {
    if (findData?.findOneMember) {
      setSelected(findData.findOneMember as Member);
    }
  }, [findData]);

  const inputValue = selected ? selected.name : keyword;

  const optionNodes = useMemo(
    () =>
      items.map((m) => (
        <Combobox.Option value={m.id} key={m.id}>
          <Group gap="sm" wrap="nowrap">
            <Avatar src={m.avatarUrl || undefined} size="sm" />
            <Box>
              <div>{m.name}</div>
              <div style={{ fontSize: 12, opacity: 0.6 }}>{m.email}</div>
            </Box>
          </Group>
        </Combobox.Option>
      )),
    [items]
  );

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        const m = items.find((i) => i.id === val) || (selected && selected.id === val ? selected : undefined);
        if (m) {
          setSelected(m);
          setKeyword('');
          combobox.closeDropdown();
          onChange?.(m.id, { value: m.id, label: m.name, member: m });
        }
      }}
    >
      <Combobox.Target>
        <TextInput
          {...textInputProps}
          placeholder={placeholder}
          value={inputValue}
          disabled={disabled}
          leftSection={<IconSearch size={14} />}
          rightSection={
            loading ? (
              <Loader size="xs" />
            ) : allowDeselect && selected ? (
              <ActionIcon
                size="sm"
                variant="subtle"
                onClick={() => {
                  setSelected(null);
                  setKeyword('');
                  onChange?.(null);
                  combobox.openDropdown();
                }}
              >
                <IconX size={14} />
              </ActionIcon>
            ) : undefined
          }
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
          onChange={(event) => {
            const next = event.currentTarget.value;
            setKeyword(next);
            if (selected) {
              setSelected(null);
            }
            combobox.updateSelectedOptionIndex();
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {optionNodes.length > 0 ? (
            optionNodes
          ) : debouncedKeyword ? (
            <Combobox.Empty>未找到匹配成员</Combobox.Empty>
          ) : (
            <Combobox.Empty>输入关键词搜索成员</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
