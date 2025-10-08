import * as z from 'zod';

import {
  AdminCompanyAdminCompanyIdxCompoundUniqueInput,
  AdminCompanyCreateInput,
  AdminCompanyCreateNestedManyWithoutCompanyInput,
  AdminCompanyListRelationFilter,
  AdminCompanyOrderByRelationAggregateInput,
  AdminCompanyOrderByWithRelationInput,
  AdminCompanyScalarFieldEnum,
  AdminCompanyUpdateInput,
  AdminCompanyUpdateManyWithoutCompanyNestedInput,
  AdminCompanyWhereInput,
  AdminCompanyWhereUniqueInput,
  AdminCreateInput,
  AdminCreateNestedManyWithoutRoleInput,
  AdminCreateNestedOneWithoutCompaniesInput,
  AdminListRelationFilter,
  AdminNullableScalarRelationFilter,
  AdminOrderByRelationAggregateInput,
  AdminOrderByWithRelationInput,
  AdminRoleCreateInput,
  AdminRoleCreateNestedOneWithoutAdminsInput,
  AdminRoleOrderByWithRelationInput,
  AdminRoleScalarFieldEnum,
  AdminRoleScalarRelationFilter,
  AdminRoleUpdateInput,
  AdminRoleUpdateOneRequiredWithoutAdminsNestedInput,
  AdminRoleWhereInput,
  AdminRoleWhereUniqueInput,
  AdminScalarFieldEnum,
  AdminScalarRelationFilter,
  AdminUpdateInput,
  AdminUpdateManyWithoutRoleNestedInput,
  AdminUpdateOneRequiredWithoutCompaniesNestedInput,
  AdminWhereInput,
  AdminWhereUniqueInput,
  AuthCreateNestedManyWithoutCompanyInput,
  AuthListRelationFilter,
  AuthOrderByRelationAggregateInput,
  AuthUpdateManyWithoutCompanyNestedInput,
  AuthWhereInput,
  AuthWhereUniqueInput,
  BigIntFilter,
  CompanyCreateInput,
  CompanyCreateNestedOneWithoutAdminsInput,
  CompanyCreateNestedOneWithoutRolesInput,
  CompanyCreateNestedOneWithoutUsersInput,
  CompanyNullableScalarRelationFilter,
  CompanyOrderByWithRelationInput,
  CompanyRoleCompanyRoleIdxCompoundUniqueInput,
  CompanyRoleCreateInput,
  CompanyRoleCreateNestedManyWithoutCompanyInput,
  CompanyRoleCreateNestedOneWithoutUsersInput,
  CompanyRoleListRelationFilter,
  CompanyRoleOrderByRelationAggregateInput,
  CompanyRoleOrderByWithRelationInput,
  CompanyRoleScalarFieldEnum,
  CompanyRoleScalarRelationFilter,
  CompanyRoleUpdateInput,
  CompanyRoleUpdateManyWithoutCompanyNestedInput,
  CompanyRoleUpdateOneRequiredWithoutUsersNestedInput,
  CompanyRoleWhereInput,
  CompanyRoleWhereUniqueInput,
  CompanyScalarFieldEnum,
  CompanyScalarRelationFilter,
  CompanyUpdateInput,
  CompanyUpdateOneRequiredWithoutAdminsNestedInput,
  CompanyUpdateOneRequiredWithoutUsersNestedInput,
  CompanyUpdateOneWithoutRolesNestedInput,
  CompanyUserCompanyUserIdxCompoundUniqueInput,
  CompanyUserCreateInput,
  CompanyUserCreateNestedManyWithoutCompanyInput,
  CompanyUserListRelationFilter,
  CompanyUserOrderByRelationAggregateInput,
  CompanyUserOrderByWithRelationInput,
  CompanyUserScalarFieldEnum,
  CompanyUserUpdateInput,
  CompanyUserUpdateManyWithoutCompanyNestedInput,
  CompanyUserWhereInput,
  CompanyUserWhereUniqueInput,
  CompanyWhereInput,
  CompanyWhereUniqueInput,
  DateTimeFilter,
  DateTimeNullableFilter,
  EnumMediaStoreFilter,
  EnumMediaTypeFilter,
  EnumMediaVisibilityFilter,
  EnumRequestMethodNullableFilter,
  EnumStatusFilter,
  EnumTargetFilter,
  EnumTargetNullableFilter,
  IntFilter,
  IntNullableFilter,
  JsonNullableFilter,
  LoginInput,
  MediaFileCreateNestedManyWithoutCompanyInput,
  MediaFileFileHashIdxCompoundUniqueInput,
  MediaFileListRelationFilter,
  MediaFileOrderByRelationAggregateInput,
  MediaFileUpdateManyWithoutCompanyNestedInput,
  MediaFileWhereInput,
  MediaFileWhereUniqueInput,
  MediaFolderCreateNestedManyWithoutCompanyInput,
  MediaFolderFolderPathIdxCompoundUniqueInput,
  MediaFolderListRelationFilter,
  MediaFolderNullableScalarRelationFilter,
  MediaFolderOrderByRelationAggregateInput,
  MediaFolderUpdateManyWithoutCompanyNestedInput,
  MediaFolderWhereInput,
  MediaFolderWhereUniqueInput,
  MediaStore,
  MediaType,
  MediaVisibility,
  NestedBigIntFilter,
  NestedDateTimeFilter,
  NestedDateTimeNullableFilter,
  NestedEnumMediaStoreFilter,
  NestedEnumMediaTypeFilter,
  NestedEnumMediaVisibilityFilter,
  NestedEnumRequestMethodNullableFilter,
  NestedEnumStatusFilter,
  NestedEnumTargetFilter,
  NestedEnumTargetNullableFilter,
  NestedIntFilter,
  NestedIntNullableFilter,
  NestedStringFilter,
  NestedStringNullableFilter,
  NullsOrder,
  QueryMode,
  RequestLogCreateNestedManyWithoutCompanyInput,
  RequestLogListRelationFilter,
  RequestLogOrderByRelationAggregateInput,
  RequestLogUpdateManyWithoutCompanyNestedInput,
  RequestLogWhereInput,
  RequestLogWhereUniqueInput,
  RequestMethod,
  SortOrder,
  SortOrderInput,
  Status,
  StringFilter,
  StringNullableFilter,
  StringNullableListFilter,
  Target,
  UserCreateInput,
  UserCreateNestedOneWithoutCompaniesInput,
  UserNullableScalarRelationFilter,
  UserOrderByWithRelationInput,
  UserScalarFieldEnum,
  UserScalarRelationFilter,
  UserUpdateInput,
  UserUpdateOneRequiredWithoutCompaniesNestedInput,
  UserWhereInput,
  UserWhereUniqueInput,
} from './graphql';

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny => v !== undefined && v !== null;

export const definedNonNullAnySchema = z.any().refine((v) => isDefinedNonNullAny(v));

export const AdminCompanyScalarFieldEnumSchema = z.enum(AdminCompanyScalarFieldEnum);

export const AdminRoleScalarFieldEnumSchema = z.enum(AdminRoleScalarFieldEnum);

export const AdminScalarFieldEnumSchema = z.enum(AdminScalarFieldEnum);

export const CompanyRoleScalarFieldEnumSchema = z.enum(CompanyRoleScalarFieldEnum);

export const CompanyScalarFieldEnumSchema = z.enum(CompanyScalarFieldEnum);

export const CompanyUserScalarFieldEnumSchema = z.enum(CompanyUserScalarFieldEnum);

export const MediaStoreSchema = z.enum(MediaStore);

export const MediaTypeSchema = z.enum(MediaType);

export const MediaVisibilitySchema = z.enum(MediaVisibility);

export const NullsOrderSchema = z.enum(NullsOrder);

export const QueryModeSchema = z.enum(QueryMode);

export const RequestMethodSchema = z.enum(RequestMethod);

export const SortOrderSchema = z.enum(SortOrder);

export const StatusSchema = z.enum(Status);

export const TargetSchema = z.enum(Target);

export const UserScalarFieldEnumSchema = z.enum(UserScalarFieldEnum);

export function AdminCompanyAdminCompanyIdxCompoundUniqueInputSchema(): z.ZodObject<
  Properties<AdminCompanyAdminCompanyIdxCompoundUniqueInput>
> {
  return z.object({
    adminId: z.string(),
    companyId: z.string(),
  });
}

export function AdminCompanyCreateInputSchema(): z.ZodObject<Properties<AdminCompanyCreateInput>> {
  return z.object({
    admin: z.lazy(() => AdminCreateNestedOneWithoutCompaniesInputSchema()),
    company: z.lazy(() => CompanyCreateNestedOneWithoutAdminsInputSchema()),
    permissions: z.array(z.string()).nullish(),
  });
}

export function AdminCompanyCreateNestedManyWithoutCompanyInputSchema(): z.ZodObject<
  Properties<AdminCompanyCreateNestedManyWithoutCompanyInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => AdminCompanyWhereUniqueInputSchema())).nullish(),
  });
}

export function AdminCompanyListRelationFilterSchema(): z.ZodObject<Properties<AdminCompanyListRelationFilter>> {
  return z.object({
    every: z.lazy(() => AdminCompanyWhereInputSchema().nullish()),
    none: z.lazy(() => AdminCompanyWhereInputSchema().nullish()),
    some: z.lazy(() => AdminCompanyWhereInputSchema().nullish()),
  });
}

