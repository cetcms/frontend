import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { routes } from 'src/router/routes';

const router = createBrowserRouter(
  routes.map((route) => {
    // 在这里实现逻辑，把 guards 转成嵌套
    let element = route.element;
    if (route.layout) {
      element = React.createElement(route.layout, {}, element);
    }
    route.guards?.reverse().forEach((Guard) => {
      element = React.createElement(Guard, {}, element);
    });
    route.element = element;
    return route;
  })
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
