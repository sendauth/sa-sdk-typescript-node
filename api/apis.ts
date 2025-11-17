export * from './approvalGroupsApi';
import { ApprovalGroupsApi } from './approvalGroupsApi';
export * from './auditsApi';
import { AuditsApi } from './auditsApi';
export * from './companiesApi';
import { CompaniesApi } from './companiesApi';
export * from './permissionGroupsApi';
import { PermissionGroupsApi } from './permissionGroupsApi';
export * from './permissionsApi';
import { PermissionsApi } from './permissionsApi';
export * from './routingRulesApi';
import { RoutingRulesApi } from './routingRulesApi';
export * from './settingsApi';
import { SettingsApi } from './settingsApi';
export * from './tagsApi';
import { TagsApi } from './tagsApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
export * from './usersApi';
import { UsersApi } from './usersApi';
export * from './webhooksApi';
import { WebhooksApi } from './webhooksApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ApprovalGroupsApi, AuditsApi, CompaniesApi, PermissionGroupsApi, PermissionsApi, RoutingRulesApi, SettingsApi, TagsApi, TransactionsApi, UsersApi, WebhooksApi];
