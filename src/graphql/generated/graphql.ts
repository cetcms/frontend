/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type AdminCompanyAdminCompanyIdxCompoundUniqueInput = {
  adminId: string;
  companyId: string;
};

export type AdminCompanyCreateNestedManyWithoutCompanyInput = {
  connect?: Array<AdminCompanyWhereUniqueInput> | null | undefined;
};

export type AdminCompanyListRelationFilter = {
  every?: AdminCompanyWhereInput | null | undefined;
  none?: AdminCompanyWhereInput | null | undefined;
  some?: AdminCompanyWhereInput | null | undefined;
};

export type AdminCompanyOrderByRelationAggregateInput = {
  _count?: SortOrder | null | undefined;
};

export type AdminCompanyUpdateManyWithoutCompanyNestedInput = {
  connect?: Array<AdminCompanyWhereUniqueInput> | null | undefined;
  disconnect?: Array<AdminCompanyWhereUniqueInput> | null | undefined;
};

export type AdminCompanyWhereInput = {
  AND?: Array<AdminCompanyWhereInput> | null | undefined;
  NOT?: Array<AdminCompanyWhereInput> | null | undefined;
  OR?: Array<AdminCompanyWhereInput> | null | undefined;
  admin?: AdminScalarRelationFilter | null | undefined;
  adminId?: StringFilter | null | undefined;
  company?: CompanyScalarRelationFilter | null | undefined;
  companyId?: StringFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  role?: CompanyRoleScalarRelationFilter | null | undefined;
  roleId?: StringFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
};

export type AdminCompanyWhereUniqueInput = {
  admin?: AdminScalarRelationFilter | null | undefined;
  adminCompanyIdx?: AdminCompanyAdminCompanyIdxCompoundUniqueInput | null | undefined;
  adminId?: StringFilter | null | undefined;
  company?: CompanyScalarRelationFilter | null | undefined;
  companyId?: StringFilter | null | undefined;
  role?: CompanyRoleScalarRelationFilter | null | undefined;
  roleId?: StringFilter | null | undefined;
};

export type AdminCreateInput = {
  avatar?: string | null | undefined;
  email: string;
  name: string;
  notificationRecipients?: NotificationRecipientCreateNestedManyWithoutAdminInput | null | undefined;
  notifications?: NotificationCreateNestedManyWithoutAdminInput | null | undefined;
  password: string;
  role: AdminRoleCreateNestedOneWithoutAdminsInput;
  status?: Status | null | undefined;
};

export type AdminCreateNestedManyWithoutRoleInput = {
  connect?: Array<AdminWhereUniqueInput> | null | undefined;
};

export type AdminListRelationFilter = {
  every?: AdminWhereInput | null | undefined;
  none?: AdminWhereInput | null | undefined;
  some?: AdminWhereInput | null | undefined;
};

export type AdminNullableScalarRelationFilter = {
  is?: AdminWhereInput | null | undefined;
  isNot?: AdminWhereInput | null | undefined;
};

export type AdminOrderByRelationAggregateInput = {
  _count?: SortOrder | null | undefined;
};

export type AdminOrderByWithRelationInput = {
  auths?: AuthOrderByRelationAggregateInput | null | undefined;
  avatar?: SortOrderInput | null | undefined;
  companies?: AdminCompanyOrderByRelationAggregateInput | null | undefined;
  createdAt?: SortOrder | null | undefined;
  email?: SortOrder | null | undefined;
  id?: SortOrder | null | undefined;
  logs?: RequestLogOrderByRelationAggregateInput | null | undefined;
  mediaFiles?: MediaFileOrderByRelationAggregateInput | null | undefined;
  mediaFolders?: MediaFolderOrderByRelationAggregateInput | null | undefined;
  name?: SortOrder | null | undefined;
  notificationRecipients?: NotificationRecipientOrderByRelationAggregateInput | null | undefined;
  notifications?: NotificationOrderByRelationAggregateInput | null | undefined;
  role?: AdminRoleOrderByWithRelationInput | null | undefined;
  roleId?: SortOrder | null | undefined;
  status?: SortOrder | null | undefined;
  updatedAt?: SortOrder | null | undefined;
};

export type AdminRoleCreateInput = {
  admins?: AdminCreateNestedManyWithoutRoleInput | null | undefined;
  code: string;
  description?: string | null | undefined;
  name: string;
  permissions?: Array<string> | null | undefined;
  status?: Status | null | undefined;
};

export type AdminRoleCreateNestedOneWithoutAdminsInput = {
  connect?: AdminRoleWhereUniqueInput | null | undefined;
};

export type AdminRoleOrderByWithRelationInput = {
  admins?: AdminOrderByRelationAggregateInput | null | undefined;
  code?: SortOrder | null | undefined;
  createdAt?: SortOrder | null | undefined;
  description?: SortOrderInput | null | undefined;
  id?: SortOrder | null | undefined;
  name?: SortOrder | null | undefined;
  permissions?: SortOrder | null | undefined;
  status?: SortOrder | null | undefined;
  updatedAt?: SortOrder | null | undefined;
};

export type AdminRoleScalarRelationFilter = {
  is?: AdminRoleWhereInput | null | undefined;
  isNot?: AdminRoleWhereInput | null | undefined;
};

export type AdminRoleUpdateInput = {
  admins?: AdminUpdateManyWithoutRoleNestedInput | null | undefined;
  code?: string | null | undefined;
  description?: string | null | undefined;
  name?: string | null | undefined;
  permissions?: Array<string> | null | undefined;
  status?: Status | null | undefined;
};

export type AdminRoleUpdateOneRequiredWithoutAdminsNestedInput = {
  connect?: AdminRoleWhereUniqueInput | null | undefined;
};

export type AdminRoleWhereInput = {
  AND?: Array<AdminRoleWhereInput> | null | undefined;
  NOT?: Array<AdminRoleWhereInput> | null | undefined;
  OR?: Array<AdminRoleWhereInput> | null | undefined;
  admins?: AdminListRelationFilter | null | undefined;
  code?: StringFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  description?: StringNullableFilter | null | undefined;
  id?: StringFilter | null | undefined;
  name?: StringFilter | null | undefined;
  permissions?: StringNullableListFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
};

export type AdminRoleWhereUniqueInput = {
  admins?: AdminListRelationFilter | null | undefined;
  code?: string | null | undefined;
  description?: StringNullableFilter | null | undefined;
  id?: string | null | undefined;
  name?: string | null | undefined;
  permissions?: StringNullableListFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
};

export type AdminScalarRelationFilter = {
  is?: AdminWhereInput | null | undefined;
  isNot?: AdminWhereInput | null | undefined;
};

export type AdminUpdateInput = {
  avatar?: string | null | undefined;
  email?: string | null | undefined;
  name?: string | null | undefined;
  notificationRecipients?: NotificationRecipientUpdateManyWithoutAdminNestedInput | null | undefined;
  notifications?: NotificationUpdateManyWithoutAdminNestedInput | null | undefined;
  password?: string | null | undefined;
  role?: AdminRoleUpdateOneRequiredWithoutAdminsNestedInput | null | undefined;
  status?: Status | null | undefined;
};

export type AdminUpdateManyWithoutRoleNestedInput = {
  connect?: Array<AdminWhereUniqueInput> | null | undefined;
  disconnect?: Array<AdminWhereUniqueInput> | null | undefined;
};

export type AdminWhereInput = {
  AND?: Array<AdminWhereInput> | null | undefined;
  NOT?: Array<AdminWhereInput> | null | undefined;
  OR?: Array<AdminWhereInput> | null | undefined;
  auths?: AuthListRelationFilter | null | undefined;
  avatar?: StringNullableFilter | null | undefined;
  companies?: AdminCompanyListRelationFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  email?: StringFilter | null | undefined;
  id?: StringFilter | null | undefined;
  logs?: RequestLogListRelationFilter | null | undefined;
  mediaFiles?: MediaFileListRelationFilter | null | undefined;
  mediaFolders?: MediaFolderListRelationFilter | null | undefined;
  name?: StringFilter | null | undefined;
  notificationRecipients?: NotificationRecipientListRelationFilter | null | undefined;
  notifications?: NotificationListRelationFilter | null | undefined;
  role?: AdminRoleScalarRelationFilter | null | undefined;
  roleId?: StringFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
};

export type AdminWhereUniqueInput = {
  avatar?: StringNullableFilter | null | undefined;
  email?: string | null | undefined;
  id?: string | null | undefined;
  name?: StringFilter | null | undefined;
  notificationRecipients?: NotificationRecipientListRelationFilter | null | undefined;
  notifications?: NotificationListRelationFilter | null | undefined;
  role?: AdminRoleScalarRelationFilter | null | undefined;
  roleId?: StringFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
};

export type AuthCreateNestedManyWithoutCompanyInput = {
  connect?: Array<AuthWhereUniqueInput> | null | undefined;
};

export type AuthListRelationFilter = {
  every?: AuthWhereInput | null | undefined;
  none?: AuthWhereInput | null | undefined;
  some?: AuthWhereInput | null | undefined;
};

export type AuthOrderByRelationAggregateInput = {
  _count?: SortOrder | null | undefined;
};

export type AuthUpdateManyWithoutCompanyNestedInput = {
  connect?: Array<AuthWhereUniqueInput> | null | undefined;
  disconnect?: Array<AuthWhereUniqueInput> | null | undefined;
};

export type AuthWhereInput = {
  AND?: Array<AuthWhereInput> | null | undefined;
  NOT?: Array<AuthWhereInput> | null | undefined;
  OR?: Array<AuthWhereInput> | null | undefined;
  admin?: AdminNullableScalarRelationFilter | null | undefined;
  adminId?: StringNullableFilter | null | undefined;
  client?: EnumClientFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  device?: JsonNullableFilter | null | undefined;
  expiredAt?: DateTimeFilter | null | undefined;
  fingerprint?: StringNullableFilter | null | undefined;
  id?: StringFilter | null | undefined;
  location?: JsonNullableFilter | null | undefined;
  member?: MemberNullableScalarRelationFilter | null | undefined;
  memberId?: StringNullableFilter | null | undefined;
  target?: EnumTargetFilter | null | undefined;
  token?: StringFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
};

export type AuthWhereUniqueInput = {
  admin?: AdminNullableScalarRelationFilter | null | undefined;
  adminId?: StringNullableFilter | null | undefined;
  client?: EnumClientFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  device?: JsonNullableFilter | null | undefined;
  expiredAt?: DateTimeFilter | null | undefined;
  fingerprint?: StringNullableFilter | null | undefined;
  id?: string | null | undefined;
  location?: JsonNullableFilter | null | undefined;
  member?: MemberNullableScalarRelationFilter | null | undefined;
  memberId?: StringNullableFilter | null | undefined;
  target?: EnumTargetFilter | null | undefined;
  token?: StringFilter | null | undefined;
};

export type BigIntFilter = {
  equals?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  not?: NestedBigIntFilter | null | undefined;
  notIn?: Array<string> | null | undefined;
};

export type BoolFilter = {
  equals?: boolean | null | undefined;
  not?: NestedBoolFilter | null | undefined;
};

export enum Client {
  Admin = 'Admin',
  Company = 'Company',
  Member = 'Member'
}

