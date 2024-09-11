import * as entityType from '@atisiothings/laniakea-lib-core/dist/entity.type';
import { IAccessGroup, IComponentPermission } from './access.type';

/**
 * @class AccessGroup
 * @implements {IAccessGroup}
 * @description Class representing an access group in the system.
 */
export default class AccessGroup implements IAccessGroup {
    /**
     * @readonly
     * @property {string} _id - Unique identifier for the access group.
     */
    readonly _id: string;

    /**
     * @property {Date} createdOn - The date when the access group was created.
     */
    createdOn: Date;

    /**
     * @property {Date} changedOn - The date when the access group was last modified.
     */
    changedOn: Date;

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
     * @param {Date} createdOn - The date when the access group was created.
     * @param {Date} changedOn - The date when the access group was last modified.
     * @param {string} signature - Unique signature for the access group.
     * @param {string} name - Name of the access group.
     * @param {entityType.RecordtType} recordType - Record type associated with the access group.
     * @param {string} companyId - Identifier of the company associated with the access group.
     * @param {string[]} userIds - List of user identifiers belonging to the access group.
     * @param {IComponentPermission[]} components - List of component permissions associated with the access group.
     */
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
