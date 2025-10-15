import { useLazyQuery } from '@apollo/client/react';
import { useDebounceEffect } from 'ahooks';
import { useEffect, useState } from 'react';
import { Auth, AuthInfoDocument } from 'src/graphql';
import { useAuthStore } from 'src/store';

export const useInitializeAuth = () => {
  const { login, auth, setAuth, clearAuth, initialized, initialize } = useAuthStore();
  const [getAuthInfo, { loading: authQueryLoading }] = useLazyQuery(AuthInfoDocument);
  const [handing, setHanding] = useState(true);

  useEffect(() => {
    if (!initialized) {
      initialize();
    }
  }, [initialized]);

  useDebounceEffect(
    () => {
      if (login && initialized && !auth) {
        getAuthInfo()
          .then(({ data }) => {
            if (data?.authInfo) {
              setAuth(data.authInfo as Auth);
            } else {
              clearAuth();
            }
          })
          .finally(() => setHanding(false));
      } else {
        setHanding(false);
      }
    },
    [login, initialized, auth],
    { wait: 50 }
  );

  return {
    loading: authQueryLoading || !initialized || handing,
  };
};
