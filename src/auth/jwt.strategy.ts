import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:
        configService.get<string>('JWT_SECRET') ||
        'super-secret-key-change-me-in-production',
    });
  }

  async validate(payload: any) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      include: {
        roles: {
          include: {
            role: {
              include: {
                permissions: {
                  include: {
                    permission: true,
                  },
                },
              },
            },
          },
        },
        resident: {
          include: {
            rt: true,
            rw: true,
            kelurahan: true,
            family: true,
          },
        },
      },
    });

    if (!user || user.status !== 'ACTIVE') {
      throw new UnauthorizedException('User is unauthorized or inactive');
    }

    const permissions = user.roles.flatMap((ur) =>
      ur.role.permissions.map((rp) => rp.permission.code),
    );

    // Determine scope based on roles and resident data
    // Example: Super Admin has global scope, RT has RT scope, etc.
    let scopeType = 'SELF';
    if (user.roles.some((r) => r.role.code === 'SUPER_ADMIN'))
      scopeType = 'GLOBAL';
    else if (user.roles.some((r) => r.role.code === 'KELURAHAN'))
      scopeType = 'KELURAHAN';
    else if (user.roles.some((r) => r.role.code === 'RW')) scopeType = 'RW';
    else if (user.roles.some((r) => r.role.code === 'RT')) scopeType = 'RT';
    else if (user.roles.some((r) => r.role.code === 'KEPALA_KELUARGA'))
      scopeType = 'FAMILY';

    return {
      userId: user.id,
      email: user.email,
      permissions: [...new Set(permissions)],
      scope: scopeType,
      resident: user.resident
        ? {
            id: user.resident.id,
            rtId: user.resident.rtId,
            rwId: user.resident.rwId,
            kelurahanId: user.resident.kelurahanId,
            familyId: user.resident.familyId,
          }
        : null,
    };
  }
}