export function AdminCompanyOrderByRelationAggregateInputSchema(): z.ZodObject<
  Properties<AdminCompanyOrderByRelationAggregateInput>
> {
  return z.object({
    _count: SortOrderSchema.nullish(),
  });
}

export function AdminCompanyOrderByWithRelationInputSchema(): z.ZodObject<
  Properties<AdminCompanyOrderByWithRelationInput>
> {
  return z.object({
    admin: z.lazy(() => AdminOrderByWithRelationInputSchema().nullish()),
    adminId: SortOrderSchema.nullish(),
    company: z.lazy(() => CompanyOrderByWithRelationInputSchema().nullish()),
    companyId: SortOrderSchema.nullish(),
    createdAt: SortOrderSchema.nullish(),
    permissions: SortOrderSchema.nullish(),
    updatedAt: SortOrderSchema.nullish(),
  });
}

export function AdminCompanyUpdateInputSchema(): z.ZodObject<Properties<AdminCompanyUpdateInput>> {
  return z.object({
    admin: z.lazy(() => AdminUpdateOneRequiredWithoutCompaniesNestedInputSchema().nullish()),
    company: z.lazy(() => CompanyUpdateOneRequiredWithoutAdminsNestedInputSchema().nullish()),
    permissions: z.array(z.string()).nullish(),
  });
}

export function AdminCompanyUpdateManyWithoutCompanyNestedInputSchema(): z.ZodObject<
  Properties<AdminCompanyUpdateManyWithoutCompanyNestedInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => AdminCompanyWhereUniqueInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => AdminCompanyWhereUniqueInputSchema())).nullish(),
  });
}

export function AdminCompanyWhereInputSchema(): z.ZodObject<Properties<AdminCompanyWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => AdminCompanyWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => AdminCompanyWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => AdminCompanyWhereInputSchema())).nullish(),
    admin: z.lazy(() => AdminScalarRelationFilterSchema().nullish()),
    adminId: z.lazy(() => StringFilterSchema().nullish()),
    company: z.lazy(() => CompanyScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringFilterSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    permissions: z.lazy(() => StringNullableListFilterSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
  });
}

export function AdminCompanyWhereUniqueInputSchema(): z.ZodObject<Properties<AdminCompanyWhereUniqueInput>> {
  return z.object({
    admin: z.lazy(() => AdminScalarRelationFilterSchema().nullish()),
    adminCompanyIdx: z.lazy(() => AdminCompanyAdminCompanyIdxCompoundUniqueInputSchema().nullish()),
    adminId: z.lazy(() => StringFilterSchema().nullish()),
    company: z.lazy(() => CompanyScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringFilterSchema().nullish()),
    permissions: z.lazy(() => StringNullableListFilterSchema().nullish()),
  });
}

export function AdminCreateInputSchema(): z.ZodObject<Properties<AdminCreateInput>> {
  return z.object({
    email: z.string(),
    name: z.string(),
    password: z.string(),
    role: z.lazy(() => AdminRoleCreateNestedOneWithoutAdminsInputSchema()),
    status: StatusSchema.nullish(),
  });
}

export function AdminCreateNestedManyWithoutRoleInputSchema(): z.ZodObject<
  Properties<AdminCreateNestedManyWithoutRoleInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => AdminWhereUniqueInputSchema())).nullish(),
  });
}

export function AdminCreateNestedOneWithoutCompaniesInputSchema(): z.ZodObject<
  Properties<AdminCreateNestedOneWithoutCompaniesInput>
> {
  return z.object({
    connect: z.lazy(() => AdminWhereUniqueInputSchema().nullish()),
  });
}

export function AdminListRelationFilterSchema(): z.ZodObject<Properties<AdminListRelationFilter>> {
  return z.object({
    every: z.lazy(() => AdminWhereInputSchema().nullish()),
    none: z.lazy(() => AdminWhereInputSchema().nullish()),
    some: z.lazy(() => AdminWhereInputSchema().nullish()),
  });
}

export function AdminNullableScalarRelationFilterSchema(): z.ZodObject<Properties<AdminNullableScalarRelationFilter>> {
  return z.object({
    is: z.lazy(() => AdminWhereInputSchema().nullish()),
    isNot: z.lazy(() => AdminWhereInputSchema().nullish()),
  });
}

export function AdminOrderByRelationAggregateInputSchema(): z.ZodObject<
  Properties<AdminOrderByRelationAggregateInput>
> {
  return z.object({
    _count: SortOrderSchema.nullish(),
  });
}

export function AdminOrderByWithRelationInputSchema(): z.ZodObject<Properties<AdminOrderByWithRelationInput>> {
  return z.object({
    auths: z.lazy(() => AuthOrderByRelationAggregateInputSchema().nullish()),
    companies: z.lazy(() => AdminCompanyOrderByRelationAggregateInputSchema().nullish()),
    createdAt: SortOrderSchema.nullish(),
    email: SortOrderSchema.nullish(),
    id: SortOrderSchema.nullish(),
    logs: z.lazy(() => RequestLogOrderByRelationAggregateInputSchema().nullish()),
    mediaFiles: z.lazy(() => MediaFileOrderByRelationAggregateInputSchema().nullish()),
    mediaFolders: z.lazy(() => MediaFolderOrderByRelationAggregateInputSchema().nullish()),
    name: SortOrderSchema.nullish(),
    role: z.lazy(() => AdminRoleOrderByWithRelationInputSchema().nullish()),
    roleId: SortOrderSchema.nullish(),
    status: SortOrderSchema.nullish(),
    updatedAt: SortOrderSchema.nullish(),
  });
}

export function AdminRoleCreateInputSchema(): z.ZodObject<Properties<AdminRoleCreateInput>> {
  return z.object({
    admins: z.lazy(() => AdminCreateNestedManyWithoutRoleInputSchema().nullish()),
    code: z.string(),
    description: z.string().nullish(),
    name: z.string(),
    permissions: z.array(z.string()).nullish(),
    status: StatusSchema.nullish(),
  });
}

export function AdminRoleCreateNestedOneWithoutAdminsInputSchema(): z.ZodObject<
  Properties<AdminRoleCreateNestedOneWithoutAdminsInput>
> {
  return z.object({
    connect: z.lazy(() => AdminRoleWhereUniqueInputSchema().nullish()),
  });
}

export function AdminRoleOrderByWithRelationInputSchema(): z.ZodObject<Properties<AdminRoleOrderByWithRelationInput>> {
  return z.object({
    admins: z.lazy(() => AdminOrderByRelationAggregateInputSchema().nullish()),
    code: SortOrderSchema.nullish(),
    createdAt: SortOrderSchema.nullish(),
    description: z.lazy(() => SortOrderInputSchema().nullish()),
    id: SortOrderSchema.nullish(),
    name: SortOrderSchema.nullish(),
    permissions: SortOrderSchema.nullish(),
    status: SortOrderSchema.nullish(),
    updatedAt: SortOrderSchema.nullish(),
  });
}

export function AdminRoleScalarRelationFilterSchema(): z.ZodObject<Properties<AdminRoleScalarRelationFilter>> {
  return z.object({
    is: z.lazy(() => AdminRoleWhereInputSchema().nullish()),
    isNot: z.lazy(() => AdminRoleWhereInputSchema().nullish()),
  });
}

export function AdminRoleUpdateInputSchema(): z.ZodObject<Properties<AdminRoleUpdateInput>> {
  return z.object({
    admins: z.lazy(() => AdminUpdateManyWithoutRoleNestedInputSchema().nullish()),
    code: z.string().nullish(),
    description: z.string().nullish(),
    name: z.string().nullish(),
    permissions: z.array(z.string()).nullish(),
    status: StatusSchema.nullish(),
  });
}

export function AdminRoleUpdateOneRequiredWithoutAdminsNestedInputSchema(): z.ZodObject<
  Properties<AdminRoleUpdateOneRequiredWithoutAdminsNestedInput>
> {
  return z.object({
    connect: z.lazy(() => AdminRoleWhereUniqueInputSchema().nullish()),
  });
}

export function AdminRoleWhereInputSchema(): z.ZodObject<Properties<AdminRoleWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => AdminRoleWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => AdminRoleWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => AdminRoleWhereInputSchema())).nullish(),
    admins: z.lazy(() => AdminListRelationFilterSchema().nullish()),
    code: z.lazy(() => StringFilterSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    description: z.lazy(() => StringNullableFilterSchema().nullish()),
    id: z.lazy(() => StringFilterSchema().nullish()),
    name: z.lazy(() => StringFilterSchema().nullish()),
    permissions: z.lazy(() => StringNullableListFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
  });
}

export function AdminRoleWhereUniqueInputSchema(): z.ZodObject<Properties<AdminRoleWhereUniqueInput>> {
  return z.object({
    admins: z.lazy(() => AdminListRelationFilterSchema().nullish()),
    code: z.string().nullish(),
    description: z.lazy(() => StringNullableFilterSchema().nullish()),
    id: z.string().nullish(),
    name: z.string().nullish(),
    permissions: z.lazy(() => StringNullableListFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
  });
}

export function AdminScalarRelationFilterSchema(): z.ZodObject<Properties<AdminScalarRelationFilter>> {
  return z.object({
    is: z.lazy(() => AdminWhereInputSchema().nullish()),
    isNot: z.lazy(() => AdminWhereInputSchema().nullish()),
  });
}

export function AdminUpdateInputSchema(): z.ZodObject<Properties<AdminUpdateInput>> {
  return z.object({
    email: z.string().nullish(),
    name: z.string().nullish(),
    password: z.string().nullish(),
    role: z.lazy(() => AdminRoleUpdateOneRequiredWithoutAdminsNestedInputSchema().nullish()),
    status: StatusSchema.nullish(),
  });
}

export function AdminUpdateManyWithoutRoleNestedInputSchema(): z.ZodObject<
  Properties<AdminUpdateManyWithoutRoleNestedInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => AdminWhereUniqueInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => AdminWhereUniqueInputSchema())).nullish(),
  });
}

