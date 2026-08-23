import { useLazyQuery } from '@apollo/client/react';
import { useDebounceEffect } from 'ahooks';
import { useEffect, useState } from 'react';
import { AuthInfoDocument } from 'src/graphql';
import { useParseApolloErrors } from 'src/hooks';
import { useAuthStore } from 'src/store';

export const useInitializeAuth = () => {
  const { login, auth, setAuth, clearAuth, clearLogin, initialized, initialize } = useAuthStore();
  const [getAuthInfo, { loading: authQueryLoading }] = useLazyQuery(AuthInfoDocument);
  const [errorParse] = useParseApolloErrors();
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
              setAuth(data.authInfo);
            } else {
              clearAuth();
              clearLogin();
            }
          })
          .catch((err) => {
            const errors = errorParse(err);
            const { statusCode } = errors.get('authInfo') || {};
            if (statusCode === 401) {
              clearAuth();
              clearLogin();
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
