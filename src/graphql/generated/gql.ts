/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment LoginResult on Login {\n  target\n  accessType\n  accessToken\n  accessTimeout\n}\n\nquery Logout {\n  logout\n}\n\nquery Refresh {\n  refresh {\n    ...LoginResult\n  }\n}\n\nmutation Login($input: LoginInput!) {\n  login(input: $input) {\n    ...LoginResult\n  }\n}\n\nmutation SwitchAuthCompany($companyId: String!) {\n  switchAuthCompany(companyId: $companyId) {\n    ...LoginResult\n  }\n}\n\nquery ListAuthCompanies($name: String) {\n  listAuthCompanies(name: $name) {\n    id\n    createdAt\n    updatedAt\n    status\n    name\n    alias\n    code\n    description\n  }\n}\n\nquery AuthInfo {\n  authInfo {\n    id\n    createdAt\n    updatedAt\n    expiredAt\n    adminId\n    userId\n    companyId\n    device\n    location\n    target\n  }\n}": typeof types.LoginResultFragmentDoc,
};
const documents: Documents = {
    "fragment LoginResult on Login {\n  target\n  accessType\n  accessToken\n  accessTimeout\n}\n\nquery Logout {\n  logout\n}\n\nquery Refresh {\n  refresh {\n    ...LoginResult\n  }\n}\n\nmutation Login($input: LoginInput!) {\n  login(input: $input) {\n    ...LoginResult\n  }\n}\n\nmutation SwitchAuthCompany($companyId: String!) {\n  switchAuthCompany(companyId: $companyId) {\n    ...LoginResult\n  }\n}\n\nquery ListAuthCompanies($name: String) {\n  listAuthCompanies(name: $name) {\n    id\n    createdAt\n    updatedAt\n    status\n    name\n    alias\n    code\n    description\n  }\n}\n\nquery AuthInfo {\n  authInfo {\n    id\n    createdAt\n    updatedAt\n    expiredAt\n    adminId\n    userId\n    companyId\n    device\n    location\n    target\n  }\n}": types.LoginResultFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment LoginResult on Login {\n  target\n  accessType\n  accessToken\n  accessTimeout\n}\n\nquery Logout {\n  logout\n}\n\nquery Refresh {\n  refresh {\n    ...LoginResult\n  }\n}\n\nmutation Login($input: LoginInput!) {\n  login(input: $input) {\n    ...LoginResult\n  }\n}\n\nmutation SwitchAuthCompany($companyId: String!) {\n  switchAuthCompany(companyId: $companyId) {\n    ...LoginResult\n  }\n}\n\nquery ListAuthCompanies($name: String) {\n  listAuthCompanies(name: $name) {\n    id\n    createdAt\n    updatedAt\n    status\n    name\n    alias\n    code\n    description\n  }\n}\n\nquery AuthInfo {\n  authInfo {\n    id\n    createdAt\n    updatedAt\n    expiredAt\n    adminId\n    userId\n    companyId\n    device\n    location\n    target\n  }\n}"): (typeof documents)["fragment LoginResult on Login {\n  target\n  accessType\n  accessToken\n  accessTimeout\n}\n\nquery Logout {\n  logout\n}\n\nquery Refresh {\n  refresh {\n    ...LoginResult\n  }\n}\n\nmutation Login($input: LoginInput!) {\n  login(input: $input) {\n    ...LoginResult\n  }\n}\n\nmutation SwitchAuthCompany($companyId: String!) {\n  switchAuthCompany(companyId: $companyId) {\n    ...LoginResult\n  }\n}\n\nquery ListAuthCompanies($name: String) {\n  listAuthCompanies(name: $name) {\n    id\n    createdAt\n    updatedAt\n    status\n    name\n    alias\n    code\n    description\n  }\n}\n\nquery AuthInfo {\n  authInfo {\n    id\n    createdAt\n    updatedAt\n    expiredAt\n    adminId\n    userId\n    companyId\n    device\n    location\n    target\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;