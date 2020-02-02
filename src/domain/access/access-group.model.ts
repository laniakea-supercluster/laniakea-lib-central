import * as entityType from '@atis/lib-core-domain/dist/entity-type';
import { IAccessGroup } from './access.type';
import { ObjectId } from 'mongodb';

export class AccessGroup implements IAccessGroup {
    id: string;
    name: string;
    recordType: entityType.RecordtType = entityType.RecordtType.User;
    companyId: ObjectId;
    operatorIds: ObjectId[];
    _id: string;
}