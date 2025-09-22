import { useLazyQuery } from '@apollo/client/react';
import { useEffect } from 'react';
import { AuthInfoDocument } from 'src/graphql/generated/graphql';
import { useAuthStore } from 'src/store/auth';

export const useAuth = () => {
  const { login, auth, setAuth, clearAuth, checkLogin, initialized } = useAuthStore();
  const [getAuthInfo, { loading }] = useLazyQuery(AuthInfoDocument);

  useEffect(() => {
    if (!login) {
      checkLogin();
    }
  }, [checkLogin, login]);

  useEffect(() => {
    if (login && initialized && !auth) {
      getAuthInfo().then(({ data }) => {
        if (!data?.authInfo) {
          clearAuth();
        } else {
          setAuth(data.authInfo);
        }
      });
    }
  }, [getAuthInfo, initialized, auth, login]);

  return {
    auth,
    loading: loading || !initialized,
  };
};
