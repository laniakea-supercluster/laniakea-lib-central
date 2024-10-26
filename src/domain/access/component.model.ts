import { IComponent } from './access.type';
import { IApiPermission, ActionType } from '../access';

export class Component implements IComponent {
    readonly _id: string;
    name: string;
    title: string;
    moduleId: string;
    apis: IApiPermission[];
    permissions: ActionType[];
    createdAt: Date;
    changedAt: Date;
    signature: string;
    path: string;
    icon: string;
    styleName: string;
    extralink: string;
    order: number;

    constructor(
        _id: string,
        name: string,
        title: string,
        moduleId: string,
        apis: IApiPermission[],
        permissions: ActionType[],
        createdAt: Date,
        changedAt: Date,
        signature: string,
        path: string,
        icon: string,
        styleName: string,
        extralink: string,
        order: number,
    ) {
        this._id = _id;
        this.name = name;
        this.title = title;
        this.moduleId = moduleId;
        this.apis = apis;
        this.permissions = permissions;
        this.createdAt = createdAt;
        this.changedAt = changedAt;
        this.signature = signature;
        this.path = path;
        this.icon = icon;
        this.styleName = styleName;
        this.extralink = extralink;
        this.order = order;
    }
}
