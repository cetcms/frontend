---
trigger: always_on
---

# 基础规则

## 包管理器
- 使用 pnpm 作为包管理器
- 优先使用 package.json 中定义的 script 命令执行任务
- 示例：`pnpm install`, `pnpm dev`, `pnpm build`

## 代码格式化
- 优先使用项目配置的 eslint 进行代码格式化
- 执行命令：`pnpm lint` 或 `pnpm lint:fix`
- 遵循项目中的 .eslintrc 配置

## 前端页面调试
- 可以使用 playwright MCP 进行前端页面调试
- 使用 playwright 进行调试时，需要自行使用对应账号进行登录
- 确保在测试前完成必要的身份验证流程
- 管理员登录：/auth/login?target=Admin
- 管理员账号密码：admin@email.com、123456


## 注意事项
- 在执行任何命令前，先检查 package.json 中是否有对应的 script
- 保持代码风格与项目现有代码一致
- 提交代码前确保通过 lint 检查
