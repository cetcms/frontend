/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Admin = {
  __typename?: 'Admin';
  auths?: Maybe<Array<Auth>>;
  companies?: Maybe<Array<AdminCompany>>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logs?: Maybe<Array<RequestLog>>;
  mediaFiles?: Maybe<Array<MediaFile>>;
  mediaFolders?: Maybe<Array<MediaFolder>>;
  name: Scalars['String']['output'];
  role: AdminRole;
  roleId: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type AdminCompany = {
  __typename?: 'AdminCompany';
  admin: Admin;
  adminId: Scalars['String']['output'];
  company: Company;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  permissions?: Maybe<Array<Scalars['String']['output']>>;
  updatedAt: Scalars['DateTime']['output'];
};

export type AdminCompanyAdminCompanyIdxCompoundUniqueInput = {
  adminId: Scalars['String']['input'];
  companyId: Scalars['String']['input'];
};

export type AdminCompanyCountAggregate = {
  __typename?: 'AdminCompanyCountAggregate';
  _all: Scalars['Int']['output'];
  adminId: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  permissions: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type AdminCompanyCreateInput = {
  admin: AdminCreateNestedOneWithoutCompaniesInput;
  company: CompanyCreateNestedOneWithoutAdminsInput;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AdminCompanyCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<AdminCompanyWhereUniqueInput>>;
};

export type AdminCompanyListRelationFilter = {
  every?: InputMaybe<AdminCompanyWhereInput>;
  none?: InputMaybe<AdminCompanyWhereInput>;
  some?: InputMaybe<AdminCompanyWhereInput>;
};

export type AdminCompanyMaxAggregate = {
  __typename?: 'AdminCompanyMaxAggregate';
  adminId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminCompanyMinAggregate = {
  __typename?: 'AdminCompanyMinAggregate';
  adminId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminCompanyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdminCompanyOrderByWithRelationInput = {
  admin?: InputMaybe<AdminOrderByWithRelationInput>;
  adminId?: InputMaybe<SortOrder>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum AdminCompanyScalarFieldEnum {
  AdminId = 'adminId',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Permissions = 'permissions',
  UpdatedAt = 'updatedAt'
}

export type AdminCompanyUpdateInput = {
  admin?: InputMaybe<AdminUpdateOneRequiredWithoutCompaniesNestedInput>;
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutAdminsNestedInput>;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type AdminCompanyUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<AdminCompanyWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<AdminCompanyWhereUniqueInput>>;
};

export type AdminCompanyWhereInput = {
  AND?: InputMaybe<Array<AdminCompanyWhereInput>>;
  NOT?: InputMaybe<Array<AdminCompanyWhereInput>>;
  OR?: InputMaybe<Array<AdminCompanyWhereInput>>;
  admin?: InputMaybe<AdminScalarRelationFilter>;
  adminId?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyScalarRelationFilter>;
  companyId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  permissions?: InputMaybe<StringNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminCompanyWhereUniqueInput = {
  admin?: InputMaybe<AdminScalarRelationFilter>;
  adminCompanyIdx?: InputMaybe<AdminCompanyAdminCompanyIdxCompoundUniqueInput>;
  adminId?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyScalarRelationFilter>;
  companyId?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<StringNullableListFilter>;
};

export type AdminCountAggregate = {
  __typename?: 'AdminCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  roleId: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type AdminCreateInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  role: AdminRoleCreateNestedOneWithoutAdminsInput;
  status?: InputMaybe<Status>;
};

export type AdminCreateNestedManyWithoutRoleInput = {
  connect?: InputMaybe<Array<AdminWhereUniqueInput>>;
};

export type AdminCreateNestedOneWithoutCompaniesInput = {
  connect?: InputMaybe<AdminWhereUniqueInput>;
};

export type AdminListRelationFilter = {
  every?: InputMaybe<AdminWhereInput>;
  none?: InputMaybe<AdminWhereInput>;
  some?: InputMaybe<AdminWhereInput>;
};

export type AdminMaxAggregate = {
  __typename?: 'AdminMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roleId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminMinAggregate = {
  __typename?: 'AdminMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  roleId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminNullableScalarRelationFilter = {
  is?: InputMaybe<AdminWhereInput>;
  isNot?: InputMaybe<AdminWhereInput>;
};

export type AdminOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdminOrderByWithRelationInput = {
  auths?: InputMaybe<AuthOrderByRelationAggregateInput>;
  companies?: InputMaybe<AdminCompanyOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logs?: InputMaybe<RequestLogOrderByRelationAggregateInput>;
  mediaFiles?: InputMaybe<MediaFileOrderByRelationAggregateInput>;
  mediaFolders?: InputMaybe<MediaFolderOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  role?: InputMaybe<AdminRoleOrderByWithRelationInput>;
  roleId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AdminRole = {
  __typename?: 'AdminRole';
  admins?: Maybe<Array<Admin>>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Scalars['String']['output']>>;
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type AdminRoleCountAggregate = {
  __typename?: 'AdminRoleCountAggregate';
  _all: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  permissions: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type AdminRoleCreateInput = {
  admins?: InputMaybe<AdminCreateNestedManyWithoutRoleInput>;
  code: Scalars['String']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Status>;
};

export type AdminRoleCreateNestedOneWithoutAdminsInput = {
  connect?: InputMaybe<AdminRoleWhereUniqueInput>;
};

export type AdminRoleMaxAggregate = {
  __typename?: 'AdminRoleMaxAggregate';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminRoleMinAggregate = {
  __typename?: 'AdminRoleMinAggregate';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdminRoleOrderByWithRelationInput = {
  admins?: InputMaybe<AdminOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum AdminRoleScalarFieldEnum {
  Code = 'code',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Permissions = 'permissions',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type AdminRoleScalarRelationFilter = {
  is?: InputMaybe<AdminRoleWhereInput>;
  isNot?: InputMaybe<AdminRoleWhereInput>;
};

export type AdminRoleUpdateInput = {
  admins?: InputMaybe<AdminUpdateManyWithoutRoleNestedInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Status>;
};

export type AdminRoleUpdateOneRequiredWithoutAdminsNestedInput = {
  connect?: InputMaybe<AdminRoleWhereUniqueInput>;
};

export type AdminRoleWhereInput = {
  AND?: InputMaybe<Array<AdminRoleWhereInput>>;
  NOT?: InputMaybe<Array<AdminRoleWhereInput>>;
  OR?: InputMaybe<Array<AdminRoleWhereInput>>;
  admins?: InputMaybe<AdminListRelationFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<StringNullableListFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminRoleWhereUniqueInput = {
  admins?: InputMaybe<AdminListRelationFilter>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<StringNullableListFilter>;
  status?: InputMaybe<EnumStatusFilter>;
};

export enum AdminScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  RoleId = 'roleId',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type AdminScalarRelationFilter = {
  is?: InputMaybe<AdminWhereInput>;
  isNot?: InputMaybe<AdminWhereInput>;
};

export type AdminUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<AdminRoleUpdateOneRequiredWithoutAdminsNestedInput>;
  status?: InputMaybe<Status>;
};

export type AdminUpdateManyWithoutRoleNestedInput = {
  connect?: InputMaybe<Array<AdminWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<AdminWhereUniqueInput>>;
};

export type AdminUpdateOneRequiredWithoutCompaniesNestedInput = {
  connect?: InputMaybe<AdminWhereUniqueInput>;
};

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  auths?: InputMaybe<AuthListRelationFilter>;
  companies?: InputMaybe<AdminCompanyListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  logs?: InputMaybe<RequestLogListRelationFilter>;
  mediaFiles?: InputMaybe<MediaFileListRelationFilter>;
  mediaFolders?: InputMaybe<MediaFolderListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  role?: InputMaybe<AdminRoleScalarRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type AdminWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  role?: InputMaybe<AdminRoleScalarRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
};

export type Auth = {
  __typename?: 'Auth';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  device?: Maybe<Scalars['JSON']['output']>;
  expiredAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['JSON']['output']>;
  target: Target;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AuthCountAggregate = {
  __typename?: 'AuthCountAggregate';
  _all: Scalars['Int']['output'];
  adminId: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  device: Scalars['Int']['output'];
  expiredAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  target: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AuthCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<AuthWhereUniqueInput>>;
};

export type AuthListRelationFilter = {
  every?: InputMaybe<AuthWhereInput>;
  none?: InputMaybe<AuthWhereInput>;
  some?: InputMaybe<AuthWhereInput>;
};

export type AuthMaxAggregate = {
  __typename?: 'AuthMaxAggregate';
  adminId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Target>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AuthMinAggregate = {
  __typename?: 'AuthMinAggregate';
  adminId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiredAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Target>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AuthOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AuthUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<AuthWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<AuthWhereUniqueInput>>;
};

export type AuthWhereInput = {
  AND?: InputMaybe<Array<AuthWhereInput>>;
  NOT?: InputMaybe<Array<AuthWhereInput>>;
  OR?: InputMaybe<Array<AuthWhereInput>>;
  admin?: InputMaybe<AdminNullableScalarRelationFilter>;
  adminId?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<CompanyNullableScalarRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  device?: InputMaybe<JsonNullableFilter>;
  expiredAt?: InputMaybe<DateTimeFilter>;
  fingerprint?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  location?: InputMaybe<JsonNullableFilter>;
  target?: InputMaybe<EnumTargetFilter>;
  token?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type AuthWhereUniqueInput = {
  admin?: InputMaybe<AdminNullableScalarRelationFilter>;
  adminId?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<CompanyNullableScalarRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  device?: InputMaybe<JsonNullableFilter>;
  expiredAt?: InputMaybe<DateTimeFilter>;
  fingerprint?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<JsonNullableFilter>;
  target?: InputMaybe<EnumTargetFilter>;
  token?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Company = {
  __typename?: 'Company';
  alias?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type CompanyCountAggregate = {
  __typename?: 'CompanyCountAggregate';
  _all: Scalars['Int']['output'];
  alias: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CompanyCreateInput = {
  admins?: InputMaybe<AdminCompanyCreateNestedManyWithoutCompanyInput>;
  alias?: InputMaybe<Scalars['String']['input']>;
  auths?: InputMaybe<AuthCreateNestedManyWithoutCompanyInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<RequestLogCreateNestedManyWithoutCompanyInput>;
  mediaFiles?: InputMaybe<MediaFileCreateNestedManyWithoutCompanyInput>;
  mediaFolders?: InputMaybe<MediaFolderCreateNestedManyWithoutCompanyInput>;
  name: Scalars['String']['input'];
  roles?: InputMaybe<CompanyRoleCreateNestedManyWithoutCompanyInput>;
  status?: InputMaybe<Status>;
  users?: InputMaybe<CompanyUserCreateNestedManyWithoutCompanyInput>;
};

export type CompanyCreateNestedOneWithoutAdminsInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
};

export type CompanyCreateNestedOneWithoutRolesInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
};

export type CompanyCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
};

export type CompanyMaxAggregate = {
  __typename?: 'CompanyMaxAggregate';
  alias?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CompanyMinAggregate = {
  __typename?: 'CompanyMinAggregate';
  alias?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CompanyNullableScalarRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
};

export type CompanyOrderByWithRelationInput = {
  admins?: InputMaybe<AdminCompanyOrderByRelationAggregateInput>;
  alias?: InputMaybe<SortOrderInput>;
  auths?: InputMaybe<AuthOrderByRelationAggregateInput>;
  code?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  logs?: InputMaybe<RequestLogOrderByRelationAggregateInput>;
  mediaFiles?: InputMaybe<MediaFileOrderByRelationAggregateInput>;
  mediaFolders?: InputMaybe<MediaFolderOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  roles?: InputMaybe<CompanyRoleOrderByRelationAggregateInput>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<CompanyUserOrderByRelationAggregateInput>;
};

export type CompanyRole = {
  __typename?: 'CompanyRole';
  code: Scalars['String']['output'];
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Scalars['String']['output']>>;
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  users?: Maybe<Array<CompanyUser>>;
};

export type CompanyRoleCompanyRoleIdxCompoundUniqueInput = {
  code: Scalars['String']['input'];
  companyId: Scalars['String']['input'];
};

export type CompanyRoleCountAggregate = {
  __typename?: 'CompanyRoleCountAggregate';
  _all: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  permissions: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type CompanyRoleCreateInput = {
  code: Scalars['String']['input'];
  company?: InputMaybe<CompanyCreateNestedOneWithoutRolesInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Status>;
};

export type CompanyRoleCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<CompanyRoleWhereUniqueInput>>;
};

export type CompanyRoleCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<CompanyRoleWhereUniqueInput>;
};

export type CompanyRoleListRelationFilter = {
  every?: InputMaybe<CompanyRoleWhereInput>;
  none?: InputMaybe<CompanyRoleWhereInput>;
  some?: InputMaybe<CompanyRoleWhereInput>;
};

export type CompanyRoleMaxAggregate = {
  __typename?: 'CompanyRoleMaxAggregate';
  code?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CompanyRoleMinAggregate = {
  __typename?: 'CompanyRoleMinAggregate';
  code?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CompanyRoleOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CompanyRoleOrderByWithRelationInput = {
  code?: InputMaybe<SortOrder>;
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  permissions?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<CompanyUserOrderByRelationAggregateInput>;
};

export enum CompanyRoleScalarFieldEnum {
  Code = 'code',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Permissions = 'permissions',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type CompanyRoleScalarRelationFilter = {
  is?: InputMaybe<CompanyRoleWhereInput>;
  isNot?: InputMaybe<CompanyRoleWhereInput>;
};

export type CompanyRoleUpdateInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<CompanyUpdateOneWithoutRolesNestedInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<Scalars['String']['input']>>;
  status?: InputMaybe<Status>;
};

export type CompanyRoleUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<CompanyRoleWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CompanyRoleWhereUniqueInput>>;
};

export type CompanyRoleUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<CompanyRoleWhereUniqueInput>;
};

export type CompanyRoleWhereInput = {
  AND?: InputMaybe<Array<CompanyRoleWhereInput>>;
  NOT?: InputMaybe<Array<CompanyRoleWhereInput>>;
  OR?: InputMaybe<Array<CompanyRoleWhereInput>>;
  code?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyNullableScalarRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<StringNullableListFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<CompanyUserListRelationFilter>;
};

export type CompanyRoleWhereUniqueInput = {
  code?: InputMaybe<StringFilter>;
  company?: InputMaybe<CompanyNullableScalarRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  companyRoleIdx?: InputMaybe<CompanyRoleCompanyRoleIdxCompoundUniqueInput>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  permissions?: InputMaybe<StringNullableListFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  users?: InputMaybe<CompanyUserListRelationFilter>;
};

export enum CompanyScalarFieldEnum {
  Alias = 'alias',
  Code = 'code',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type CompanyScalarRelationFilter = {
  is?: InputMaybe<CompanyWhereInput>;
  isNot?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUpdateInput = {
  admins?: InputMaybe<AdminCompanyUpdateManyWithoutCompanyNestedInput>;
  alias?: InputMaybe<Scalars['String']['input']>;
  auths?: InputMaybe<AuthUpdateManyWithoutCompanyNestedInput>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<RequestLogUpdateManyWithoutCompanyNestedInput>;
  mediaFiles?: InputMaybe<MediaFileUpdateManyWithoutCompanyNestedInput>;
  mediaFolders?: InputMaybe<MediaFolderUpdateManyWithoutCompanyNestedInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<CompanyRoleUpdateManyWithoutCompanyNestedInput>;
  status?: InputMaybe<Status>;
  users?: InputMaybe<CompanyUserUpdateManyWithoutCompanyNestedInput>;
};

export type CompanyUpdateOneRequiredWithoutAdminsNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
};

export type CompanyUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
};

export type CompanyUpdateOneWithoutRolesNestedInput = {
  connect?: InputMaybe<CompanyWhereUniqueInput>;
  disconnect?: InputMaybe<CompanyWhereInput>;
};

export type CompanyUser = {
  __typename?: 'CompanyUser';
  company: Company;
  companyId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  role: CompanyRole;
  roleId: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CompanyUserCompanyUserIdxCompoundUniqueInput = {
  companyId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type CompanyUserCountAggregate = {
  __typename?: 'CompanyUserCountAggregate';
  _all: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  roleId: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type CompanyUserCreateInput = {
  company: CompanyCreateNestedOneWithoutUsersInput;
  role: CompanyRoleCreateNestedOneWithoutUsersInput;
  status?: InputMaybe<Status>;
  user: UserCreateNestedOneWithoutCompaniesInput;
};

export type CompanyUserCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<CompanyUserWhereUniqueInput>>;
};

export type CompanyUserListRelationFilter = {
  every?: InputMaybe<CompanyUserWhereInput>;
  none?: InputMaybe<CompanyUserWhereInput>;
  some?: InputMaybe<CompanyUserWhereInput>;
};

export type CompanyUserMaxAggregate = {
  __typename?: 'CompanyUserMaxAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  roleId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CompanyUserMinAggregate = {
  __typename?: 'CompanyUserMinAggregate';
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  roleId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type CompanyUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CompanyUserOrderByWithRelationInput = {
  company?: InputMaybe<CompanyOrderByWithRelationInput>;
  companyId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  role?: InputMaybe<CompanyRoleOrderByWithRelationInput>;
  roleId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum CompanyUserScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  RoleId = 'roleId',
  Status = 'status',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type CompanyUserUpdateInput = {
  company?: InputMaybe<CompanyUpdateOneRequiredWithoutUsersNestedInput>;
  role?: InputMaybe<CompanyRoleUpdateOneRequiredWithoutUsersNestedInput>;
  status?: InputMaybe<Status>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCompaniesNestedInput>;
};

export type CompanyUserUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<CompanyUserWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<CompanyUserWhereUniqueInput>>;
};

export type CompanyUserWhereInput = {
  AND?: InputMaybe<Array<CompanyUserWhereInput>>;
  NOT?: InputMaybe<Array<CompanyUserWhereInput>>;
  OR?: InputMaybe<Array<CompanyUserWhereInput>>;
  company?: InputMaybe<CompanyScalarRelationFilter>;
  companyId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  role?: InputMaybe<CompanyRoleScalarRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CompanyUserWhereUniqueInput = {
  company?: InputMaybe<CompanyScalarRelationFilter>;
  companyId?: InputMaybe<StringFilter>;
  companyUserIdx?: InputMaybe<CompanyUserCompanyUserIdxCompoundUniqueInput>;
  role?: InputMaybe<CompanyRoleScalarRelationFilter>;
  roleId?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  user?: InputMaybe<UserScalarRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CompanyWhereInput = {
  AND?: InputMaybe<Array<CompanyWhereInput>>;
  NOT?: InputMaybe<Array<CompanyWhereInput>>;
  OR?: InputMaybe<Array<CompanyWhereInput>>;
  admins?: InputMaybe<AdminCompanyListRelationFilter>;
  alias?: InputMaybe<StringNullableFilter>;
  auths?: InputMaybe<AuthListRelationFilter>;
  code?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  logs?: InputMaybe<RequestLogListRelationFilter>;
  mediaFiles?: InputMaybe<MediaFileListRelationFilter>;
  mediaFolders?: InputMaybe<MediaFolderListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  roles?: InputMaybe<CompanyRoleListRelationFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<CompanyUserListRelationFilter>;
};

export type CompanyWhereUniqueInput = {
  admins?: InputMaybe<AdminCompanyListRelationFilter>;
  alias?: InputMaybe<StringNullableFilter>;
  auths?: InputMaybe<AuthListRelationFilter>;
  code?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  logs?: InputMaybe<RequestLogListRelationFilter>;
  mediaFiles?: InputMaybe<MediaFileListRelationFilter>;
  mediaFolders?: InputMaybe<MediaFolderListRelationFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  roles?: InputMaybe<CompanyRoleListRelationFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  users?: InputMaybe<CompanyUserListRelationFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumMediaStoreFilter = {
  equals?: InputMaybe<MediaStore>;
  in?: InputMaybe<Array<MediaStore>>;
  not?: InputMaybe<NestedEnumMediaStoreFilter>;
  notIn?: InputMaybe<Array<MediaStore>>;
};

export type EnumMediaTypeFilter = {
  equals?: InputMaybe<MediaType>;
  in?: InputMaybe<Array<MediaType>>;
  not?: InputMaybe<NestedEnumMediaTypeFilter>;
  notIn?: InputMaybe<Array<MediaType>>;
};

export type EnumMediaVisibilityFilter = {
  equals?: InputMaybe<MediaVisibility>;
  in?: InputMaybe<Array<MediaVisibility>>;
  not?: InputMaybe<NestedEnumMediaVisibilityFilter>;
  notIn?: InputMaybe<Array<MediaVisibility>>;
};

export type EnumRequestMethodNullableFilter = {
  equals?: InputMaybe<RequestMethod>;
  in?: InputMaybe<Array<RequestMethod>>;
  not?: InputMaybe<NestedEnumRequestMethodNullableFilter>;
  notIn?: InputMaybe<Array<RequestMethod>>;
};

export type EnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type EnumTargetFilter = {
  equals?: InputMaybe<Target>;
  in?: InputMaybe<Array<Target>>;
  not?: InputMaybe<NestedEnumTargetFilter>;
  notIn?: InputMaybe<Array<Target>>;
};

export type EnumTargetNullableFilter = {
  equals?: InputMaybe<Target>;
  in?: InputMaybe<Array<Target>>;
  not?: InputMaybe<NestedEnumTargetNullableFilter>;
  notIn?: InputMaybe<Array<Target>>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type JsonNullableFilter = {
  array_contains?: InputMaybe<Scalars['JSON']['input']>;
  array_ends_with?: InputMaybe<Scalars['JSON']['input']>;
  array_starts_with?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<Scalars['JSON']['input']>;
  path?: InputMaybe<Array<Scalars['String']['input']>>;
  string_contains?: InputMaybe<Scalars['String']['input']>;
  string_ends_with?: InputMaybe<Scalars['String']['input']>;
  string_starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Login = {
  __typename?: 'Login';
  accessTimeout: Scalars['Float']['output'];
  accessToken: Scalars['String']['output'];
  accessType: Scalars['String']['output'];
  target: Target;
};

export type LoginInput = {
  account: Scalars['String']['input'];
  companyId?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  target?: InputMaybe<Target>;
};

export type MediaFile = {
  __typename?: 'MediaFile';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  fileHash: Scalars['String']['output'];
  fileName: Scalars['String']['output'];
  filePath: Scalars['String']['output'];
  fileSize: Scalars['String']['output'];
  folder?: Maybe<MediaFolder>;
  folderId?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  mediaType: MediaType;
  metadata?: Maybe<Scalars['JSON']['output']>;
  mimeType: Scalars['String']['output'];
  originName: Scalars['String']['output'];
  ownerId: Scalars['String']['output'];
  ownerType: Target;
  status: Status;
  store: MediaStore;
  updatedAt: Scalars['DateTime']['output'];
  uploadedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
  visibility: MediaVisibility;
  width?: Maybe<Scalars['Int']['output']>;
};

export type MediaFileAvgAggregate = {
  __typename?: 'MediaFileAvgAggregate';
  duration?: Maybe<Scalars['Float']['output']>;
  fileSize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaFileCountAggregate = {
  __typename?: 'MediaFileCountAggregate';
  _all: Scalars['Int']['output'];
  adminId: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  duration: Scalars['Int']['output'];
  fileHash: Scalars['Int']['output'];
  fileName: Scalars['Int']['output'];
  filePath: Scalars['Int']['output'];
  fileSize: Scalars['Int']['output'];
  folderId: Scalars['Int']['output'];
  height: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  mediaType: Scalars['Int']['output'];
  metadata: Scalars['Int']['output'];
  mimeType: Scalars['Int']['output'];
  originName: Scalars['Int']['output'];
  ownerId: Scalars['Int']['output'];
  ownerType: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  store: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  uploadedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  visibility: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type MediaFileCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<MediaFileWhereUniqueInput>>;
};

export type MediaFileFileHashIdxCompoundUniqueInput = {
  companyId: Scalars['String']['input'];
  fileHash: Scalars['String']['input'];
};

export type MediaFileListRelationFilter = {
  every?: InputMaybe<MediaFileWhereInput>;
  none?: InputMaybe<MediaFileWhereInput>;
  some?: InputMaybe<MediaFileWhereInput>;
};

export type MediaFileMaxAggregate = {
  __typename?: 'MediaFileMaxAggregate';
  adminId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  fileHash?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['String']['output']>;
  folderId?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mediaType?: Maybe<MediaType>;
  mimeType?: Maybe<Scalars['String']['output']>;
  originName?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  ownerType?: Maybe<Target>;
  status?: Maybe<Status>;
  store?: Maybe<MediaStore>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uploadedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<MediaVisibility>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type MediaFileMinAggregate = {
  __typename?: 'MediaFileMinAggregate';
  adminId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  fileHash?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  filePath?: Maybe<Scalars['String']['output']>;
  fileSize?: Maybe<Scalars['String']['output']>;
  folderId?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mediaType?: Maybe<MediaType>;
  mimeType?: Maybe<Scalars['String']['output']>;
  originName?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  ownerType?: Maybe<Target>;
  status?: Maybe<Status>;
  store?: Maybe<MediaStore>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  uploadedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<MediaVisibility>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type MediaFileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MediaFileSumAggregate = {
  __typename?: 'MediaFileSumAggregate';
  duration?: Maybe<Scalars['Int']['output']>;
  fileSize?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type MediaFileUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<MediaFileWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<MediaFileWhereUniqueInput>>;
};

export type MediaFileWhereInput = {
  AND?: InputMaybe<Array<MediaFileWhereInput>>;
  NOT?: InputMaybe<Array<MediaFileWhereInput>>;
  OR?: InputMaybe<Array<MediaFileWhereInput>>;
  admin?: InputMaybe<AdminNullableScalarRelationFilter>;
  adminId?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<CompanyNullableScalarRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  duration?: InputMaybe<IntNullableFilter>;
  fileHash?: InputMaybe<StringFilter>;
  fileName?: InputMaybe<StringFilter>;
  filePath?: InputMaybe<StringFilter>;
  fileSize?: InputMaybe<BigIntFilter>;
  folder?: InputMaybe<MediaFolderNullableScalarRelationFilter>;
  folderId?: InputMaybe<StringNullableFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  mediaType?: InputMaybe<EnumMediaTypeFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originName?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringFilter>;
  ownerType?: InputMaybe<EnumTargetFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  store?: InputMaybe<EnumMediaStoreFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  uploadedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  visibility?: InputMaybe<EnumMediaVisibilityFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type MediaFileWhereUniqueInput = {
  admin?: InputMaybe<AdminNullableScalarRelationFilter>;
  adminId?: InputMaybe<StringNullableFilter>;
  company?: InputMaybe<CompanyNullableScalarRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  duration?: InputMaybe<IntNullableFilter>;
  fileHash?: InputMaybe<StringFilter>;
  fileHashIdx?: InputMaybe<MediaFileFileHashIdxCompoundUniqueInput>;
  fileName?: InputMaybe<StringFilter>;
  filePath?: InputMaybe<StringFilter>;
  fileSize?: InputMaybe<BigIntFilter>;
  folder?: InputMaybe<MediaFolderNullableScalarRelationFilter>;
  folderId?: InputMaybe<StringNullableFilter>;
  height?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  mediaType?: InputMaybe<EnumMediaTypeFilter>;
  metadata?: InputMaybe<JsonNullableFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originName?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringFilter>;
  ownerType?: InputMaybe<EnumTargetFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  store?: InputMaybe<EnumMediaStoreFilter>;
  uploadedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  visibility?: InputMaybe<EnumMediaVisibilityFilter>;
  width?: InputMaybe<IntNullableFilter>;
};

export type MediaFolder = {
  __typename?: 'MediaFolder';
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<MediaFolder>>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  files?: Maybe<Array<MediaFile>>;
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  ownerId?: Maybe<Scalars['String']['output']>;
  ownerType: Target;
  parent?: Maybe<MediaFolder>;
  parentId?: Maybe<Scalars['String']['output']>;
  path: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
  visibility: MediaVisibility;
};

export type MediaFolderAvgAggregate = {
  __typename?: 'MediaFolderAvgAggregate';
  level?: Maybe<Scalars['Float']['output']>;
};

export type MediaFolderCountAggregate = {
  __typename?: 'MediaFolderCountAggregate';
  _all: Scalars['Int']['output'];
  adminId: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  description: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  ownerId: Scalars['Int']['output'];
  ownerType: Scalars['Int']['output'];
  parentId: Scalars['Int']['output'];
  path: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  visibility: Scalars['Int']['output'];
};

export type MediaFolderCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<MediaFolderWhereUniqueInput>>;
};

export type MediaFolderFolderPathIdxCompoundUniqueInput = {
  companyId: Scalars['String']['input'];
  path: Scalars['String']['input'];
};

export type MediaFolderListRelationFilter = {
  every?: InputMaybe<MediaFolderWhereInput>;
  none?: InputMaybe<MediaFolderWhereInput>;
  some?: InputMaybe<MediaFolderWhereInput>;
};

export type MediaFolderMaxAggregate = {
  __typename?: 'MediaFolderMaxAggregate';
  adminId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  ownerType?: Maybe<Target>;
  parentId?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<MediaVisibility>;
};

export type MediaFolderMinAggregate = {
  __typename?: 'MediaFolderMinAggregate';
  adminId?: Maybe<Scalars['String']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  ownerId?: Maybe<Scalars['String']['output']>;
  ownerType?: Maybe<Target>;
  parentId?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<MediaVisibility>;
};

export type MediaFolderNullableScalarRelationFilter = {
  is?: InputMaybe<MediaFolderWhereInput>;
  isNot?: InputMaybe<MediaFolderWhereInput>;
};

export type MediaFolderOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MediaFolderSumAggregate = {
  __typename?: 'MediaFolderSumAggregate';
  level?: Maybe<Scalars['Int']['output']>;
};

export type MediaFolderUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<MediaFolderWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<MediaFolderWhereUniqueInput>>;
};

export type MediaFolderWhereInput = {
  AND?: InputMaybe<Array<MediaFolderWhereInput>>;
  NOT?: InputMaybe<Array<MediaFolderWhereInput>>;
  OR?: InputMaybe<Array<MediaFolderWhereInput>>;
  admin?: InputMaybe<AdminNullableScalarRelationFilter>;
  adminId?: InputMaybe<StringNullableFilter>;
  children?: InputMaybe<MediaFolderListRelationFilter>;
  company?: InputMaybe<CompanyNullableScalarRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  files?: InputMaybe<MediaFileListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  level?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringNullableFilter>;
  ownerType?: InputMaybe<EnumTargetFilter>;
  parent?: InputMaybe<MediaFolderNullableScalarRelationFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
  path?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  visibility?: InputMaybe<EnumMediaVisibilityFilter>;
};

export type MediaFolderWhereUniqueInput = {
  admin?: InputMaybe<AdminNullableScalarRelationFilter>;
  adminId?: InputMaybe<StringNullableFilter>;
  children?: InputMaybe<MediaFolderListRelationFilter>;
  company?: InputMaybe<CompanyNullableScalarRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringNullableFilter>;
  folderPathIdx?: InputMaybe<MediaFolderFolderPathIdxCompoundUniqueInput>;
  id?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<StringNullableFilter>;
  ownerType?: InputMaybe<EnumTargetFilter>;
  parent?: InputMaybe<MediaFolderNullableScalarRelationFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
  path?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
  visibility?: InputMaybe<EnumMediaVisibilityFilter>;
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

export type Mutation = {
  __typename?: 'Mutation';
  createOneAdmin: Admin;
  createOneAdminCompany: AdminCompany;
  createOneAdminRole: AdminRole;
  createOneCompany: Company;
  createOneCompanyRole: CompanyRole;
  createOneCompanyUser: CompanyUser;
  createOneUser: User;
  deleteAdminCompany: Scalars['Boolean']['output'];
  login: Login;
  switchAuthCompany: Login;
  updateOneAdmin: Admin;
  updateOneAdminCompany: AdminCompany;
  updateOneAdminRole: AdminRole;
  updateOneCompany: Company;
  updateOneCompanyRole: CompanyRole;
  updateOneCompanyUser: CompanyUser;
  updateOneUser: User;
  updateSelfAdmin: Admin;
  updateSelfCompany: Company;
  updateSelfUser: User;
};


export type MutationCreateOneAdminArgs = {
  data: AdminCreateInput;
};


export type MutationCreateOneAdminCompanyArgs = {
  data: AdminCompanyCreateInput;
};


export type MutationCreateOneAdminRoleArgs = {
  data: AdminRoleCreateInput;
};


export type MutationCreateOneCompanyArgs = {
  data: CompanyCreateInput;
};


export type MutationCreateOneCompanyRoleArgs = {
  data: CompanyRoleCreateInput;
};


export type MutationCreateOneCompanyUserArgs = {
  data: CompanyUserCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteAdminCompanyArgs = {
  adminId: Scalars['String']['input'];
  companyId: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationSwitchAuthCompanyArgs = {
  companyId: Scalars['String']['input'];
};


export type MutationUpdateOneAdminArgs = {
  data: AdminUpdateInput;
  where: AdminWhereUniqueInput;
};


export type MutationUpdateOneAdminCompanyArgs = {
  data: AdminCompanyUpdateInput;
  where: AdminCompanyWhereUniqueInput;
};


export type MutationUpdateOneAdminRoleArgs = {
  data: AdminRoleUpdateInput;
  where: AdminRoleWhereUniqueInput;
};


export type MutationUpdateOneCompanyArgs = {
  data: CompanyUpdateInput;
  where: CompanyWhereUniqueInput;
};


export type MutationUpdateOneCompanyRoleArgs = {
  data: CompanyRoleUpdateInput;
  where: CompanyRoleWhereUniqueInput;
};


export type MutationUpdateOneCompanyUserArgs = {
  data: CompanyUserUpdateInput;
  where: CompanyUserWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateSelfAdminArgs = {
  data: AdminUpdateInput;
};


export type MutationUpdateSelfCompanyArgs = {
  data: CompanyUpdateInput;
};


export type MutationUpdateSelfUserArgs = {
  data: UserUpdateInput;
};

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumMediaStoreFilter = {
  equals?: InputMaybe<MediaStore>;
  in?: InputMaybe<Array<MediaStore>>;
  not?: InputMaybe<NestedEnumMediaStoreFilter>;
  notIn?: InputMaybe<Array<MediaStore>>;
};

export type NestedEnumMediaTypeFilter = {
  equals?: InputMaybe<MediaType>;
  in?: InputMaybe<Array<MediaType>>;
  not?: InputMaybe<NestedEnumMediaTypeFilter>;
  notIn?: InputMaybe<Array<MediaType>>;
};

export type NestedEnumMediaVisibilityFilter = {
  equals?: InputMaybe<MediaVisibility>;
  in?: InputMaybe<Array<MediaVisibility>>;
  not?: InputMaybe<NestedEnumMediaVisibilityFilter>;
  notIn?: InputMaybe<Array<MediaVisibility>>;
};

export type NestedEnumRequestMethodNullableFilter = {
  equals?: InputMaybe<RequestMethod>;
  in?: InputMaybe<Array<RequestMethod>>;
  not?: InputMaybe<NestedEnumRequestMethodNullableFilter>;
  notIn?: InputMaybe<Array<RequestMethod>>;
};

export type NestedEnumStatusFilter = {
  equals?: InputMaybe<Status>;
  in?: InputMaybe<Array<Status>>;
  not?: InputMaybe<NestedEnumStatusFilter>;
  notIn?: InputMaybe<Array<Status>>;
};

export type NestedEnumTargetFilter = {
  equals?: InputMaybe<Target>;
  in?: InputMaybe<Array<Target>>;
  not?: InputMaybe<NestedEnumTargetFilter>;
  notIn?: InputMaybe<Array<Target>>;
};

export type NestedEnumTargetNullableFilter = {
  equals?: InputMaybe<Target>;
  in?: InputMaybe<Array<Target>>;
  not?: InputMaybe<NestedEnumTargetNullableFilter>;
  notIn?: InputMaybe<Array<Target>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type PaginatedAdmin = {
  __typename?: 'PaginatedAdmin';
  items?: Maybe<Array<Admin>>;
  pagination?: Maybe<Pagination>;
};

export type PaginatedAdminCompany = {
  __typename?: 'PaginatedAdminCompany';
  items?: Maybe<Array<AdminCompany>>;
  pagination?: Maybe<Pagination>;
};

export type PaginatedAdminRole = {
  __typename?: 'PaginatedAdminRole';
  items?: Maybe<Array<AdminRole>>;
  pagination?: Maybe<Pagination>;
};

export type PaginatedCompany = {
  __typename?: 'PaginatedCompany';
  items?: Maybe<Array<Company>>;
  pagination?: Maybe<Pagination>;
};

export type PaginatedCompanyRole = {
  __typename?: 'PaginatedCompanyRole';
  items?: Maybe<Array<CompanyRole>>;
  pagination?: Maybe<Pagination>;
};

export type PaginatedCompanyUser = {
  __typename?: 'PaginatedCompanyUser';
  items?: Maybe<Array<CompanyUser>>;
  pagination?: Maybe<Pagination>;
};

export type PaginatedUser = {
  __typename?: 'PaginatedUser';
  items?: Maybe<Array<User>>;
  pagination?: Maybe<Pagination>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  take: Scalars['Int']['output'];
  totalCount: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  authInfo: Auth;
  findAdminByEmail: Admin;
  findAdminById: Admin;
  findOneAdmin: Admin;
  findOneAdminCompany: AdminCompany;
  findOneAdminRole: AdminRole;
  findOneCompany: Company;
  findOneCompanyRole: CompanyRole;
  findOneCompanyUser: CompanyUser;
  findOneUser: User;
  findSelfAdmin: Admin;
  findSelfCompany: Company;
  findSelfUser: User;
  helloWorld: Scalars['String']['output'];
  listAuthCompanies?: Maybe<Array<Company>>;
  logout: Scalars['Boolean']['output'];
  paginateAdminCompanies: PaginatedAdminCompany;
  paginateAdminRoles: PaginatedAdminRole;
  paginateAdmins: PaginatedAdmin;
  paginateCompanies: PaginatedCompany;
  paginateCompanyRoles: PaginatedCompanyRole;
  paginateCompanyUsers: PaginatedCompanyUser;
  paginateUsers: PaginatedUser;
  refresh: Login;
  translations: Scalars['JSONObject']['output'];
};


export type QueryFindAdminByEmailArgs = {
  email: Scalars['String']['input'];
};


export type QueryFindAdminByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindOneAdminArgs = {
  where: AdminWhereUniqueInput;
};


export type QueryFindOneAdminCompanyArgs = {
  where: AdminCompanyWhereUniqueInput;
};


export type QueryFindOneAdminRoleArgs = {
  where: AdminRoleWhereUniqueInput;
};


export type QueryFindOneCompanyArgs = {
  where: CompanyWhereUniqueInput;
};


export type QueryFindOneCompanyRoleArgs = {
  where: CompanyRoleWhereUniqueInput;
};


export type QueryFindOneCompanyUserArgs = {
  where: CompanyUserWhereUniqueInput;
};


export type QueryFindOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryListAuthCompaniesArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};


export type QueryPaginateAdminCompaniesArgs = {
  cursor?: InputMaybe<AdminCompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminCompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminCompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminCompanyWhereInput>;
};


export type QueryPaginateAdminRolesArgs = {
  cursor?: InputMaybe<AdminRoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminRoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminRoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminRoleWhereInput>;
};


export type QueryPaginateAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>;
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminWhereInput>;
};


export type QueryPaginateCompaniesArgs = {
  cursor?: InputMaybe<CompanyWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
};


export type QueryPaginateCompanyRolesArgs = {
  cursor?: InputMaybe<CompanyRoleWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyRoleScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyRoleOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyRoleWhereInput>;
};


export type QueryPaginateCompanyUsersArgs = {
  cursor?: InputMaybe<CompanyUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<CompanyUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CompanyUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyUserWhereInput>;
};


export type QueryPaginateUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryTranslationsArgs = {
  scope: Scalars['String']['input'];
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RequestLog = {
  __typename?: 'RequestLog';
  action?: Maybe<Scalars['String']['output']>;
  admin?: Maybe<Admin>;
  adminId?: Maybe<Scalars['String']['output']>;
  afterAt?: Maybe<Scalars['DateTime']['output']>;
  beforeAt: Scalars['DateTime']['output'];
  body?: Maybe<Scalars['JSON']['output']>;
  company?: Maybe<Company>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  device?: Maybe<Scalars['JSON']['output']>;
  duration: Scalars['String']['output'];
  fingerprint?: Maybe<Scalars['String']['output']>;
  headers?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['JSON']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  method?: Maybe<RequestMethod>;
  params?: Maybe<Scalars['JSON']['output']>;
  query?: Maybe<Scalars['JSON']['output']>;
  recordAt: Scalars['DateTime']['output'];
  route?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Target>;
  updatedAt: Scalars['DateTime']['output'];
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RequestLogAvgAggregate = {
  __typename?: 'RequestLogAvgAggregate';
  duration?: Maybe<Scalars['Float']['output']>;
};

export type RequestLogCountAggregate = {
  __typename?: 'RequestLogCountAggregate';
  _all: Scalars['Int']['output'];
  action: Scalars['Int']['output'];
  adminId: Scalars['Int']['output'];
  afterAt: Scalars['Int']['output'];
  beforeAt: Scalars['Int']['output'];
  body: Scalars['Int']['output'];
  companyId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  device: Scalars['Int']['output'];
  duration: Scalars['Int']['output'];
  fingerprint: Scalars['Int']['output'];
  headers: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  ip: Scalars['Int']['output'];
  language: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  message: Scalars['Int']['output'];
  method: Scalars['Int']['output'];
  params: Scalars['Int']['output'];
  query: Scalars['Int']['output'];
  recordAt: Scalars['Int']['output'];
  route: Scalars['Int']['output'];
  subject: Scalars['Int']['output'];
  target: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type RequestLogCreateNestedManyWithoutCompanyInput = {
  connect?: InputMaybe<Array<RequestLogWhereUniqueInput>>;
};

export type RequestLogListRelationFilter = {
  every?: InputMaybe<RequestLogWhereInput>;
  none?: InputMaybe<RequestLogWhereInput>;
  some?: InputMaybe<RequestLogWhereInput>;
};

export type RequestLogMaxAggregate = {
  __typename?: 'RequestLogMaxAggregate';
  action?: Maybe<Scalars['String']['output']>;
  adminId?: Maybe<Scalars['String']['output']>;
  afterAt?: Maybe<Scalars['DateTime']['output']>;
  beforeAt?: Maybe<Scalars['DateTime']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  fingerprint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  method?: Maybe<RequestMethod>;
  recordAt?: Maybe<Scalars['DateTime']['output']>;
  route?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Target>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RequestLogMinAggregate = {
  __typename?: 'RequestLogMinAggregate';
  action?: Maybe<Scalars['String']['output']>;
  adminId?: Maybe<Scalars['String']['output']>;
  afterAt?: Maybe<Scalars['DateTime']['output']>;
  beforeAt?: Maybe<Scalars['DateTime']['output']>;
  companyId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  duration?: Maybe<Scalars['String']['output']>;
  fingerprint?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  ip?: Maybe<Scalars['String']['output']>;
  language?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  method?: Maybe<RequestMethod>;
  recordAt?: Maybe<Scalars['DateTime']['output']>;
  route?: Maybe<Scalars['String']['output']>;
  subject?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Target>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RequestLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RequestLogSumAggregate = {
  __typename?: 'RequestLogSumAggregate';
  duration?: Maybe<Scalars['String']['output']>;
};

export type RequestLogUpdateManyWithoutCompanyNestedInput = {
  connect?: InputMaybe<Array<RequestLogWhereUniqueInput>>;
  disconnect?: InputMaybe<Array<RequestLogWhereUniqueInput>>;
};

export type RequestLogWhereInput = {
  AND?: InputMaybe<Array<RequestLogWhereInput>>;
  NOT?: InputMaybe<Array<RequestLogWhereInput>>;
  OR?: InputMaybe<Array<RequestLogWhereInput>>;
  action?: InputMaybe<StringNullableFilter>;
  admin?: InputMaybe<AdminNullableScalarRelationFilter>;
  adminId?: InputMaybe<StringNullableFilter>;
  afterAt?: InputMaybe<DateTimeNullableFilter>;
  beforeAt?: InputMaybe<DateTimeFilter>;
  body?: InputMaybe<JsonNullableFilter>;
  company?: InputMaybe<CompanyNullableScalarRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  device?: InputMaybe<JsonNullableFilter>;
  duration?: InputMaybe<BigIntFilter>;
  fingerprint?: InputMaybe<StringNullableFilter>;
  headers?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  ip?: InputMaybe<StringNullableFilter>;
  language?: InputMaybe<StringNullableFilter>;
  location?: InputMaybe<JsonNullableFilter>;
  message?: InputMaybe<StringNullableFilter>;
  method?: InputMaybe<EnumRequestMethodNullableFilter>;
  params?: InputMaybe<JsonNullableFilter>;
  query?: InputMaybe<JsonNullableFilter>;
  recordAt?: InputMaybe<DateTimeFilter>;
  route?: InputMaybe<StringNullableFilter>;
  subject?: InputMaybe<StringNullableFilter>;
  target?: InputMaybe<EnumTargetNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type RequestLogWhereUniqueInput = {
  action?: InputMaybe<StringNullableFilter>;
  admin?: InputMaybe<AdminNullableScalarRelationFilter>;
  adminId?: InputMaybe<StringNullableFilter>;
  afterAt?: InputMaybe<DateTimeNullableFilter>;
  beforeAt?: InputMaybe<DateTimeFilter>;
  body?: InputMaybe<JsonNullableFilter>;
  company?: InputMaybe<CompanyNullableScalarRelationFilter>;
  companyId?: InputMaybe<StringNullableFilter>;
  device?: InputMaybe<JsonNullableFilter>;
  duration?: InputMaybe<BigIntFilter>;
  fingerprint?: InputMaybe<StringNullableFilter>;
  headers?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  ip?: InputMaybe<StringNullableFilter>;
  language?: InputMaybe<StringNullableFilter>;
  location?: InputMaybe<JsonNullableFilter>;
  message?: InputMaybe<StringNullableFilter>;
  method?: InputMaybe<EnumRequestMethodNullableFilter>;
  params?: InputMaybe<JsonNullableFilter>;
  query?: InputMaybe<JsonNullableFilter>;
  recordAt?: InputMaybe<DateTimeFilter>;
  route?: InputMaybe<StringNullableFilter>;
  subject?: InputMaybe<StringNullableFilter>;
  target?: InputMaybe<EnumTargetNullableFilter>;
  user?: InputMaybe<UserNullableScalarRelationFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export enum RequestMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Graphql = 'GRAPHQL',
  Head = 'HEAD',
  Options = 'OPTIONS',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export enum Status {
  Disabled = 'Disabled',
  Enabled = 'Enabled'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  healthCheck: Scalars['String']['output'];
};

export enum Target {
  Admin = 'Admin',
  User = 'User'
}

export type User = {
  __typename?: 'User';
  auths?: Maybe<Array<Auth>>;
  companies?: Maybe<Array<CompanyUser>>;
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  logs?: Maybe<Array<RequestLog>>;
  mediaFiles?: Maybe<Array<MediaFile>>;
  mediaFolders?: Maybe<Array<MediaFolder>>;
  name: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  status: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type UserCreateInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  status?: InputMaybe<Status>;
};

export type UserCreateNestedOneWithoutCompaniesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Status>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UserNullableScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrderByWithRelationInput = {
  auths?: InputMaybe<AuthOrderByRelationAggregateInput>;
  companies?: InputMaybe<CompanyUserOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  logs?: InputMaybe<RequestLogOrderByRelationAggregateInput>;
  mediaFiles?: InputMaybe<MediaFileOrderByRelationAggregateInput>;
  mediaFolders?: InputMaybe<MediaFolderOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export type UserScalarRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Status>;
};

export type UserUpdateOneRequiredWithoutCompaniesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  auths?: InputMaybe<AuthListRelationFilter>;
  companies?: InputMaybe<CompanyUserListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  logs?: InputMaybe<RequestLogListRelationFilter>;
  mediaFiles?: InputMaybe<MediaFileListRelationFilter>;
  mediaFolders?: InputMaybe<MediaFolderListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStatusFilter>;
};

export type PaginationFragment = { __typename?: 'Pagination', take: number, skip: number, page: number, totalPages: number, totalCount: number } & { ' $fragmentName'?: 'PaginationFragment' };

export type AdminFragment = { __typename?: 'Admin', id: string, createdAt: any, updatedAt: any, status: Status, name: string, email: string, roleId: string } & { ' $fragmentName'?: 'AdminFragment' };

export type AdminRoleFragment = { __typename?: 'AdminRole', id: string, createdAt: any, updatedAt: any, status: Status, name: string, description?: string | null, code: string, permissions?: Array<string> | null } & { ' $fragmentName'?: 'AdminRoleFragment' };

export type CompanyFragment = { __typename?: 'Company', id: string, createdAt: any, updatedAt: any, status: Status, name: string, alias?: string | null, code?: string | null, description?: string | null } & { ' $fragmentName'?: 'CompanyFragment' };

export type CompanyRoleFragment = { __typename?: 'CompanyRole', id: string, createdAt: any, updatedAt: any, status: Status, name: string, description?: string | null, code: string, permissions?: Array<string> | null, companyId?: string | null } & { ' $fragmentName'?: 'CompanyRoleFragment' };

export type UserFragment = { __typename?: 'User', id: string, createdAt: any, updatedAt: any, status: Status, name: string, email: string } & { ' $fragmentName'?: 'UserFragment' };

export type LoginFragment = { __typename?: 'Login', target: Target, accessType: string, accessToken: string, accessTimeout: number } & { ' $fragmentName'?: 'LoginFragment' };

export type PaginateAdminRolesQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminRoleWhereInput>;
  orderBy?: InputMaybe<Array<AdminRoleOrderByWithRelationInput> | AdminRoleOrderByWithRelationInput>;
}>;


export type PaginateAdminRolesQuery = { __typename?: 'Query', paginateAdminRoles: { __typename?: 'PaginatedAdminRole', items?: Array<(
      { __typename?: 'AdminRole' }
      & { ' $fragmentRefs'?: { 'AdminRoleFragment': AdminRoleFragment } }
    )> | null, pagination?: (
      { __typename?: 'Pagination' }
      & { ' $fragmentRefs'?: { 'PaginationFragment': PaginationFragment } }
    ) | null } };

export type FindOneAdminRoleQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindOneAdminRoleQuery = { __typename?: 'Query', findOneAdminRole: (
    { __typename?: 'AdminRole' }
    & { ' $fragmentRefs'?: { 'AdminRoleFragment': AdminRoleFragment } }
  ) };

export type CreateOneAdminRoleMutationVariables = Exact<{
  data: AdminRoleCreateInput;
}>;


export type CreateOneAdminRoleMutation = { __typename?: 'Mutation', createOneAdminRole: (
    { __typename?: 'AdminRole' }
    & { ' $fragmentRefs'?: { 'AdminRoleFragment': AdminRoleFragment } }
  ) };

export type UpdateOneAdminRoleMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: AdminRoleUpdateInput;
}>;


export type UpdateOneAdminRoleMutation = { __typename?: 'Mutation', updateOneAdminRole: (
    { __typename?: 'AdminRole' }
    & { ' $fragmentRefs'?: { 'AdminRoleFragment': AdminRoleFragment } }
  ) };

export type PaginateAdminsQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AdminWhereInput>;
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput> | AdminOrderByWithRelationInput>;
}>;


export type PaginateAdminsQuery = { __typename?: 'Query', paginateAdmins: { __typename?: 'PaginatedAdmin', items?: Array<(
      { __typename?: 'Admin' }
      & { ' $fragmentRefs'?: { 'AdminFragment': AdminFragment } }
    )> | null, pagination?: (
      { __typename?: 'Pagination' }
      & { ' $fragmentRefs'?: { 'PaginationFragment': PaginationFragment } }
    ) | null } };

export type FindOneAdminQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindOneAdminQuery = { __typename?: 'Query', findOneAdmin: (
    { __typename?: 'Admin' }
    & { ' $fragmentRefs'?: { 'AdminFragment': AdminFragment } }
  ) };

export type CreateOneAdminMutationVariables = Exact<{
  data: AdminCreateInput;
}>;


export type CreateOneAdminMutation = { __typename?: 'Mutation', createOneAdmin: (
    { __typename?: 'Admin' }
    & { ' $fragmentRefs'?: { 'AdminFragment': AdminFragment } }
  ) };

export type UpdateOneAdminMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: AdminUpdateInput;
}>;


export type UpdateOneAdminMutation = { __typename?: 'Mutation', updateOneAdmin: (
    { __typename?: 'Admin' }
    & { ' $fragmentRefs'?: { 'AdminFragment': AdminFragment } }
  ) };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = { __typename?: 'Query', logout: boolean };

export type RefreshQueryVariables = Exact<{ [key: string]: never; }>;


export type RefreshQuery = { __typename?: 'Query', refresh: (
    { __typename?: 'Login' }
    & { ' $fragmentRefs'?: { 'LoginFragment': LoginFragment } }
  ) };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: (
    { __typename?: 'Login' }
    & { ' $fragmentRefs'?: { 'LoginFragment': LoginFragment } }
  ) };

export type SwitchAuthCompanyMutationVariables = Exact<{
  companyId: Scalars['String']['input'];
}>;


export type SwitchAuthCompanyMutation = { __typename?: 'Mutation', switchAuthCompany: (
    { __typename?: 'Login' }
    & { ' $fragmentRefs'?: { 'LoginFragment': LoginFragment } }
  ) };

export type ListAuthCompaniesQueryVariables = Exact<{
  name?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListAuthCompaniesQuery = { __typename?: 'Query', listAuthCompanies?: Array<{ __typename?: 'Company', id: string, createdAt: any, updatedAt: any, status: Status, name: string, alias?: string | null, code?: string | null, description?: string | null }> | null };

export type AuthInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type AuthInfoQuery = { __typename?: 'Query', authInfo: { __typename?: 'Auth', id: string, createdAt: any, updatedAt: any, expiredAt: any, adminId?: string | null, userId?: string | null, companyId?: string | null, device?: any | null, location?: any | null, target: Target } };

export type TranslationsQueryVariables = Exact<{
  scope: Scalars['String']['input'];
}>;


export type TranslationsQuery = { __typename?: 'Query', translations: any };

export type HealthCheckSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type HealthCheckSubscription = { __typename?: 'Subscription', healthCheck: string };

export type PaginateCompanyRolesQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyRoleWhereInput>;
  orderBy?: InputMaybe<Array<CompanyRoleOrderByWithRelationInput> | CompanyRoleOrderByWithRelationInput>;
}>;


export type PaginateCompanyRolesQuery = { __typename?: 'Query', paginateCompanyRoles: { __typename?: 'PaginatedCompanyRole', items?: Array<(
      { __typename?: 'CompanyRole' }
      & { ' $fragmentRefs'?: { 'CompanyRoleFragment': CompanyRoleFragment } }
    )> | null, pagination?: (
      { __typename?: 'Pagination' }
      & { ' $fragmentRefs'?: { 'PaginationFragment': PaginationFragment } }
    ) | null } };

export type PaginateCompaniesQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CompanyWhereInput>;
  orderBy?: InputMaybe<Array<CompanyOrderByWithRelationInput> | CompanyOrderByWithRelationInput>;
}>;


export type PaginateCompaniesQuery = { __typename?: 'Query', paginateCompanies: { __typename?: 'PaginatedCompany', items?: Array<(
      { __typename?: 'Company' }
      & { ' $fragmentRefs'?: { 'CompanyFragment': CompanyFragment } }
    )> | null, pagination?: (
      { __typename?: 'Pagination' }
      & { ' $fragmentRefs'?: { 'PaginationFragment': PaginationFragment } }
    ) | null } };

export type PaginateUsersQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput> | UserOrderByWithRelationInput>;
}>;


export type PaginateUsersQuery = { __typename?: 'Query', paginateUsers: { __typename?: 'PaginatedUser', items?: Array<(
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserFragment': UserFragment } }
    )> | null, pagination?: (
      { __typename?: 'Pagination' }
      & { ' $fragmentRefs'?: { 'PaginationFragment': PaginationFragment } }
    ) | null } };

export const PaginationFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginationFragment, unknown>;
export const AdminFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}}]}}]} as unknown as DocumentNode<AdminFragment, unknown>;
export const AdminRoleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode<AdminRoleFragment, unknown>;
export const CompanyFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Company"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]} as unknown as DocumentNode<CompanyFragment, unknown>;
export const CompanyRoleFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}}]} as unknown as DocumentNode<CompanyRoleFragment, unknown>;
export const UserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]} as unknown as DocumentNode<UserFragment, unknown>;
export const LoginFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Login"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Login"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"accessType"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessTimeout"}}]}}]} as unknown as DocumentNode<LoginFragment, unknown>;
export const PaginateAdminRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginateAdminRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRoleWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRoleOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginateAdminRoles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminRole"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginateAdminRolesQuery, PaginateAdminRolesQueryVariables>;
export const FindOneAdminRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOneAdminRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOneAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminRole"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode<FindOneAdminRoleQuery, FindOneAdminRoleQueryVariables>;
export const CreateOneAdminRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOneAdminRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRoleCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminRole"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode<CreateOneAdminRoleMutation, CreateOneAdminRoleMutationVariables>;
export const UpdateOneAdminRoleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOneAdminRole"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRoleUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneAdminRole"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"AdminRole"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"AdminRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AdminRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}}]}}]} as unknown as DocumentNode<UpdateOneAdminRoleMutation, UpdateOneAdminRoleMutationVariables>;
export const PaginateAdminsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginateAdmins"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginateAdmins"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Admin"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginateAdminsQuery, PaginateAdminsQueryVariables>;
export const FindOneAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindOneAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findOneAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Admin"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}}]}}]} as unknown as DocumentNode<FindOneAdminQuery, FindOneAdminQueryVariables>;
export const CreateOneAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOneAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Admin"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}}]}}]} as unknown as DocumentNode<CreateOneAdminMutation, CreateOneAdminMutationVariables>;
export const UpdateOneAdminDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOneAdmin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AdminUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneAdmin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Admin"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Admin"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Admin"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"roleId"}}]}}]} as unknown as DocumentNode<UpdateOneAdminMutation, UpdateOneAdminMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"}}]}}]} as unknown as DocumentNode<LogoutQuery, LogoutQueryVariables>;
export const RefreshDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refresh"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Login"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Login"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Login"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"accessType"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessTimeout"}}]}}]} as unknown as DocumentNode<RefreshQuery, RefreshQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Login"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Login"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Login"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"accessType"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessTimeout"}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const SwitchAuthCompanyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SwitchAuthCompany"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"switchAuthCompany"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"companyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"companyId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Login"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Login"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Login"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"target"}},{"kind":"Field","name":{"kind":"Name","value":"accessType"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessTimeout"}}]}}]} as unknown as DocumentNode<SwitchAuthCompanyMutation, SwitchAuthCompanyMutationVariables>;
export const ListAuthCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ListAuthCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"listAuthCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<ListAuthCompaniesQuery, ListAuthCompaniesQueryVariables>;
export const AuthInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AuthInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"expiredAt"}},{"kind":"Field","name":{"kind":"Name","value":"adminId"}},{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}},{"kind":"Field","name":{"kind":"Name","value":"device"}},{"kind":"Field","name":{"kind":"Name","value":"location"}},{"kind":"Field","name":{"kind":"Name","value":"target"}}]}}]}}]} as unknown as DocumentNode<AuthInfoQuery, AuthInfoQueryVariables>;
export const TranslationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Translations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"scope"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"translations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"scope"},"value":{"kind":"Variable","name":{"kind":"Name","value":"scope"}}}]}]}}]} as unknown as DocumentNode<TranslationsQuery, TranslationsQueryVariables>;
export const HealthCheckDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"HealthCheck"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"healthCheck"}}]}}]} as unknown as DocumentNode<HealthCheckSubscription, HealthCheckSubscriptionVariables>;
export const PaginateCompanyRolesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginateCompanyRoles"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRoleWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRoleOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginateCompanyRoles"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CompanyRole"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CompanyRole"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyRole"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"permissions"}},{"kind":"Field","name":{"kind":"Name","value":"companyId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginateCompanyRolesQuery, PaginateCompanyRolesQueryVariables>;
export const PaginateCompaniesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginateCompanies"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CompanyOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginateCompanies"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Company"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Company"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Company"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"alias"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginateCompaniesQuery, PaginateCompaniesQueryVariables>;
export const PaginateUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PaginateUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paginateUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pagination"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"Pagination"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Pagination"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Pagination"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"take"}},{"kind":"Field","name":{"kind":"Name","value":"skip"}},{"kind":"Field","name":{"kind":"Name","value":"page"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]} as unknown as DocumentNode<PaginateUsersQuery, PaginateUsersQueryVariables>;