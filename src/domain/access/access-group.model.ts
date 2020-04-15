import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import { IAccessGroup, IComponentPermission } from './access.type';
import { ObjectId } from 'mongodb';

// eslint-disable-next-line require-jsdoc
export class AccessGroup implements IAccessGroup {
    name: string;
    recordType: entityType.RecordtType;
    companyId: string | ObjectId;
    userIds: ObjectId[] | string[];
    components: IComponentPermission[];
    _id: string | ObjectId;
    createdOn: Date;
    changedOn: Date;
    signature: string;
}
