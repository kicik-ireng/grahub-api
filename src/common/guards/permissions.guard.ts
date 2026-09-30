import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY } from '../decorators/permissions.decorator';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredPermissions) {
      return true; // No permissions required
    }

    const { user } = context.switchToHttp().getRequest();
    if (!user || !user.permissions) {
      throw new ForbiddenException('No permissions assigned to this user');
    }

    const hasPermission = () => {
      if (user.scope === 'GLOBAL') return true;
      return requiredPermissions.some((permission) =>
        user.permissions.includes(permission),
      );
    };

    if (!hasPermission()) {
      throw new ForbiddenException(
        'You do not have the required permissions for this action',
      );
    }

    return true;
  }
}