export function AdminUpdateOneRequiredWithoutCompaniesNestedInputSchema(): z.ZodObject<
  Properties<AdminUpdateOneRequiredWithoutCompaniesNestedInput>
> {
  return z.object({
    connect: z.lazy(() => AdminWhereUniqueInputSchema().nullish()),
  });
}

export function AdminWhereInputSchema(): z.ZodObject<Properties<AdminWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => AdminWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => AdminWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => AdminWhereInputSchema())).nullish(),
    auths: z.lazy(() => AuthListRelationFilterSchema().nullish()),
    companies: z.lazy(() => AdminCompanyListRelationFilterSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    email: z.lazy(() => StringFilterSchema().nullish()),
    id: z.lazy(() => StringFilterSchema().nullish()),
    logs: z.lazy(() => RequestLogListRelationFilterSchema().nullish()),
    mediaFiles: z.lazy(() => MediaFileListRelationFilterSchema().nullish()),
    mediaFolders: z.lazy(() => MediaFolderListRelationFilterSchema().nullish()),
    name: z.lazy(() => StringFilterSchema().nullish()),
    role: z.lazy(() => AdminRoleScalarRelationFilterSchema().nullish()),
    roleId: z.lazy(() => StringFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
  });
}

export function AdminWhereUniqueInputSchema(): z.ZodObject<Properties<AdminWhereUniqueInput>> {
  return z.object({
    email: z.string().nullish(),
    id: z.string().nullish(),
    name: z.lazy(() => StringFilterSchema().nullish()),
    role: z.lazy(() => AdminRoleScalarRelationFilterSchema().nullish()),
    roleId: z.lazy(() => StringFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
  });
}

export function AuthCreateNestedManyWithoutCompanyInputSchema(): z.ZodObject<
  Properties<AuthCreateNestedManyWithoutCompanyInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => AuthWhereUniqueInputSchema())).nullish(),
  });
}

export function AuthListRelationFilterSchema(): z.ZodObject<Properties<AuthListRelationFilter>> {
  return z.object({
    every: z.lazy(() => AuthWhereInputSchema().nullish()),
    none: z.lazy(() => AuthWhereInputSchema().nullish()),
    some: z.lazy(() => AuthWhereInputSchema().nullish()),
  });
}

export function AuthOrderByRelationAggregateInputSchema(): z.ZodObject<Properties<AuthOrderByRelationAggregateInput>> {
  return z.object({
    _count: SortOrderSchema.nullish(),
  });
}

export function AuthUpdateManyWithoutCompanyNestedInputSchema(): z.ZodObject<
  Properties<AuthUpdateManyWithoutCompanyNestedInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => AuthWhereUniqueInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => AuthWhereUniqueInputSchema())).nullish(),
  });
}

export function AuthWhereInputSchema(): z.ZodObject<Properties<AuthWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => AuthWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => AuthWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => AuthWhereInputSchema())).nullish(),
    admin: z.lazy(() => AdminNullableScalarRelationFilterSchema().nullish()),
    adminId: z.lazy(() => StringNullableFilterSchema().nullish()),
    company: z.lazy(() => CompanyNullableScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringNullableFilterSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    device: z.lazy(() => JsonNullableFilterSchema().nullish()),
    expiredAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    fingerprint: z.lazy(() => StringNullableFilterSchema().nullish()),
    id: z.lazy(() => StringFilterSchema().nullish()),
    location: z.lazy(() => JsonNullableFilterSchema().nullish()),
    target: z.lazy(() => EnumTargetFilterSchema().nullish()),
    token: z.lazy(() => StringFilterSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    user: z.lazy(() => UserNullableScalarRelationFilterSchema().nullish()),
    userId: z.lazy(() => StringNullableFilterSchema().nullish()),
  });
}

export function AuthWhereUniqueInputSchema(): z.ZodObject<Properties<AuthWhereUniqueInput>> {
  return z.object({
    admin: z.lazy(() => AdminNullableScalarRelationFilterSchema().nullish()),
    adminId: z.lazy(() => StringNullableFilterSchema().nullish()),
    company: z.lazy(() => CompanyNullableScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringNullableFilterSchema().nullish()),
    device: z.lazy(() => JsonNullableFilterSchema().nullish()),
    expiredAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    fingerprint: z.lazy(() => StringNullableFilterSchema().nullish()),
    id: z.string().nullish(),
    location: z.lazy(() => JsonNullableFilterSchema().nullish()),
    target: z.lazy(() => EnumTargetFilterSchema().nullish()),
    token: z.lazy(() => StringFilterSchema().nullish()),
    user: z.lazy(() => UserNullableScalarRelationFilterSchema().nullish()),
    userId: z.lazy(() => StringNullableFilterSchema().nullish()),
  });
}

export function BigIntFilterSchema(): z.ZodObject<Properties<BigIntFilter>> {
  return z.object({
    equals: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    not: z.lazy(() => NestedBigIntFilterSchema().nullish()),
    notIn: z.array(z.string()).nullish(),
  });
}

export function CompanyCreateInputSchema(): z.ZodObject<Properties<CompanyCreateInput>> {
  return z.object({
    admins: z.lazy(() => AdminCompanyCreateNestedManyWithoutCompanyInputSchema().nullish()),
    alias: z.string().nullish(),
    auths: z.lazy(() => AuthCreateNestedManyWithoutCompanyInputSchema().nullish()),
    code: z.string().nullish(),
    description: z.string().nullish(),
    logs: z.lazy(() => RequestLogCreateNestedManyWithoutCompanyInputSchema().nullish()),
    mediaFiles: z.lazy(() => MediaFileCreateNestedManyWithoutCompanyInputSchema().nullish()),
    mediaFolders: z.lazy(() => MediaFolderCreateNestedManyWithoutCompanyInputSchema().nullish()),
    name: z.string(),
    roles: z.lazy(() => CompanyRoleCreateNestedManyWithoutCompanyInputSchema().nullish()),
    status: StatusSchema.nullish(),
    users: z.lazy(() => CompanyUserCreateNestedManyWithoutCompanyInputSchema().nullish()),
  });
}

export function CompanyCreateNestedOneWithoutAdminsInputSchema(): z.ZodObject<
  Properties<CompanyCreateNestedOneWithoutAdminsInput>
> {
  return z.object({
    connect: z.lazy(() => CompanyWhereUniqueInputSchema().nullish()),
  });
}

export function CompanyCreateNestedOneWithoutRolesInputSchema(): z.ZodObject<
  Properties<CompanyCreateNestedOneWithoutRolesInput>
> {
  return z.object({
    connect: z.lazy(() => CompanyWhereUniqueInputSchema().nullish()),
  });
}

export function CompanyCreateNestedOneWithoutUsersInputSchema(): z.ZodObject<
  Properties<CompanyCreateNestedOneWithoutUsersInput>
> {
  return z.object({
    connect: z.lazy(() => CompanyWhereUniqueInputSchema().nullish()),
  });
}

export function CompanyNullableScalarRelationFilterSchema(): z.ZodObject<
  Properties<CompanyNullableScalarRelationFilter>
> {
  return z.object({
    is: z.lazy(() => CompanyWhereInputSchema().nullish()),
    isNot: z.lazy(() => CompanyWhereInputSchema().nullish()),
  });
}

export function CompanyOrderByWithRelationInputSchema(): z.ZodObject<Properties<CompanyOrderByWithRelationInput>> {
  return z.object({
    admins: z.lazy(() => AdminCompanyOrderByRelationAggregateInputSchema().nullish()),
    alias: z.lazy(() => SortOrderInputSchema().nullish()),
    auths: z.lazy(() => AuthOrderByRelationAggregateInputSchema().nullish()),
    code: z.lazy(() => SortOrderInputSchema().nullish()),
    createdAt: SortOrderSchema.nullish(),
    description: z.lazy(() => SortOrderInputSchema().nullish()),
    id: SortOrderSchema.nullish(),
    logs: z.lazy(() => RequestLogOrderByRelationAggregateInputSchema().nullish()),
    mediaFiles: z.lazy(() => MediaFileOrderByRelationAggregateInputSchema().nullish()),
    mediaFolders: z.lazy(() => MediaFolderOrderByRelationAggregateInputSchema().nullish()),
    name: SortOrderSchema.nullish(),
    roles: z.lazy(() => CompanyRoleOrderByRelationAggregateInputSchema().nullish()),
    status: SortOrderSchema.nullish(),
    updatedAt: SortOrderSchema.nullish(),
    users: z.lazy(() => CompanyUserOrderByRelationAggregateInputSchema().nullish()),
  });
}

export function CompanyRoleCompanyRoleIdxCompoundUniqueInputSchema(): z.ZodObject<
  Properties<CompanyRoleCompanyRoleIdxCompoundUniqueInput>
