import * as regionType from './region.type';
import { RecordtType } from '@atis/lib-core-domain/dist/entity.type';

export class Street implements regionType.IStreet {
    createdOn: Date;
    changedOn: Date;
    signature: string;
    district: regionType.IDistrict;    name: string;
    postalCode: number;
    type: RecordtType;
    _id: number;
}