import {IOperator} from './access.type';
import {AccessCondition} from './access-condition.enum';
import {OperatorType} from './operator-type.enum';
import {ObjectId} from 'mongodb';

// eslint-disable-next-line require-jsdoc
export class Operator implements IOperator {
    email: string;
    userName: string;
    secret: string;
    accessCondition: AccessCondition;
    operatorType: OperatorType;
    confirmed: boolean;
    _id: string | ObjectId;
    createdOn: Date;
    changedOn: Date;
    signature: string;
}