export type CompanyCreateInput = {
  admins?: AdminCompanyCreateNestedManyWithoutCompanyInput | null | undefined;
  alias?: string | null | undefined;
  auths?: AuthCreateNestedManyWithoutCompanyInput | null | undefined;
  code?: string | null | undefined;
  description?: string | null | undefined;
  logo?: string | null | undefined;
  logs?: RequestLogCreateNestedManyWithoutCompanyInput | null | undefined;
  mediaFiles?: MediaFileCreateNestedManyWithoutCompanyInput | null | undefined;
  mediaFolders?: MediaFolderCreateNestedManyWithoutCompanyInput | null | undefined;
  members?: CompanyMemberCreateNestedManyWithoutCompanyInput | null | undefined;
  name: string;
  notificationRecipients?: NotificationRecipientCreateNestedManyWithoutCompanyInput | null | undefined;
  notifications?: NotificationCreateNestedManyWithoutCompanyInput | null | undefined;
  roles?: CompanyRoleCreateNestedManyWithoutCompanyInput | null | undefined;
  status?: Status | null | undefined;
  websites?: WebsiteCreateNestedManyWithoutCompanyInput | null | undefined;
};

export type CompanyCreateNestedOneWithoutRolesInput = {
  connect?: CompanyWhereUniqueInput | null | undefined;
};

export type CompanyCreateNestedOneWithoutWebsitesInput = {
  connect?: CompanyWhereUniqueInput | null | undefined;
};

export type CompanyMemberCompanyMemberIdxCompoundUniqueInput = {
  companyId: string;
  memberId: string;
};

export type CompanyMemberCreateNestedManyWithoutCompanyInput = {
  connect?: Array<CompanyMemberWhereUniqueInput> | null | undefined;
};

export type CompanyMemberListRelationFilter = {
  every?: CompanyMemberWhereInput | null | undefined;
  none?: CompanyMemberWhereInput | null | undefined;
  some?: CompanyMemberWhereInput | null | undefined;
};

export type CompanyMemberOrderByRelationAggregateInput = {
  _count?: SortOrder | null | undefined;
};

export type CompanyMemberUpdateManyWithoutCompanyNestedInput = {
  connect?: Array<CompanyMemberWhereUniqueInput> | null | undefined;
  disconnect?: Array<CompanyMemberWhereUniqueInput> | null | undefined;
};

export type CompanyMemberWhereInput = {
  AND?: Array<CompanyMemberWhereInput> | null | undefined;
  NOT?: Array<CompanyMemberWhereInput> | null | undefined;
  OR?: Array<CompanyMemberWhereInput> | null | undefined;
  company?: CompanyScalarRelationFilter | null | undefined;
  companyId?: StringFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  invitePassed?: BoolFilter | null | undefined;
  member?: MemberScalarRelationFilter | null | undefined;
  memberId?: StringFilter | null | undefined;
  role?: CompanyRoleScalarRelationFilter | null | undefined;
  roleId?: StringFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
};

export type CompanyMemberWhereUniqueInput = {
  company?: CompanyScalarRelationFilter | null | undefined;
  companyId?: StringFilter | null | undefined;
  companyMemberIdx?: CompanyMemberCompanyMemberIdxCompoundUniqueInput | null | undefined;
  invitePassed?: BoolFilter | null | undefined;
  member?: MemberScalarRelationFilter | null | undefined;
  memberId?: StringFilter | null | undefined;
  role?: CompanyRoleScalarRelationFilter | null | undefined;
  roleId?: StringFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
};

export type CompanyNullableScalarRelationFilter = {
  is?: CompanyWhereInput | null | undefined;
  isNot?: CompanyWhereInput | null | undefined;
};

export type CompanyOrderByWithRelationInput = {
  admins?: AdminCompanyOrderByRelationAggregateInput | null | undefined;
  alias?: SortOrderInput | null | undefined;
  auths?: AuthOrderByRelationAggregateInput | null | undefined;
  code?: SortOrderInput | null | undefined;
  createdAt?: SortOrder | null | undefined;
  description?: SortOrderInput | null | undefined;
  id?: SortOrder | null | undefined;
  logo?: SortOrderInput | null | undefined;
  logs?: RequestLogOrderByRelationAggregateInput | null | undefined;
  mediaFiles?: MediaFileOrderByRelationAggregateInput | null | undefined;
  mediaFolders?: MediaFolderOrderByRelationAggregateInput | null | undefined;
  members?: CompanyMemberOrderByRelationAggregateInput | null | undefined;
  name?: SortOrder | null | undefined;
  notificationRecipients?: NotificationRecipientOrderByRelationAggregateInput | null | undefined;
  notifications?: NotificationOrderByRelationAggregateInput | null | undefined;
  roles?: CompanyRoleOrderByRelationAggregateInput | null | undefined;
  status?: SortOrder | null | undefined;
  updatedAt?: SortOrder | null | undefined;
  websites?: WebsiteOrderByRelationAggregateInput | null | undefined;
};

export type CompanyRoleCompanyRoleIdxCompoundUniqueInput = {
  code: string;
  companyId: string;
};

export type CompanyRoleCreateInput = {
  code: string;
  company?: CompanyCreateNestedOneWithoutRolesInput | null | undefined;
  description?: string | null | undefined;
  name: string;
  permissions?: Array<string> | null | undefined;
  status?: Status | null | undefined;
};

export type CompanyRoleCreateNestedManyWithoutCompanyInput = {
  connect?: Array<CompanyRoleWhereUniqueInput> | null | undefined;
};

export type CompanyRoleListRelationFilter = {
  every?: CompanyRoleWhereInput | null | undefined;
  none?: CompanyRoleWhereInput | null | undefined;
  some?: CompanyRoleWhereInput | null | undefined;
};

export type CompanyRoleOrderByRelationAggregateInput = {
  _count?: SortOrder | null | undefined;
};

export type CompanyRoleOrderByWithRelationInput = {
  admins?: AdminCompanyOrderByRelationAggregateInput | null | undefined;
  code?: SortOrder | null | undefined;
  company?: CompanyOrderByWithRelationInput | null | undefined;
  companyId?: SortOrderInput | null | undefined;
  createdAt?: SortOrder | null | undefined;
  description?: SortOrderInput | null | undefined;
  id?: SortOrder | null | undefined;
  members?: CompanyMemberOrderByRelationAggregateInput | null | undefined;
  name?: SortOrder | null | undefined;
  permissions?: SortOrder | null | undefined;
  status?: SortOrder | null | undefined;
  updatedAt?: SortOrder | null | undefined;
};

export type CompanyRoleScalarRelationFilter = {
  is?: CompanyRoleWhereInput | null | undefined;
  isNot?: CompanyRoleWhereInput | null | undefined;
};

export type CompanyRoleUpdateInput = {
  code?: string | null | undefined;
  company?: CompanyUpdateOneWithoutRolesNestedInput | null | undefined;
  description?: string | null | undefined;
  name?: string | null | undefined;
  permissions?: Array<string> | null | undefined;
  status?: Status | null | undefined;
};

export type CompanyRoleUpdateManyWithoutCompanyNestedInput = {
  connect?: Array<CompanyRoleWhereUniqueInput> | null | undefined;
  disconnect?: Array<CompanyRoleWhereUniqueInput> | null | undefined;
};

export type CompanyRoleWhereInput = {
  AND?: Array<CompanyRoleWhereInput> | null | undefined;
  NOT?: Array<CompanyRoleWhereInput> | null | undefined;
  OR?: Array<CompanyRoleWhereInput> | null | undefined;
  admins?: AdminCompanyListRelationFilter | null | undefined;
  code?: StringFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  description?: StringNullableFilter | null | undefined;
  id?: StringFilter | null | undefined;
  members?: CompanyMemberListRelationFilter | null | undefined;
  name?: StringFilter | null | undefined;
  permissions?: StringNullableListFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
};

export type CompanyRoleWhereUniqueInput = {
  admins?: AdminCompanyListRelationFilter | null | undefined;
  code?: StringFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  companyRoleIdx?: CompanyRoleCompanyRoleIdxCompoundUniqueInput | null | undefined;
  description?: StringNullableFilter | null | undefined;
  id?: string | null | undefined;
  members?: CompanyMemberListRelationFilter | null | undefined;
  name?: StringFilter | null | undefined;
  permissions?: StringNullableListFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
};

export type CompanyScalarRelationFilter = {
  is?: CompanyWhereInput | null | undefined;
  isNot?: CompanyWhereInput | null | undefined;
};

export type CompanyUpdateInput = {
  admins?: AdminCompanyUpdateManyWithoutCompanyNestedInput | null | undefined;
  alias?: string | null | undefined;
  auths?: AuthUpdateManyWithoutCompanyNestedInput | null | undefined;
  code?: string | null | undefined;
  description?: string | null | undefined;
  logo?: string | null | undefined;
  logs?: RequestLogUpdateManyWithoutCompanyNestedInput | null | undefined;
  mediaFiles?: MediaFileUpdateManyWithoutCompanyNestedInput | null | undefined;
  mediaFolders?: MediaFolderUpdateManyWithoutCompanyNestedInput | null | undefined;
  members?: CompanyMemberUpdateManyWithoutCompanyNestedInput | null | undefined;
  name?: string | null | undefined;
  notificationRecipients?: NotificationRecipientUpdateManyWithoutCompanyNestedInput | null | undefined;
  notifications?: NotificationUpdateManyWithoutCompanyNestedInput | null | undefined;
  roles?: CompanyRoleUpdateManyWithoutCompanyNestedInput | null | undefined;
  status?: Status | null | undefined;
  websites?: WebsiteUpdateManyWithoutCompanyNestedInput | null | undefined;
};

export type CompanyUpdateOneRequiredWithoutWebsitesNestedInput = {
  connect?: CompanyWhereUniqueInput | null | undefined;
};

export type CompanyUpdateOneWithoutRolesNestedInput = {
  connect?: CompanyWhereUniqueInput | null | undefined;
  disconnect?: CompanyWhereInput | null | undefined;
};

export type CompanyWhereInput = {
  AND?: Array<CompanyWhereInput> | null | undefined;
  NOT?: Array<CompanyWhereInput> | null | undefined;
  OR?: Array<CompanyWhereInput> | null | undefined;
  admins?: AdminCompanyListRelationFilter | null | undefined;
  alias?: StringNullableFilter | null | undefined;
  auths?: AuthListRelationFilter | null | undefined;
  code?: StringNullableFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  description?: StringNullableFilter | null | undefined;
  id?: StringFilter | null | undefined;
  logo?: StringNullableFilter | null | undefined;
  logs?: RequestLogListRelationFilter | null | undefined;
  mediaFiles?: MediaFileListRelationFilter | null | undefined;
  mediaFolders?: MediaFolderListRelationFilter | null | undefined;
  members?: CompanyMemberListRelationFilter | null | undefined;
  name?: StringFilter | null | undefined;
  notificationRecipients?: NotificationRecipientListRelationFilter | null | undefined;
  notifications?: NotificationListRelationFilter | null | undefined;
  roles?: CompanyRoleListRelationFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
  websites?: WebsiteListRelationFilter | null | undefined;
};

export type CompanyWhereUniqueInput = {
  admins?: AdminCompanyListRelationFilter | null | undefined;
  alias?: StringNullableFilter | null | undefined;
  auths?: AuthListRelationFilter | null | undefined;
  code?: string | null | undefined;
  description?: StringNullableFilter | null | undefined;
  id?: string | null | undefined;
  logo?: StringNullableFilter | null | undefined;
  logs?: RequestLogListRelationFilter | null | undefined;
  mediaFiles?: MediaFileListRelationFilter | null | undefined;
  mediaFolders?: MediaFolderListRelationFilter | null | undefined;
  members?: CompanyMemberListRelationFilter | null | undefined;
  name?: string | null | undefined;
  notificationRecipients?: NotificationRecipientListRelationFilter | null | undefined;
  notifications?: NotificationListRelationFilter | null | undefined;
  roles?: CompanyRoleListRelationFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
  websites?: WebsiteListRelationFilter | null | undefined;
};

