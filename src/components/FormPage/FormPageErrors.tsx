import { Alert, Text } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';
import React from 'react';
import { ParseResult } from 'src/hooks/useParseApolloErrors';
export type FormPageErrorsProps = {
  errors?: ParseResult['errors'];
};
export const FormPageErrors: React.FC<FormPageErrorsProps> = ({ errors }) => {
  if (!errors || !errors.size) {
    return null;
  }
  return (
    <>
      {Array.from(errors).map(([key, error]) =>
        error.errors?.length ? (
          <Alert mb="md" key={key} color="red" title={error.message} icon={<IconExclamationCircle size={16} />}>
            {error?.errors?.map((error, index) => (
              <Text size="xs" opacity={0.5} key={index}>
                {error.message} [{error.path}]
              </Text>
            ))}
          </Alert>
        ) : (
          <Alert mb="md" key={key} color="red" title={error.message} icon={<IconExclamationCircle size={16} />} />
        )
      )}
    </>
  );
};
