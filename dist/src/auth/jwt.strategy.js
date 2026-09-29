"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../database/prisma.service");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    configService;
    prisma;
    constructor(configService, prisma) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET') || 'super-secret-key-change-me-in-production',
        });
        this.configService = configService;
        this.prisma = prisma;
    }
    async validate(payload) {
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
                    }
                }
            },
        });
        if (!user || user.status !== 'ACTIVE') {
            throw new common_1.UnauthorizedException('User is unauthorized or inactive');
        }
        const permissions = user.roles.flatMap(ur => ur.role.permissions.map(rp => rp.permission.code));
        let scopeType = 'SELF';
        if (user.roles.some(r => r.role.code === 'SUPER_ADMIN'))
            scopeType = 'GLOBAL';
        else if (user.roles.some(r => r.role.code === 'KELURAHAN'))
            scopeType = 'KELURAHAN';
        else if (user.roles.some(r => r.role.code === 'RW'))
            scopeType = 'RW';
        else if (user.roles.some(r => r.role.code === 'RT'))
            scopeType = 'RT';
        else if (user.roles.some(r => r.role.code === 'KEPALA_KELUARGA'))
            scopeType = 'FAMILY';
        return {
            userId: user.id,
            email: user.email,
            permissions: [...new Set(permissions)],
            scope: scopeType,
            resident: user.resident ? {
                id: user.resident.id,
                rtId: user.resident.rtId,
                rwId: user.resident.rwId,
                kelurahanId: user.resident.kelurahanId,
                familyId: user.resident.familyId,
            } : null
        };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService])
], JwtStrategy);
//# sourceMappingURL=jwt.strategy.js.map