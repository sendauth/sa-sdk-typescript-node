import localVarRequest from 'request';

export * from './audit';
export * from './authGroup';
export * from './authGroupMember';
export * from './authorizeReply';
export * from './authorizeReplyOneOf';
export * from './authorizeReplyOneOf1';
export * from './authorizeRequest';
export * from './checkTransactionStatus200Response';
export * from './company';
export * from './connectWise';
export * from './createTagRequest';
export * from './iDReply';
export * from './modelError';
export * from './openID';
export * from './paginatedAudits';
export * from './paginatedTransactions';
export * from './paginatedUsers';
export * from './permission';
export * from './permissionGroup';
export * from './permissionGroupsReply';
export * from './permissionsReply';
export * from './query';
export * from './routingRule';
export * from './setPermissionGroupPermissionsRequest';
export * from './setTransactionTagsRequest';
export * from './settings';
export * from './tX';
export * from './tag';
export * from './tagListReply';
export * from './tagUpdateRequest';
export * from './tagsRequest';
export * from './transaction';
export * from './updateTagValueRequest';
export * from './user';
export * from './validationError';
export * from './webTX';
export * from './webhook';
export * from './webhookEvents';
export * from './webhookInput';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Audit } from './audit';
import { AuthGroup } from './authGroup';
import { AuthGroupMember } from './authGroupMember';
import { AuthorizeReply } from './authorizeReply';
import { AuthorizeReplyOneOf } from './authorizeReplyOneOf';
import { AuthorizeReplyOneOf1 } from './authorizeReplyOneOf1';
import { AuthorizeRequest } from './authorizeRequest';
import { CheckTransactionStatus200Response } from './checkTransactionStatus200Response';
import { Company } from './company';
import { ConnectWise } from './connectWise';
import { CreateTagRequest } from './createTagRequest';
import { IDReply } from './iDReply';
import { ModelError } from './modelError';
import { OpenID } from './openID';
import { PaginatedAudits } from './paginatedAudits';
import { PaginatedTransactions } from './paginatedTransactions';
import { PaginatedUsers } from './paginatedUsers';
import { Permission } from './permission';
import { PermissionGroup } from './permissionGroup';
import { PermissionGroupsReply } from './permissionGroupsReply';
import { PermissionsReply } from './permissionsReply';
import { Query } from './query';
import { RoutingRule } from './routingRule';
import { SetPermissionGroupPermissionsRequest } from './setPermissionGroupPermissionsRequest';
import { SetTransactionTagsRequest } from './setTransactionTagsRequest';
import { Settings } from './settings';
import { TX } from './tX';
import { Tag } from './tag';
import { TagListReply } from './tagListReply';
import { TagUpdateRequest } from './tagUpdateRequest';
import { TagsRequest } from './tagsRequest';
import { Transaction } from './transaction';
import { UpdateTagValueRequest } from './updateTagValueRequest';
import { User } from './user';
import { ValidationError } from './validationError';
import { WebTX } from './webTX';
import { Webhook } from './webhook';
import { WebhookEvents } from './webhookEvents';
import { WebhookInput } from './webhookInput';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AuthGroup.ThresholdEnum": AuthGroup.ThresholdEnum,
        "CheckTransactionStatus200Response.StateEnum": CheckTransactionStatus200Response.StateEnum,
        "Query.SortDirEnum": Query.SortDirEnum,
        "RoutingRule.TargetTypeEnum": RoutingRule.TargetTypeEnum,
        "Transaction.StateEnum": Transaction.StateEnum,
        "User.RoleEnum": User.RoleEnum,
        "User.MessagingPreferenceEnum": User.MessagingPreferenceEnum,
}

let typeMap: {[index: string]: any} = {
    "Audit": Audit,
    "AuthGroup": AuthGroup,
    "AuthGroupMember": AuthGroupMember,
    "AuthorizeReply": AuthorizeReply,
    "AuthorizeReplyOneOf": AuthorizeReplyOneOf,
    "AuthorizeReplyOneOf1": AuthorizeReplyOneOf1,
    "AuthorizeRequest": AuthorizeRequest,
    "CheckTransactionStatus200Response": CheckTransactionStatus200Response,
    "Company": Company,
    "ConnectWise": ConnectWise,
    "CreateTagRequest": CreateTagRequest,
    "IDReply": IDReply,
    "ModelError": ModelError,
    "OpenID": OpenID,
    "PaginatedAudits": PaginatedAudits,
    "PaginatedTransactions": PaginatedTransactions,
    "PaginatedUsers": PaginatedUsers,
    "Permission": Permission,
    "PermissionGroup": PermissionGroup,
    "PermissionGroupsReply": PermissionGroupsReply,
    "PermissionsReply": PermissionsReply,
    "Query": Query,
    "RoutingRule": RoutingRule,
    "SetPermissionGroupPermissionsRequest": SetPermissionGroupPermissionsRequest,
    "SetTransactionTagsRequest": SetTransactionTagsRequest,
    "Settings": Settings,
    "TX": TX,
    "Tag": Tag,
    "TagListReply": TagListReply,
    "TagUpdateRequest": TagUpdateRequest,
    "TagsRequest": TagsRequest,
    "Transaction": Transaction,
    "UpdateTagValueRequest": UpdateTagValueRequest,
    "User": User,
    "ValidationError": ValidationError,
    "WebTX": WebTX,
    "Webhook": Webhook,
    "WebhookEvents": WebhookEvents,
    "WebhookInput": WebhookInput,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