> {
  return z.object({
    code: z.string(),
    companyId: z.string(),
  });
}

export function CompanyRoleCreateInputSchema(): z.ZodObject<Properties<CompanyRoleCreateInput>> {
  return z.object({
    code: z.string(),
    company: z.lazy(() => CompanyCreateNestedOneWithoutRolesInputSchema().nullish()),
    description: z.string().nullish(),
    name: z.string(),
    permissions: z.array(z.string()).nullish(),
    status: StatusSchema.nullish(),
  });
}

export function CompanyRoleCreateNestedManyWithoutCompanyInputSchema(): z.ZodObject<
  Properties<CompanyRoleCreateNestedManyWithoutCompanyInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => CompanyRoleWhereUniqueInputSchema())).nullish(),
  });
}

export function CompanyRoleCreateNestedOneWithoutUsersInputSchema(): z.ZodObject<
  Properties<CompanyRoleCreateNestedOneWithoutUsersInput>
> {
  return z.object({
    connect: z.lazy(() => CompanyRoleWhereUniqueInputSchema().nullish()),
  });
}

export function CompanyRoleListRelationFilterSchema(): z.ZodObject<Properties<CompanyRoleListRelationFilter>> {
  return z.object({
    every: z.lazy(() => CompanyRoleWhereInputSchema().nullish()),
    none: z.lazy(() => CompanyRoleWhereInputSchema().nullish()),
    some: z.lazy(() => CompanyRoleWhereInputSchema().nullish()),
  });
}

export function CompanyRoleOrderByRelationAggregateInputSchema(): z.ZodObject<
  Properties<CompanyRoleOrderByRelationAggregateInput>
> {
  return z.object({
    _count: SortOrderSchema.nullish(),
  });
}

export function CompanyRoleOrderByWithRelationInputSchema(): z.ZodObject<
  Properties<CompanyRoleOrderByWithRelationInput>
> {
  return z.object({
    code: SortOrderSchema.nullish(),
    company: z.lazy(() => CompanyOrderByWithRelationInputSchema().nullish()),
    companyId: z.lazy(() => SortOrderInputSchema().nullish()),
    createdAt: SortOrderSchema.nullish(),
    description: z.lazy(() => SortOrderInputSchema().nullish()),
    id: SortOrderSchema.nullish(),
    name: SortOrderSchema.nullish(),
    permissions: SortOrderSchema.nullish(),
    status: SortOrderSchema.nullish(),
    updatedAt: SortOrderSchema.nullish(),
    users: z.lazy(() => CompanyUserOrderByRelationAggregateInputSchema().nullish()),
  });
}

export function CompanyRoleScalarRelationFilterSchema(): z.ZodObject<Properties<CompanyRoleScalarRelationFilter>> {
  return z.object({
    is: z.lazy(() => CompanyRoleWhereInputSchema().nullish()),
    isNot: z.lazy(() => CompanyRoleWhereInputSchema().nullish()),
  });
}

export function CompanyRoleUpdateInputSchema(): z.ZodObject<Properties<CompanyRoleUpdateInput>> {
  return z.object({
    code: z.string().nullish(),
    company: z.lazy(() => CompanyUpdateOneWithoutRolesNestedInputSchema().nullish()),
    description: z.string().nullish(),
    name: z.string().nullish(),
    permissions: z.array(z.string()).nullish(),
    status: StatusSchema.nullish(),
  });
}

export function CompanyRoleUpdateManyWithoutCompanyNestedInputSchema(): z.ZodObject<
  Properties<CompanyRoleUpdateManyWithoutCompanyNestedInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => CompanyRoleWhereUniqueInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => CompanyRoleWhereUniqueInputSchema())).nullish(),
  });
}

export function CompanyRoleUpdateOneRequiredWithoutUsersNestedInputSchema(): z.ZodObject<
  Properties<CompanyRoleUpdateOneRequiredWithoutUsersNestedInput>
> {
  return z.object({
    connect: z.lazy(() => CompanyRoleWhereUniqueInputSchema().nullish()),
  });
}

export function CompanyRoleWhereInputSchema(): z.ZodObject<Properties<CompanyRoleWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => CompanyRoleWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => CompanyRoleWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => CompanyRoleWhereInputSchema())).nullish(),
    code: z.lazy(() => StringFilterSchema().nullish()),
    company: z.lazy(() => CompanyNullableScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringNullableFilterSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    description: z.lazy(() => StringNullableFilterSchema().nullish()),
    id: z.lazy(() => StringFilterSchema().nullish()),
    name: z.lazy(() => StringFilterSchema().nullish()),
    permissions: z.lazy(() => StringNullableListFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    users: z.lazy(() => CompanyUserListRelationFilterSchema().nullish()),
  });
}

export function CompanyRoleWhereUniqueInputSchema(): z.ZodObject<Properties<CompanyRoleWhereUniqueInput>> {
  return z.object({
    code: z.lazy(() => StringFilterSchema().nullish()),
    company: z.lazy(() => CompanyNullableScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringNullableFilterSchema().nullish()),
    companyRoleIdx: z.lazy(() => CompanyRoleCompanyRoleIdxCompoundUniqueInputSchema().nullish()),
    description: z.lazy(() => StringNullableFilterSchema().nullish()),
    id: z.string().nullish(),
    name: z.lazy(() => StringFilterSchema().nullish()),
    permissions: z.lazy(() => StringNullableListFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    users: z.lazy(() => CompanyUserListRelationFilterSchema().nullish()),
  });
}

export function CompanyScalarRelationFilterSchema(): z.ZodObject<Properties<CompanyScalarRelationFilter>> {
  return z.object({
    is: z.lazy(() => CompanyWhereInputSchema().nullish()),
    isNot: z.lazy(() => CompanyWhereInputSchema().nullish()),
  });
}

export function CompanyUpdateInputSchema(): z.ZodObject<Properties<CompanyUpdateInput>> {
  return z.object({
    admins: z.lazy(() => AdminCompanyUpdateManyWithoutCompanyNestedInputSchema().nullish()),
    alias: z.string().nullish(),
    auths: z.lazy(() => AuthUpdateManyWithoutCompanyNestedInputSchema().nullish()),
    code: z.string().nullish(),
    description: z.string().nullish(),
    logs: z.lazy(() => RequestLogUpdateManyWithoutCompanyNestedInputSchema().nullish()),
    mediaFiles: z.lazy(() => MediaFileUpdateManyWithoutCompanyNestedInputSchema().nullish()),
    mediaFolders: z.lazy(() => MediaFolderUpdateManyWithoutCompanyNestedInputSchema().nullish()),
    name: z.string().nullish(),
    roles: z.lazy(() => CompanyRoleUpdateManyWithoutCompanyNestedInputSchema().nullish()),
    status: StatusSchema.nullish(),
    users: z.lazy(() => CompanyUserUpdateManyWithoutCompanyNestedInputSchema().nullish()),
  });
}

export function CompanyUpdateOneRequiredWithoutAdminsNestedInputSchema(): z.ZodObject<
  Properties<CompanyUpdateOneRequiredWithoutAdminsNestedInput>
> {
  return z.object({
    connect: z.lazy(() => CompanyWhereUniqueInputSchema().nullish()),
  });
}

export function CompanyUpdateOneRequiredWithoutUsersNestedInputSchema(): z.ZodObject<
  Properties<CompanyUpdateOneRequiredWithoutUsersNestedInput>
> {
  return z.object({
    connect: z.lazy(() => CompanyWhereUniqueInputSchema().nullish()),
  });
}

export function CompanyUpdateOneWithoutRolesNestedInputSchema(): z.ZodObject<
  Properties<CompanyUpdateOneWithoutRolesNestedInput>
> {
  return z.object({
    connect: z.lazy(() => CompanyWhereUniqueInputSchema().nullish()),
    disconnect: z.lazy(() => CompanyWhereInputSchema().nullish()),
  });
}

export function CompanyUserCompanyUserIdxCompoundUniqueInputSchema(): z.ZodObject<
  Properties<CompanyUserCompanyUserIdxCompoundUniqueInput>
> {
  return z.object({
    companyId: z.string(),
    userId: z.string(),
  });
}

export function CompanyUserCreateInputSchema(): z.ZodObject<Properties<CompanyUserCreateInput>> {
  return z.object({
    company: z.lazy(() => CompanyCreateNestedOneWithoutUsersInputSchema()),
    role: z.lazy(() => CompanyRoleCreateNestedOneWithoutUsersInputSchema()),
    status: StatusSchema.nullish(),
    user: z.lazy(() => UserCreateNestedOneWithoutCompaniesInputSchema()),
  });
}

export function CompanyUserCreateNestedManyWithoutCompanyInputSchema(): z.ZodObject<
  Properties<CompanyUserCreateNestedManyWithoutCompanyInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => CompanyUserWhereUniqueInputSchema())).nullish(),
  });
}

export function CompanyUserListRelationFilterSchema(): z.ZodObject<Properties<CompanyUserListRelationFilter>> {
  return z.object({
    every: z.lazy(() => CompanyUserWhereInputSchema().nullish()),
    none: z.lazy(() => CompanyUserWhereInputSchema().nullish()),
    some: z.lazy(() => CompanyUserWhereInputSchema().nullish()),
  });
}

export function CompanyUserOrderByRelationAggregateInputSchema(): z.ZodObject<
  Properties<CompanyUserOrderByRelationAggregateInput>
