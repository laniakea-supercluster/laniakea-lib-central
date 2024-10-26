import * as entityType from '@atisiothings/laniakea-lib-core/dist/domain/entity.type';
import { IApiPermission } from './client.type';
import { AccessCondition, ActionType } from './access.enum';
import { OperatorType } from './operator-type.enum';
import { IEnterprise } from '../enterprise/enterprise.type';

export interface IPlatform extends entityType.IIdentifier<string>, entityType.ITrackable {
  name: string;
}

export interface IFeature {
  path: string;
  icon: string;
  styleName: string;
  extralink: string;
  order: number;
}

export interface IComponent extends entityType.IIdentifier<string>, entityType.ITrackable, IFeature {
  name: string;
  title: string;
  moduleId: string;
  apis: IApiPermission[];
  permissions: ActionType[];
}

export interface IModule extends entityType.IIdentifier<string>, entityType.ITrackable, IFeature {
  ancestor?: IModule;
  name: string;
  parent: string;
  serviceId: string;
}

// FIXME: Permisions are wrong.
export interface IComponentPermission {
  component: IComponent,
  permissions: ActionType
}

export interface IAccessGroup extends entityType.IIdentifier<string>, entityType.ITrackable {
  name: string;
  recordType: entityType.RecordtType;
  companyId: string;
  userIds: string[];
  components: IComponentPermission[];
}

export interface IUser extends entityType.IIdentifier<string>, entityType.ITrackable {
  email: string;
  username: string;
  secret: string;
  accessCondition: AccessCondition;
  operatorType: OperatorType;
  confirmed: boolean;
  token: string;
  key: string;
  defaultCompany?: string;
  companies?: string[];
}

export interface IProfile {
  user: IUser;
  company: IEnterprise;
  accessGroups: IAccessGroup[];
  modules: IModule[];
  components: IComponent[];
}
