import { IModule } from './access.type';

export class Module implements IModule {
    readonly _id: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;
    ancestor?: IModule;
    name: string;
    parent: string;
    serviceId: string;
    path: string;
    icon: string;
    styleName: string;
    extralink: string;
    order: number;

    constructor(
        _id: string,
        createdOn: Date,
        changedOn: Date,
        signature: string,
        name: string,
        parent: string,
        serviceId: string,
        path: string,
        icon: string,
        styleName: string,
        extralink: string,
        order: number,
        ancestor?: IModule,
    ) {
        this._id = _id;
        this.createdOn = createdOn;
        this.changedOn = changedOn;
        this.signature = signature;
        this.name = name;
        this.parent = parent;
        this.serviceId = serviceId;
        this.path = path;
        this.icon = icon;
        this.styleName = styleName;
        this.extralink = extralink;
        this.order = order;
        this.ancestor = ancestor;
    }
}
