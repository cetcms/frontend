import { useMutation } from '@apollo/client/react';
import { Login, SwitchAuthCompanyDocument } from 'src/graphql';
import { useAuthStore } from 'src/store';

export type UseSwitchAuthCompanyResult = [
  (companyId?: string, redirect?: string) => Promise<void>,
  { loading: boolean; data?: Login },
];

export const useSwitchAuthCompany = (): UseSwitchAuthCompanyResult => {
  const { setLogin } = useAuthStore();
  const [switchAuthCompany, { loading, data }] = useMutation(SwitchAuthCompanyDocument);
  const handler = async (companyId?: string, redirect?: string) => {
    const { data } = await switchAuthCompany({
      variables: {
        companyId,
      },
    });
    if (data?.switchAuthCompany) {
      setLogin(data.switchAuthCompany as Login);
      if (redirect) {
        location.replace(redirect);
      } else {
        location.reload();
      }
    }
  };

  return [handler, { loading, data: data?.switchAuthCompany as Login }];
};
