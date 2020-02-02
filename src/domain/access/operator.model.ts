import { IOperator } from './access.type';

export class Operator implements IOperator {
    email: string;    userName: string;
    secret: string;
    accessCondition: import('./access-condition.enum').AccessCondition;
    operatorType: import('./operator-type.enum').OperatorType;
    confirmed: boolean;
}