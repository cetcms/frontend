import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { Loading } from 'src/components';
import { useAuthStore } from 'src/store';

export type GuestGuardProps = {
  children?: React.ReactNode;
};
export const GuestGuard: React.FC<GuestGuardProps> = ({ children }) => {
  const { auth, initialized, login } = useAuthStore();
  const loading = !initialized || (!!login && !auth);

  if (loading) {
    return <Loading />;
  }
  if (!auth) {
    return children || <Outlet />;
  }

  return <Navigate to="/" />;
};
