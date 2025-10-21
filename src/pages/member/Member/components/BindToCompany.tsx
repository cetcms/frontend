import { useMutation } from '@apollo/client/react';
import { Button, Divider, Group, Modal, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';
import { CompanyRoleSelect, PublicMemberSearch } from 'src/components/FormInputs';
import { InviteMemberToCompanyDocument } from 'src/graphql';

export const BindToCompany = () => {
  const [opened, { open, close }] = useDisclosure();
  const [inviteMemberToCompany] = useMutation(InviteMemberToCompanyDocument);
  const form = useForm({
    initialValues: {
      roleId: '',
      memberId: '',
    },
    validate: {
      roleId: (value) => (value ? null : '请选择角色'),
      memberId: (value) => (value ? null : '请选择成员'),
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
          title: '成功提示',
          message: '已成功邀请成员加入企业',
        });
        close();
      });
    }
  };

  return (
    <>
      <Button onClick={open}>绑定成员</Button>
      <Modal opened={opened} onClose={close} title="邀请成员到企业">
        <Stack>
          <CompanyRoleSelect withAsterisk label="选择角色" allowDeselect={false} {...form.getInputProps('roleId')} />
          <PublicMemberSearch withAsterisk label="选择成员" {...form.getInputProps('memberId')} />
          <Divider variant="dashed" />
          <Group justify="center">
            <Button onClick={handleSubmit}>确认</Button>
            <Button onClick={close} variant="default">
              取消
            </Button>
          </Group>
        </Stack>
      </Modal>
    </>
  );
};
