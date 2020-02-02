import * as regionType from './region.type';
import { RecordtType } from '@atis/lib-core-domain/dist/entity-type';

export class Street implements regionType.IStreet {
    district: regionType.IDistrict;    name: string;
    postalCode: number;
    type: RecordtType;
    _id: number;
}