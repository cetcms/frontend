import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useTranslation } from 'react-i18next';
import 'dayjs/locale/en';
import 'dayjs/locale/zh';
import 'dayjs/locale/ja';
import 'dayjs/locale/ko';
import 'dayjs/locale/zh-hk';

dayjs.extend(relativeTime);
dayjs.locale('zh');
dayjs.locale('zh-hk');
dayjs.locale('en');
dayjs.locale('ja');
dayjs.locale('ko');

const localeAlias = {
  ko: 'ko',
  zhHant: 'zh-hk',
  ja: 'ja',
  zh: 'zh',
  en: 'en',
};

export const useDate = () => {
  const { i18n } = useTranslation();
  const now = dayjs();
  return {
    formatFriendlyTime: (date: Date) => {
      const target = dayjs(date);
      const diffDays = now.diff(target, 'day');
      if (diffDays > 1) {
        return dayjs(date).format('YYYY-MM-DD A');
      }
      return dayjs(date)
        .locale(localeAlias[i18n.language as keyof typeof localeAlias])
        .from(now);
    },
  };
};
