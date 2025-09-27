// 初始化应用
import { SetupApp } from 'src/setup';
import registerMenus from 'src/start/register-menus';
import registerTheme from 'src/start/register-theme';

SetupApp({
  registerMenus,
  registerTheme,
}).then();
