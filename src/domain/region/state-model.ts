import * as regionType from './region.type';

// eslint-disable-next-line require-jsdoc
export class State implements regionType.IState {
    createdOn: Date;
    changedOn: Date;
    signature: string;
    country: regionType.ICountry;
    name: string;
    areaCode: number;
    hasDST: boolean;
    _id: string;
}
