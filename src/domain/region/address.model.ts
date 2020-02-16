import {IAddress, IStreet, ICoordinate} from './region.type';
import {StreetType} from './street.enum';
import {ObjectId} from 'mongodb';

// eslint-disable-next-line require-jsdoc
export class Address implements IAddress {
    addressType: StreetType;
    street: IStreet;
    addressNumber: number | number[];
    complement: string;
    location: ICoordinate;
    _id: string | ObjectId;
    createdOn: Date;
    changedOn: Date;
    signature: string;
}
