import { IPlatform } from './access.type';

export class Platform implements IPlatform {
    readonly _id: string;
    name: string;
    createdAt: Date;
    changedAt: Date;
    signature: string;

    constructor(
        _id: string,
        name: string,
        createdAt: Date,
        changedAt: Date,
        signature: string,
    ) {
        this._id = _id;
        this.name = name;
        this.createdAt = createdAt;
        this.changedAt = changedAt;
        this.signature = signature;
    }
}
