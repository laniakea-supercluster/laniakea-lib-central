import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import { IAccessGroup } from './access.type';
import { ObjectID } from 'mongodb';

export class AccessGroup implements IAccessGroup {
    createdOn: Date;
    changedOn: Date;
    signature: string;
    name: string;
    recordType: entityType.RecordtType = entityType.RecordtType.User;
    companyId: ObjectID;
    operatorIds: ObjectID[];
    _id: ObjectID;
}