import { CombinedGraphQLErrors } from '@apollo/client';
import { useCallback, useState } from 'react';

export type ParseError = {
  message: string;
  code: string;
  path: string;
  timestamp: Date;
  statusCode: number;
  errors?: Array<{
    message: string;
    code: string;
    path: string;
  }>;
};
export type ParseFunction = (errors: CombinedGraphQLErrors) => ParseResult['errors'];
export type ParseResult = {
  errors: Map<string | number, ParseError>;
  resetErrors: () => void;
};

export const useParseApolloErrors = (): [ParseFunction, ParseResult] => {
  const [errors, setErrors] = useState<ParseResult['errors']>(new Map());
  const parse = useCallback((exception: CombinedGraphQLErrors) => {
    const resultErrors: ParseResult['errors'] = new Map();
    exception.errors?.forEach((error) => {
      const info: ParseError = JSON.parse(error.message);
      error.path?.forEach((path) => {
        resultErrors.set(path, {
          timestamp: new Date(info.timestamp),
          message: info.message,
          code: info.code,
          path: info.path,
          errors: info.errors,
          statusCode: info.statusCode,
        });
      });
    });
    setErrors(resultErrors);
    return resultErrors;
  }, []);

  const resetErrors = useCallback(() => {
    setErrors(new Map());
  }, []);

  return [parse, { errors, resetErrors }];
};
