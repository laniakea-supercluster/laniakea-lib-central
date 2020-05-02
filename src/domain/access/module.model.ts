/* eslint-disable require-jsdoc */
import { IModule } from './access.type';
import { ObjectId } from 'mongodb';

// eslint-disable-next-line require-jsdoc
export class Module implements IModule {
    ancestor?: IModule
    name: string;
    parent: string | ObjectId;
    serviceId: string | ObjectId;
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
