# src/pages — feature pages

## OVERVIEW

Pages grouped by user type (`admin/ company/ member/ projects/`) + shared (`auth/ home/ media/ error/`). Each feature dir = list page + form page + form component + local components. Permissions gate routes via static `Component.permissions`.

## STRUCTURE (per feature `src/pages/{group}/{Feature}/`)

```
Foo/
├── Foo.page.tsx        # list page: DataTable + useQuery(paginate) — routed
├── FooForm.page.tsx    # form-page wrapper: reads ?id=, useQuery(findOne, skip:!id) — routed
├── Foo.form.tsx        # form component (Mantine Form) — NOT routed
├── components/         # feature-local components + index.tsx barrel
└── (index.ts at group level re-exports routed pages)
```

## ADD-A-PAGE CHECKLIST (4 touchpoints)

1. GraphQL: add operations in `src/graphql/queries/*.graphql`, run `bun generate`.
2. Create `src/pages/{group}/Foo/` per structure; set static `FooPage.permissions = PermissionAlias.X` (or `{ AND: [...] }`); type `React.FC & PagePermissionOption`.
3. Export routed pages from `src/pages/{group}/index.ts`.
4. Register route in each applicable `src/router/routes/{admin,company,member}.tsx` + menu item in `src/router/menus/*.ts` + i18n keys in `locales/{zh,en}/navbar.json`.

## CONVENTIONS

- **List page**: `useQuery(PaginateXDocument, { fetchPolicy: 'network-only' })`; pagination/filter via `refetch({ take, skip, where })` in DataTable `onChangeRequest`.
- **Form page**: `useQuery(FindOneXDocument, { skip: !id, variables: { id: id ?? '' } })`; `if (loading) return <LoadingOverlay visible />`.
- **Permissions**: static prop AFTER component def; granular in-page checks via `checkPermission(PermissionAlias.X)` from `useAuthStore`.
- **Forms**: Mantine `useForm` validators (NOT Zod); GraphQL errors via `useParseApolloErrors()` + `<FormPageErrors errors={errors} />`; success → `notifications.show({ color: 'green' })` + `navigate(backTo)`.
- Feature barrels use named exports (projects/ uses `export *`).

## ANTI-PATTERNS

- **Do NOT set `.permissions` on form components** — only on routed `.page.tsx` components.
- **`WebsiteForm.page.tsx:29-34` commented permission block is intentional** (add/edit share one component) — don't delete, don't copy.
- **No raw i18n strings** — `Company.form.tsx` hardcoded `提示：添加企业用于管理` is the counter-example; use `t()`.
