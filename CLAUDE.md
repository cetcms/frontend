# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

- `bun dev` – Start development server (Vite)
- `bun build` – Build production bundle (runs `tsc && vite build`)
- `bun preview` – Preview production build locally
- `bun typecheck` – Run TypeScript type checking only

## Testing Commands

- `bun vitest` – Run unit tests (Vitest)
- `bun vitest:watch` – Run unit tests in watch mode
- `bun test` – Run full test suite: typecheck, prettier, lint, vitest, and build
- `bun test:e2e` – Run Playwright E2E tests
- `bun test:e2e:ui` – Run E2E tests with UI mode

## Code Quality Commands

- `bun lint` – Run ESLint and Stylelint
- `bun eslint` – Run ESLint with auto-fix
- `bun stylelint` – Run Stylelint on `**/*.css` files
- `bun prettier` – Check code formatting
- `bun prettier:write` – Format all `**/*.{ts,tsx}` files

## GraphQL Commands

- `bun generate` – Generate GraphQL types from schema (watch mode)
- Generated types are output to `src/graphql/generated/`

## Storybook Commands

- `bun storybook` – Start Storybook dev server on port 6006
- `bun storybook:build` – Build static Storybook

## Architecture Overview

### Tech Stack

- **Framework**: React 19 with TypeScript (strict mode)
- **Build Tool**: Vite 8 with native tsconfig paths resolution (`resolve.tsconfigPaths`)
- **UI Library**: Mantine v8 with extensions (DataTable, ContextMenu, Charts, Form, Modals, Notifications)
- **Routing**: React Router v7
- **State Management**: Zustand 5 (`src/store/`)
- **Data Fetching**: Apollo Client v4 with GraphQL
- **Authentication**: JWT-based, stored in localStorage
- **Internationalization**: i18next with namespace-based JSON files in `src/i18n/locales/`
- **Styling**: SCSS (Sass Embedded) with PostCSS preset for Mantine
- **Testing**: Vitest + React Testing Library for unit tests, Playwright for E2E

### Project Structure

```
src/
├── components/      # Reusable UI components
│   ├── DataTable/   # Enhanced data table with filtering/pagination
│   ├── DataFilter/  # Filter inputs for data tables
│   ├── FormPage/    # Form page layout components
│   └── FormInputs/  # Form input wrappers
├── graphql/
│   ├── queries/     # .graphql files
│   └── generated/   # Auto-generated types and hooks
├── hooks/           # Custom React hooks
├── i18n/            # i18n config and translation files
├── layouts/         # Layout components (Auth, Main)
├── pages/           # Page components organized by feature
├── providers/       # React Context providers (Apollo, Initialize)
├── router/          # Route definitions, guards, menus
├── start/           # App initialization registrations
├── store/           # Zustand stores (auth, theme)
├── styles/          # Global SCSS files
└── utils/           # Utility functions
```

### Key Architectural Patterns

**Routing and Guards** (`src/router/`)
- Routes defined in `src/router/routes/*.tsx` files by user type (admin, company, member)
- `AuthGuard` protects authenticated routes, redirects to `/auth/login` if not logged in
- `GuestGuard` protects auth pages (login), redirects to home if already authenticated
- Route permissions set via component static property: `Component.permissions = PermissionAlias.X`
- Router dynamically loads routes based on user type (admin/company/member) from auth store

**Authentication State** (`src/store/auth.ts`)
- JWT tokens stored in localStorage with automatic expiration checking
- `checkPermission()` supports AND/OR modes: single permission, array, or `{ AND: [...], OR: [...] }`
- User type detection: `isAdmin`, `isCompany`, `isMember` booleans from auth state

**GraphQL Usage**
- Queries/mutations defined in `.graphql` files in `src/graphql/queries/`
- Import generated hooks: `import { PaginateAdminsDocument } from 'src/graphql'`
- Use `useQuery` for data fetching, `useMutation` for mutations
- Upload component uses `apollo-upload-client` for file uploads

**Form Handling** (`src/components/FormPage/`)
- Use Mantine Form with Zod validation (via `mantine-form-zod-resolver`)
- `FormPageAction` component provides standard action bar (back, reset, save)
- `useParseApolloErrors` hook converts GraphQL errors to form field errors

**Data Tables** (`src/components/DataTable/`)
- Built on `mantine-datatable` with integrated filtering
- Columns define `type` and `options` for automatic filter generation
- Pagination handled via `onChangeRequest` callback with GraphQL refetch

**Component Conventions**
- Function components as arrow functions (enforced by ESLint)
- Props interfaces named `{ComponentName}Props`
- Index files export public API for each directory
- Story files use `.story.tsx` extension
- Test files use `.test.tsx` extension

**Styling**
- SCSS with custom mixins in `src/styles/base.scss` (rem, light-dark, alpha, hover, breakpoints)
- Mantine CSS layers imported in `src/setup.tsx`
- CSS variables for Mantine breakpoints available in SCSS

**Import Organization** (enforced by ESLint)
- Order: builtin → external → internal → parent → sibling → index
- Newlines between groups, alphabetical within groups
- Path aliases: `src/*` → `./src/*`, `~/*` → `./*`

**Internationalization**
- Translations in `src/i18n/locales/{zh,en}/{namespace}.json`
- Use `useTranslation(['namespace1', 'namespace2'])` hook
- Model translations in `models.json`, common in `common.json`, validation in `validation.json`
