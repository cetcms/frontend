import { Navigate, RouteObject } from 'react-router';
import { AuthLayout, MainLayout } from 'src/layouts';
import { LoginPage } from 'src/pages/auth';
import { NotFoundPage } from 'src/pages/error';
import { AuthGuard, GuestGuard } from 'src/router/guards';

import adminRoutes from './admin';
import companyRoutes from './company';
import userRoutes from './user';

// 处理多级路径的默认索引重定向：
// - 当访问如 "admin"、"company"、"user" 等父级路径时，自动重定向到其第一个子级路由
// - 如果路由数组中已存在该父级路径的明确配置（例如自定义索引或元素），则优先使用已有配置
const redirectHandler = (list: RouteObject[]): RouteObject[] => {
  const getSlugs = (p?: string) => (p ? p.replace(/^\/+/, '').split('/').filter(Boolean) : []);
  const toAbsolute = (p: string) => (p.startsWith('/') ? p : `/${p}`);

  // 自动修复嵌套路由下的绝对子路径问题：统一转为相对路径
  const normalizePath = (route: RouteObject): RouteObject => {
    const newRoute: RouteObject = { ...route };
    if (typeof newRoute.path === 'string') {
      if (newRoute.path !== '*' && newRoute.path.startsWith('/')) {
        newRoute.path = newRoute.path.replace(/^\/+/, '');
      }
    }
    if (newRoute.children) {
      newRoute.children = newRoute.children.map(normalizePath);
    }
    return newRoute;
  };

  const normalizedList = list.map(normalizePath);

  // 识别各分组的第一个子级，注入父级索引重定向（优先尊重显式父级配置）
  const firstChildByGroup = new Map<string, string>(); // key: group root (relative), value: first child (absolute)
  const explicitGroupRoutes = new Set<string>(); // set of group roots (relative)

  for (const r of normalizedList) {
    const slugs = getSlugs(r.path);
    if (!slugs.length) continue;
    if (slugs.length === 1) {
      // 显式父级路径，如 path: 'admin'
      explicitGroupRoutes.add(slugs[0]);
      continue;
    }
    // 记录该分组的第一个子级路由（使用绝对路径进行跳转更稳妥）
    const root = slugs[0];
    const absoluteChild = toAbsolute(r.path!);
    if (!firstChildByGroup.has(root)) {
      firstChildByGroup.set(root, absoluteChild);
    }
  }

  const redirects: RouteObject[] = [];
  for (const [root, firstChildAbs] of firstChildByGroup.entries()) {
    // 若已存在显式父级路由配置，则不注入默认重定向
    if (explicitGroupRoutes.has(root)) continue;
    redirects.push({
      path: root, // 相对路径定义，避免绝对路径嵌套校验错误
      element: <Navigate to={firstChildAbs} replace />,
    });
  }

  // 保持原有结构与配置，新增的重定向路由置于数组前部，不影响其他正常路由
  return [...redirects, ...normalizedList];
};

const authRoutes: RouteObject[] = [
  {
    index: true,
    element: <Navigate to="login" />,
  },
  {
    path: 'login',
    Component: LoginPage,
  },
  {
    path: '*',
    Component: NotFoundPage,
  },
];

export const getRoutes = (target?: 'user' | 'admin' | 'company') => {
  let mainRoutes: RouteObject[] = [];
  switch (target) {
    case 'user':
      mainRoutes = userRoutes;
      break;
    case 'admin':
      mainRoutes = adminRoutes;
      break;
    case 'company':
      mainRoutes = companyRoutes;
      break;
  }

  mainRoutes.push({
    path: '*',
    Component: NotFoundPage,
  });

  const routes: RouteObject[] = [
    {
      path: '/auth',
      Component: GuestGuard,
      children: [
        {
          path: '*',
          Component: AuthLayout,
          children: authRoutes,
        },
      ],
    },
    {
      path: '*',
      Component: AuthGuard,
      children: [
        {
          path: '*',
          Component: MainLayout,
          children: redirectHandler(mainRoutes),
        },
      ],
    },
  ];

  return routes;
};
