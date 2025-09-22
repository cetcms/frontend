import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { Loading } from 'src/components';
import { useAuth } from 'src/router/hooks';

export type GuestGuardProps = {
  children?: React.ReactNode;
};
export function GuestGuard({ children }: GuestGuardProps) {
  const { loading, auth } = useAuth();

  if (loading) {
    return <Loading />;
  }
  if (!auth) {
    return children || <Outlet />;
  }

  return <Navigate to="/" />;
}
