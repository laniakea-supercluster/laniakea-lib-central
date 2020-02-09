import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import { AccessCondition } from './access-condition.enum';
import { OperatorType } from './operator-type.enum';
import { ObjectID } from 'mongodb';

export interface IAccessGroup extends entityType.IEntity<ObjectID>, entityType.ITrackable {
    name: string;
    recordType: entityType.RecordtType;
    companyId: ObjectID;
    operatorIds: ObjectID[];
}

export interface IOperator extends entityType.IEntity<ObjectID>, entityType.ITrackable {
    email: string;
    userName: string;
    secret: string;
    accessCondition: AccessCondition;
    operatorType: OperatorType;
    confirmed: boolean;
}

export interface IPlatform extends entityType.IEntity<ObjectID>, entityType.ITrackable {
    name: string;
}