> {
  return z.object({
    _count: SortOrderSchema.nullish(),
  });
}

export function CompanyUserOrderByWithRelationInputSchema(): z.ZodObject<
  Properties<CompanyUserOrderByWithRelationInput>
> {
  return z.object({
    company: z.lazy(() => CompanyOrderByWithRelationInputSchema().nullish()),
    companyId: SortOrderSchema.nullish(),
    createdAt: SortOrderSchema.nullish(),
    role: z.lazy(() => CompanyRoleOrderByWithRelationInputSchema().nullish()),
    roleId: SortOrderSchema.nullish(),
    status: SortOrderSchema.nullish(),
    updatedAt: SortOrderSchema.nullish(),
    user: z.lazy(() => UserOrderByWithRelationInputSchema().nullish()),
    userId: SortOrderSchema.nullish(),
  });
}

export function CompanyUserUpdateInputSchema(): z.ZodObject<Properties<CompanyUserUpdateInput>> {
  return z.object({
    company: z.lazy(() => CompanyUpdateOneRequiredWithoutUsersNestedInputSchema().nullish()),
    role: z.lazy(() => CompanyRoleUpdateOneRequiredWithoutUsersNestedInputSchema().nullish()),
    status: StatusSchema.nullish(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutCompaniesNestedInputSchema().nullish()),
  });
}

export function CompanyUserUpdateManyWithoutCompanyNestedInputSchema(): z.ZodObject<
  Properties<CompanyUserUpdateManyWithoutCompanyNestedInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => CompanyUserWhereUniqueInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => CompanyUserWhereUniqueInputSchema())).nullish(),
  });
}

export function CompanyUserWhereInputSchema(): z.ZodObject<Properties<CompanyUserWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => CompanyUserWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => CompanyUserWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => CompanyUserWhereInputSchema())).nullish(),
    company: z.lazy(() => CompanyScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringFilterSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    role: z.lazy(() => CompanyRoleScalarRelationFilterSchema().nullish()),
    roleId: z.lazy(() => StringFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    user: z.lazy(() => UserScalarRelationFilterSchema().nullish()),
    userId: z.lazy(() => StringFilterSchema().nullish()),
  });
}

export function CompanyUserWhereUniqueInputSchema(): z.ZodObject<Properties<CompanyUserWhereUniqueInput>> {
  return z.object({
    company: z.lazy(() => CompanyScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringFilterSchema().nullish()),
    companyUserIdx: z.lazy(() => CompanyUserCompanyUserIdxCompoundUniqueInputSchema().nullish()),
    role: z.lazy(() => CompanyRoleScalarRelationFilterSchema().nullish()),
    roleId: z.lazy(() => StringFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    user: z.lazy(() => UserScalarRelationFilterSchema().nullish()),
    userId: z.lazy(() => StringFilterSchema().nullish()),
  });
}

export function CompanyWhereInputSchema(): z.ZodObject<Properties<CompanyWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => CompanyWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => CompanyWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => CompanyWhereInputSchema())).nullish(),
    admins: z.lazy(() => AdminCompanyListRelationFilterSchema().nullish()),
    alias: z.lazy(() => StringNullableFilterSchema().nullish()),
    auths: z.lazy(() => AuthListRelationFilterSchema().nullish()),
    code: z.lazy(() => StringNullableFilterSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    description: z.lazy(() => StringNullableFilterSchema().nullish()),
    id: z.lazy(() => StringFilterSchema().nullish()),
    logs: z.lazy(() => RequestLogListRelationFilterSchema().nullish()),
    mediaFiles: z.lazy(() => MediaFileListRelationFilterSchema().nullish()),
    mediaFolders: z.lazy(() => MediaFolderListRelationFilterSchema().nullish()),
    name: z.lazy(() => StringFilterSchema().nullish()),
    roles: z.lazy(() => CompanyRoleListRelationFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    users: z.lazy(() => CompanyUserListRelationFilterSchema().nullish()),
  });
}

export function CompanyWhereUniqueInputSchema(): z.ZodObject<Properties<CompanyWhereUniqueInput>> {
  return z.object({
    admins: z.lazy(() => AdminCompanyListRelationFilterSchema().nullish()),
    alias: z.lazy(() => StringNullableFilterSchema().nullish()),
    auths: z.lazy(() => AuthListRelationFilterSchema().nullish()),
    code: z.string().nullish(),
    description: z.lazy(() => StringNullableFilterSchema().nullish()),
    id: z.string().nullish(),
    logs: z.lazy(() => RequestLogListRelationFilterSchema().nullish()),
    mediaFiles: z.lazy(() => MediaFileListRelationFilterSchema().nullish()),
    mediaFolders: z.lazy(() => MediaFolderListRelationFilterSchema().nullish()),
    name: z.string().nullish(),
    roles: z.lazy(() => CompanyRoleListRelationFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    users: z.lazy(() => CompanyUserListRelationFilterSchema().nullish()),
  });
}

export function DateTimeFilterSchema(): z.ZodObject<Properties<DateTimeFilter>> {
  return z.object({
    equals: z.date().nullish(),
    gt: z.date().nullish(),
    gte: z.date().nullish(),
    in: z.array(z.date()).nullish(),
    lt: z.date().nullish(),
    lte: z.date().nullish(),
    not: z.lazy(() => NestedDateTimeFilterSchema().nullish()),
    notIn: z.array(z.date()).nullish(),
  });
}

export function DateTimeNullableFilterSchema(): z.ZodObject<Properties<DateTimeNullableFilter>> {
  return z.object({
    equals: z.date().nullish(),
    gt: z.date().nullish(),
    gte: z.date().nullish(),
    in: z.array(z.date()).nullish(),
    lt: z.date().nullish(),
    lte: z.date().nullish(),
    not: z.lazy(() => NestedDateTimeNullableFilterSchema().nullish()),
    notIn: z.array(z.date()).nullish(),
  });
}

export function EnumMediaStoreFilterSchema(): z.ZodObject<Properties<EnumMediaStoreFilter>> {
  return z.object({
    equals: MediaStoreSchema.nullish(),
    in: z.array(MediaStoreSchema).nullish(),
    not: z.lazy(() => NestedEnumMediaStoreFilterSchema().nullish()),
    notIn: z.array(MediaStoreSchema).nullish(),
  });
}

export function EnumMediaTypeFilterSchema(): z.ZodObject<Properties<EnumMediaTypeFilter>> {
  return z.object({
    equals: MediaTypeSchema.nullish(),
    in: z.array(MediaTypeSchema).nullish(),
    not: z.lazy(() => NestedEnumMediaTypeFilterSchema().nullish()),
    notIn: z.array(MediaTypeSchema).nullish(),
  });
}

export function EnumMediaVisibilityFilterSchema(): z.ZodObject<Properties<EnumMediaVisibilityFilter>> {
  return z.object({
    equals: MediaVisibilitySchema.nullish(),
    in: z.array(MediaVisibilitySchema).nullish(),
    not: z.lazy(() => NestedEnumMediaVisibilityFilterSchema().nullish()),
    notIn: z.array(MediaVisibilitySchema).nullish(),
  });
}

export function EnumRequestMethodNullableFilterSchema(): z.ZodObject<Properties<EnumRequestMethodNullableFilter>> {
  return z.object({
    equals: RequestMethodSchema.nullish(),
    in: z.array(RequestMethodSchema).nullish(),
    not: z.lazy(() => NestedEnumRequestMethodNullableFilterSchema().nullish()),
    notIn: z.array(RequestMethodSchema).nullish(),
  });
}

export function EnumStatusFilterSchema(): z.ZodObject<Properties<EnumStatusFilter>> {
  return z.object({
    equals: StatusSchema.nullish(),
    in: z.array(StatusSchema).nullish(),
    not: z.lazy(() => NestedEnumStatusFilterSchema().nullish()),
    notIn: z.array(StatusSchema).nullish(),
  });
}

export function EnumTargetFilterSchema(): z.ZodObject<Properties<EnumTargetFilter>> {
  return z.object({
    equals: TargetSchema.nullish(),
    in: z.array(TargetSchema).nullish(),
    not: z.lazy(() => NestedEnumTargetFilterSchema().nullish()),
    notIn: z.array(TargetSchema).nullish(),
  });
}

export function EnumTargetNullableFilterSchema(): z.ZodObject<Properties<EnumTargetNullableFilter>> {
  return z.object({
    equals: TargetSchema.nullish(),
    in: z.array(TargetSchema).nullish(),
    not: z.lazy(() => NestedEnumTargetNullableFilterSchema().nullish()),
    notIn: z.array(TargetSchema).nullish(),
  });
}

export function IntFilterSchema(): z.ZodObject<Properties<IntFilter>> {
  return z.object({
    equals: z.number().nullish(),
    gt: z.number().nullish(),
    gte: z.number().nullish(),
    in: z.array(z.number()).nullish(),
    lt: z.number().nullish(),
    lte: z.number().nullish(),
    not: z.lazy(() => NestedIntFilterSchema().nullish()),
    notIn: z.array(z.number()).nullish(),
  });
}

export function IntNullableFilterSchema(): z.ZodObject<Properties<IntNullableFilter>> {
  return z.object({
    equals: z.number().nullish(),
    gt: z.number().nullish(),
    gte: z.number().nullish(),
    in: z.array(z.number()).nullish(),
    lt: z.number().nullish(),
    lte: z.number().nullish(),
    not: z.lazy(() => NestedIntNullableFilterSchema().nullish()),
    notIn: z.array(z.number()).nullish(),
  });
}

export function JsonNullableFilterSchema(): z.ZodObject<Properties<JsonNullableFilter>> {
  return z.object({
    array_contains: z.object().nullish(),
    array_ends_with: z.object().nullish(),
    array_starts_with: z.object().nullish(),
    equals: z.object().nullish(),
    gt: z.object().nullish(),
    gte: z.object().nullish(),
    lt: z.object().nullish(),
    lte: z.object().nullish(),
    mode: QueryModeSchema.nullish(),
    not: z.object().nullish(),
    path: z.array(z.string()).nullish(),
    string_contains: z.string().nullish(),
    string_ends_with: z.string().nullish(),
    string_starts_with: z.string().nullish(),
  });
}

export function LoginInputSchema(): z.ZodObject<Properties<LoginInput>> {
  return z.object({
    account: z.string(),
    companyId: z.string().nullish(),
    password: z.string(),
    target: TargetSchema.default('User').nullish(),
  });
}

export function MediaFileCreateNestedManyWithoutCompanyInputSchema(): z.ZodObject<
  Properties<MediaFileCreateNestedManyWithoutCompanyInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => MediaFileWhereUniqueInputSchema())).nullish(),
  });
}

