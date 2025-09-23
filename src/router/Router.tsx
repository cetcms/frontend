import React from 'react';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router';
import { routes } from 'src/router/routes';

const handleRoute = (route: RouteObject) => {
  if (route.Component) {
    route.Component = React.memo(route.Component);
  }
  if (route.children) {
    route.children = route.children.map(handleRoute);
  }
  return route;
};

const router = createBrowserRouter(routes.map(handleRoute));

export const Router = () => {
  return <RouterProvider router={router} />;
};
