import { Navigate, Outlet, RouteObject } from 'react-router';
import { AuthLayout, MainLayout } from 'src/layouts';
import { AdminFormPage, AdminPage, AdminRolePage } from 'src/pages/admin';
import { AdminRoleFormPage } from 'src/pages/admin/AdminRole/AdminRoleForm.page';
import { LoginPage } from 'src/pages/auth';
import { CompanyPage, CompanyRolePage } from 'src/pages/company';
import { CompanyFormPage } from 'src/pages/company/Company/CompanyForm.page';
import { CompanyRoleFormPage } from 'src/pages/company/CompanyRole/CompanyRoleForm.page';
import { NotFoundPage } from 'src/pages/error';
import { DashboardPage, DevelopPage } from 'src/pages/home';
import { MediaPage } from 'src/pages/media';
import { UserPage } from 'src/pages/user';
import { UserFormPage } from 'src/pages/user/User/UserForm.page';

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
        path: 'add',
        Component: CompanyFormPage,
      },
      {
        path: 'edit',
        Component: CompanyFormPage,
      },
      {
        path: 'roles',
        Component: CompanyRolePage,
      },
      {
        path: 'role/add',
        Component: CompanyRoleFormPage,
      },
      {
        path: 'role/edit',
        Component: CompanyRoleFormPage,
      },
    ],
  },
  {
    path: 'user',
    Component: UserPage,
  },
  {
    path: 'user',
    Component: Outlet,
    children: [
      {
        index: true,
        element: <Navigate to="list" />,
      },
      {
        path: 'list',
        Component: UserPage,
      },
      {
        path: 'add',
        Component: UserFormPage,
      },
      {
        path: 'edit',
        Component: UserFormPage,
      },
    ],
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
