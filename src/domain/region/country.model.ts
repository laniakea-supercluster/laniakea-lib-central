import * as regionType from './region.type';

export class Country implements regionType.ICountry {
    code: number;
    name: string;
    mcc: number;
    _id: number;
}