export function MediaFileFileHashIdxCompoundUniqueInputSchema(): z.ZodObject<
  Properties<MediaFileFileHashIdxCompoundUniqueInput>
> {
  return z.object({
    companyId: z.string(),
    fileHash: z.string(),
  });
}

export function MediaFileListRelationFilterSchema(): z.ZodObject<Properties<MediaFileListRelationFilter>> {
  return z.object({
    every: z.lazy(() => MediaFileWhereInputSchema().nullish()),
    none: z.lazy(() => MediaFileWhereInputSchema().nullish()),
    some: z.lazy(() => MediaFileWhereInputSchema().nullish()),
  });
}

export function MediaFileOrderByRelationAggregateInputSchema(): z.ZodObject<
  Properties<MediaFileOrderByRelationAggregateInput>
> {
  return z.object({
    _count: SortOrderSchema.nullish(),
  });
}

export function MediaFileUpdateManyWithoutCompanyNestedInputSchema(): z.ZodObject<
  Properties<MediaFileUpdateManyWithoutCompanyNestedInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => MediaFileWhereUniqueInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => MediaFileWhereUniqueInputSchema())).nullish(),
  });
}

export function MediaFileWhereInputSchema(): z.ZodObject<Properties<MediaFileWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => MediaFileWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => MediaFileWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => MediaFileWhereInputSchema())).nullish(),
    admin: z.lazy(() => AdminNullableScalarRelationFilterSchema().nullish()),
    adminId: z.lazy(() => StringNullableFilterSchema().nullish()),
    company: z.lazy(() => CompanyNullableScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringNullableFilterSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    description: z.lazy(() => StringNullableFilterSchema().nullish()),
    duration: z.lazy(() => IntNullableFilterSchema().nullish()),
    fileHash: z.lazy(() => StringFilterSchema().nullish()),
    fileName: z.lazy(() => StringFilterSchema().nullish()),
    filePath: z.lazy(() => StringFilterSchema().nullish()),
    fileSize: z.lazy(() => BigIntFilterSchema().nullish()),
    folder: z.lazy(() => MediaFolderNullableScalarRelationFilterSchema().nullish()),
    folderId: z.lazy(() => StringNullableFilterSchema().nullish()),
    height: z.lazy(() => IntNullableFilterSchema().nullish()),
    id: z.lazy(() => StringFilterSchema().nullish()),
    mediaType: z.lazy(() => EnumMediaTypeFilterSchema().nullish()),
    metadata: z.lazy(() => JsonNullableFilterSchema().nullish()),
    mimeType: z.lazy(() => StringFilterSchema().nullish()),
    originName: z.lazy(() => StringFilterSchema().nullish()),
    ownerId: z.lazy(() => StringFilterSchema().nullish()),
    ownerType: z.lazy(() => EnumTargetFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    store: z.lazy(() => EnumMediaStoreFilterSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    uploadedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    user: z.lazy(() => UserNullableScalarRelationFilterSchema().nullish()),
    userId: z.lazy(() => StringNullableFilterSchema().nullish()),
    visibility: z.lazy(() => EnumMediaVisibilityFilterSchema().nullish()),
    width: z.lazy(() => IntNullableFilterSchema().nullish()),
  });
}

export function MediaFileWhereUniqueInputSchema(): z.ZodObject<Properties<MediaFileWhereUniqueInput>> {
  return z.object({
    admin: z.lazy(() => AdminNullableScalarRelationFilterSchema().nullish()),
    adminId: z.lazy(() => StringNullableFilterSchema().nullish()),
    company: z.lazy(() => CompanyNullableScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringNullableFilterSchema().nullish()),
    description: z.lazy(() => StringNullableFilterSchema().nullish()),
    duration: z.lazy(() => IntNullableFilterSchema().nullish()),
    fileHash: z.lazy(() => StringFilterSchema().nullish()),
    fileHashIdx: z.lazy(() => MediaFileFileHashIdxCompoundUniqueInputSchema().nullish()),
    fileName: z.lazy(() => StringFilterSchema().nullish()),
    filePath: z.lazy(() => StringFilterSchema().nullish()),
    fileSize: z.lazy(() => BigIntFilterSchema().nullish()),
    folder: z.lazy(() => MediaFolderNullableScalarRelationFilterSchema().nullish()),
    folderId: z.lazy(() => StringNullableFilterSchema().nullish()),
    height: z.lazy(() => IntNullableFilterSchema().nullish()),
    id: z.string().nullish(),
    mediaType: z.lazy(() => EnumMediaTypeFilterSchema().nullish()),
    metadata: z.lazy(() => JsonNullableFilterSchema().nullish()),
    mimeType: z.lazy(() => StringFilterSchema().nullish()),
    originName: z.lazy(() => StringFilterSchema().nullish()),
    ownerId: z.lazy(() => StringFilterSchema().nullish()),
    ownerType: z.lazy(() => EnumTargetFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    store: z.lazy(() => EnumMediaStoreFilterSchema().nullish()),
    uploadedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    user: z.lazy(() => UserNullableScalarRelationFilterSchema().nullish()),
    userId: z.lazy(() => StringNullableFilterSchema().nullish()),
    visibility: z.lazy(() => EnumMediaVisibilityFilterSchema().nullish()),
    width: z.lazy(() => IntNullableFilterSchema().nullish()),
  });
}

export function MediaFolderCreateNestedManyWithoutCompanyInputSchema(): z.ZodObject<
  Properties<MediaFolderCreateNestedManyWithoutCompanyInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => MediaFolderWhereUniqueInputSchema())).nullish(),
  });
}

export function MediaFolderFolderPathIdxCompoundUniqueInputSchema(): z.ZodObject<
  Properties<MediaFolderFolderPathIdxCompoundUniqueInput>
> {
  return z.object({
    companyId: z.string(),
    path: z.string(),
  });
}

export function MediaFolderListRelationFilterSchema(): z.ZodObject<Properties<MediaFolderListRelationFilter>> {
  return z.object({
    every: z.lazy(() => MediaFolderWhereInputSchema().nullish()),
    none: z.lazy(() => MediaFolderWhereInputSchema().nullish()),
    some: z.lazy(() => MediaFolderWhereInputSchema().nullish()),
  });
}

export function MediaFolderNullableScalarRelationFilterSchema(): z.ZodObject<
  Properties<MediaFolderNullableScalarRelationFilter>
> {
  return z.object({
    is: z.lazy(() => MediaFolderWhereInputSchema().nullish()),
    isNot: z.lazy(() => MediaFolderWhereInputSchema().nullish()),
  });
}

export function MediaFolderOrderByRelationAggregateInputSchema(): z.ZodObject<
  Properties<MediaFolderOrderByRelationAggregateInput>
> {
  return z.object({
    _count: SortOrderSchema.nullish(),
  });
}

export function MediaFolderUpdateManyWithoutCompanyNestedInputSchema(): z.ZodObject<
  Properties<MediaFolderUpdateManyWithoutCompanyNestedInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => MediaFolderWhereUniqueInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => MediaFolderWhereUniqueInputSchema())).nullish(),
  });
}

export function MediaFolderWhereInputSchema(): z.ZodObject<Properties<MediaFolderWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => MediaFolderWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => MediaFolderWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => MediaFolderWhereInputSchema())).nullish(),
    admin: z.lazy(() => AdminNullableScalarRelationFilterSchema().nullish()),
    adminId: z.lazy(() => StringNullableFilterSchema().nullish()),
    children: z.lazy(() => MediaFolderListRelationFilterSchema().nullish()),
    company: z.lazy(() => CompanyNullableScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringNullableFilterSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    description: z.lazy(() => StringNullableFilterSchema().nullish()),
    files: z.lazy(() => MediaFileListRelationFilterSchema().nullish()),
    id: z.lazy(() => StringFilterSchema().nullish()),
    level: z.lazy(() => IntFilterSchema().nullish()),
    name: z.lazy(() => StringFilterSchema().nullish()),
    ownerId: z.lazy(() => StringNullableFilterSchema().nullish()),
    ownerType: z.lazy(() => EnumTargetFilterSchema().nullish()),
    parent: z.lazy(() => MediaFolderNullableScalarRelationFilterSchema().nullish()),
    parentId: z.lazy(() => StringNullableFilterSchema().nullish()),
    path: z.lazy(() => StringFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    user: z.lazy(() => UserNullableScalarRelationFilterSchema().nullish()),
    userId: z.lazy(() => StringNullableFilterSchema().nullish()),
    visibility: z.lazy(() => EnumMediaVisibilityFilterSchema().nullish()),
  });
}

