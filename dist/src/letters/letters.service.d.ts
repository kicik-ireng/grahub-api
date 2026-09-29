import { PrismaService } from '../database/prisma.service';
export declare class LetterRequestsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any, user: any): Promise<{
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
    findAll(query: any | undefined, user: any): Promise<{
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
    updateStatus(id: string, status: 'APPROVED' | 'REJECTED' | 'VERIFICATION', user: any): Promise<{
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
    generatePdf(id: string, user: any): Promise<{
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
