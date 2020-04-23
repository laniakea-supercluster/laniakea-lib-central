import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import { IAddress } from '../region';
import { IUser, IPlatform } from '../access/access.type';
import { ObjectId } from 'mongodb';

export interface IEnterprise extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
    name: string;
    fantasyName: string;
    address: IAddress;
    systemAccount: IUser;
    platforms: IPlatform[];
}
