import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import { ObjectId } from 'mongodb';
import { PermissionType } from './permission-type.enum';

export interface ICredentials {
    clientId: string;
    secretId: string;
}

export interface IApiPermission extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
    api: string;
    permissions: PermissionType[];
}

export interface IAppClient extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
    name: string;
    credentials: ICredentials;
    apis: IApiPermission[];
}

export interface IApi extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
}
