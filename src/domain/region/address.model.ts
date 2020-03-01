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
    readonly getFullAddress =`${this.addressType} ${this.street.name}, ${this.addressNumber}, ${(this.complement) ? this.complement : ''} - ${this.street.district.name} - ${this.street.district.city.name} - ${this.street.district.city.state.name} - ${this.street.postalCode} - ${this.location} `;
    }
}
