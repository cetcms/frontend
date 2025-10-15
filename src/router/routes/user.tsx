import { Navigate, RouteObject } from 'react-router';
import { CompanyPage } from 'src/pages/company';
import { DashboardPage } from 'src/pages/home';
import { UserFormPage } from 'src/pages/user';

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
    path: 'company/list',
    Component: CompanyPage,
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
