import { Navigate, RouteObject } from 'react-router';
import { AuthLayout, MainLayout } from 'src/layouts';
import { LoginPage } from 'src/pages/auth';
import { CompanyPage } from 'src/pages/company';
import { NotFoundPage } from 'src/pages/error';
import { DashboardPage, DevelopPage } from 'src/pages/home';

import { AuthGuard, GuestGuard } from './guards';

const mainRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="dashboard" />,
  },
  {
    path: 'dashboard',
    Component: DashboardPage,
  },
  {
    path: 'company',
    Component: CompanyPage,
  },
  {
    path: 'develop',
    Component: DevelopPage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
];

const authRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="login" />,
  },
  {
    path: 'login',
    Component: LoginPage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
];

/**
 * 组装并暴露路由
 */
export const routes: RouteObject[] = [
  {
    path: '',
    Component: AuthGuard,
    children: [
      {
        path: '*',
        Component: MainLayout,
        children: mainRoutes,
      },
    ],
  },
  {
    path: '/auth',
    Component: GuestGuard,
    children: [
      {
        path: '*',
        Component: AuthLayout,
        children: authRoutes,
      },
    ],
  },
];