export function MediaFolderWhereUniqueInputSchema(): z.ZodObject<Properties<MediaFolderWhereUniqueInput>> {
  return z.object({
    admin: z.lazy(() => AdminNullableScalarRelationFilterSchema().nullish()),
    adminId: z.lazy(() => StringNullableFilterSchema().nullish()),
    children: z.lazy(() => MediaFolderListRelationFilterSchema().nullish()),
    company: z.lazy(() => CompanyNullableScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringNullableFilterSchema().nullish()),
    description: z.lazy(() => StringNullableFilterSchema().nullish()),
    folderPathIdx: z.lazy(() => MediaFolderFolderPathIdxCompoundUniqueInputSchema().nullish()),
    id: z.string().nullish(),
    level: z.lazy(() => IntFilterSchema().nullish()),
    name: z.lazy(() => StringFilterSchema().nullish()),
    ownerId: z.lazy(() => StringNullableFilterSchema().nullish()),
    ownerType: z.lazy(() => EnumTargetFilterSchema().nullish()),
    parent: z.lazy(() => MediaFolderNullableScalarRelationFilterSchema().nullish()),
    parentId: z.lazy(() => StringNullableFilterSchema().nullish()),
    path: z.lazy(() => StringFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    user: z.lazy(() => UserNullableScalarRelationFilterSchema().nullish()),
    userId: z.lazy(() => StringNullableFilterSchema().nullish()),
    visibility: z.lazy(() => EnumMediaVisibilityFilterSchema().nullish()),
  });
}

export function NestedBigIntFilterSchema(): z.ZodObject<Properties<NestedBigIntFilter>> {
  return z.object({
    equals: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    not: z.lazy(() => NestedBigIntFilterSchema().nullish()),
    notIn: z.array(z.string()).nullish(),
  });
}

export function NestedDateTimeFilterSchema(): z.ZodObject<Properties<NestedDateTimeFilter>> {
  return z.object({
    equals: z.date().nullish(),
    gt: z.date().nullish(),
    gte: z.date().nullish(),
    in: z.array(z.date()).nullish(),
    lt: z.date().nullish(),
    lte: z.date().nullish(),
    not: z.lazy(() => NestedDateTimeFilterSchema().nullish()),
    notIn: z.array(z.date()).nullish(),
  });
}

export function NestedDateTimeNullableFilterSchema(): z.ZodObject<Properties<NestedDateTimeNullableFilter>> {
  return z.object({
    equals: z.date().nullish(),
    gt: z.date().nullish(),
    gte: z.date().nullish(),
    in: z.array(z.date()).nullish(),
    lt: z.date().nullish(),
    lte: z.date().nullish(),
    not: z.lazy(() => NestedDateTimeNullableFilterSchema().nullish()),
    notIn: z.array(z.date()).nullish(),
  });
}

export function NestedEnumMediaStoreFilterSchema(): z.ZodObject<Properties<NestedEnumMediaStoreFilter>> {
  return z.object({
    equals: MediaStoreSchema.nullish(),
    in: z.array(MediaStoreSchema).nullish(),
    not: z.lazy(() => NestedEnumMediaStoreFilterSchema().nullish()),
    notIn: z.array(MediaStoreSchema).nullish(),
  });
}

export function NestedEnumMediaTypeFilterSchema(): z.ZodObject<Properties<NestedEnumMediaTypeFilter>> {
  return z.object({
    equals: MediaTypeSchema.nullish(),
    in: z.array(MediaTypeSchema).nullish(),
    not: z.lazy(() => NestedEnumMediaTypeFilterSchema().nullish()),
    notIn: z.array(MediaTypeSchema).nullish(),
  });
}

export function NestedEnumMediaVisibilityFilterSchema(): z.ZodObject<Properties<NestedEnumMediaVisibilityFilter>> {
  return z.object({
    equals: MediaVisibilitySchema.nullish(),
    in: z.array(MediaVisibilitySchema).nullish(),
    not: z.lazy(() => NestedEnumMediaVisibilityFilterSchema().nullish()),
    notIn: z.array(MediaVisibilitySchema).nullish(),
  });
}

export function NestedEnumRequestMethodNullableFilterSchema(): z.ZodObject<
  Properties<NestedEnumRequestMethodNullableFilter>
> {
  return z.object({
    equals: RequestMethodSchema.nullish(),
    in: z.array(RequestMethodSchema).nullish(),
    not: z.lazy(() => NestedEnumRequestMethodNullableFilterSchema().nullish()),
    notIn: z.array(RequestMethodSchema).nullish(),
  });
}

export function NestedEnumStatusFilterSchema(): z.ZodObject<Properties<NestedEnumStatusFilter>> {
  return z.object({
    equals: StatusSchema.nullish(),
    in: z.array(StatusSchema).nullish(),
    not: z.lazy(() => NestedEnumStatusFilterSchema().nullish()),
    notIn: z.array(StatusSchema).nullish(),
  });
}

export function NestedEnumTargetFilterSchema(): z.ZodObject<Properties<NestedEnumTargetFilter>> {
  return z.object({
    equals: TargetSchema.nullish(),
    in: z.array(TargetSchema).nullish(),
    not: z.lazy(() => NestedEnumTargetFilterSchema().nullish()),
    notIn: z.array(TargetSchema).nullish(),
  });
}

export function NestedEnumTargetNullableFilterSchema(): z.ZodObject<Properties<NestedEnumTargetNullableFilter>> {
  return z.object({
    equals: TargetSchema.nullish(),
    in: z.array(TargetSchema).nullish(),
    not: z.lazy(() => NestedEnumTargetNullableFilterSchema().nullish()),
    notIn: z.array(TargetSchema).nullish(),
  });
}

export function NestedIntFilterSchema(): z.ZodObject<Properties<NestedIntFilter>> {
  return z.object({
    equals: z.number().nullish(),
    gt: z.number().nullish(),
    gte: z.number().nullish(),
    in: z.array(z.number()).nullish(),
    lt: z.number().nullish(),
    lte: z.number().nullish(),
    not: z.lazy(() => NestedIntFilterSchema().nullish()),
    notIn: z.array(z.number()).nullish(),
  });
}

export function NestedIntNullableFilterSchema(): z.ZodObject<Properties<NestedIntNullableFilter>> {
  return z.object({
    equals: z.number().nullish(),
    gt: z.number().nullish(),
    gte: z.number().nullish(),
    in: z.array(z.number()).nullish(),
    lt: z.number().nullish(),
    lte: z.number().nullish(),
    not: z.lazy(() => NestedIntNullableFilterSchema().nullish()),
    notIn: z.array(z.number()).nullish(),
  });
}

export function NestedStringFilterSchema(): z.ZodObject<Properties<NestedStringFilter>> {
  return z.object({
    contains: z.string().nullish(),
    endsWith: z.string().nullish(),
    equals: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    not: z.lazy(() => NestedStringFilterSchema().nullish()),
    notIn: z.array(z.string()).nullish(),
    startsWith: z.string().nullish(),
  });
}

export function NestedStringNullableFilterSchema(): z.ZodObject<Properties<NestedStringNullableFilter>> {
  return z.object({
    contains: z.string().nullish(),
    endsWith: z.string().nullish(),
    equals: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    not: z.lazy(() => NestedStringNullableFilterSchema().nullish()),
    notIn: z.array(z.string()).nullish(),
    startsWith: z.string().nullish(),
  });
}

export function RequestLogCreateNestedManyWithoutCompanyInputSchema(): z.ZodObject<
  Properties<RequestLogCreateNestedManyWithoutCompanyInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => RequestLogWhereUniqueInputSchema())).nullish(),
  });
}

export function RequestLogListRelationFilterSchema(): z.ZodObject<Properties<RequestLogListRelationFilter>> {
  return z.object({
    every: z.lazy(() => RequestLogWhereInputSchema().nullish()),
    none: z.lazy(() => RequestLogWhereInputSchema().nullish()),
    some: z.lazy(() => RequestLogWhereInputSchema().nullish()),
  });
}

export function RequestLogOrderByRelationAggregateInputSchema(): z.ZodObject<
  Properties<RequestLogOrderByRelationAggregateInput>
> {
  return z.object({
    _count: SortOrderSchema.nullish(),
  });
}

export function RequestLogUpdateManyWithoutCompanyNestedInputSchema(): z.ZodObject<
  Properties<RequestLogUpdateManyWithoutCompanyNestedInput>
> {
  return z.object({
    connect: z.array(z.lazy(() => RequestLogWhereUniqueInputSchema())).nullish(),
    disconnect: z.array(z.lazy(() => RequestLogWhereUniqueInputSchema())).nullish(),
  });
}

