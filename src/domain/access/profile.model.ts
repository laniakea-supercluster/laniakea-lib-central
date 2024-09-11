import { IProfile, IComponent, IAccessGroup, IModule, IUser } from './access.type';
import { IEnterprise } from '../enterprise';

export default class Profile implements IProfile {
    user: IUser;
    company: IEnterprise;
    accessGroups: IAccessGroup[];
    modules: IModule[];
    components: IComponent[];
    defaultCompany?: string;

    constructor(
        user: IUser,
        company: IEnterprise,
        accessGroups: IAccessGroup[],
        modules: IModule[],
        components: IComponent[],
        defaultCompany?: string,
    ) {
        this.user = user;
        this.company = company;
        this.accessGroups = accessGroups;
        this.modules = modules;
        this.components = components;
        this.defaultCompany = defaultCompany;
    }
}
