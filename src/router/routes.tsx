import { Navigate, Outlet, RouteObject } from 'react-router';
import { AuthLayout, MainLayout } from 'src/layouts';
import { AdminFormPage, AdminPage, AdminRolePage } from 'src/pages/admin';
import { AdminRoleFormPage } from 'src/pages/admin/AdminRole/AdminRoleForm.page';
import { LoginPage } from 'src/pages/auth';
import { CompanyPage, CompanyRolePage } from 'src/pages/company';
import { NotFoundPage } from 'src/pages/error';
import { DashboardPage, DevelopPage } from 'src/pages/home';
import { MediaPage } from 'src/pages/media';
import { UserPage } from 'src/pages/user';

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
    path: 'admin',
    Component: Outlet,
    children: [
      {
        index: true,
        element: <Navigate to="list" />,
      },
      {
        path: 'list',
        Component: AdminPage,
      },
      {
        path: 'add',
        Component: AdminFormPage,
      },
      {
        path: 'edit',
        Component: AdminFormPage,
      },
      {
        path: 'roles',
        Component: AdminRolePage,
      },
      {
        path: 'role/add',
        Component: AdminRoleFormPage,
      },
      {
        path: 'role/edit',
        Component: AdminRoleFormPage,
      },
    ],
  },
  {
    path: 'company',
    Component: Outlet,
    children: [
      {
        index: true,
        element: <Navigate to="list" />,
      },
      {
        path: 'list',
        Component: CompanyPage,
      },
      {
        path: 'roles',
        Component: CompanyRolePage,
      },
    ],
  },
  {
    path: 'user',
    Component: UserPage,
  },
  {
    path: 'media',
    Component: MediaPage,
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