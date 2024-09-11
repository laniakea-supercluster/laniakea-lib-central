import * as entityType from '@atisiothings/laniakea-lib-core/dist/entity.type';
import { IUser } from './access.type';
import { Person } from '../citizen/person.model';
import { AccessCondition } from './access.enum';
import { OperatorType } from './operator-type.enum';

export default class User extends Person implements IUser, entityType.IIdentifier<string>, entityType.ITrackable {
    readonly _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
    email: string;
    username: string;
    secret: string;
    accessCondition: AccessCondition;
    operatorType: OperatorType;
    confirmed: boolean;
    token: string;
    key: string;
    defaultCompanyId?: string;
    companies?: string[];

    constructor(
        _id: string,
        createdOn: Date,
        changedOn: Date,
        signature: string,
        email: string,
        username: string,
        secret: string,
        accessCondition: AccessCondition,
        operatorType: OperatorType,
        confirmed: boolean,
        token: string,
        key: string,
        defaultCompanyId?: string,
        companies?: string[],
    ) {
        super(); // Chama o construtor da classe pai (Person)
        this._id = _id;
        this.createdOn = createdOn;
        this.changedOn = changedOn;
        this.signature = signature;
        this.email = email;
        this.username = username;
        this.secret = secret;
        this.accessCondition = accessCondition;
        this.operatorType = operatorType;
        this.confirmed = confirmed;
        this.token = token;
        this.key = key;
        this.defaultCompanyId = defaultCompanyId;
        this.companies = companies;
    }
}
