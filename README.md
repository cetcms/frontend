# CETCMS 前端项目 (React + Mantine + Vite)

这是一个基于 React 19、TypeScript 和 Mantine UI 组件库构建的前端单页应用 (SPA)。它使用 Vite 7 作为构建工具，并集成了 GraphQL (Apollo Client 4) 用于数据获取，React Router 7 用于路由管理。

## 核心技术栈

- **框架**: React 19
- **语言**: TypeScript
- **UI 库**: Mantine v8 (包含核心组件、DataTable、ContextMenu、Notification、Charts、Form、Modals 等)
- **状态管理**: Zustand 5 (用于全局状态如认证、主题、菜单) 和 React 内置状态
- **路由**: React Router v7 (包含路由守卫)
- **数据获取**: GraphQL (Apollo Client v4)
- **认证与授权**: 基于 JWT 的认证机制
- **国际化**: i18next (react-i18next v16)
- **表单处理**: Mantine Form 和 Zod 验证器 (通过 `mantine-form-zod-resolver`)
- **样式**: SCSS (Sass Embedded) 和 PostCSS
- **构建工具**: Vite 7
- **包管理**: pnpm 10
- **测试**: Vitest 3 + React Testing Library 16
- **代码规范**: ESLint 9, Stylelint 16, Prettier 3
- **组件开发**: Storybook 9

## 项目结构概览

```
src/
├── assets/          # 静态资源
├── components/      # 可复用的 UI 组件
├── graphql/         # GraphQL 查询、变更及生成的类型
│   ├── queries/     # .graphql 文件
│   └── generated/   # 由 graphql-codegen 生成的类型和 hooks
├── hooks/           # 自定义 React Hooks
├── i18n/            # 国际化配置和语言包
├── layouts/         # 页面布局组件
├── pages/           # 页面组件，按功能模块组织
├── providers/       # React Context Providers
├── router/          # 路由配置和守卫
├── start/           # 应用启动时的注册逻辑
├── store/           # 应用状态管理 (Zustand stores)
├── styles/          # 全局样式文件
└── validator/       # 表单验证相关
```

## pnpm 脚本命令

### 构建和开发

- `pnpm dev` – 启动开发服务器
- `pnpm build` – 构建生产版本
- `pnpm preview` – 本地预览生产构建

### 代码质量与测试

- `pnpm typecheck` – 检查 TypeScript 类型
- `pnpm lint` – 运行 ESLint 和 Stylelint
  - `pnpm eslint` – 运行 ESLint (带修复)
  - `pnpm stylelint` – 运行 Stylelint (带修复)
- `pnpm prettier` – 使用 Prettier 检查代码格式
  - `pnpm prettier:write` – 使用 Prettier 格式化所有文件
- `pnpm vitest` – 运行 Vitest 测试
- `pnpm vitest:watch` – 启动 Vitest 监听模式
- `pnpm test` – 运行所有代码检查 (类型、格式、Lint、测试、构建)

### GraphQL 代码生成

- `pnpm generate` – 生成 GraphQL 类型 (监听模式)

### 组件开发

- `pnpm storybook` – 启动 Storybook 开发服务器
- `pnpm storybook:build` – 构建生产版本的 Storybook

## 开发约定

*   **组件**: 优先使用函数式组件和 Hooks。UI 组件倾向于使用 Mantine 提供的组件。
*   **路由**: 新增页面需在 `src/router/routes.tsx` 中配置路由，并根据需要添加到 `AuthGuard` 或 `GuestGuard` 下。
*   **状态**: 全局状态使用 Zustand 管理，组件内部状态使用 React 内置 Hooks。
*   **数据获取**: GraphQL 查询和变更定义在 `src/graphql/queries/` 目录下的 `.graphql` 文件中，并使用 `graphql-codegen` 生成类型安全的 Hooks。
*   **认证**: 使用 `src/store/auth.ts` store 管理登录状态，并通过 `AuthGuard` 保护需要认证的路由。
*   **表单**: 使用 Mantine Form 和 Zod 进行表单处理和验证。
*   **样式**: 使用 SCSS 编写样式，遵循项目中已有的 CSS 类命名约定。
*   **代码质量**: 遵循 ESLint 和 Prettier 的规则，确保代码风格统一。提交前运行 `pnpm test` 确保所有检查通过。