export enum ContentDataType {
  Collection = 'Collection',
  Single = 'Single'
}

export type DateTimeFilter = {
  equals?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  not?: NestedDateTimeFilter | null | undefined;
  notIn?: Array<string> | null | undefined;
};

export type DateTimeNullableFilter = {
  equals?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  not?: NestedDateTimeNullableFilter | null | undefined;
  notIn?: Array<string> | null | undefined;
};

export type EnumClientFilter = {
  equals?: Client | null | undefined;
  in?: Array<Client> | null | undefined;
  not?: NestedEnumClientFilter | null | undefined;
  notIn?: Array<Client> | null | undefined;
};

export type EnumClientNullableFilter = {
  equals?: Client | null | undefined;
  in?: Array<Client> | null | undefined;
  not?: NestedEnumClientNullableFilter | null | undefined;
  notIn?: Array<Client> | null | undefined;
};

export type EnumMediaStoreFilter = {
  equals?: MediaStore | null | undefined;
  in?: Array<MediaStore> | null | undefined;
  not?: NestedEnumMediaStoreFilter | null | undefined;
  notIn?: Array<MediaStore> | null | undefined;
};

export type EnumMediaTypeFilter = {
  equals?: MediaType | null | undefined;
  in?: Array<MediaType> | null | undefined;
  not?: NestedEnumMediaTypeFilter | null | undefined;
  notIn?: Array<MediaType> | null | undefined;
};

export type EnumMediaVisibilityFilter = {
  equals?: MediaVisibility | null | undefined;
  in?: Array<MediaVisibility> | null | undefined;
  not?: NestedEnumMediaVisibilityFilter | null | undefined;
  notIn?: Array<MediaVisibility> | null | undefined;
};

export type EnumNotificationPrivacyFilter = {
  equals?: NotificationPrivacy | null | undefined;
  in?: Array<NotificationPrivacy> | null | undefined;
  not?: NestedEnumNotificationPrivacyFilter | null | undefined;
  notIn?: Array<NotificationPrivacy> | null | undefined;
};

export type EnumNotificationTargetFilter = {
  equals?: NotificationTarget | null | undefined;
  in?: Array<NotificationTarget> | null | undefined;
  not?: NestedEnumNotificationTargetFilter | null | undefined;
  notIn?: Array<NotificationTarget> | null | undefined;
};

export type EnumNotificationTypeFilter = {
  equals?: NotificationType | null | undefined;
  in?: Array<NotificationType> | null | undefined;
  not?: NestedEnumNotificationTypeFilter | null | undefined;
  notIn?: Array<NotificationType> | null | undefined;
};

export type EnumOwnerFilter = {
  equals?: Owner | null | undefined;
  in?: Array<Owner> | null | undefined;
  not?: NestedEnumOwnerFilter | null | undefined;
  notIn?: Array<Owner> | null | undefined;
};

export type EnumRequestMethodNullableFilter = {
  equals?: RequestMethod | null | undefined;
  in?: Array<RequestMethod> | null | undefined;
  not?: NestedEnumRequestMethodNullableFilter | null | undefined;
  notIn?: Array<RequestMethod> | null | undefined;
};

export type EnumStatusFilter = {
  equals?: Status | null | undefined;
  in?: Array<Status> | null | undefined;
  not?: NestedEnumStatusFilter | null | undefined;
  notIn?: Array<Status> | null | undefined;
};

export type EnumTargetFilter = {
  equals?: Target | null | undefined;
  in?: Array<Target> | null | undefined;
  not?: NestedEnumTargetFilter | null | undefined;
  notIn?: Array<Target> | null | undefined;
};

export type EnumTargetNullableFilter = {
  equals?: Target | null | undefined;
  in?: Array<Target> | null | undefined;
  not?: NestedEnumTargetNullableFilter | null | undefined;
  notIn?: Array<Target> | null | undefined;
};

export type EnumWebsiteCmsNullableFilter = {
  equals?: WebsiteCms | null | undefined;
  in?: Array<WebsiteCms> | null | undefined;
  not?: NestedEnumWebsiteCmsNullableFilter | null | undefined;
  notIn?: Array<WebsiteCms> | null | undefined;
};

export type IntFilter = {
  equals?: number | null | undefined;
  gt?: number | null | undefined;
  gte?: number | null | undefined;
  in?: Array<number> | null | undefined;
  lt?: number | null | undefined;
  lte?: number | null | undefined;
  not?: NestedIntFilter | null | undefined;
  notIn?: Array<number> | null | undefined;
};

export type IntNullableFilter = {
  equals?: number | null | undefined;
  gt?: number | null | undefined;
  gte?: number | null | undefined;
  in?: Array<number> | null | undefined;
  lt?: number | null | undefined;
  lte?: number | null | undefined;
  not?: NestedIntNullableFilter | null | undefined;
  notIn?: Array<number> | null | undefined;
};

export type JsonFilter = {
  array_contains?: any;
  array_ends_with?: any;
  array_starts_with?: any;
  equals?: any;
  gt?: any;
  gte?: any;
  lt?: any;
  lte?: any;
  mode?: QueryMode | null | undefined;
  not?: any;
  path?: Array<string> | null | undefined;
  string_contains?: string | null | undefined;
  string_ends_with?: string | null | undefined;
  string_starts_with?: string | null | undefined;
};

export type JsonNullableFilter = {
  array_contains?: any;
  array_ends_with?: any;
  array_starts_with?: any;
  equals?: any;
  gt?: any;
  gte?: any;
  lt?: any;
  lte?: any;
  mode?: QueryMode | null | undefined;
  not?: any;
  path?: Array<string> | null | undefined;
  string_contains?: string | null | undefined;
  string_ends_with?: string | null | undefined;
  string_starts_with?: string | null | undefined;
};

export type LoginInput = {
  account: string;
  companyId?: string | null | undefined;
  password: string;
  target?: Target | null | undefined;
};

export type MediaFileAdminFileIdxCompoundUniqueInput = {
  adminId: string;
  fileName: string;
  folderId: string;
};

export type MediaFileCompanyFileIdxCompoundUniqueInput = {
  companyId: string;
  fileName: string;
  folderId: string;
};

export type MediaFileCreateNestedManyWithoutCompanyInput = {
  connect?: Array<MediaFileWhereUniqueInput> | null | undefined;
};

export type MediaFileListRelationFilter = {
  every?: MediaFileWhereInput | null | undefined;
  none?: MediaFileWhereInput | null | undefined;
  some?: MediaFileWhereInput | null | undefined;
};

export type MediaFileMemberFileIdxCompoundUniqueInput = {
  fileName: string;
  folderId: string;
  memberId: string;
};

export type MediaFileOrderByRelationAggregateInput = {
  _count?: SortOrder | null | undefined;
};

export type MediaFileUpdateManyWithoutCompanyNestedInput = {
  connect?: Array<MediaFileWhereUniqueInput> | null | undefined;
  disconnect?: Array<MediaFileWhereUniqueInput> | null | undefined;
};

export type MediaFileWhereInput = {
  AND?: Array<MediaFileWhereInput> | null | undefined;
  NOT?: Array<MediaFileWhereInput> | null | undefined;
  OR?: Array<MediaFileWhereInput> | null | undefined;
  admin?: AdminNullableScalarRelationFilter | null | undefined;
  adminId?: StringNullableFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  description?: StringNullableFilter | null | undefined;
  duration?: IntNullableFilter | null | undefined;
  extension?: StringFilter | null | undefined;
  fileHash?: StringFilter | null | undefined;
  fileName?: StringFilter | null | undefined;
  fileSize?: BigIntFilter | null | undefined;
  folder?: MediaFolderScalarRelationFilter | null | undefined;
  folderId?: StringFilter | null | undefined;
  height?: IntNullableFilter | null | undefined;
  id?: StringFilter | null | undefined;
  mediaType?: EnumMediaTypeFilter | null | undefined;
  member?: MemberNullableScalarRelationFilter | null | undefined;
  memberId?: StringNullableFilter | null | undefined;
  metadata?: JsonNullableFilter | null | undefined;
  mimeType?: StringFilter | null | undefined;
  owner?: EnumOwnerFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
  store?: EnumMediaStoreFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
  visibility?: EnumMediaVisibilityFilter | null | undefined;
  width?: IntNullableFilter | null | undefined;
};

export type MediaFileWhereUniqueInput = {
  admin?: AdminNullableScalarRelationFilter | null | undefined;
  adminFileIdx?: MediaFileAdminFileIdxCompoundUniqueInput | null | undefined;
  adminId?: StringNullableFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyFileIdx?: MediaFileCompanyFileIdxCompoundUniqueInput | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  description?: StringNullableFilter | null | undefined;
  duration?: IntNullableFilter | null | undefined;
  extension?: StringFilter | null | undefined;
  fileHash?: StringFilter | null | undefined;
  fileName?: StringFilter | null | undefined;
  fileSize?: BigIntFilter | null | undefined;
  folder?: MediaFolderScalarRelationFilter | null | undefined;
  folderId?: StringFilter | null | undefined;
  height?: IntNullableFilter | null | undefined;
  id?: string | null | undefined;
  mediaType?: EnumMediaTypeFilter | null | undefined;
  member?: MemberNullableScalarRelationFilter | null | undefined;
  memberFileIdx?: MediaFileMemberFileIdxCompoundUniqueInput | null | undefined;
  memberId?: StringNullableFilter | null | undefined;
  metadata?: JsonNullableFilter | null | undefined;
  mimeType?: StringFilter | null | undefined;
  owner?: EnumOwnerFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
  store?: EnumMediaStoreFilter | null | undefined;
  visibility?: EnumMediaVisibilityFilter | null | undefined;
  width?: IntNullableFilter | null | undefined;
};

export type MediaFolderAdminFolderPathIdxCompoundUniqueInput = {
  adminId: string;
  path: string;
};

export type MediaFolderCompanyFolderPathIdxCompoundUniqueInput = {
  companyId: string;
  path: string;
};

export type MediaFolderCreateNestedManyWithoutCompanyInput = {
  connect?: Array<MediaFolderWhereUniqueInput> | null | undefined;
};

export type MediaFolderListRelationFilter = {
  every?: MediaFolderWhereInput | null | undefined;
  none?: MediaFolderWhereInput | null | undefined;
  some?: MediaFolderWhereInput | null | undefined;
};

export type MediaFolderMemberFolderPathIdxCompoundUniqueInput = {
  memberId: string;
  path: string;
};

export type MediaFolderNullableScalarRelationFilter = {
  is?: MediaFolderWhereInput | null | undefined;
  isNot?: MediaFolderWhereInput | null | undefined;
};

export type MediaFolderOrderByRelationAggregateInput = {
  _count?: SortOrder | null | undefined;
};

export type MediaFolderScalarRelationFilter = {
  is?: MediaFolderWhereInput | null | undefined;
  isNot?: MediaFolderWhereInput | null | undefined;
};

export type MediaFolderUpdateManyWithoutCompanyNestedInput = {
  connect?: Array<MediaFolderWhereUniqueInput> | null | undefined;
  disconnect?: Array<MediaFolderWhereUniqueInput> | null | undefined;
};

