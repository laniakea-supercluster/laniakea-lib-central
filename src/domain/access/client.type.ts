import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import { ObjectId } from 'mongodb';
import { PermissionType } from './permission-type.enum';

export interface IApiPermission extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
    client: IAppClient;
    permissions: PermissionType[];
}

export interface IAppClient extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
    name: string;
    secret: string;
    apis: IApiPermission[];
}

export interface IApi extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
    name: string;
}
