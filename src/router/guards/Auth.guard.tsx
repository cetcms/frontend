import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { Loading } from 'src/components';

import { useAuth } from './hooks';

export type AuthGuardProps = {
  children?: React.ReactNode;
};
export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { loading, auth } = useAuth();

  if (loading) {
    return <Loading />;
  }
  if (auth) {
    return children || <Outlet />;
  }

  return <Navigate to="/auth/login" />;
};
