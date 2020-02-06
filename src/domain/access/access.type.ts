import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import { AccessCondition } from './access-condition.enum';
import { OperatorType } from './operator-type.enum';
import { ObjectId } from 'mongodb';

export interface IAccessGroup extends entityType.IEntity <string> {
    id: string;
    name: string;
    recordType: entityType.RecordtType;
    companyId: ObjectId;
    operatorIds: ObjectId[];
}

export interface IOperator {
    email: string;
    userName: string;
    secret: string;
    accessCondition: AccessCondition;
    operatorType: OperatorType;
    confirmed: boolean;
}