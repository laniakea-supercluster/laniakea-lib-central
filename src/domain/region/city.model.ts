import * as regionType from './region.type';

/* eslint-disable require-jsdoc */
export class City implements regionType.ICity {
    createdOn: Date;
    changedOn: Date;
    signature: string;
    state: regionType.IState;
    code: number;
    name: string;
    postalCode: number;
    _id: number;
}
