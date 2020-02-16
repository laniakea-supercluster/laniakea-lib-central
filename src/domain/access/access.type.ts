import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import {AccessCondition} from './access-condition.enum';
import {OperatorType} from './operator-type.enum';
import {ObjectId} from 'mongodb';

export interface IAccessGroup extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
    name: string;
    recordType: entityType.RecordtType;
    companyId: ObjectId | string;
    operatorIds: ObjectId[] | string[];
}

export interface IOperator extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
    email: string;
    userName: string;
    secret: string;
    accessCondition: AccessCondition;
    operatorType: OperatorType;
    confirmed: boolean;
}

export interface IPlatform extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
    name: string;
}
