import { useLazyQuery, useQuery } from '@apollo/client/react';
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
import { useTranslation } from 'react-i18next';
import { ListSearchMembersDocument, FindOneMemberDocument, MemberFragment } from 'src/graphql';

export type PublicMemberSearchProps = Omit<TextInputProps, 'onChange'> & {
  value?: string | null;
  onChange?: (value: string | null, option?: { value: string; label: string; member: MemberFragment }) => void;
  placeholder?: string;
  allowDeselect?: boolean;
  disabled?: boolean;
};

export const PublicMemberSearch: React.FC<PublicMemberSearchProps> = ({
  value,
  onChange,
  placeholder,
  allowDeselect = true,
  disabled = false,
  ...textInputProps
}) => {
  const { t } = useTranslation(['components']);
  const actualPlaceholder = placeholder ?? t('public_member_search.search_placeholder');
  const combobox = useCombobox();
  const [keyword, setKeyword] = useState('');
  const debouncedKeyword = useDebounce(keyword.trim(), { wait: 300 });

  const [searchMembers, { data, loading }] = useLazyQuery(ListSearchMembersDocument);
  // 加载受控 value（成员 id）对应的成员详情，用于展示标签
  const { data: findData } = useQuery(FindOneMemberDocument, {
    skip: !value,
    variables: { id: value ?? '' },
  });

  const items = data?.listSearchMembers?.items ?? [];

  useEffect(() => {
    if (debouncedKeyword) {
      searchMembers({ variables: { keyword: debouncedKeyword } });
      combobox.openDropdown();
    } else {
      combobox.closeDropdown();
    }
  }, [debouncedKeyword, searchMembers]);

  // 从受控 value 派生当前选中的成员：优先查询详情，其次从搜索结果中兜底
  const fetchedMember = findData?.findOneMember ?? null;
  const selected: MemberFragment | null = value
    ? fetchedMember?.id === value
      ? fetchedMember
      : (items.find((i) => i.id === value) ?? null)
    : null;

  const inputValue = keyword || (selected ? selected.name : '');

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
          setKeyword('');
          combobox.closeDropdown();
          onChange?.(m.id, { value: m.id, label: m.name, member: m });
        }
      }}
    >
      <Combobox.Target>
        <TextInput
          {...textInputProps}
          placeholder={actualPlaceholder}
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
            combobox.updateSelectedOptionIndex();
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {optionNodes.length > 0 ? (
            optionNodes
          ) : debouncedKeyword ? (
            <Combobox.Empty>{t('public_member_search.no_match')}</Combobox.Empty>
          ) : (
            <Combobox.Empty>{t('public_member_search.input_keyword')}</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
};