export type MediaFolderWhereInput = {
  AND?: Array<MediaFolderWhereInput> | null | undefined;
  NOT?: Array<MediaFolderWhereInput> | null | undefined;
  OR?: Array<MediaFolderWhereInput> | null | undefined;
  admin?: AdminNullableScalarRelationFilter | null | undefined;
  adminId?: StringNullableFilter | null | undefined;
  children?: MediaFolderListRelationFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  depth?: IntFilter | null | undefined;
  description?: StringNullableFilter | null | undefined;
  files?: MediaFileListRelationFilter | null | undefined;
  id?: StringFilter | null | undefined;
  member?: MemberNullableScalarRelationFilter | null | undefined;
  memberId?: StringNullableFilter | null | undefined;
  name?: StringFilter | null | undefined;
  owner?: EnumOwnerFilter | null | undefined;
  parent?: MediaFolderNullableScalarRelationFilter | null | undefined;
  parentId?: StringNullableFilter | null | undefined;
  path?: StringFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
};

export type MediaFolderWhereUniqueInput = {
  admin?: AdminNullableScalarRelationFilter | null | undefined;
  adminFolderPathIdx?: MediaFolderAdminFolderPathIdxCompoundUniqueInput | null | undefined;
  adminId?: StringNullableFilter | null | undefined;
  children?: MediaFolderListRelationFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyFolderPathIdx?: MediaFolderCompanyFolderPathIdxCompoundUniqueInput | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  depth?: IntFilter | null | undefined;
  description?: StringNullableFilter | null | undefined;
  id?: string | null | undefined;
  member?: MemberNullableScalarRelationFilter | null | undefined;
  memberFolderPathIdx?: MediaFolderMemberFolderPathIdxCompoundUniqueInput | null | undefined;
  memberId?: StringNullableFilter | null | undefined;
  name?: StringFilter | null | undefined;
  owner?: EnumOwnerFilter | null | undefined;
  parent?: MediaFolderNullableScalarRelationFilter | null | undefined;
  parentId?: StringNullableFilter | null | undefined;
  path?: StringFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
};

export enum MediaStore {
  Cos = 'Cos',
  Local = 'Local',
  Oss = 'Oss',
  Qiniu = 'Qiniu',
  S3 = 'S3'
}

export enum MediaType {
  Archive = 'Archive',
  Audio = 'Audio',
  Document = 'Document',
  Image = 'Image',
  Other = 'Other',
  Video = 'Video'
}

export enum MediaVisibility {
  Private = 'Private',
  Public = 'Public',
  Shared = 'Shared'
}

export type MemberCreateInput = {
  avatar?: string | null | undefined;
  email: string;
  name: string;
  notificationRecipients?: NotificationRecipientCreateNestedManyWithoutMemberInput | null | undefined;
  notifications?: NotificationCreateNestedManyWithoutMemberInput | null | undefined;
  password: string;
  status?: Status | null | undefined;
};

export type MemberNullableScalarRelationFilter = {
  is?: MemberWhereInput | null | undefined;
  isNot?: MemberWhereInput | null | undefined;
};

export type MemberOrderByWithRelationInput = {
  auths?: AuthOrderByRelationAggregateInput | null | undefined;
  avatar?: SortOrderInput | null | undefined;
  companies?: CompanyMemberOrderByRelationAggregateInput | null | undefined;
  createdAt?: SortOrder | null | undefined;
  email?: SortOrder | null | undefined;
  id?: SortOrder | null | undefined;
  logs?: RequestLogOrderByRelationAggregateInput | null | undefined;
  mediaFiles?: MediaFileOrderByRelationAggregateInput | null | undefined;
  mediaFolders?: MediaFolderOrderByRelationAggregateInput | null | undefined;
  name?: SortOrder | null | undefined;
  notificationRecipients?: NotificationRecipientOrderByRelationAggregateInput | null | undefined;
  notifications?: NotificationOrderByRelationAggregateInput | null | undefined;
  status?: SortOrder | null | undefined;
  updatedAt?: SortOrder | null | undefined;
};

export type MemberScalarRelationFilter = {
  is?: MemberWhereInput | null | undefined;
  isNot?: MemberWhereInput | null | undefined;
};

export type MemberUpdateInput = {
  avatar?: string | null | undefined;
  email?: string | null | undefined;
  name?: string | null | undefined;
  notificationRecipients?: NotificationRecipientUpdateManyWithoutMemberNestedInput | null | undefined;
  notifications?: NotificationUpdateManyWithoutMemberNestedInput | null | undefined;
  password?: string | null | undefined;
  status?: Status | null | undefined;
};

export type MemberWhereInput = {
  AND?: Array<MemberWhereInput> | null | undefined;
  NOT?: Array<MemberWhereInput> | null | undefined;
  OR?: Array<MemberWhereInput> | null | undefined;
  auths?: AuthListRelationFilter | null | undefined;
  avatar?: StringNullableFilter | null | undefined;
  companies?: CompanyMemberListRelationFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  email?: StringFilter | null | undefined;
  id?: StringFilter | null | undefined;
  logs?: RequestLogListRelationFilter | null | undefined;
  mediaFiles?: MediaFileListRelationFilter | null | undefined;
  mediaFolders?: MediaFolderListRelationFilter | null | undefined;
  name?: StringFilter | null | undefined;
  notificationRecipients?: NotificationRecipientListRelationFilter | null | undefined;
  notifications?: NotificationListRelationFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
};

export type NestedBigIntFilter = {
  equals?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  not?: NestedBigIntFilter | null | undefined;
  notIn?: Array<string> | null | undefined;
};

export type NestedBoolFilter = {
  equals?: boolean | null | undefined;
  not?: NestedBoolFilter | null | undefined;
};

export type NestedDateTimeFilter = {
  equals?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  not?: NestedDateTimeFilter | null | undefined;
  notIn?: Array<string> | null | undefined;
};

export type NestedDateTimeNullableFilter = {
  equals?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  not?: NestedDateTimeNullableFilter | null | undefined;
  notIn?: Array<string> | null | undefined;
};

export type NestedEnumClientFilter = {
  equals?: Client | null | undefined;
  in?: Array<Client> | null | undefined;
  not?: NestedEnumClientFilter | null | undefined;
  notIn?: Array<Client> | null | undefined;
};

export type NestedEnumClientNullableFilter = {
  equals?: Client | null | undefined;
  in?: Array<Client> | null | undefined;
  not?: NestedEnumClientNullableFilter | null | undefined;
  notIn?: Array<Client> | null | undefined;
};

export type NestedEnumMediaStoreFilter = {
  equals?: MediaStore | null | undefined;
  in?: Array<MediaStore> | null | undefined;
  not?: NestedEnumMediaStoreFilter | null | undefined;
  notIn?: Array<MediaStore> | null | undefined;
};

export type NestedEnumMediaTypeFilter = {
  equals?: MediaType | null | undefined;
  in?: Array<MediaType> | null | undefined;
  not?: NestedEnumMediaTypeFilter | null | undefined;
  notIn?: Array<MediaType> | null | undefined;
};

export type NestedEnumMediaVisibilityFilter = {
  equals?: MediaVisibility | null | undefined;
  in?: Array<MediaVisibility> | null | undefined;
  not?: NestedEnumMediaVisibilityFilter | null | undefined;
  notIn?: Array<MediaVisibility> | null | undefined;
};

export type NestedEnumNotificationPrivacyFilter = {
  equals?: NotificationPrivacy | null | undefined;
  in?: Array<NotificationPrivacy> | null | undefined;
  not?: NestedEnumNotificationPrivacyFilter | null | undefined;
  notIn?: Array<NotificationPrivacy> | null | undefined;
};

export type NestedEnumNotificationTargetFilter = {
  equals?: NotificationTarget | null | undefined;
  in?: Array<NotificationTarget> | null | undefined;
  not?: NestedEnumNotificationTargetFilter | null | undefined;
  notIn?: Array<NotificationTarget> | null | undefined;
};

export type NestedEnumNotificationTypeFilter = {
  equals?: NotificationType | null | undefined;
  in?: Array<NotificationType> | null | undefined;
  not?: NestedEnumNotificationTypeFilter | null | undefined;
  notIn?: Array<NotificationType> | null | undefined;
};

export type NestedEnumOwnerFilter = {
  equals?: Owner | null | undefined;
  in?: Array<Owner> | null | undefined;
  not?: NestedEnumOwnerFilter | null | undefined;
  notIn?: Array<Owner> | null | undefined;
};

export type NestedEnumRequestMethodNullableFilter = {
  equals?: RequestMethod | null | undefined;
  in?: Array<RequestMethod> | null | undefined;
  not?: NestedEnumRequestMethodNullableFilter | null | undefined;
  notIn?: Array<RequestMethod> | null | undefined;
};

export type NestedEnumStatusFilter = {
  equals?: Status | null | undefined;
  in?: Array<Status> | null | undefined;
  not?: NestedEnumStatusFilter | null | undefined;
  notIn?: Array<Status> | null | undefined;
};

export type NestedEnumTargetFilter = {
  equals?: Target | null | undefined;
  in?: Array<Target> | null | undefined;
  not?: NestedEnumTargetFilter | null | undefined;
  notIn?: Array<Target> | null | undefined;
};

export type NestedEnumTargetNullableFilter = {
  equals?: Target | null | undefined;
  in?: Array<Target> | null | undefined;
  not?: NestedEnumTargetNullableFilter | null | undefined;
  notIn?: Array<Target> | null | undefined;
};

export type NestedEnumWebsiteCmsNullableFilter = {
  equals?: WebsiteCms | null | undefined;
  in?: Array<WebsiteCms> | null | undefined;
  not?: NestedEnumWebsiteCmsNullableFilter | null | undefined;
  notIn?: Array<WebsiteCms> | null | undefined;
};

export type NestedIntFilter = {
  equals?: number | null | undefined;
  gt?: number | null | undefined;
  gte?: number | null | undefined;
  in?: Array<number> | null | undefined;
  lt?: number | null | undefined;
  lte?: number | null | undefined;
  not?: NestedIntFilter | null | undefined;
  notIn?: Array<number> | null | undefined;
};

export type NestedIntNullableFilter = {
  equals?: number | null | undefined;
  gt?: number | null | undefined;
  gte?: number | null | undefined;
  in?: Array<number> | null | undefined;
  lt?: number | null | undefined;
  lte?: number | null | undefined;
  not?: NestedIntNullableFilter | null | undefined;
  notIn?: Array<number> | null | undefined;
};

export type NestedStringFilter = {
  contains?: string | null | undefined;
  endsWith?: string | null | undefined;
  equals?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  not?: NestedStringFilter | null | undefined;
  notIn?: Array<string> | null | undefined;
  startsWith?: string | null | undefined;
};

export type NestedStringNullableFilter = {
  contains?: string | null | undefined;
  endsWith?: string | null | undefined;
  equals?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  not?: NestedStringNullableFilter | null | undefined;
  notIn?: Array<string> | null | undefined;
  startsWith?: string | null | undefined;
};

export type NotificationCreateNestedManyWithoutAdminInput = {
  connect?: Array<NotificationWhereUniqueInput> | null | undefined;
};

export type NotificationCreateNestedManyWithoutCompanyInput = {
  connect?: Array<NotificationWhereUniqueInput> | null | undefined;
};

export type NotificationCreateNestedManyWithoutMemberInput = {
  connect?: Array<NotificationWhereUniqueInput> | null | undefined;
};

export type NotificationListRelationFilter = {
  every?: NotificationWhereInput | null | undefined;
  none?: NotificationWhereInput | null | undefined;
  some?: NotificationWhereInput | null | undefined;
};

export type NotificationOrderByRelationAggregateInput = {
  _count?: SortOrder | null | undefined;
};

export enum NotificationPrivacy {
  Private = 'Private',
  Public = 'Public'
}

export type NotificationRecipientCreateNestedManyWithoutAdminInput = {
  connect?: Array<NotificationRecipientWhereUniqueInput> | null | undefined;
};

