import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { Loading } from 'src/components';
import { useAuth } from 'src/hooks';

export type GuestGuardProps = {
  children?: React.ReactNode;
};
export const GuestGuard: React.FC<GuestGuardProps> = ({ children }) => {
  const { loading, auth } = useAuth();

  if (loading) {
    return <Loading />;
  }
  if (!auth) {
    return children || <Outlet />;
  }

  return <Navigate to="/" />;
};
