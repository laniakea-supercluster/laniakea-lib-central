import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import { IAccessGroup } from './access.type';
import { ObjectID } from 'mongodb';

export class AccessGroup implements IAccessGroup {
    id: string;
    name: string;
    recordType: entityType.RecordtType = entityType.RecordtType.User;
    companyId: ObjectID;
    operatorIds: ObjectID[];
    _id: string;
}