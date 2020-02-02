import { IAddress, IStreet, ICoordinate } from './region.type';
import { StreetType } from './street.enum';
import { ObjectId } from 'mongodb';

export class Address implements IAddress {
    addressType: StreetType;
    street: IStreet;
    addressNumber: number | number[];
    complement: string;
    location: ICoordinate;
    _id: ObjectId;
}