import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import {IAccessGroup} from './access.type';
import {ObjectId} from 'mongodb';

// eslint-disable-next-line require-jsdoc
export class AccessGroup implements IAccessGroup {
    name: string;
    recordType: entityType.RecordtType;
    companyId: string | ObjectId;
    operatorIds: ObjectId[] | string[];
    _id: string | ObjectId;
    createdOn: Date;
    changedOn: Date;
    signature: string;
}
