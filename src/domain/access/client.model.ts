import { IAppClient, IApiPermission, ICredentials } from './client.type';

export class AppClient implements IAppClient {
    readonly _id: string;
    createdAt: Date;
    changedAt: Date;
    signature: string;
    name: string;
    credentials: ICredentials;
    apis: IApiPermission[];

    constructor(
        _id: string,
        createdAt: Date,
        changedAt: Date,
        signature: string,
        name: string,
        credentials: ICredentials,
        apis: IApiPermission[],
    ) {
        this._id = _id;
        this.createdAt = createdAt;
        this.changedAt = changedAt;
        this.signature = signature;
        this.name = name;
        this.credentials = credentials;
        this.apis = apis;
    }
}
