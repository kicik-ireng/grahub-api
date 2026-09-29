import { LetterRequestsService } from './letters.service';
export declare class LetterRequestsController {
    private readonly service;
    constructor(service: LetterRequestsService);
    create(createDto: any, req: any): Promise<{
        number: string | null;
        id: string;
        status: import("@prisma/client").$Enums.LetterStatus;
        createdAt: Date;
        updatedAt: Date;
        dynamicData: import("@prisma/client/runtime/library").JsonValue | null;
        qrCodeUrl: string | null;
        verificationCode: string | null;
        letterTypeId: string;
        templateId: string | null;
        requesterId: string;
    }>;
    findAll(query: any, req: any): Promise<{
        data: {
            number: string | null;
            id: string;
            status: import("@prisma/client").$Enums.LetterStatus;
            createdAt: Date;
            updatedAt: Date;
            dynamicData: import("@prisma/client/runtime/library").JsonValue | null;
            qrCodeUrl: string | null;
            verificationCode: string | null;
            letterTypeId: string;
            templateId: string | null;
            requesterId: string;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        number: string | null;
        id: string;
        status: import("@prisma/client").$Enums.LetterStatus;
        createdAt: Date;
        updatedAt: Date;
        dynamicData: import("@prisma/client/runtime/library").JsonValue | null;
        qrCodeUrl: string | null;
        verificationCode: string | null;
        letterTypeId: string;
        templateId: string | null;
        requesterId: string;
    }>;
    approve(id: string, req: any): Promise<{
        number: string | null;
        id: string;
        status: import("@prisma/client").$Enums.LetterStatus;
        createdAt: Date;
        updatedAt: Date;
        dynamicData: import("@prisma/client/runtime/library").JsonValue | null;
        qrCodeUrl: string | null;
        verificationCode: string | null;
        letterTypeId: string;
        templateId: string | null;
        requesterId: string;
    }>;
    reject(id: string, req: any): Promise<{
        number: string | null;
        id: string;
        status: import("@prisma/client").$Enums.LetterStatus;
        createdAt: Date;
        updatedAt: Date;
        dynamicData: import("@prisma/client/runtime/library").JsonValue | null;
        qrCodeUrl: string | null;
        verificationCode: string | null;
        letterTypeId: string;
        templateId: string | null;
        requesterId: string;
    }>;
    generatePdf(id: string, req: any): Promise<{
        number: string | null;
        id: string;
        status: import("@prisma/client").$Enums.LetterStatus;
        createdAt: Date;
        updatedAt: Date;
        dynamicData: import("@prisma/client/runtime/library").JsonValue | null;
        qrCodeUrl: string | null;
        verificationCode: string | null;
        letterTypeId: string;
        templateId: string | null;
        requesterId: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        number: string | null;
        id: string;
        status: import("@prisma/client").$Enums.LetterStatus;
        createdAt: Date;
        updatedAt: Date;
        dynamicData: import("@prisma/client/runtime/library").JsonValue | null;
        qrCodeUrl: string | null;
        verificationCode: string | null;
        letterTypeId: string;
        templateId: string | null;
        requesterId: string;
    }>;
    remove(id: string): Promise<{
        number: string | null;
        id: string;
        status: import("@prisma/client").$Enums.LetterStatus;
        createdAt: Date;
        updatedAt: Date;
        dynamicData: import("@prisma/client/runtime/library").JsonValue | null;
        qrCodeUrl: string | null;
        verificationCode: string | null;
        letterTypeId: string;
        templateId: string | null;
        requesterId: string;
    }>;
}
