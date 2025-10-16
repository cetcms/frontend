import { Navigate, RouteObject } from 'react-router';
import { CompanyFormPage, CompanyRoleFormPage, CompanyRolePage } from 'src/pages/company';
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
