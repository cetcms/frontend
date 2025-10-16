import { useMutation } from '@apollo/client/react';
import { Login, SwitchAuthCompanyDocument } from 'src/graphql';
import { useAuthStore } from 'src/store';

export type UseSwitchAuthCompanyResult = [
  (companyId?: string, backTo?: string) => Promise<void>,
  { loading: boolean; data?: Login },
];

export const useSwitchAuthCompany = (defaultBackTo = '/'): UseSwitchAuthCompanyResult => {
  const { setLogin } = useAuthStore();
  const [switchAuthCompany, { loading, data }] = useMutation(SwitchAuthCompanyDocument);
  const handler = async (companyId?: string, backTo?: string) => {
    const { data } = await switchAuthCompany({
      variables: {
        companyId,
      },
    });
    if (data?.switchAuthCompany) {
      setLogin(data.switchAuthCompany as Login);
      location.replace(backTo || defaultBackTo);
    }
  };

  return [handler, { loading, data: data?.switchAuthCompany as Login }];
};
