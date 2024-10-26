import * as entityType from '@atisiothings/laniakea-lib-core/dist/domain/entity.type';
import { PermissionType } from './permission-type.enum';

export interface ICredentials {
    clientId: string;
    secretId: string;
}

export interface IApiPermission extends entityType.IIdentifier<string>, entityType.ITrackable {
    api: string;
    permissions: PermissionType[];
}

export interface IAppClient extends entityType.IIdentifier<string>, entityType.ITrackable {
    name: string;
    credentials: ICredentials;
    apis: IApiPermission[];
}

export interface IApi extends entityType.IIdentifier<string>, entityType.ITrackable {
}
