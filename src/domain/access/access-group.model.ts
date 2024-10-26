import * as entityType from '@atisiothings/laniakea-lib-core/dist/domain/entity.type';
import { IAccessGroup, IComponentPermission } from './access.type';

/**
 * @class AccessGroup
 * @implements {IAccessGroup}
 * @description Class representing an access group in the system.
 */
export class AccessGroup implements IAccessGroup {
    /**
     * @readonly
     * @property {string} _id - Unique identifier for the access group.
     */
    readonly _id: string;

    /**
     * @property {Date} createdAt - The date when the access group was created.
     */
    createdAt: Date;

    /**
     * @property {Date} changedAt - The date when the access group was last modified.
     */
    changedAt: Date;

    /**
     * @property {string} signature - Unique signature for the access group.
     */
    signature: string;

    /**
     * @property {string} name - Name of the access group.
     */
    name: string;

    /**
     * @property {entityType.RecordtType} recordType - Record type associated with the access group.
     */
    recordType: entityType.RecordtType;

    /**
     * @property {string} companyId - Identifier of the company associated with the access group.
     */
    companyId: string;

    /**
     * @property {string[]} userIds - List of user identifiers belonging to the access group.
     */
    userIds: string[];

    /**
     * @property {IComponentPermission[]} components - List of component permissions associated with the access group.
     */
    components: IComponentPermission[];

    /**
     * @constructor
     * @param {string} _id - Unique identifier for the access group.
     * @param {Date} createdAt - The date when the access group was created.
     * @param {Date} changedAt - The date when the access group was last modified.
     * @param {string} signature - Unique signature for the access group.
     * @param {string} name - Name of the access group.
     * @param {entityType.RecordtType} recordType - Record type associated with the access group.
     * @param {string} companyId - Identifier of the company associated with the access group.
     * @param {string[]} userIds - List of user identifiers belonging to the access group.
     * @param {IComponentPermission[]} components - List of component permissions associated with the access group.
     */
    constructor(
        _id: string,
        createdAt: Date,
        changedAt: Date,
        signature: string,
        name: string,
        recordType: entityType.RecordtType,
        companyId: string,
        userIds: string[],
        components: IComponentPermission[],
    ) {
        this._id = _id;
        this.createdAt = createdAt;
        this.changedAt = changedAt;
        this.signature = signature;
        this.name = name;
        this.recordType = recordType;
        this.companyId = companyId;
        this.userIds = userIds;
        this.components = components;
    }
}
