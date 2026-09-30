import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class ScopeGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('User is not authenticated');
    }

    // In a real application, you would check if the requested resource's
    // region/scope matches the user's scope.
    // For example, if a user has 'RT' scope and requests data for RT=5,
    // you must verify that the user's resident profile is also in RT=5.

    // Here we make the scope available in request so services can filter queries.
    // The actual filtering (e.g. Prisma `where` clause) should be done in the service layer
    // by reading `request.user.scope` and `request.user.resident`.

    return true;
  }
}
