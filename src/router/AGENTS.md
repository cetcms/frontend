# src/router — routing, guards, menus

## OVERVIEW

Routes/menus are split by user type (admin / company / member), not by file-based routing. `Router.tsx` picks the route set from `useAuthStore`, wraps each component in a permission check. Menu trees are permission-filtered at boot.

## STRUCTURE

```
router/
├── Router.tsx        # user-type → getRoutes(target); handleRoute wraps Component in CheckComponentPermission
├── guards/           # Auth.guard.tsx (→ /auth/login), Guest.guard.tsx (inverse)
├── routes/           # index.tsx (getRoutes) + {admin,company,member}.tsx (flat relative-path tables)
└── menus/            # {admin,company,member}.ts (MenuItem trees) + index.ts (types)
```

## WHERE TO LOOK

| Need | File |
|------|------|
| Route assembly + guards wiring | `routes/index.tsx` |
| Per-user-type route table | `routes/{admin,company,member}.tsx` |
| Permission enforcement | `Router.tsx` (`handleRoute` → `CheckComponentPermission`) |
| Sidebar/nav menu trees | `menus/{admin,company,member}.ts` |
| Menu boot pipeline | `src/hooks/useRegisterMenus.ts` |

## CONVENTIONS

- **Route tables are flat + relative** (`company/list`, `company/add`, `company/edit`); add/edit share one `FooFormPage`. Route with neither `Component` nor element → `<DevelopPage/>`.
- **Static permission prop** (`Component.permissions = PermissionAlias.X`) is read by `handleRoute` → renders `<ForbiddenPage/>` on fail.
- **Guards wrap layout branches, not per-route**: `AuthGuard` = Loading while `!initialized || (login && !auth)`; `GuestGuard` = inverse.
- **Menu items**: `label` = i18n key `navbar:*`, `icon` = solar iconify name, absolute `path`, `hide: true` for form routes (breadcrumb-only), optional per-item `permissions`.
- **Menu pipeline** (`useRegisterMenus`): pick group by user type → optional `registerMenus(defaultGroup)` override → recursive `checkPermission` filter → `useMenuStore`.

## ANTI-PATTERNS

- Don't register routes in one shared `routes.tsx` — keep per-user-type files (README's `routes.tsx` claim is stale).
- Don't set `.permissions` on menu items unless the route itself doesn't already gate it — route-level `Component.permissions` is the primary guard.
