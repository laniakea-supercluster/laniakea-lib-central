import * as entityType from '@atisiothings/laniakea-lib-core/dist/domain/entity.type';
import { IAddress } from '../region';
import { IUser, IPlatform } from '../access/access.type';

export interface IEnterprise extends entityType.IIdentifier<string>, entityType.ITrackable {
    name: string;
    fantasyName: string;
    address: IAddress;
    systemAccount: IUser;
    platforms: IPlatform[];
}
