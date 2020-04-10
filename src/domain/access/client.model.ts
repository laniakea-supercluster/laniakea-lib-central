import { ObjectId } from 'mongodb';
import { IAppClient, IApiPermission } from './client.type';

// eslint-disable-next-line require-jsdoc
export class AppClient implements IAppClient {
    name: string;
    secret: string;
    apis: IApiPermission[];
    _id: string | ObjectId;
    createdOn: Date;
    changedOn: Date;
    signature: string;
}
