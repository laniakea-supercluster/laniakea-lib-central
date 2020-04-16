import { IOperator, IComponentPermission } from './access.type';
import { ObjectId } from 'mongodb';
import { User } from './user.model';

// eslint-disable-next-line require-jsdoc
export class Operator extends User implements IOperator {
    companyId: string | ObjectId;
    groups: string[];
    modules: string[];
    components: IComponentPermission[];
}
