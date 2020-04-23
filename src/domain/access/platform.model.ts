/* eslint-disable require-jsdoc */
import { IPlatform } from './access.type';
import { ObjectId } from 'mongodb';

export class Platform implements IPlatform {
    _id: ObjectId;
    name: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
}