export type NotificationRecipientCreateNestedManyWithoutCompanyInput = {
  connect?: Array<NotificationRecipientWhereUniqueInput> | null | undefined;
};

export type NotificationRecipientCreateNestedManyWithoutMemberInput = {
  connect?: Array<NotificationRecipientWhereUniqueInput> | null | undefined;
};

export type NotificationRecipientListRelationFilter = {
  every?: NotificationRecipientWhereInput | null | undefined;
  none?: NotificationRecipientWhereInput | null | undefined;
  some?: NotificationRecipientWhereInput | null | undefined;
};

export type NotificationRecipientOrderByRelationAggregateInput = {
  _count?: SortOrder | null | undefined;
};

export type NotificationRecipientReceiverIdxCompoundUniqueInput = {
  notificationId: string;
  receiver: NotificationTarget;
  receiverId: string;
};

export type NotificationRecipientUpdateManyWithoutAdminNestedInput = {
  connect?: Array<NotificationRecipientWhereUniqueInput> | null | undefined;
  disconnect?: Array<NotificationRecipientWhereUniqueInput> | null | undefined;
};

export type NotificationRecipientUpdateManyWithoutCompanyNestedInput = {
  connect?: Array<NotificationRecipientWhereUniqueInput> | null | undefined;
  disconnect?: Array<NotificationRecipientWhereUniqueInput> | null | undefined;
};

export type NotificationRecipientUpdateManyWithoutMemberNestedInput = {
  connect?: Array<NotificationRecipientWhereUniqueInput> | null | undefined;
  disconnect?: Array<NotificationRecipientWhereUniqueInput> | null | undefined;
};

export type NotificationRecipientWhereInput = {
  AND?: Array<NotificationRecipientWhereInput> | null | undefined;
  NOT?: Array<NotificationRecipientWhereInput> | null | undefined;
  OR?: Array<NotificationRecipientWhereInput> | null | undefined;
  admin?: AdminNullableScalarRelationFilter | null | undefined;
  adminId?: StringNullableFilter | null | undefined;
  archivedAt?: DateTimeNullableFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  deletedAt?: DateTimeNullableFilter | null | undefined;
  id?: StringFilter | null | undefined;
  isArchived?: BoolFilter | null | undefined;
  isDeleted?: BoolFilter | null | undefined;
  isRead?: BoolFilter | null | undefined;
  member?: MemberNullableScalarRelationFilter | null | undefined;
  memberId?: StringNullableFilter | null | undefined;
  notification?: NotificationScalarRelationFilter | null | undefined;
  notificationId?: StringFilter | null | undefined;
  readAt?: DateTimeNullableFilter | null | undefined;
  receiver?: EnumNotificationTargetFilter | null | undefined;
  receiverId?: StringFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
};

export type NotificationRecipientWhereUniqueInput = {
  admin?: AdminNullableScalarRelationFilter | null | undefined;
  adminId?: StringNullableFilter | null | undefined;
  archivedAt?: DateTimeNullableFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  deletedAt?: DateTimeNullableFilter | null | undefined;
  id?: string | null | undefined;
  isArchived?: BoolFilter | null | undefined;
  isDeleted?: BoolFilter | null | undefined;
  isRead?: BoolFilter | null | undefined;
  member?: MemberNullableScalarRelationFilter | null | undefined;
  memberId?: StringNullableFilter | null | undefined;
  notification?: NotificationScalarRelationFilter | null | undefined;
  notificationId?: StringFilter | null | undefined;
  readAt?: DateTimeNullableFilter | null | undefined;
  receiver?: EnumNotificationTargetFilter | null | undefined;
  receiverId?: StringFilter | null | undefined;
  receiverIdx?: NotificationRecipientReceiverIdxCompoundUniqueInput | null | undefined;
};

export type NotificationScalarRelationFilter = {
  is?: NotificationWhereInput | null | undefined;
  isNot?: NotificationWhereInput | null | undefined;
};

export enum NotificationTarget {
  Admin = 'Admin',
  Company = 'Company',
  Member = 'Member',
  System = 'System'
}

export enum NotificationType {
  Alert = 'Alert',
  Confirm = 'Confirm',
  Message = 'Message',
  Prompt = 'Prompt'
}

export type NotificationUpdateManyWithoutAdminNestedInput = {
  connect?: Array<NotificationWhereUniqueInput> | null | undefined;
  disconnect?: Array<NotificationWhereUniqueInput> | null | undefined;
};

export type NotificationUpdateManyWithoutCompanyNestedInput = {
  connect?: Array<NotificationWhereUniqueInput> | null | undefined;
  disconnect?: Array<NotificationWhereUniqueInput> | null | undefined;
};

export type NotificationUpdateManyWithoutMemberNestedInput = {
  connect?: Array<NotificationWhereUniqueInput> | null | undefined;
  disconnect?: Array<NotificationWhereUniqueInput> | null | undefined;
};

export type NotificationWhereInput = {
  AND?: Array<NotificationWhereInput> | null | undefined;
  NOT?: Array<NotificationWhereInput> | null | undefined;
  OR?: Array<NotificationWhereInput> | null | undefined;
  admin?: AdminNullableScalarRelationFilter | null | undefined;
  adminId?: StringNullableFilter | null | undefined;
  category?: StringNullableFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  content?: JsonFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  id?: StringFilter | null | undefined;
  member?: MemberNullableScalarRelationFilter | null | undefined;
  memberId?: StringNullableFilter | null | undefined;
  options?: JsonNullableFilter | null | undefined;
  priority?: IntFilter | null | undefined;
  privacy?: EnumNotificationPrivacyFilter | null | undefined;
  receivers?: StringNullableListFilter | null | undefined;
  recipients?: NotificationRecipientListRelationFilter | null | undefined;
  sender?: EnumNotificationTargetFilter | null | undefined;
  senderId?: StringNullableFilter | null | undefined;
  sentAt?: DateTimeFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
  title?: JsonNullableFilter | null | undefined;
  type?: EnumNotificationTypeFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
};

