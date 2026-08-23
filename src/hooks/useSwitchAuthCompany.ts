import { useMutation } from '@apollo/client/react';
import { LoginFragment, SwitchAuthCompanyDocument } from 'src/graphql';
import { useAuthStore } from 'src/store';

export type UseSwitchAuthCompanyResult = [
  (companyId?: string, redirect?: string) => Promise<void>,
  { loading: boolean; data?: LoginFragment },
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
      setLogin(data.switchAuthCompany);
      if (redirect) {
        location.replace(redirect);
      } else {
        location.reload();
      }
    }
  };

  return [handler, { loading, data: data?.switchAuthCompany }];
};
