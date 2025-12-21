import { Navigate, RouteObject } from 'react-router';
import { CompanyFormPage, CompanyRoleFormPage, CompanyRolePage } from 'src/pages/company';
import { DashboardPage } from 'src/pages/home';
import { MemberFormPage, MemberPage } from 'src/pages/member';
import { WebsitePage } from "src/pages/applications/Website/Website.page";

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
    path: 'website/list',
    Component: WebsitePage,
  },
];

export default routes;