export type NotificationWhereUniqueInput = {
  admin?: AdminNullableScalarRelationFilter | null | undefined;
  adminId?: StringNullableFilter | null | undefined;
  category?: StringNullableFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  content?: JsonFilter | null | undefined;
  id?: string | null | undefined;
  member?: MemberNullableScalarRelationFilter | null | undefined;
  memberId?: StringNullableFilter | null | undefined;
  options?: JsonNullableFilter | null | undefined;
  priority?: IntFilter | null | undefined;
  privacy?: EnumNotificationPrivacyFilter | null | undefined;
  receivers?: StringNullableListFilter | null | undefined;
  recipients?: NotificationRecipientListRelationFilter | null | undefined;
  sender?: EnumNotificationTargetFilter | null | undefined;
  senderId?: StringNullableFilter | null | undefined;
  sentAt?: DateTimeFilter | null | undefined;
  status?: EnumStatusFilter | null | undefined;
  title?: JsonNullableFilter | null | undefined;
  type?: EnumNotificationTypeFilter | null | undefined;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export enum Owner {
  Admin = 'Admin',
  Company = 'Company',
  Member = 'Member'
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RequestLogCreateNestedManyWithoutCompanyInput = {
  connect?: Array<RequestLogWhereUniqueInput> | null | undefined;
};

export type RequestLogListRelationFilter = {
  every?: RequestLogWhereInput | null | undefined;
  none?: RequestLogWhereInput | null | undefined;
  some?: RequestLogWhereInput | null | undefined;
};

export type RequestLogOrderByRelationAggregateInput = {
  _count?: SortOrder | null | undefined;
};

export type RequestLogUpdateManyWithoutCompanyNestedInput = {
  connect?: Array<RequestLogWhereUniqueInput> | null | undefined;
  disconnect?: Array<RequestLogWhereUniqueInput> | null | undefined;
};

export type RequestLogWhereInput = {
  AND?: Array<RequestLogWhereInput> | null | undefined;
  NOT?: Array<RequestLogWhereInput> | null | undefined;
  OR?: Array<RequestLogWhereInput> | null | undefined;
  action?: StringNullableFilter | null | undefined;
  admin?: AdminNullableScalarRelationFilter | null | undefined;
  adminId?: StringNullableFilter | null | undefined;
  afterAt?: DateTimeNullableFilter | null | undefined;
  beforeAt?: DateTimeFilter | null | undefined;
  body?: JsonNullableFilter | null | undefined;
  client?: EnumClientNullableFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  device?: JsonNullableFilter | null | undefined;
  duration?: BigIntFilter | null | undefined;
  fingerprint?: StringNullableFilter | null | undefined;
  headers?: JsonNullableFilter | null | undefined;
  id?: StringFilter | null | undefined;
  ip?: StringNullableFilter | null | undefined;
  language?: StringNullableFilter | null | undefined;
  location?: JsonNullableFilter | null | undefined;
  member?: MemberNullableScalarRelationFilter | null | undefined;
  memberId?: StringNullableFilter | null | undefined;
  message?: StringNullableFilter | null | undefined;
  method?: EnumRequestMethodNullableFilter | null | undefined;
  params?: JsonNullableFilter | null | undefined;
  query?: JsonNullableFilter | null | undefined;
  recordAt?: DateTimeFilter | null | undefined;
  route?: StringNullableFilter | null | undefined;
  subject?: StringNullableFilter | null | undefined;
  target?: EnumTargetNullableFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
};

export type RequestLogWhereUniqueInput = {
  action?: StringNullableFilter | null | undefined;
  admin?: AdminNullableScalarRelationFilter | null | undefined;
  adminId?: StringNullableFilter | null | undefined;
  afterAt?: DateTimeNullableFilter | null | undefined;
  beforeAt?: DateTimeFilter | null | undefined;
  body?: JsonNullableFilter | null | undefined;
  client?: EnumClientNullableFilter | null | undefined;
  company?: CompanyNullableScalarRelationFilter | null | undefined;
  companyId?: StringNullableFilter | null | undefined;
  device?: JsonNullableFilter | null | undefined;
  duration?: BigIntFilter | null | undefined;
  fingerprint?: StringNullableFilter | null | undefined;
  headers?: JsonNullableFilter | null | undefined;
  id?: string | null | undefined;
  ip?: StringNullableFilter | null | undefined;
  language?: StringNullableFilter | null | undefined;
  location?: JsonNullableFilter | null | undefined;
  member?: MemberNullableScalarRelationFilter | null | undefined;
  memberId?: StringNullableFilter | null | undefined;
  message?: StringNullableFilter | null | undefined;
  method?: EnumRequestMethodNullableFilter | null | undefined;
  params?: JsonNullableFilter | null | undefined;
  query?: JsonNullableFilter | null | undefined;
  recordAt?: DateTimeFilter | null | undefined;
  route?: StringNullableFilter | null | undefined;
  subject?: StringNullableFilter | null | undefined;
  target?: EnumTargetNullableFilter | null | undefined;
};

export enum RequestMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Graphql = 'GRAPHQL',
  GraphqlWs = 'GRAPHQL_WS',
  Head = 'HEAD',
  Options = 'OPTIONS',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

/** SEO 分析状态 */
export enum SeoAnalysisStatus {
  /** 分析中 */
  Analyzing = 'Analyzing',
  /** 完成 */
  Completed = 'Completed',
  /** 失败 */
  Failed = 'Failed',
  /** 未分析 */
  None = 'None',
  /** 队列中 */
  Queued = 'Queued',
  /** 超时 */
  Timeout = 'Timeout'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: NullsOrder | null | undefined;
  sort: SortOrder;
};

export enum Status {
  Disabled = 'Disabled',
  Enabled = 'Enabled'
}

export type StringFilter = {
  contains?: string | null | undefined;
  endsWith?: string | null | undefined;
  equals?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  mode?: QueryMode | null | undefined;
  not?: NestedStringFilter | null | undefined;
  notIn?: Array<string> | null | undefined;
  startsWith?: string | null | undefined;
};

export type StringNullableFilter = {
  contains?: string | null | undefined;
  endsWith?: string | null | undefined;
  equals?: string | null | undefined;
  gt?: string | null | undefined;
  gte?: string | null | undefined;
  in?: Array<string> | null | undefined;
  lt?: string | null | undefined;
  lte?: string | null | undefined;
  mode?: QueryMode | null | undefined;
  not?: NestedStringNullableFilter | null | undefined;
  notIn?: Array<string> | null | undefined;
  startsWith?: string | null | undefined;
};

export type StringNullableListFilter = {
  equals?: Array<string> | null | undefined;
  has?: string | null | undefined;
  hasEvery?: Array<string> | null | undefined;
  hasSome?: Array<string> | null | undefined;
  isEmpty?: boolean | null | undefined;
};

export enum Target {
  Admin = 'Admin',
  Member = 'Member'
}

export enum WebsiteCms {
  Directus = 'Directus',
  Strapi = 'Strapi',
  WordPress = 'WordPress'
}

export type WebsiteCreateInput = {
  cms?: WebsiteCms | null | undefined;
  cmsApiToken?: string | null | undefined;
  cmsApiUrl?: string | null | undefined;
  cmsConfig?: any;
  company: CompanyCreateNestedOneWithoutWebsitesInput;
  description?: string | null | undefined;
  industryBackground?: string | null | undefined;
  title: string;
};

export type WebsiteCreateNestedManyWithoutCompanyInput = {
  connect?: Array<WebsiteWhereUniqueInput> | null | undefined;
};

export type WebsiteListRelationFilter = {
  every?: WebsiteWhereInput | null | undefined;
  none?: WebsiteWhereInput | null | undefined;
  some?: WebsiteWhereInput | null | undefined;
};

export type WebsiteOrderByRelationAggregateInput = {
  _count?: SortOrder | null | undefined;
};

export type WebsiteOrderByWithRelationInput = {
  cms?: SortOrderInput | null | undefined;
  cmsApiToken?: SortOrderInput | null | undefined;
  cmsApiUrl?: SortOrderInput | null | undefined;
  cmsConfig?: SortOrderInput | null | undefined;
  company?: CompanyOrderByWithRelationInput | null | undefined;
  companyId?: SortOrder | null | undefined;
  createdAt?: SortOrder | null | undefined;
  description?: SortOrderInput | null | undefined;
  id?: SortOrder | null | undefined;
  industryBackground?: SortOrderInput | null | undefined;
  title?: SortOrder | null | undefined;
  updatedAt?: SortOrder | null | undefined;
};

export type WebsiteUpdateInput = {
  cms?: WebsiteCms | null | undefined;
  cmsApiToken?: string | null | undefined;
  cmsApiUrl?: string | null | undefined;
  cmsConfig?: any;
  company?: CompanyUpdateOneRequiredWithoutWebsitesNestedInput | null | undefined;
  description?: string | null | undefined;
  industryBackground?: string | null | undefined;
  title?: string | null | undefined;
};

export type WebsiteUpdateManyWithoutCompanyNestedInput = {
  connect?: Array<WebsiteWhereUniqueInput> | null | undefined;
  disconnect?: Array<WebsiteWhereUniqueInput> | null | undefined;
};

export type WebsiteWhereInput = {
  AND?: Array<WebsiteWhereInput> | null | undefined;
  NOT?: Array<WebsiteWhereInput> | null | undefined;
  OR?: Array<WebsiteWhereInput> | null | undefined;
  cms?: EnumWebsiteCmsNullableFilter | null | undefined;
  cmsApiToken?: StringNullableFilter | null | undefined;
  cmsApiUrl?: StringNullableFilter | null | undefined;
  cmsConfig?: JsonNullableFilter | null | undefined;
  company?: CompanyScalarRelationFilter | null | undefined;
  companyId?: StringFilter | null | undefined;
  createdAt?: DateTimeFilter | null | undefined;
  description?: StringNullableFilter | null | undefined;
  id?: StringFilter | null | undefined;
  industryBackground?: StringNullableFilter | null | undefined;
  title?: StringFilter | null | undefined;
  updatedAt?: DateTimeFilter | null | undefined;
};

export type WebsiteWhereUniqueInput = {
  cms?: EnumWebsiteCmsNullableFilter | null | undefined;
  cmsApiToken?: StringNullableFilter | null | undefined;
  cmsApiUrl?: StringNullableFilter | null | undefined;
  cmsConfig?: JsonNullableFilter | null | undefined;
  company?: CompanyScalarRelationFilter | null | undefined;
  companyId?: StringFilter | null | undefined;
  description?: StringNullableFilter | null | undefined;
  id?: string | null | undefined;
  industryBackground?: StringNullableFilter | null | undefined;
  title?: StringFilter | null | undefined;
};

export type PaginationFragment = { take: number, skip: number, page: number, totalPages: number, totalCount: number };

export type AdminFragment = { id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, roleId: string, avatar: string | null, avatarUrl: string | null };

export type AdminRoleFragment = { id: string, createdAt: string, updatedAt: string, status: Status, name: string, description: string | null, code: string, permissions: Array<string> | null };

export type CompanyFragment = { id: string, createdAt: string, updatedAt: string, status: Status, name: string, alias: string | null, code: string | null, description: string | null, logo: string | null, logoUrl: string | null };

export type CompanyRoleFragment = { id: string, createdAt: string, updatedAt: string, status: Status, name: string, description: string | null, code: string, permissions: Array<string> | null, companyId: string | null };

export type MemberFragment = { id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, avatar: string | null, avatarUrl: string | null };

export type LoginFragment = { target: Target, accessType: string, accessToken: string, accessTimeout: number };

export type PermissionItemFragment = { name: string, subject: string, subjectLabel: string, group: string, action: string, actionLabel: string };

export type PermissionGroupItemFragment = { id: string, name: string, label: string, items: Array<{ id: string, name: string, label: string, items: Array<{ id: string, name: string, label: string }> }> };

export type MediaFileFragment = { id: string, createdAt: string, updatedAt: string, status: Status, store: MediaStore, mediaType: MediaType, mimeType: string, fileName: string, fileHash: string, fileSize: string, width: number | null, height: number | null, duration: number | null, metadata: any, description: string | null, extension: string, folderId: string, owner: Owner, adminId: string | null, memberId: string | null, companyId: string | null, visibility: MediaVisibility, url: string };

export type WebsiteFragment = { cms: WebsiteCms | null, cmsApiToken: string | null, cmsApiUrl: string | null, cmsConfig: any, companyId: string, createdAt: string, description: string | null, hasCmsApiToken: boolean, industryBackground: string | null, id: string, title: string, updatedAt: string };

export type PaginateAdminRolesQueryVariables = Exact<{
  take?: number | null | undefined;
  skip?: number | null | undefined;
  where?: AdminRoleWhereInput | null | undefined;
  orderBy?: Array<AdminRoleOrderByWithRelationInput> | AdminRoleOrderByWithRelationInput | null | undefined;
}>;


export type PaginateAdminRolesQuery = { paginateAdminRoles: { items: Array<{ id: string, createdAt: string, updatedAt: string, status: Status, name: string, description: string | null, code: string, permissions: Array<string> | null }> | null, pagination: { take: number, skip: number, page: number, totalPages: number, totalCount: number } | null } };

export type FindOneAdminRoleQueryVariables = Exact<{
  id: string;
}>;


export type FindOneAdminRoleQuery = { findOneAdminRole: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, description: string | null, code: string, permissions: Array<string> | null } };

export type CreateOneAdminRoleMutationVariables = Exact<{
  data: AdminRoleCreateInput;
}>;


export type CreateOneAdminRoleMutation = { createOneAdminRole: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, description: string | null, code: string, permissions: Array<string> | null } };

export type UpdateOneAdminRoleMutationVariables = Exact<{
  id: string;
  data: AdminRoleUpdateInput;
}>;


export type UpdateOneAdminRoleMutation = { updateOneAdminRole: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, description: string | null, code: string, permissions: Array<string> | null } };

export type ListAdminRolePermissionQueryVariables = Exact<{
  where?: AdminRoleWhereUniqueInput | null | undefined;
}>;


export type ListAdminRolePermissionQuery = { listAdminRolePermission: { allowUnselect: Array<string>, allowSelect: Array<string>, groups: Array<{ id: string, name: string, label: string, items: Array<{ id: string, name: string, label: string, items: Array<{ id: string, name: string, label: string }> }> }> } };

export type PaginateAdminsQueryVariables = Exact<{
  take?: number | null | undefined;
  skip?: number | null | undefined;
  where?: AdminWhereInput | null | undefined;
  orderBy?: Array<AdminOrderByWithRelationInput> | AdminOrderByWithRelationInput | null | undefined;
}>;


export type PaginateAdminsQuery = { paginateAdmins: { items: Array<{ id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, roleId: string, avatar: string | null, avatarUrl: string | null }> | null, pagination: { take: number, skip: number, page: number, totalPages: number, totalCount: number } | null } };

export type FindOneAdminQueryVariables = Exact<{
  id: string;
}>;


export type FindOneAdminQuery = { findOneAdmin: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, roleId: string, avatar: string | null, avatarUrl: string | null } };

export type CreateOneAdminMutationVariables = Exact<{
  data: AdminCreateInput;
}>;


export type CreateOneAdminMutation = { createOneAdmin: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, roleId: string, avatar: string | null, avatarUrl: string | null } };

export type UpdateOneAdminMutationVariables = Exact<{
  id: string;
  data: AdminUpdateInput;
}>;


export type UpdateOneAdminMutation = { updateOneAdmin: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, roleId: string, avatar: string | null, avatarUrl: string | null } };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = { logout: boolean };

export type RefreshQueryVariables = Exact<{ [key: string]: never; }>;


export type RefreshQuery = { refresh: { target: Target, accessType: string, accessToken: string, accessTimeout: number } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { login: { target: Target, accessType: string, accessToken: string, accessTimeout: number } };

export type SwitchAuthCompanyMutationVariables = Exact<{
  companyId?: string | null | undefined;
}>;


export type SwitchAuthCompanyMutation = { switchAuthCompany: { target: Target, accessType: string, accessToken: string, accessTimeout: number } };

export type AuthInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthInfoQuery = { authInfo: { id: string, createdAt: string, updatedAt: string, expiredAt: string, adminId: string | null, memberId: string | null, companyId: string | null, device: any, location: any, target: Target, client: Client, permissions: Array<string>, admin: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, roleId: string, avatar: string | null, avatarUrl: string | null } | null, member: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, avatar: string | null, avatarUrl: string | null } | null, company: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, alias: string | null, code: string | null, description: string | null, logo: string | null, logoUrl: string | null } | null } };

export type TranslationsQueryVariables = Exact<{
  scopes: Array<string> | string;
}>;


export type TranslationsQuery = { translations: any };

export type HealthCheckQueryVariables = Exact<{ [key: string]: never; }>;


export type HealthCheckQuery = { healthCheck: string };

export type InviteMemberToCompanyMutationVariables = Exact<{
  memberId: string;
  roleId: string;
}>;


