import { useMutation } from '@apollo/client/react';
import { Button, Divider, Group, Modal, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconCirclesRelation } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { CompanyRoleSelect, PublicMemberSearch } from 'src/components/FormInputs';
import { InviteMemberToCompanyDocument } from 'src/graphql';

export const BindToCompany = () => {
  const { t } = useTranslation(['pages', 'common']);
  const [opened, { open, close }] = useDisclosure();
  const [inviteMemberToCompany] = useMutation(InviteMemberToCompanyDocument);
  const form = useForm({
    initialValues: {
      roleId: '',
      memberId: '',
    },
    validate: {
      roleId: (value) => (value ? null : t('pages:role_required')),
      memberId: (value) => (value ? null : t('pages:member_required')),
    },
  });

  const handleSubmit = async () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      await inviteMemberToCompany({
        variables: {
          roleId: form.values.roleId,
          memberId: form.values.memberId,
        },
      }).then(() => {
        notifications.show({
          color: 'green',
          icon: <IconCheck />,
          title: t('pages:success_notification'),
          message: t('pages:invite_success'),
        });
        close();
      });
    }
  };

  return (
    <>
      <Button leftSection={<IconCirclesRelation size={16} />} onClick={open}>
        {t('pages:invite_member')}
      </Button>
      <Modal opened={opened} onClose={close} title={t('pages:invite_member_to_company')}>
        <Stack>
          <CompanyRoleSelect
            withAsterisk
            label={t('pages:select_role')}
            allowDeselect={false}
            {...form.getInputProps('roleId')}
          />
          <PublicMemberSearch withAsterisk label={t('pages:select_member')} {...form.getInputProps('memberId')} />
          <Divider variant="dashed" />
          <Group justify="center">
            <Button onClick={handleSubmit}>{t('common:confirm')}</Button>
            <Button onClick={close} variant="default">
              {t('common:cancel')}
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};
