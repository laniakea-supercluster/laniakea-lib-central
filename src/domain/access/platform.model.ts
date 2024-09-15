import { IPlatform } from './access.type';

export class Platform implements IPlatform {
    readonly _id: string;
    name: string;
    createdOn: Date;
    changedOn: Date;
    signature: string;

    constructor(
        _id: string,
        name: string,
        createdOn: Date,
        changedOn: Date,
        signature: string,
    ) {
        this._id = _id;
        this.name = name;
        this.createdOn = createdOn;
        this.changedOn = changedOn;
        this.signature = signature;
    }
}
