import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import { IApiPermission } from './client.type';
import { AccessCondition } from './access-condition.enum';
import { OperatorType } from './operator-type.enum';
import { ObjectId } from 'mongodb';
import { ActionType } from './access-type.enum';

export interface IComponentPermission {
    component: IComponent,
    permissions: ActionType
}

export interface IAccessGroup extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
    name: string;
    recordType: entityType.RecordtType;
    companyId: ObjectId | string;
    userIds: ObjectId[] | string[];
    components: IComponentPermission[];
}

export interface IUser extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
    email: string;
    username: string;
    secret: string;
    accessCondition: AccessCondition;
    operatorType: OperatorType;
    confirmed: boolean;
    token: string;
    companies?: ObjectId[] | string[];
}

export interface IOperator extends IUser {
    companyId: ObjectId | string;
    groups: string[];
    modules: string[];
    components: IComponentPermission[];
}

export interface IComponent extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
    name: string;
    apis: IApiPermission[];
}
