import { Navigate, RouteObject } from 'react-router';
import { CompanyFormPage, CompanyRoleFormPage, CompanyRolePage } from 'src/pages/company';
import { DashboardPage } from 'src/pages/home';
import { MemberFormPage, MemberPage } from 'src/pages/member';
import { WebsiteFormPage, WebsitePage } from 'src/pages/projects';

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
    path: 'member/list',
    Component: MemberPage,
  },
  {
    path: 'member/add',
    Component: MemberFormPage,
  },
  {
    path: 'member/edit',
    Component: MemberFormPage,
  },
  {
    path: 'notification/list',
  },
  {
    path: 'project/website/list',
    Component: WebsitePage,
  },
  {
    path: 'project/website/add',
    Component: WebsiteFormPage,
  },
  {
    path: 'project/website/edit',
    Component: WebsiteFormPage,
  },
];

export default routes;
