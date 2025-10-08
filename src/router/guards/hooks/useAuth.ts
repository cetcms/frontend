import { useLazyQuery } from '@apollo/client/react';
import { useDebounceEffect } from 'ahooks';
import { useEffect, useState } from 'react';
import { AuthInfoDocument } from 'src/graphql/generated/graphql';
import { useAuthStore } from 'src/store/auth';

export const useAuth = () => {
  const { login, auth, setAuth, clearAuth, checkLogin, initialized } = useAuthStore();
  const [getAuthInfo, { loading }] = useLazyQuery(AuthInfoDocument);
  const [handing, setHanding] = useState(true);
  useEffect(() => {
    if (!login) {
      checkLogin();
    }
  }, [checkLogin, login]);

  useDebounceEffect(
    () => {
      if (login && initialized && !auth) {
        getAuthInfo()
          .then(({ data }) => {
            if (!data?.authInfo) {
              clearAuth();
            } else {
              setAuth(data.authInfo);
            }
          })
          .finally(() => {
            setHanding(false);
          });
      } else {
        setHanding(false);
      }
    },
    [getAuthInfo, setHanding, initialized, auth, login],
    { wait: 50 }
  );

  return {
    auth,
    loading: loading || !initialized || handing,
  };
};
