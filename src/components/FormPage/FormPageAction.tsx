import { Button, Group, Text } from '@mantine/core';
import { IconArrowLeft, IconCheck } from '@tabler/icons-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
import { useMenuStore } from 'src/store';

export type FormPageActionProps = {
  title?: string;
  backTo?: string;
  isDirty?: boolean;
  onReset?: () => void;
  onSubmit?: () => void;
};

export const FormPageAction: React.FC<FormPageActionProps> = ({ title, backTo, isDirty, onReset, onSubmit }) => {
  const { t } = useTranslation(['components']);
  const { activeItem } = useMenuStore();
  return (
    <Group justify="space-between">
      <Group>
        <Button variant="default" component={Link} to={backTo || '#'} disabled={!backTo}>
          <IconArrowLeft size={16} />
        </Button>
        <Text>{title || activeItem?.label}</Text>
      </Group>
      <Group justify="center">
        <Button disabled={!isDirty || !onReset} variant="default" onClick={onReset}>
          {t('form_page.reset')}
        </Button>
        <Button
          disabled={!isDirty}
          leftSection={<IconCheck size={14} />}
          {...(onSubmit ? { onClick: onSubmit } : { type: 'submit' })}
        >
          {t('form_page.save')}
        </Button>
      </Group>
    </Group>
  );
};
