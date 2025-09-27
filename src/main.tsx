// 初始化应用
import { SetupApp } from 'src/setup';
import registerMenus from 'src/start/register-menus';

SetupApp({
  registerMenus,
}).then(() => {
  console.log('App initialized');
});
