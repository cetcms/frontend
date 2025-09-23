import React from 'react';
import { RouteObject } from 'react-router';
import { AuthLayout, MainLayout } from 'src/layouts';
import { HomePage, LoginPage } from 'src/pages';
import { NotFoundPage } from 'src/pages/error';

import { AuthGuard, GuestGuard } from './guards';

type RouteItem = RouteObject & {
  guards?: Array<React.FC>;
  layout?: React.FC;
};

export const routes: RouteItem[] = [
  {
    path: '/',
    element: <HomePage />,
    layout: React.memo(() => <MainLayout />),
    guards: [AuthGuard],
  },
  {
    path: '/auth',
    guards: [GuestGuard],
    layout: React.memo(() => <AuthLayout />),
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
];

routes.push({
  path: '*',
  element: <NotFoundPage />,
});
