import React from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router';
import { ForbiddenPage, DevelopPage } from 'src/pages/error';
import { PagePermissionOption, useAuthStore } from 'src/store';

import { getRoutes } from './routes';

const CheckComponentPermission: React.FC<{ Component: React.ComponentType & PagePermissionOption }> = ({
  Component,
}) => {
  const { checkPermission } = useAuthStore();
  return checkPermission(Component.permissions) ? <Component /> : <ForbiddenPage />;
};

const handleRoute = ({ Component, ...route }: RouteObject) => {
  if (!route.element && Component) {
    route.element = <CheckComponentPermission Component={Component} />;
  }

  if (!route.element && !Component) {
    route.element = <DevelopPage />;
  }

  if (route.children) {
    route.children = route.children.map(handleRoute);
  }

  return route;
};

export const Router = () => {
  const { isAdmin, isCompany, isUser } = useAuthStore();
  const routes = getRoutes(isAdmin ? 'admin' : isCompany ? 'company' : isUser ? 'user' : undefined);
  const router = createBrowserRouter(routes.map(handleRoute));
  return <RouterProvider router={router} />;
};