export function RequestLogWhereInputSchema(): z.ZodObject<Properties<RequestLogWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => RequestLogWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => RequestLogWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => RequestLogWhereInputSchema())).nullish(),
    action: z.lazy(() => StringNullableFilterSchema().nullish()),
    admin: z.lazy(() => AdminNullableScalarRelationFilterSchema().nullish()),
    adminId: z.lazy(() => StringNullableFilterSchema().nullish()),
    afterAt: z.lazy(() => DateTimeNullableFilterSchema().nullish()),
    beforeAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    body: z.lazy(() => JsonNullableFilterSchema().nullish()),
    company: z.lazy(() => CompanyNullableScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringNullableFilterSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    device: z.lazy(() => JsonNullableFilterSchema().nullish()),
    duration: z.lazy(() => BigIntFilterSchema().nullish()),
    fingerprint: z.lazy(() => StringNullableFilterSchema().nullish()),
    headers: z.lazy(() => JsonNullableFilterSchema().nullish()),
    id: z.lazy(() => StringFilterSchema().nullish()),
    ip: z.lazy(() => StringNullableFilterSchema().nullish()),
    language: z.lazy(() => StringNullableFilterSchema().nullish()),
    location: z.lazy(() => JsonNullableFilterSchema().nullish()),
    message: z.lazy(() => StringNullableFilterSchema().nullish()),
    method: z.lazy(() => EnumRequestMethodNullableFilterSchema().nullish()),
    params: z.lazy(() => JsonNullableFilterSchema().nullish()),
    query: z.lazy(() => JsonNullableFilterSchema().nullish()),
    recordAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    route: z.lazy(() => StringNullableFilterSchema().nullish()),
    subject: z.lazy(() => StringNullableFilterSchema().nullish()),
    target: z.lazy(() => EnumTargetNullableFilterSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    user: z.lazy(() => UserNullableScalarRelationFilterSchema().nullish()),
    userId: z.lazy(() => StringNullableFilterSchema().nullish()),
  });
}

export function RequestLogWhereUniqueInputSchema(): z.ZodObject<Properties<RequestLogWhereUniqueInput>> {
  return z.object({
    action: z.lazy(() => StringNullableFilterSchema().nullish()),
    admin: z.lazy(() => AdminNullableScalarRelationFilterSchema().nullish()),
    adminId: z.lazy(() => StringNullableFilterSchema().nullish()),
    afterAt: z.lazy(() => DateTimeNullableFilterSchema().nullish()),
    beforeAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    body: z.lazy(() => JsonNullableFilterSchema().nullish()),
    company: z.lazy(() => CompanyNullableScalarRelationFilterSchema().nullish()),
    companyId: z.lazy(() => StringNullableFilterSchema().nullish()),
    device: z.lazy(() => JsonNullableFilterSchema().nullish()),
    duration: z.lazy(() => BigIntFilterSchema().nullish()),
    fingerprint: z.lazy(() => StringNullableFilterSchema().nullish()),
    headers: z.lazy(() => JsonNullableFilterSchema().nullish()),
    id: z.string().nullish(),
    ip: z.lazy(() => StringNullableFilterSchema().nullish()),
    language: z.lazy(() => StringNullableFilterSchema().nullish()),
    location: z.lazy(() => JsonNullableFilterSchema().nullish()),
    message: z.lazy(() => StringNullableFilterSchema().nullish()),
    method: z.lazy(() => EnumRequestMethodNullableFilterSchema().nullish()),
    params: z.lazy(() => JsonNullableFilterSchema().nullish()),
    query: z.lazy(() => JsonNullableFilterSchema().nullish()),
    recordAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    route: z.lazy(() => StringNullableFilterSchema().nullish()),
    subject: z.lazy(() => StringNullableFilterSchema().nullish()),
    target: z.lazy(() => EnumTargetNullableFilterSchema().nullish()),
    user: z.lazy(() => UserNullableScalarRelationFilterSchema().nullish()),
    userId: z.lazy(() => StringNullableFilterSchema().nullish()),
  });
}

export function SortOrderInputSchema(): z.ZodObject<Properties<SortOrderInput>> {
  return z.object({
    nulls: NullsOrderSchema.nullish(),
    sort: SortOrderSchema,
  });
}

export function StringFilterSchema(): z.ZodObject<Properties<StringFilter>> {
  return z.object({
    contains: z.string().nullish(),
    endsWith: z.string().nullish(),
    equals: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    mode: QueryModeSchema.nullish(),
    not: z.lazy(() => NestedStringFilterSchema().nullish()),
    notIn: z.array(z.string()).nullish(),
    startsWith: z.string().nullish(),
  });
}

export function StringNullableFilterSchema(): z.ZodObject<Properties<StringNullableFilter>> {
  return z.object({
    contains: z.string().nullish(),
    endsWith: z.string().nullish(),
    equals: z.string().nullish(),
    gt: z.string().nullish(),
    gte: z.string().nullish(),
    in: z.array(z.string()).nullish(),
    lt: z.string().nullish(),
    lte: z.string().nullish(),
    mode: QueryModeSchema.nullish(),
    not: z.lazy(() => NestedStringNullableFilterSchema().nullish()),
    notIn: z.array(z.string()).nullish(),
    startsWith: z.string().nullish(),
  });
}

export function StringNullableListFilterSchema(): z.ZodObject<Properties<StringNullableListFilter>> {
  return z.object({
    equals: z.array(z.string()).nullish(),
    has: z.string().nullish(),
    hasEvery: z.array(z.string()).nullish(),
    hasSome: z.array(z.string()).nullish(),
    isEmpty: z.boolean().nullish(),
  });
}

export function UserCreateInputSchema(): z.ZodObject<Properties<UserCreateInput>> {
  return z.object({
    email: z.string(),
    name: z.string(),
    password: z.string(),
    status: StatusSchema.nullish(),
  });
}

export function UserCreateNestedOneWithoutCompaniesInputSchema(): z.ZodObject<
  Properties<UserCreateNestedOneWithoutCompaniesInput>
> {
  return z.object({
    connect: z.lazy(() => UserWhereUniqueInputSchema().nullish()),
  });
}

export function UserNullableScalarRelationFilterSchema(): z.ZodObject<Properties<UserNullableScalarRelationFilter>> {
  return z.object({
    is: z.lazy(() => UserWhereInputSchema().nullish()),
    isNot: z.lazy(() => UserWhereInputSchema().nullish()),
  });
}

export function UserOrderByWithRelationInputSchema(): z.ZodObject<Properties<UserOrderByWithRelationInput>> {
  return z.object({
    auths: z.lazy(() => AuthOrderByRelationAggregateInputSchema().nullish()),
    companies: z.lazy(() => CompanyUserOrderByRelationAggregateInputSchema().nullish()),
    createdAt: SortOrderSchema.nullish(),
    email: SortOrderSchema.nullish(),
    id: SortOrderSchema.nullish(),
    logs: z.lazy(() => RequestLogOrderByRelationAggregateInputSchema().nullish()),
    mediaFiles: z.lazy(() => MediaFileOrderByRelationAggregateInputSchema().nullish()),
    mediaFolders: z.lazy(() => MediaFolderOrderByRelationAggregateInputSchema().nullish()),
    name: SortOrderSchema.nullish(),
    status: SortOrderSchema.nullish(),
    updatedAt: SortOrderSchema.nullish(),
  });
}

export function UserScalarRelationFilterSchema(): z.ZodObject<Properties<UserScalarRelationFilter>> {
  return z.object({
    is: z.lazy(() => UserWhereInputSchema().nullish()),
    isNot: z.lazy(() => UserWhereInputSchema().nullish()),
  });
}

export function UserUpdateInputSchema(): z.ZodObject<Properties<UserUpdateInput>> {
  return z.object({
    email: z.string().nullish(),
    name: z.string().nullish(),
    password: z.string().nullish(),
    status: StatusSchema.nullish(),
  });
}

export function UserUpdateOneRequiredWithoutCompaniesNestedInputSchema(): z.ZodObject<
  Properties<UserUpdateOneRequiredWithoutCompaniesNestedInput>
> {
  return z.object({
    connect: z.lazy(() => UserWhereUniqueInputSchema().nullish()),
  });
}

export function UserWhereInputSchema(): z.ZodObject<Properties<UserWhereInput>> {
  return z.object({
    AND: z.array(z.lazy(() => UserWhereInputSchema())).nullish(),
    NOT: z.array(z.lazy(() => UserWhereInputSchema())).nullish(),
    OR: z.array(z.lazy(() => UserWhereInputSchema())).nullish(),
    auths: z.lazy(() => AuthListRelationFilterSchema().nullish()),
    companies: z.lazy(() => CompanyUserListRelationFilterSchema().nullish()),
    createdAt: z.lazy(() => DateTimeFilterSchema().nullish()),
    email: z.lazy(() => StringFilterSchema().nullish()),
    id: z.lazy(() => StringFilterSchema().nullish()),
    logs: z.lazy(() => RequestLogListRelationFilterSchema().nullish()),
    mediaFiles: z.lazy(() => MediaFileListRelationFilterSchema().nullish()),
    mediaFolders: z.lazy(() => MediaFolderListRelationFilterSchema().nullish()),
    name: z.lazy(() => StringFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
    updatedAt: z.lazy(() => DateTimeFilterSchema().nullish()),
  });
}

export function UserWhereUniqueInputSchema(): z.ZodObject<Properties<UserWhereUniqueInput>> {
  return z.object({
    email: z.string().nullish(),
    id: z.string().nullish(),
    name: z.lazy(() => StringFilterSchema().nullish()),
    status: z.lazy(() => EnumStatusFilterSchema().nullish()),
  });
}
