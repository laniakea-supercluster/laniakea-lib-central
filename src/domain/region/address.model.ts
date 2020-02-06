import { IAddress, IStreet, ICoordinate } from './region.type';
import { StreetType } from './street.enum';
import { ObjectID } from 'mongodb';

export class Address implements IAddress {
    createdOn: Date;
    changedOn: Date;
    signature: string;
    addressType: StreetType;
    street: IStreet;
    addressNumber: number | number[];
    complement: string;
    location: ICoordinate;
    _id: ObjectID;
}