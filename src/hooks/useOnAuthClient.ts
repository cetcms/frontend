import { useAuthStore } from 'src/store';

export type UseOnAuthClientOption = {
  admin?: any;
  member?: any;
  company?: any;
  default: any;
};

export const useOnAuthClient = (option: UseOnAuthClientOption) => {
  const { isAdmin, isMember, isCompany } = useAuthStore();
  return isAdmin ? option.admin : isMember ? option.member : isCompany ? option.company : option.default;
};
