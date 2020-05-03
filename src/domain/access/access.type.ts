import * as entityType from '@atis/lib-core-domain/dist/entity.type';
import { IApiPermission } from './client.type';
import { AccessCondition } from './access-condition.enum';
import { OperatorType } from './operator-type.enum';
import { ObjectId } from 'mongodb';
import { ActionType } from './access-type.enum';
import { IEnterprise } from '../enterprise/enterprise.type';

export interface IPlatform extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
  name: string;
}

// FIXME: Permisions are wrong.
export interface IComponentPermission {
  component: IComponent,
  permissions: ActionType
}

export interface IAccessGroup extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
  name: string;
  recordType: entityType.RecordtType;
  companyId: ObjectId | string;
  userIds: ObjectId[] | string[];
  components: IComponentPermission[];
}

export interface IUser extends entityType.IEntity<ObjectId | string>, entityType.ITrackable {
  name: string;
  surname: string;
  email: string;
  username: string;
  secret: string;
  accessCondition: AccessCondition;
  operatorType: OperatorType;
  confirmed: boolean;
  token: string;
  key: string;
  defaultCompany?: ObjectId | string;
  companies?: ObjectId[] | string[];
}

export interface IProfile extends IUser {
  company: IEnterprise;
  accessGroups: IAccessGroup[];
  modules: IModule[];
  components: IComponent[];
}

export interface IFeature {
  path: string;
  icon: string;
  class: string;
  extralink: string;
  order: number;
}

export interface IComponent extends entityType.IEntity<ObjectId | string>, entityType.ITrackable, IFeature {
  name: string;
  title: string;
  moduleId: ObjectId | string;
  apis: IApiPermission[];
  permissions: ActionType[];
}

export interface IModule extends entityType.IEntity<ObjectId | string>, entityType.ITrackable, IFeature {
  ancestor?: IModule;
  name: string;
  parent: ObjectId | string;
  serviceId: ObjectId | string;
}
