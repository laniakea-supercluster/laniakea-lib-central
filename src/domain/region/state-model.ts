import * as regionType from './region.type';

export class Country implements regionType.IState {
    createdOn: Date;
    changedOn: Date;
    signature: string;
    country: regionType.ICountry;    name: string;
    areaCode: number;
    hasDST: boolean;
    _id: string;
}