export type InviteMemberToCompanyMutation = { inviteMemberToCompany: { id: string, createdAt: string, updatedAt: string, sentAt: string, title: any, content: any, options: any, status: Status, priority: number, category: string | null, senderId: string | null, sender: NotificationTarget, receivers: Array<string> | null, privacy: NotificationPrivacy, type: NotificationType, adminId: string | null, memberId: string | null, companyId: string | null } };

export type PaginateCompanyRolesQueryVariables = Exact<{
  take?: number | null | undefined;
  skip?: number | null | undefined;
  where?: CompanyRoleWhereInput | null | undefined;
  orderBy?: Array<CompanyRoleOrderByWithRelationInput> | CompanyRoleOrderByWithRelationInput | null | undefined;
}>;


export type PaginateCompanyRolesQuery = { paginateCompanyRoles: { items: Array<{ id: string, createdAt: string, updatedAt: string, status: Status, name: string, description: string | null, code: string, permissions: Array<string> | null, companyId: string | null, company: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, alias: string | null, code: string | null, description: string | null, logo: string | null, logoUrl: string | null } | null }> | null, pagination: { take: number, skip: number, page: number, totalPages: number, totalCount: number } | null } };

export type FindOneCompanyRoleQueryVariables = Exact<{
  id: string;
}>;


export type FindOneCompanyRoleQuery = { findOneCompanyRole: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, description: string | null, code: string, permissions: Array<string> | null, companyId: string | null } };

export type CreateOneCompanyRoleMutationVariables = Exact<{
  data: CompanyRoleCreateInput;
}>;


export type CreateOneCompanyRoleMutation = { createOneCompanyRole: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, description: string | null, code: string, permissions: Array<string> | null, companyId: string | null } };

export type UpdateOneCompanyRoleMutationVariables = Exact<{
  id: string;
  data: CompanyRoleUpdateInput;
}>;


export type UpdateOneCompanyRoleMutation = { updateOneCompanyRole: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, description: string | null, code: string, permissions: Array<string> | null, companyId: string | null } };

export type ListCompanyRolePermissionQueryVariables = Exact<{
  where?: CompanyRoleWhereUniqueInput | null | undefined;
}>;


export type ListCompanyRolePermissionQuery = { listCompanyRolePermission: { allowUnselect: Array<string>, allowSelect: Array<string>, groups: Array<{ id: string, name: string, label: string, items: Array<{ id: string, name: string, label: string, items: Array<{ id: string, name: string, label: string }> }> }> } };

export type PaginateCompaniesQueryVariables = Exact<{
  take?: number | null | undefined;
  skip?: number | null | undefined;
  where?: CompanyWhereInput | null | undefined;
  orderBy?: Array<CompanyOrderByWithRelationInput> | CompanyOrderByWithRelationInput | null | undefined;
}>;


export type PaginateCompaniesQuery = { paginateCompanies: { items: Array<{ id: string, createdAt: string, updatedAt: string, status: Status, name: string, alias: string | null, code: string | null, description: string | null, logo: string | null, logoUrl: string | null }> | null, pagination: { take: number, skip: number, page: number, totalPages: number, totalCount: number } | null } };

export type FindOneCompanyQueryVariables = Exact<{
  id: string;
}>;


export type FindOneCompanyQuery = { findOneCompany: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, alias: string | null, code: string | null, description: string | null, logo: string | null, logoUrl: string | null } };

export type CreateOneCompanyMutationVariables = Exact<{
  data: CompanyCreateInput;
}>;


export type CreateOneCompanyMutation = { createOneCompany: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, alias: string | null, code: string | null, description: string | null, logo: string | null, logoUrl: string | null } };

export type UpdateOneCompanyMutationVariables = Exact<{
  id: string;
  data: CompanyUpdateInput;
}>;


export type UpdateOneCompanyMutation = { updateOneCompany: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, alias: string | null, code: string | null, description: string | null, logo: string | null, logoUrl: string | null } };

export type UploadFileMutationVariables = Exact<{
  file: any;
  folderPath: string;
}>;


export type UploadFileMutation = { uploadFile: { id: string, createdAt: string, updatedAt: string, status: Status, store: MediaStore, mediaType: MediaType, mimeType: string, fileName: string, fileHash: string, fileSize: string, width: number | null, height: number | null, duration: number | null, metadata: any, description: string | null, extension: string, folderId: string, owner: Owner, adminId: string | null, memberId: string | null, companyId: string | null, visibility: MediaVisibility, url: string } };

export type ListMediaFilesQueryVariables = Exact<{
  fileIds: Array<string> | string;
}>;


export type ListMediaFilesQuery = { listMediaFiles: Array<{ id: string, createdAt: string, updatedAt: string, status: Status, store: MediaStore, mediaType: MediaType, mimeType: string, fileName: string, fileHash: string, fileSize: string, width: number | null, height: number | null, duration: number | null, metadata: any, description: string | null, extension: string, folderId: string, owner: Owner, adminId: string | null, memberId: string | null, companyId: string | null, visibility: MediaVisibility, url: string }> };

export type PaginateMembersQueryVariables = Exact<{
  take?: number | null | undefined;
  skip?: number | null | undefined;
  where?: MemberWhereInput | null | undefined;
  orderBy?: Array<MemberOrderByWithRelationInput> | MemberOrderByWithRelationInput | null | undefined;
}>;


export type PaginateMembersQuery = { paginateMembers: { items: Array<{ id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, avatar: string | null, avatarUrl: string | null }> | null, pagination: { take: number, skip: number, page: number, totalPages: number, totalCount: number } | null } };

export type ListSearchMembersQueryVariables = Exact<{
  keyword?: string | null | undefined;
}>;


export type ListSearchMembersQuery = { listSearchMembers: { items: Array<{ id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, avatar: string | null, avatarUrl: string | null, companies: Array<{ companyId: string }> | null }> | null, pagination: { take: number, skip: number, page: number, totalPages: number, totalCount: number } | null } };

export type FindOneMemberQueryVariables = Exact<{
  id: string;
}>;


export type FindOneMemberQuery = { findOneMember: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, avatar: string | null, avatarUrl: string | null } };

export type CreateOneMemberMutationVariables = Exact<{
  data: MemberCreateInput;
}>;


export type CreateOneMemberMutation = { createOneMember: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, avatar: string | null, avatarUrl: string | null } };

export type UpdateOneMemberMutationVariables = Exact<{
  id: string;
  data: MemberUpdateInput;
}>;


export type UpdateOneMemberMutation = { updateOneMember: { id: string, createdAt: string, updatedAt: string, status: Status, name: string, email: string, avatar: string | null, avatarUrl: string | null } };

export type ListSelfNotificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type ListSelfNotificationsQuery = { listSelfNotifications: Array<{ id: string, createdAt: string, updatedAt: string, sentAt: string, title: any, content: any, options: any, status: Status, priority: number, category: string | null, senderId: string | null, sender: NotificationTarget, receivers: Array<string> | null, privacy: NotificationPrivacy, adminId: string | null, memberId: string | null, companyId: string | null, type: NotificationType }> };

export type PaginateWebsitesQueryVariables = Exact<{
  take?: number | null | undefined;
  skip?: number | null | undefined;
  where?: WebsiteWhereInput | null | undefined;
  orderBy?: Array<WebsiteOrderByWithRelationInput> | WebsiteOrderByWithRelationInput | null | undefined;
}>;


export type PaginateWebsitesQuery = { paginateWebsites: { items: Array<{ cms: WebsiteCms | null, cmsApiToken: string | null, cmsApiUrl: string | null, cmsConfig: any, companyId: string, createdAt: string, description: string | null, hasCmsApiToken: boolean, industryBackground: string | null, id: string, title: string, updatedAt: string }> | null, pagination: { take: number, skip: number, page: number, totalPages: number, totalCount: number } | null } };

export type FindOneWebsiteQueryVariables = Exact<{
  id: string;
}>;


export type FindOneWebsiteQuery = { findOneWebsite: { cms: WebsiteCms | null, cmsApiToken: string | null, cmsApiUrl: string | null, cmsConfig: any, companyId: string, createdAt: string, description: string | null, hasCmsApiToken: boolean, industryBackground: string | null, id: string, title: string, updatedAt: string } };

export type CreateOneWebsiteMutationVariables = Exact<{
  data: WebsiteCreateInput;
}>;


export type CreateOneWebsiteMutation = { createOneWebsite: { cms: WebsiteCms | null, cmsApiToken: string | null, cmsApiUrl: string | null, cmsConfig: any, companyId: string, createdAt: string, description: string | null, hasCmsApiToken: boolean, industryBackground: string | null, id: string, title: string, updatedAt: string } };

export type UpdateOneWebsiteMutationVariables = Exact<{
  id: string;
  data: WebsiteUpdateInput;
}>;


export type UpdateOneWebsiteMutation = { updateOneWebsite: { cms: WebsiteCms | null, cmsApiToken: string | null, cmsApiUrl: string | null, cmsConfig: any, companyId: string, createdAt: string, description: string | null, hasCmsApiToken: boolean, industryBackground: string | null, id: string, title: string, updatedAt: string } };

export type ListWebsiteSeoPageQueryVariables = Exact<{
  id: string;
}>;


export type ListWebsiteSeoPageQuery = { listWebsiteSeoPage: Array<{ apiId: string, contentType: ContentDataType, document: string, documentId: string, documentTitle: string, id: number, title: string, url: string, md5: string, score: number | null, status: SeoAnalysisStatus }> };

export type PushAllPagesToAnalyzeMutationVariables = Exact<{
  id: string;
}>;


export type PushAllPagesToAnalyzeMutation = { pushAllPagesToAnalyze: boolean };

export type PushPagesToAnalyzeMutationVariables = Exact<{
  id: string;
  urls: Array<string> | string;
}>;


export type PushPagesToAnalyzeMutation = { pushPagesToAnalyze: boolean };

export type PushPagesToUpdateMutationVariables = Exact<{
  id: string;
  urls: Array<string> | string;
}>;


export type PushPagesToUpdateMutation = { pushPagesToUpdate: boolean };

