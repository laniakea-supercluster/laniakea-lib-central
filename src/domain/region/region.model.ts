import { RecordtType } from '@atisiothings/laniakea-lib-core/dist/entity.type';
import * as regionType from './region.type';
import { AddressType, StreetType } from './region.enum';

export class Country implements regionType.ICountry {
    readonly _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
    code: number;
    name: string;
    mcc: number;
    initials: string;
    language: string;

    constructor(
        _id: string,
        createdOn: Date,
        changedOn: Date,
        signature: string,
        code: number,
        name: string,
        mcc: number,
        initials: string,
        language: string,
    ) {
        this._id = _id;
        this.createdOn = createdOn;
        this.changedOn = changedOn;
        this.signature = signature;
        this.code = code;
        this.name = name;
        this.mcc = mcc;
        this.initials = initials;
        this.language = language;
    }
}

export class State implements regionType.IState {
    readonly _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
    country: regionType.ICountry;
    name: string;
    areaCode: number;
    hasDST: boolean;

    constructor(
        _id: string,
        createdOn: Date,
        changedOn: Date,
        signature: string,
        country: regionType.ICountry,
        name: string,
        areaCode: number,
        hasDST: boolean,
    ) {
        this._id = _id;
        this.createdOn = createdOn;
        this.changedOn = changedOn;
        this.signature = signature;
        this.country = country;
        this.name = name;
        this.areaCode = areaCode;
        this.hasDST = hasDST;
    }
}

export class City implements regionType.ICity {
    readonly _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
    state: regionType.IState;
    code: number;
    name: string;
    postalCode: number;

    constructor(
        _id: string,
        createdOn: Date,
        changedOn: Date,
        signature: string,
        state: regionType.IState,
        code: number,
        name: string,
        postalCode: number,
    ) {
        this._id = _id;
        this.createdOn = createdOn;
        this.changedOn = changedOn;
        this.signature = signature;
        this.state = state;
        this.code = code;
        this.name = name;
        this.postalCode = postalCode;
    }
}

export class District implements regionType.IDistrict {
    readonly _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
    city: regionType.ICity;
    name: string;

    constructor(
        _id: string,
        createdOn: Date,
        changedOn: Date,
        signature: string,
        city: regionType.ICity,
        name: string,
    ) {
        this._id = _id;
        this.createdOn = createdOn;
        this.changedOn = changedOn;
        this.signature = signature;
        this.city = city;
        this.name = name;
    }
}

export class Street implements regionType.IStreet {
    readonly _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
    district: regionType.IDistrict;
    name: string;
    postalCode: number;
    type: RecordtType;
    streetType: StreetType;

    constructor(
        _id: string,
        createdOn: Date,
        changedOn: Date,
        signature: string,
        district: regionType.IDistrict,
        name: string,
        postalCode: number,
        type: RecordtType,
        streetType: StreetType,
    ) {
        this._id = _id;
        this.createdOn = createdOn;
        this.changedOn = changedOn;
        this.signature = signature;
        this.district = district;
        this.name = name;
        this.postalCode = postalCode;
        this.type = type;
        this.streetType = streetType;
    }
}

export class Address implements regionType.IAddress {
    readonly _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
    addressType: AddressType;
    street: regionType.IStreet;
    streetNumber: number | number[];
    complement: string;
    location: regionType.ICoordinate;

    constructor(
        _id: string,
        createdOn: Date,
        changedOn: Date,
        signature: string,
        addressType: AddressType,
        street: regionType.IStreet,
        streetNumber: number | number[],
        complement: string,
        location: regionType.ICoordinate,
    ) {
        this._id = _id;
        this.createdOn = createdOn;
        this.changedOn = changedOn;
        this.signature = signature;
        this.addressType = addressType;
        this.street = street;
        this.streetNumber = streetNumber;
        this.complement = complement;
        this.location = location;
    }

    getFullAddress(): string {
        return `${this.addressType} 
        ${this.street.name}, 
        ${this.streetNumber}, 
        ${this.complement ? this.complement : ''} - ${this.street.district.name} - ${this.street.district.city.name} - ${this.street.district.city.state.name} - ${this.street.postalCode} - ${this.location}`;
    }
}
