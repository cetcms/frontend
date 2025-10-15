import { useQuery } from '@apollo/client/react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { TranslationsDocument } from 'src/graphql';

export const useLoadTranslations = (scopes: string[]) => {
  const { i18n } = useTranslation();
  const { data, loading } = useQuery(TranslationsDocument, {
    variables: { scopes },
  });

  useEffect(() => {
    if (data?.translations) {
      for (const scope in data?.translations) {
        const translations = data.translations[scope] || {};
        i18n.addResourceBundle(i18n.language, scope, translations);
      }
    }
  }, [data]);

  return { loading };
};
