import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 动态导入所有翻译文件
const loadTranslations = () => {
  const resources: Record<string, Record<string, Record<string, any>>> = {
    zh: {},
    en: {},
  };

  // 获取所有翻译文件
  const modules = import.meta.glob('./locales/**/*.json', { eager: true });

  // 处理每个翻译文件
  Object.entries(modules).forEach(([path, module]) => {
    const lang = path.includes('/zh/') ? 'zh' : 'en';
    // 从路径中提取文件名作为命名空间
    const namespace = path.split('/').pop()?.replace('.json', '');
    if (!namespace) return;

    // 将翻译内容添加到对应的命名空间
    resources[lang][namespace] = (module as any).default;
  });

  return resources;
};

// 获取浏览器首选语言
const getBrowserLanguage = () => {
  const browserLang = navigator.language.toLowerCase();
  return browserLang.startsWith('zh') ? 'zh' : 'en';
};

// 创建i18n实例
i18n.use(initReactI18next);

// 初始化函数
export const initializeI18n = async () => {
  // 初始化翻译资源
  const resources = loadTranslations();

  // 获取本地存储的语言设置
  const storedLanguage = localStorage.getItem('app-language');

  // 确定使用的语言
  const defaultLanguage = storedLanguage || getBrowserLanguage();

  await i18n.init({
    resources,
    lng: defaultLanguage,
    fallbackLng: 'zh',
    fallbackNS: 'common',
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    saveMissing: true,
  });

  return i18n;
};

export default i18n;
