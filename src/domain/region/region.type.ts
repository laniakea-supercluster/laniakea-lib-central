import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import { ObjectID } from 'mongodb';
import { StreetType } from './street.enum';
import { PrecisionType } from './precision.enum';

export interface ICoordinate {
    latitude: number;
    longitude: number;
    precision: PrecisionType;
}

export interface ICountry extends entityType.IEntity<number>, entityType.ITrackable {
    code: number;
    name: string;
    mcc: number;
}

export interface IState extends entityType.IEntity<string>, entityType.ITrackable {
    country: ICountry;
    name: string;
    areaCode: number;
    hasDST: boolean;
}

export interface ICity extends entityType.IEntity<number>, entityType.ITrackable {
    state: IState;
    code: number;
    name: string;
    postalCode: number;
}

export interface IDistrict extends entityType.IEntity<number>, entityType.ITrackable {
    city: ICity;
    name:string;
}

export interface IStreet extends entityType.IEntity<number>, entityType.ITrackable {
    district: IDistrict;
    name: string;
    postalCode: number;
    type: entityType.RecordtType;
}

export interface IAddress extends entityType.IEntity<ObjectID>, entityType.ITrackable {
    addressType: StreetType;
    street: IStreet;
    addressNumber: number | number[];
    complement: string;
    location: ICoordinate;
}