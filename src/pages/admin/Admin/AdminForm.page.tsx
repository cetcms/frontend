import { Box } from '@mantine/core';
import { useSearchParams } from 'react-router';

import { AdminForm } from './Admin.form';

export const AdminFormPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  return (
    <Box m="md">
      <AdminForm id={id || undefined} />
    </Box>
  );
};
