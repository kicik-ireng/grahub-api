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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterRequestsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const permissions_guard_1 = require("../common/guards/permissions.guard");
const permissions_decorator_1 = require("../common/decorators/permissions.decorator");
const letters_service_1 = require("./letters.service");
let LetterRequestsController = class LetterRequestsController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(createDto, req) {
        return this.service.create(createDto, req.user);
    }
    findAll(query, req) {
        return this.service.findAll(query, req.user);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
    approve(id, req) {
        return this.service.updateStatus(id, 'APPROVED', req.user);
    }
    reject(id, req) {
        return this.service.updateStatus(id, 'REJECTED', req.user);
    }
    generatePdf(id, req) {
        return this.service.generatePdf(id, req.user);
    }
    update(id, updateDto) {
        return this.service.update(id, updateDto);
    }
    remove(id) {
        return this.service.remove(id);
    }
};
exports.LetterRequestsController = LetterRequestsController;
__decorate([
    (0, common_1.Post)(),
    (0, permissions_decorator_1.Permissions)('letters.create'),
    (0, swagger_1.ApiOperation)({ summary: 'Create new LetterRequest' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LetterRequestsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, permissions_decorator_1.Permissions)('letters.read'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all LetterRequest with Scope Authorization' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LetterRequestsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, permissions_decorator_1.Permissions)('letters.read'),
    (0, swagger_1.ApiOperation)({ summary: 'Get LetterRequest by id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LetterRequestsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id/approve'),
    (0, permissions_decorator_1.Permissions)('letters.approve'),
    (0, swagger_1.ApiOperation)({ summary: 'Approve LetterRequest' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LetterRequestsController.prototype, "approve", null);
__decorate([
    (0, common_1.Patch)(':id/reject'),
    (0, permissions_decorator_1.Permissions)('letters.reject'),
    (0, swagger_1.ApiOperation)({ summary: 'Reject LetterRequest' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LetterRequestsController.prototype, "reject", null);
__decorate([
    (0, common_1.Post)(':id/generate-pdf'),
    (0, permissions_decorator_1.Permissions)('letters.generate'),
    (0, swagger_1.ApiOperation)({ summary: 'Generate PDF for Approved Letter' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'PDF generated successfully with QR code' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LetterRequestsController.prototype, "generatePdf", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, permissions_decorator_1.Permissions)('letters.update'),
    (0, swagger_1.ApiOperation)({ summary: 'Update LetterRequest' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], LetterRequestsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, permissions_decorator_1.Permissions)('letters.delete'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete LetterRequest' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LetterRequestsController.prototype, "remove", null);
exports.LetterRequestsController = LetterRequestsController = __decorate([
    (0, swagger_1.ApiTags)('letters'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, permissions_guard_1.PermissionsGuard),
    (0, common_1.Controller)('letters'),
    __metadata("design:paramtypes", [letters_service_1.LetterRequestsService])
], LetterRequestsController);
//# sourceMappingURL=letters.controller.js.map