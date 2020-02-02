import * as regionType from './region.type';

export class District implements regionType.IDistrict {
    city: regionType.ICity;    name: string;
    _id: number;
}