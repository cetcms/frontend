import { Navigate, RouteObject } from 'react-router';
import { DashboardPage } from 'src/pages/home';

const routes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="dashboard" />,
  },
  {
    path: 'dashboard',
    Component: DashboardPage,
  },
];

export default routes;
