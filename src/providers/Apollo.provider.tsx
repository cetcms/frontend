import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider as ApolloClientProvider } from '@apollo/client/react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import UploadHttpLink from 'apollo-upload-client/UploadHttpLink.mjs';
import React, { useEffect, useState } from 'react';
import { Loading } from 'src/components';
import { SERVER_GRAPHQL_API } from 'src/contract';
import i18n from 'src/i18n';
import { useAuthStore } from 'src/store/auth';
const agent = FingerprintJS.load();

const enum RequestHeaders {
  Fingerprint = 'X-Fingerprint',
  Language = 'X-Lang',
}
type CreateClientOptions = {
  token?: string | null;
  fingerprint?: string | null;
};
const createClient = (options: CreateClientOptions) => {
  const headers: Record<string, string> = {};
  if (options.token) {
    headers.Authorization = `Bearer ${options.token}`;
  }
  if (options.fingerprint) {
    headers[RequestHeaders.Fingerprint] = options.fingerprint;
  }
  headers['Apollo-Require-Preflight'] = 'true';
  headers['Content-Type'] = 'application/json';
  headers[RequestHeaders.Language] = i18n.language;
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new UploadHttpLink({
      uri: SERVER_GRAPHQL_API,
      headers,
    }),
  });
};

export type ApolloProviderProps = {
  children: React.ReactNode;
};
export const ApolloProvider: React.FC<ApolloProviderProps> = ({ children }) => {
  const { login } = useAuthStore();
  const [client, setClient] = useState<ApolloClient>();

  // 登录状态发生变化时创建 Apollo 客户端
  useEffect(() => {
    agent
      .then((r) => r.get())
      .then(({ visitorId }) => {
        setClient(
          createClient({
            token: login?.accessToken,
            fingerprint: visitorId,
          })
        );
      });
  }, [login]);

  // 等待 Apollo 客户端创建完成
  if (!client) {
    return <Loading native />;
  }

  // 渲染子组件
  return <ApolloClientProvider client={client}>{children}</ApolloClientProvider>;
};
