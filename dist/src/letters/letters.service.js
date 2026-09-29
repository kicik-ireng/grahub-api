"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterRequestsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const scope_util_1 = require("../common/utils/scope.util");
const crypto = __importStar(require("crypto"));
let LetterRequestsService = class LetterRequestsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createDto, user) {
        try {
            return await this.prisma.letterRequest.create({
                data: {
                    ...createDto,
                    status: 'SUBMITTED',
                },
            });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to create letter request: ' + error.message);
        }
    }
    async findAll(query = {}, user) {
        try {
            const page = Number(query.page) || 1;
            const limit = Number(query.limit) || 10;
            const skip = (page - 1) * limit;
            const scopeFilter = (0, scope_util_1.applyScopeFilter)(user, 'LetterRequest');
            const whereClause = {
                ...scopeFilter,
                ...(query.status && { status: query.status }),
            };
            const [data, total] = await Promise.all([
                this.prisma.letterRequest.findMany({
                    where: whereClause,
                    skip,
                    take: limit,
                    orderBy: { createdAt: query.sortOrder === 'asc' ? 'asc' : 'desc' },
                }),
                this.prisma.letterRequest.count({ where: whereClause }),
            ]);
            return {
                data,
                meta: {
                    total,
                    page,
                    limit,
                    totalPages: Math.ceil(total / limit),
                }
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to fetch letter requests: ' + error.message);
        }
    }
    async findOne(id) {
        try {
            const record = await this.prisma.letterRequest.findUnique({
                where: { id },
            });
            if (!record)
                throw new common_1.NotFoundException('LetterRequest not found');
            return record;
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new common_1.InternalServerErrorException('Failed to fetch letter request: ' + error.message);
        }
    }
    async updateStatus(id, status, user) {
        try {
            const letter = await this.findOne(id);
            return await this.prisma.letterRequest.update({
                where: { id },
                data: { status },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException)
                throw error;
            throw new common_1.InternalServerErrorException('Failed to update letter status: ' + error.message);
        }
    }
    async generatePdf(id, user) {
        try {
            const letter = await this.findOne(id);
            if (letter.status !== 'APPROVED') {
                throw new common_1.BadRequestException('Only APPROVED letters can generate PDF');
            }
            const verificationCode = crypto.randomBytes(8).toString('hex');
            const verificationUrl = `/public/letters/verify/${verificationCode}`;
            const mockPdfUrl = `https://storage.grahub.local/letters/${id}.pdf`;
            await this.prisma.activityLog.create({
                data: {
                    userId: user.userId,
                    action: 'GENERATE_PDF',
                    module: 'letters',
                    details: `Generated PDF for letter ${id}`
                }
            });
            return await this.prisma.letterRequest.update({
                where: { id },
                data: {
                    status: 'READY_TO_PRINT',
                },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException || error instanceof common_1.BadRequestException)
                throw error;
            throw new common_1.InternalServerErrorException('Failed to generate PDF: ' + error.message);
        }
    }
    async update(id, updateDto) {
        try {
            await this.findOne(id);
            return await this.prisma.letterRequest.update({
                where: { id },
                data: updateDto,
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new common_1.InternalServerErrorException('Failed to update letter request: ' + error.message);
        }
    }
    async remove(id) {
        try {
            await this.findOne(id);
            return await this.prisma.letterRequest.delete({
                where: { id },
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new common_1.InternalServerErrorException('Failed to delete letter request: ' + error.message);
        }
    }
};
exports.LetterRequestsService = LetterRequestsService;
exports.LetterRequestsService = LetterRequestsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], LetterRequestsService);
//# sourceMappingURL=letters.service.js.map