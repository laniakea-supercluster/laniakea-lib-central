import * as regionType from './region.type';

export class City implements regionType.ICity {
    state: regionType.IState;
    code: number;
    name: string;
    postalCode: number;
    _id: number;
}