import * as entityType from '@atisiothings/laniakea-lib-core/dist/entity.type';
import { IAccessGroup, IComponentPermission } from './access.type';

export default class AccessGroup implements IAccessGroup {
    readonly _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
    name: string;
    recordType: entityType.RecordtType;
    companyId: string;
    userIds: string[];
    components: IComponentPermission[];

    constructor(
        _id: string,
        createdOn: Date,
        changedOn: Date,
        signature: string,
        name: string,
        recordType: entityType.RecordtType,
        companyId: string,
        userIds: string[],
        components: IComponentPermission[],
    ) {
        this._id = _id;
        this.createdOn = createdOn;
        this.changedOn = changedOn;
        this.signature = signature;
        this.name = name;
        this.recordType = recordType;
        this.companyId = companyId;
        this.userIds = userIds;
        this.components = components;
    }
}
