import { Navigate, RouteObject } from 'react-router';
import { CompanyPage } from 'src/pages/company';
import { DashboardPage } from 'src/pages/home';
import { MemberFormPage } from 'src/pages/member';

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
    path: 'member/edit',
    Component: MemberFormPage,
  },
  {
    path: 'notification/list',
  },
];

export default routes;
