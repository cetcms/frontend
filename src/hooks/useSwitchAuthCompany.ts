import { useMutation } from '@apollo/client/react';
import { Login, SwitchAuthCompanyDocument } from 'src/graphql';
import { useAuthStore } from 'src/store';

export type UseSwitchAuthCompanyResult = [(companyId?: string) => Promise<void>, { loading: boolean; data?: Login }];

export const useSwitchAuthCompany = (backTo = '/'): UseSwitchAuthCompanyResult => {
  const { setLogin } = useAuthStore();
  const [switchAuthCompany, { loading, data }] = useMutation(SwitchAuthCompanyDocument);
  const handler = async (companyId?: string) => {
    const { data } = await switchAuthCompany({
      variables: {
        companyId,
      },
    });
    if (data?.switchAuthCompany) {
      setLogin(data.switchAuthCompany as Login);
      location.replace(backTo);
    }
  };

  return [handler, { loading, data: data?.switchAuthCompany as Login }];
};
