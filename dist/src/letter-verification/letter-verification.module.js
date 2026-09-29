"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LetterVerificationModule = void 0;
const common_1 = require("@nestjs/common");
const letter_verification_controller_1 = require("./letter-verification.controller");
const letter_verification_service_1 = require("./letter-verification.service");
let LetterVerificationModule = class LetterVerificationModule {
};
exports.LetterVerificationModule = LetterVerificationModule;
exports.LetterVerificationModule = LetterVerificationModule = __decorate([
    (0, common_1.Module)({
        controllers: [letter_verification_controller_1.LetterVerificationController],
        providers: [letter_verification_service_1.LetterVerificationService]
    })
], LetterVerificationModule);
//# sourceMappingURL=letter-verification.module.js.map