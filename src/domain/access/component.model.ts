/* eslint-disable require-jsdoc */
import { IComponent, IModule } from './access.type';
import { ObjectId } from 'mongodb';
import { IApiPermission, ActionType } from '../access';

// eslint-disable-next-line require-jsdoc
export class Component implements IComponent {
    name: string;
    module: IModule;
    apis: IApiPermission[];
    permissions: ActionType[];
    _id: string | ObjectId;
    createdOn: Date;
    changedOn: Date;
    signature: string;
}