export const PaginationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginationFragment, unknown>;
export const AdminFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]} as unknown as DocumentNode<AdminFragment, unknown>;
export const AdminRoleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode<AdminRoleFragment, unknown>;
export const CompanyFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Company"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]} as unknown as DocumentNode<CompanyFragment, unknown>;
export const CompanyRoleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}}]} as unknown as DocumentNode<CompanyRoleFragment, unknown>;
export const MemberFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Member"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Member"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]} as unknown as DocumentNode<MemberFragment, unknown>;
export const LoginFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Login"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Login"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"accessType"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessTimeout"}}]}}]} as unknown as DocumentNode<LoginFragment, unknown>;
export const PermissionItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PermissionItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"subject"}},{"kind":"Field","name":{"kind":"Name","value":"subjectLabel"}},{"kind":"Field","name":{"kind":"Name","value":"group"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"actionLabel"}}]}}]} as unknown as DocumentNode<PermissionItemFragment, unknown>;
export const PermissionGroupItemFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PermissionGroupItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionGroupItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]} as unknown as DocumentNode<PermissionGroupItemFragment, unknown>;
export const MediaFileFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"store"}},{"kind":"Field","name":{"kind":"Name","value":"mediaType"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileHash"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"folderId"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"adminId"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<MediaFileFragment, unknown>;
export const WebsiteFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Website"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cms"}},{"kind":"Field","name":{"kind":"Name","value":"cmsApiToken"}},{"kind":"Field","name":{"kind":"Name","value":"cmsApiUrl"}},{"kind":"Field","name":{"kind":"Name","value":"cmsConfig"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hasCmsApiToken"}},{"kind":"Field","name":{"kind":"Name","value":"industryBackground"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<WebsiteFragment, unknown>;
export const PaginateAdminRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginateAdminRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRoleWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRoleOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginateAdminRoles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminRole"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginateAdminRolesQuery, PaginateAdminRolesQueryVariables>;
export const FindOneAdminRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOneAdminRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOneAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminRole"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode<FindOneAdminRoleQuery, FindOneAdminRoleQueryVariables>;
export const CreateOneAdminRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOneAdminRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRoleCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminRole"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode<CreateOneAdminRoleMutation, CreateOneAdminRoleMutationVariables>;
export const UpdateOneAdminRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOneAdminRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRoleUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminRole"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode<UpdateOneAdminRoleMutation, UpdateOneAdminRoleMutationVariables>;
export const ListAdminRolePermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListAdminRolePermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRoleWhereUniqueInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listAdminRolePermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allowUnselect"}},{"kind":"Field","name":{"kind":"Name","value":"allowSelect"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PermissionGroupItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PermissionGroupItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionGroupItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]} as unknown as DocumentNode<ListAdminRolePermissionQuery, ListAdminRolePermissionQueryVariables>;
export const PaginateAdminsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginateAdmins"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginateAdmins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Admin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginateAdminsQuery, PaginateAdminsQueryVariables>;
export const FindOneAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOneAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOneAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Admin"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]} as unknown as DocumentNode<FindOneAdminQuery, FindOneAdminQueryVariables>;
export const CreateOneAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOneAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Admin"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]} as unknown as DocumentNode<CreateOneAdminMutation, CreateOneAdminMutationVariables>;
export const UpdateOneAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOneAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Admin"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]} as unknown as DocumentNode<UpdateOneAdminMutation, UpdateOneAdminMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutQuery, LogoutQueryVariables>;
export const RefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Login"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Login"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Login"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"accessType"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessTimeout"}}]}}]} as unknown as DocumentNode<RefreshQuery, RefreshQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Login"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Login"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Login"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"accessType"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessTimeout"}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SwitchAuthCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SwitchAuthCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"switchAuthCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Login"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Login"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Login"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"accessType"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessTimeout"}}]}}]} as unknown as DocumentNode<SwitchAuthCompanyMutation, SwitchAuthCompanyMutationVariables>;
export const AuthInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"expiredAt"}},{"kind":"Field","name":{"kind":"Name","value":"adminId"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"device"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"client"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Admin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"member"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Member"}}]}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Company"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Member"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Member"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Company"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]} as unknown as DocumentNode<AuthInfoQuery, AuthInfoQueryVariables>;
export const TranslationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Translations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scopes"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scopes"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scopes"}}}]}]}}]} as unknown as DocumentNode<TranslationsQuery, TranslationsQueryVariables>;
export const HealthCheckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"HealthCheck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"healthCheck"}}]}}]} as unknown as DocumentNode<HealthCheckQuery, HealthCheckQueryVariables>;
export const InviteMemberToCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"InviteMemberToCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"inviteMemberToCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"memberId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"memberId"}}},{"kind":"Argument","name":{"kind":"Name","value":"roleId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"roleId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"options"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"receivers"}},{"kind":"Field","name":{"kind":"Name","value":"privacy"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"adminId"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}}]}}]} as unknown as DocumentNode<InviteMemberToCompanyMutation, InviteMemberToCompanyMutationVariables>;
export const PaginateCompanyRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginateCompanyRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRoleWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRoleOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginateCompanyRoles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyRole"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Company"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Company"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginateCompanyRolesQuery, PaginateCompanyRolesQueryVariables>;
export const FindOneCompanyRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOneCompanyRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOneCompanyRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyRole"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}}]} as unknown as DocumentNode<FindOneCompanyRoleQuery, FindOneCompanyRoleQueryVariables>;
export const CreateOneCompanyRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOneCompanyRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRoleCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneCompanyRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyRole"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}}]} as unknown as DocumentNode<CreateOneCompanyRoleMutation, CreateOneCompanyRoleMutationVariables>;
export const UpdateOneCompanyRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOneCompanyRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRoleUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneCompanyRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyRole"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}}]} as unknown as DocumentNode<UpdateOneCompanyRoleMutation, UpdateOneCompanyRoleMutationVariables>;
export const ListCompanyRolePermissionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListCompanyRolePermission"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRoleWhereUniqueInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listCompanyRolePermission"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allowUnselect"}},{"kind":"Field","name":{"kind":"Name","value":"allowSelect"}},{"kind":"Field","name":{"kind":"Name","value":"groups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"PermissionGroupItem"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PermissionGroupItem"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PermissionGroupItem"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]} as unknown as DocumentNode<ListCompanyRolePermissionQuery, ListCompanyRolePermissionQueryVariables>;
export const PaginateCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginateCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginateCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Company"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Company"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginateCompaniesQuery, PaginateCompaniesQueryVariables>;
export const FindOneCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOneCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOneCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Company"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Company"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]} as unknown as DocumentNode<FindOneCompanyQuery, FindOneCompanyQueryVariables>;
export const CreateOneCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOneCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Company"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Company"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]} as unknown as DocumentNode<CreateOneCompanyMutation, CreateOneCompanyMutationVariables>;
export const UpdateOneCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOneCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Company"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Company"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]} as unknown as DocumentNode<UpdateOneCompanyMutation, UpdateOneCompanyMutationVariables>;
export const UploadFileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadFile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Upload"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"folderPath"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadFile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}},{"kind":"Argument","name":{"kind":"Name","value":"folderPath"},"value":{"kind":"Variable","name":{"kind":"Name","value":"folderPath"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFile"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"store"}},{"kind":"Field","name":{"kind":"Name","value":"mediaType"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileHash"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"folderId"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"adminId"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<UploadFileMutation, UploadFileMutationVariables>;
export const ListMediaFilesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListMediaFiles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listMediaFiles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"fileIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileIds"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MediaFile"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MediaFile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MediaFile"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"store"}},{"kind":"Field","name":{"kind":"Name","value":"mediaType"}},{"kind":"Field","name":{"kind":"Name","value":"mimeType"}},{"kind":"Field","name":{"kind":"Name","value":"fileName"}},{"kind":"Field","name":{"kind":"Name","value":"fileHash"}},{"kind":"Field","name":{"kind":"Name","value":"fileSize"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"extension"}},{"kind":"Field","name":{"kind":"Name","value":"folderId"}},{"kind":"Field","name":{"kind":"Name","value":"owner"}},{"kind":"Field","name":{"kind":"Name","value":"adminId"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<ListMediaFilesQuery, ListMediaFilesQueryVariables>;
export const PaginateMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginateMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MemberWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MemberOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginateMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Member"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Member"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Member"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginateMembersQuery, PaginateMembersQueryVariables>;
export const ListSearchMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListSearchMembers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listSearchMembers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"keyword"},"value":{"kind":"Variable","name":{"kind":"Name","value":"keyword"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Member"}},{"kind":"Field","name":{"kind":"Name","value":"companies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Member"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Member"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<ListSearchMembersQuery, ListSearchMembersQueryVariables>;
export const FindOneMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOneMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOneMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Member"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Member"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Member"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]} as unknown as DocumentNode<FindOneMemberQuery, FindOneMemberQueryVariables>;
export const CreateOneMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOneMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MemberCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Member"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Member"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Member"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]} as unknown as DocumentNode<CreateOneMemberMutation, CreateOneMemberMutationVariables>;
export const UpdateOneMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOneMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MemberUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Member"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Member"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Member"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]} as unknown as DocumentNode<UpdateOneMemberMutation, UpdateOneMemberMutationVariables>;
export const ListSelfNotificationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListSelfNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listSelfNotifications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"sentAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"options"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"category"}},{"kind":"Field","name":{"kind":"Name","value":"senderId"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"receivers"}},{"kind":"Field","name":{"kind":"Name","value":"privacy"}},{"kind":"Field","name":{"kind":"Name","value":"adminId"}},{"kind":"Field","name":{"kind":"Name","value":"memberId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<ListSelfNotificationsQuery, ListSelfNotificationsQueryVariables>;
export const PaginateWebsitesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginateWebsites"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginateWebsites"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Website"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Website"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cms"}},{"kind":"Field","name":{"kind":"Name","value":"cmsApiToken"}},{"kind":"Field","name":{"kind":"Name","value":"cmsApiUrl"}},{"kind":"Field","name":{"kind":"Name","value":"cmsConfig"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hasCmsApiToken"}},{"kind":"Field","name":{"kind":"Name","value":"industryBackground"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginateWebsitesQuery, PaginateWebsitesQueryVariables>;
export const FindOneWebsiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOneWebsite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOneWebsite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Website"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Website"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cms"}},{"kind":"Field","name":{"kind":"Name","value":"cmsApiToken"}},{"kind":"Field","name":{"kind":"Name","value":"cmsApiUrl"}},{"kind":"Field","name":{"kind":"Name","value":"cmsConfig"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hasCmsApiToken"}},{"kind":"Field","name":{"kind":"Name","value":"industryBackground"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<FindOneWebsiteQuery, FindOneWebsiteQueryVariables>;
export const CreateOneWebsiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOneWebsite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneWebsite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Website"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Website"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cms"}},{"kind":"Field","name":{"kind":"Name","value":"cmsApiToken"}},{"kind":"Field","name":{"kind":"Name","value":"cmsApiUrl"}},{"kind":"Field","name":{"kind":"Name","value":"cmsConfig"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hasCmsApiToken"}},{"kind":"Field","name":{"kind":"Name","value":"industryBackground"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<CreateOneWebsiteMutation, CreateOneWebsiteMutationVariables>;
export const UpdateOneWebsiteDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOneWebsite"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WebsiteUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneWebsite"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Website"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Website"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Website"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cms"}},{"kind":"Field","name":{"kind":"Name","value":"cmsApiToken"}},{"kind":"Field","name":{"kind":"Name","value":"cmsApiUrl"}},{"kind":"Field","name":{"kind":"Name","value":"cmsConfig"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"hasCmsApiToken"}},{"kind":"Field","name":{"kind":"Name","value":"industryBackground"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UpdateOneWebsiteMutation, UpdateOneWebsiteMutationVariables>;
export const ListWebsiteSeoPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListWebsiteSeoPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listWebsiteSeoPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apiId"}},{"kind":"Field","name":{"kind":"Name","value":"contentType"}},{"kind":"Field","name":{"kind":"Name","value":"document"}},{"kind":"Field","name":{"kind":"Name","value":"documentId"}},{"kind":"Field","name":{"kind":"Name","value":"documentTitle"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"md5"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<ListWebsiteSeoPageQuery, ListWebsiteSeoPageQueryVariables>;
export const PushAllPagesToAnalyzeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PushAllPagesToAnalyze"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pushAllPagesToAnalyze"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}]}}]} as unknown as DocumentNode<PushAllPagesToAnalyzeMutation, PushAllPagesToAnalyzeMutationVariables>;
export const PushPagesToAnalyzeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PushPagesToAnalyze"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"urls"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pushPagesToAnalyze"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"urls"},"value":{"kind":"Variable","name":{"kind":"Name","value":"urls"}}}]}]}}]} as unknown as DocumentNode<PushPagesToAnalyzeMutation, PushPagesToAnalyzeMutationVariables>;
export const PushPagesToUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"PushPagesToUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"urls"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pushPagesToUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"urls"},"value":{"kind":"Variable","name":{"kind":"Name","value":"urls"}}}]}]}}]} as unknown as DocumentNode<PushPagesToUpdateMutation, PushPagesToUpdateMutationVariables>;