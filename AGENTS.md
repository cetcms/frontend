# PROJECT KNOWLEDGE BASE

**Generated:** 2026-08-23 04:52 CST
**Commit:** 95f611e
**Branch:** develop

## OVERVIEW

Geekron/CETCMS admin console — single-package SPA. React 19 + Mantine 9 + Vite 8 + Apollo Client 4 (GraphQL codegen) + Zustand 5 + i18next. Multi-user-type (admin / company / member) with permission-gated routing. Package manager: `bun`.

## STRUCTURE

```
frontend/
├── index.html               # Vite entry (#root, /src/main.tsx)
├── vite.config.mjs          # aliases + native tsconfigPaths + inline vitest config
├── codegen.config.mjs       # GraphQL codegen (client preset → src/graphql/generated/)
├── oxlint.config.mjs        # oxlint rules (arrow-fn enforced, curly off, generated/ ignored)
├── oxfmt.config.mjs         # oxfmt (formatter) rules
├── test-utils/              # root-level test helpers (NOT src/); import as `~/test-utils`
├── tests/e2e/               # Playwright specs (by feature dir) + fixtures + helpers
└── src/
    ├── main.tsx             # calls SetupApp()
    ├── setup.tsx            # SetupApp factory: i18n init + provider tree (de-facto App.tsx)
    ├── export.tsx           # public API for embedders (SetupApp/ThemeOptions/MenuItem)
    ├── contract.ts          # SERVER_GRAPHQL_API endpoint const
    ├── start/               # pluggable registration hooks (register-menus/theme, no-op defaults)
    ├── providers/           # Apollo.provider + Initialize.provider
    ├── router/              # Router + guards/ + menus/ + routes/ (split by user type)
    ├── store/               # Zustand: auth.ts / menu.ts / theme.ts
    ├── hooks/               # 9 hooks (auth boot, menu/theme registration, translations)
    ├── graphql/             # queries/*.graphql + generated/ (codegen output, DO NOT EDIT)
    ├── pages/               # 8 feature dirs grouped by user type
    ├── components/          # shared UI kit (DataTable, DataFilter, FormInputs, FormPage)
    ├── layouts/             # Auth.layout + Main.layout + SideNavbar widgets
    ├── i18n/                # i18next config + locales/{zh,en}/*.json (namespace = filename)
    ├── utils/               # file-helper, logger, menu, validates (NO barrel)
    └── styles/              # base.scss (rem/light-dark/alpha fns + mixins), main.scss
```

## WHERE TO LOOK

| Task | Location | Notes |
|------|----------|-------|
| App bootstrap / provider tree | `src/setup.tsx` → `src/providers/` | i18n → Apollo → Initialize → Notifications → Modals → Router |
| Auth / JWT / permissions | `src/store/auth.ts` | `checkPermission` AND/OR; JWT in localStorage key `login` |
| Add a page | `src/pages/**` + `src/router/routes/*` + `src/router/menus/*` | 4-touchpoint registration (see `src/pages/AGENTS.md`) |
| Add a GraphQL query | `src/graphql/queries/*.graphql` | run `bun generate`; import from `src/graphql` barrel |
| Route guards / user-type split | `src/router/` | see `src/router/AGENTS.md` |
| Reusable table/filter/form UI | `src/components/` | see `src/components/AGENTS.md` |
| i18n strings | `src/i18n/locales/{zh,en}/*.json` | `models` namespace is backend-synced, NOT local |

## CODE MAP

| Symbol | Type | Location | Role |
|--------|------|----------|------|
| `SetupApp` | fn | `src/setup.tsx` | entry factory; init i18n + render provider tree |
| `ApolloProvider` | component | `src/providers/Apollo.provider.tsx` | ApolloClient + UploadHttpLink, auth/fingerprint/lang headers; rebuilt on `login` change |
| `InitializeProvider` | component | `src/providers/Initialize.provider.tsx` | gates on 4 async hooks, then MantineProvider |
| `useAuthStore` | store | `src/store/auth.ts` | auth/login/user-type flags; `checkPermission` |
| `useMenuStore` | store | `src/store/menu.ts` | nav active/expand state |
| `useThemeStore` | store | `src/store/theme.ts` | Mantine theme override |
| `Router` | component | `src/router/Router.tsx` | selects routes by user type; wraps components in permission check |
| `getRoutes` | fn | `src/router/routes/index.tsx` | assembles `/auth` (GuestGuard) + `*` (AuthGuard) branches |
| `useInitializeAuth` | hook | `src/hooks/useInitializeAuth.ts` | AuthInfo query; 401 → clearAuth |
| `SetupAppOptions` | type | `src/setup.tsx` | extension contract (`registerMenus`/`registerTheme`) |

