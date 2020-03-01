/* eslint-disable require-jsdoc */
import {IAddress, IStreet, ICoordinate} from './region.type';
import {StreetType} from './street.enum';
import {ObjectId} from 'mongodb';

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

export function getFullAddress(a: Address): string {
    // eslint-disable-next-line max-len
    return `${a.addressType} ${a.street.name}, ${a.addressNumber}, ${(a.complement) ? a.complement : ''} - ${a.street.district.name} - ${a.street.district.city.name} - ${a.street.district.city.state.name} - ${a.street.postalCode} - ${a.location} `;
}
