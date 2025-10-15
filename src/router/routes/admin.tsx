import { Navigate, RouteObject } from 'react-router';
import { AdminFormPage, AdminPage, AdminRoleFormPage, AdminRolePage } from 'src/pages/admin';
import { CompanyFormPage, CompanyPage, CompanyRoleFormPage, CompanyRolePage } from 'src/pages/company';
import { DashboardPage } from 'src/pages/home';
import { UserFormPage, UserPage } from 'src/pages/user';

const routes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="dashboard" />,
  },
  {
    path: 'dashboard',
    Component: DashboardPage,
  },
  {
    path: 'admin/list',
    Component: AdminPage,
  },
  {
    path: 'admin/add',
    Component: AdminFormPage,
  },
  {
    path: 'admin/edit',
    Component: AdminFormPage,
  },
  {
    path: 'admin/roles',
    Component: AdminRolePage,
  },
  {
    path: 'admin/role/add',
    Component: AdminRoleFormPage,
  },
  {
    path: 'admin/role/edit',
    Component: AdminRoleFormPage,
  },
  {
    path: 'company/list',
    Component: CompanyPage,
  },
  {
    path: 'company/add',
    Component: CompanyFormPage,
  },
  {
    path: 'company/edit',
    Component: CompanyFormPage,
  },
  {
    path: 'company/roles',
    Component: CompanyRolePage,
  },
  {
    path: 'company/role/add',
    Component: CompanyRoleFormPage,
  },
  {
    path: 'company/role/edit',
    Component: CompanyRoleFormPage,
  },
  {
    path: 'user/list',
    Component: UserPage,
  },
  {
    path: 'user/add',
    Component: UserFormPage,
  },
  {
    path: 'user/edit',
    Component: UserFormPage,
  },
  {
    path: 'notification/list',
  },
];

export default routes;
