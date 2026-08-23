export enum AdminCompanyScalarFieldEnum {
  AdminId = 'adminId',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  RoleId = 'roleId',
  UpdatedAt = 'updatedAt'
}

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

export enum AdminScalarFieldEnum {
  Avatar = 'avatar',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  RoleId = 'roleId',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum Client {
  Admin = 'Admin',
  Company = 'Company',
  Member = 'Member'
}

export enum CompanyMemberScalarFieldEnum {
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  InvitePassed = 'invitePassed',
  MemberId = 'memberId',
  RoleId = 'roleId',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

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

export enum CompanyScalarFieldEnum {
  Alias = 'alias',
  Code = 'code',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Logo = 'logo',
  Name = 'name',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum ContentDataType {
  Collection = 'Collection',
  Single = 'Single'
}

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

export enum MemberScalarFieldEnum {
  Avatar = 'avatar',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  Status = 'status',
  UpdatedAt = 'updatedAt'
}

export enum NotificationPrivacy {
  Private = 'Private',
  Public = 'Public'
}

export enum NotificationRecipientScalarFieldEnum {
  AdminId = 'adminId',
  ArchivedAt = 'archivedAt',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  IsArchived = 'isArchived',
  IsDeleted = 'isDeleted',
  IsRead = 'isRead',
  MemberId = 'memberId',
  NotificationId = 'notificationId',
  ReadAt = 'readAt',
  Receiver = 'receiver',
  ReceiverId = 'receiverId',
  UpdatedAt = 'updatedAt'
}

export enum NotificationScalarFieldEnum {
  AdminId = 'adminId',
  Category = 'category',
  CompanyId = 'companyId',
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  MemberId = 'memberId',
  Options = 'options',
  Priority = 'priority',
  Privacy = 'privacy',
  Receivers = 'receivers',
  Sender = 'sender',
  SenderId = 'senderId',
  SentAt = 'sentAt',
  Status = 'status',
  Title = 'title',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

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

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export enum Owner {
  Admin = 'Admin',
  Company = 'Company',
  Member = 'Member'
}

export enum PermissionAlias {
  CreateOneAdmin = 'CreateOneAdmin',
  CreateOneAdminCompany = 'CreateOneAdminCompany',
  CreateOneAdminRole = 'CreateOneAdminRole',
  CreateOneCompany = 'CreateOneCompany',
  CreateOneCompanyMember = 'CreateOneCompanyMember',
  CreateOneCompanyRole = 'CreateOneCompanyRole',
  CreateOneMember = 'CreateOneMember',
  CreateOneWebsite = 'CreateOneWebsite',
  DeleteAdminCompany = 'DeleteAdminCompany',
  FindAdminByEmail = 'FindAdminByEmail',
  FindAdminById = 'FindAdminById',
  FindOneAdmin = 'FindOneAdmin',
  FindOneAdminCompany = 'FindOneAdminCompany',
  FindOneAdminRole = 'FindOneAdminRole',
  FindOneCompany = 'FindOneCompany',
  FindOneCompanyMember = 'FindOneCompanyMember',
  FindOneCompanyRole = 'FindOneCompanyRole',
  FindOneMember = 'FindOneMember',
  FindOneWebsite = 'FindOneWebsite',
  FindSelfAdmin = 'FindSelfAdmin',
  FindSelfCompany = 'FindSelfCompany',
  FindSelfMember = 'FindSelfMember',
  InviteMemberToCompany = 'InviteMemberToCompany',
  ListAdminRolePermission = 'ListAdminRolePermission',
  ListCompanyRole = 'ListCompanyRole',
  ListCompanyRolePermission = 'ListCompanyRolePermission',
  ListSearchMembers = 'ListSearchMembers',
  ListSelfNotifications = 'ListSelfNotifications',
  ListWebsiteSeoPage = 'ListWebsiteSeoPage',
  PaginateAdminCompanies = 'PaginateAdminCompanies',
  PaginateAdminRoles = 'PaginateAdminRoles',
  PaginateAdmins = 'PaginateAdmins',
  PaginateCompanies = 'PaginateCompanies',
  PaginateCompanyMembers = 'PaginateCompanyMembers',
  PaginateCompanyRoles = 'PaginateCompanyRoles',
  PaginateMembers = 'PaginateMembers',
  PaginateNotificationRecipes = 'PaginateNotificationRecipes',
  PaginateNotifications = 'PaginateNotifications',
  PaginateWebsites = 'PaginateWebsites',
  PushAllPagesToAnalyze = 'PushAllPagesToAnalyze',
  PushPagesToAnalyze = 'PushPagesToAnalyze',
  PushPagesToUpdate = 'PushPagesToUpdate',
  UpdateOneAdmin = 'UpdateOneAdmin',
  UpdateOneAdminCompany = 'UpdateOneAdminCompany',
  UpdateOneAdminRole = 'UpdateOneAdminRole',
  UpdateOneCompany = 'UpdateOneCompany',
  UpdateOneCompanyMember = 'UpdateOneCompanyMember',
  UpdateOneCompanyRole = 'UpdateOneCompanyRole',
  UpdateOneMember = 'UpdateOneMember',
  UpdateOneWebsite = 'UpdateOneWebsite',
  UpdateSelfAdmin = 'UpdateSelfAdmin',
  UpdateSelfCompany = 'UpdateSelfCompany',
  UpdateSelfMember = 'UpdateSelfMember'
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

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

export enum Status {
  Disabled = 'Disabled',
  Enabled = 'Enabled'
}

export enum Target {
  Admin = 'Admin',
  Member = 'Member'
}

export enum WebsiteCms {
  Directus = 'Directus',
  Strapi = 'Strapi',
  WordPress = 'WordPress'
}

export enum WebsiteScalarFieldEnum {
  Cms = 'cms',
  CmsApiToken = 'cmsApiToken',
  CmsApiUrl = 'cmsApiUrl',
  CmsConfig = 'cmsConfig',
  CompanyId = 'companyId',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  IndustryBackground = 'industryBackground',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}
