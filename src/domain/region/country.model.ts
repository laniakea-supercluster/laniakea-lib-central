/* eslint-disable require-jsdoc */
import * as regionType from './region.type';

export class Country implements regionType.ICountry {
    createdOn: Date;
    changedOn: Date;
    signature: string;
    code: number;
    name: string;
    mcc: number;
    initials: string;
    _id: number;
}
