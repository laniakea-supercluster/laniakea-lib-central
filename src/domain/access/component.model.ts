/* eslint-disable require-jsdoc */
import { IComponent } from './access.type';
import { ObjectId } from 'mongodb';
import { IApiPermission, ActionType } from '../access';

// eslint-disable-next-line require-jsdoc
export class Component implements IComponent {
    name: string;
    title: string;
    moduleId: string | ObjectId;
    apis: IApiPermission[];
    permissions: ActionType[];
    _id: string | ObjectId;
    createdOn: Date;
    changedOn: Date;
    signature: string;
    path: string;
    icon: string;
    class: string;
    extralink: string;
    order: number;
}