## CONVENTIONS

**File suffixes (exact):** `.page.tsx` (list) · `{X}Form.page.tsx` (form wrapper, reads `?id=`) · `.form.tsx` (form component) · `.hook.ts` · `.interface.ts` · `.module.scss` · `.story.tsx` · `.test.tsx` · `.guard.tsx`. Barrel = `index.ts` per folder (exception: `src/graphql/index.tsx`).

**Path aliases:** `src/*` → `./src/*` · `~/*` → `./*` (project ROOT, e.g. `~/test-utils`) · `test-utils/*` → `./test-utils/*`.

**Components:** arrow-function components enforced (oxlint error). Named exports only (default export only for stories/routes). `React.FC & PagePermissionOption` + static `XPage.permissions = PermissionAlias.Y` after definition.

**Tooling (DO NOT trust CLAUDE.md/README — both stale):** lint = `oxlint` + `stylelint` (NOT ESLint/Prettier). Format = `oxfmt` (`format:test`/`format:write`). No `bun eslint`/`bun prettier` scripts.

**GraphQL:** operations in domain `.graphql` files (TAB-indented); fragments in `_fragments.graphql`; import ONLY from `'src/graphql'` barrel; never hand-edit `generated/`.

**Forms:** Mantine `useForm` built-in validators + `validates([...])` combinator (NOT Zod — despite deps + docs claiming it). Values type derived from generated input.

**i18n:** `defaultNS/fallbackNS: 'common'`, `fallbackLng: 'zh'`. `models` namespace loads from backend GraphQL `translations(scopes:)` at runtime.

## ANTI-PATTERNS (THIS PROJECT)

- **Never introduce:** `TODO`/`FIXME`/`HACK`/`XXX`, `@ts-ignore`/`@ts-expect-error`, `console.log` — all currently zero in `src/`.
- **Never hand-edit `src/graphql/generated/`** — regenerate via `bun generate`; oxlint ignores it anyway.
- **`eslint-disable` comments are inert** — the project migrated to oxlint; ESLint no longer runs. Do not add new ones.
- **No raw i18n strings** — always `t()`; counter-example: `Company.form.tsx` hardcoded `提示：添加企业用于管理`.
- **Do not set `.permissions` on form components** — only on routed page components.
- **The commented-out permission block in `src/pages/projects/Website/WebsiteForm.page.tsx:29-34` is intentional** (add/edit share one component) — don't delete it, don't copy the pattern.
- **Known `any` hotspots** (match local style, don't half-type): `DataFilter/*` + `DataTable/*` subsystems; `_item as any` render-callback cast idiom is accepted.

## COMMANDS

```bash
bun dev                # vite dev server
bun run build          # tsc && vite build   ← MUST use `run` (bun build is a builtin)
bun typecheck          # tsc --noEmit
bun lint               # oxlint && stylelint
bun format:write       # oxfmt (not prettier)
bun vitest             # unit tests
bun run test           # typecheck + format + lint + vitest + build  ← MUST use `run`
bun test:e2e           # playwright
bun generate           # graphql-codegen (WATCH mode; never exits)
bun storybook          # Storybook on :6006
```

## NOTES

- **`bun build` / `bun test` collide with bun builtins** — always `bun run build` / `bun run test`.
- **CI is stale**: `.github/workflows/npm_test.yml` uses yarn/npm (no `yarn.lock` exists). package.json is source of truth.
- **Doc drift** (fix when you see it): CLAUDE.md/README claim ESLint/Prettier, Mantine v8, Vitest 3, Zod forms, `routes.tsx` single file — all wrong. Actual: oxlint/oxfmt, Mantine 9.5.2, Vitest 4, Mantine validators, `routes/*.tsx`.
- **`src/validator/` does not exist** — validation helpers live in `src/utils/validates.ts`.
