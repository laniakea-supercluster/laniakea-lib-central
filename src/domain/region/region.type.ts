import * as entityType from '@atisiothings/laniakea-lib-core/dist/domain/entity.type';
import { StreetType, PrecisionType, AddressType } from './region.enum';

export interface ICoordinate {
    latitude: number;
    longitude: number;
    precision: PrecisionType;
}

export interface ICountry extends entityType.IIdentifier<string>, entityType.ITrackable {
    code: number;
    name: string;
    mcc: number;
    initials: string;
    language: string;
}

export interface IState extends entityType.IIdentifier<string>, entityType.ITrackable {
    country: ICountry;
    name: string;
    areaCode: number;
    hasDST: boolean;
}

export interface ICity extends entityType.IIdentifier<string>, entityType.ITrackable {
    state: IState;
    code: number;
    name: string;
    postalCode: number;
}

export interface IDistrict extends entityType.IIdentifier<string>, entityType.ITrackable {
    city: ICity;
    name:string;
}

export interface IStreet extends entityType.IIdentifier<string>, entityType.ITrackable {
    district: IDistrict;
    name: string;
    postalCode: number;
    type: entityType.RecordtType;
    streetType: StreetType;
}

export interface IAddress extends entityType.IIdentifier<string>, entityType.ITrackable {
    addressType: AddressType;
    street: IStreet;
    streetNumber: number | number[];
    complement: string;
    location: ICoordinate;
}
