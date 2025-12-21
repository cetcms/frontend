import { Navigate, RouteObject } from 'react-router';
import { AdminFormPage, AdminPage, AdminRoleFormPage, AdminRolePage } from 'src/pages/admin';
import { WebsitePage, WebsiteFormPage } from 'src/pages/applications';
import { CompanyFormPage, CompanyPage, CompanyRoleFormPage, CompanyRolePage } from 'src/pages/company';
import { DashboardPage } from 'src/pages/home';
import { MemberFormPage, MemberPage } from 'src/pages/member';

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
