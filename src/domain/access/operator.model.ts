import { IOperator } from './access.type';
import { AccessCondition } from './access-condition.enum';
import { OperatorType } from './operator-type.enum';
import { ObjectId } from 'mongodb';

export class Operator implements IOperator {
    _id: ObjectId;
    createdOn: Date;
    changedOn: Date;
    signature: string;
    email: string;
    userName: string;
    secret: string;
    accessCondition: AccessCondition;
    operatorType: OperatorType;
    confirmed: boolean;
}