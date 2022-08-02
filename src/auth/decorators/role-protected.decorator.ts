import { SetMetadata } from '@nestjs/common';
import { ValidRoles } from '../interface/valid-roles.interface';

export const RoleProtected = (...roles: ValidRoles[]) =>
  SetMetadata('roles', roles);
