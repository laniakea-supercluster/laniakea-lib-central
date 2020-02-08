import * as regionType from './region.type';

export class District implements regionType.IDistrict {
    createdOn: Date;
    changedOn: Date;
    signature: string;
    city: regionType.ICity;    name: string;
    _id: number;
}