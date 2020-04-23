import { IProfile, IComponent, IAccessGroup, IModule } from './access.type';
import { ObjectId } from 'mongodb';
import { User } from './user.model';
import { IEnterprise } from '../enterprise';

// eslint-disable-next-line require-jsdoc
export class Profile extends User implements IProfile {
    company: IEnterprise;
    accessGroups: IAccessGroup[];
    modules: IModule[];
    components: IComponent[];
    defaultCompany?: string | ObjectId;
}
