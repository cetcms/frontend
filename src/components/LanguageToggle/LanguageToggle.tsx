import { Button, Menu } from '@mantine/core';
import { IconWorld } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

const languageOptions: LanguageOption[] = [
  { code: 'zh', label: '中文', flag: 'cn' },
  { code: 'en', label: 'English', flag: 'us' },
];

interface LanguageMenuItemProps {
  option: LanguageOption;
  onClick: (code: string) => void;
}

function LanguageMenuItem({ option, onClick }: LanguageMenuItemProps) {
  return (
    <Menu.Item
      onClick={() => onClick(option.code)}
      leftSection={
        <span className={`fi fi-${option.flag}`} style={{ width: 20, height: 15, display: 'inline-block' }} />
      }
    >
      {option.label}
    </Menu.Item>
  );
}

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('app-language', lang);
  };

  return (
    <Menu shadow="md" withArrow>
      <Menu.Target>
        <Button variant="default" radius="xl" size="xs" rightSection={<IconWorld size={20} stroke={1.5} />}>
          <span style={{ textTransform: 'uppercase' }}>{i18n.language}</span>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        {languageOptions.map((option) => (
          <LanguageMenuItem key={option.code} option={option} onClick={changeLanguage} />
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
