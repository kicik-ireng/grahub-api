import { PrismaService } from '../database/prisma.service';
export declare class PaymentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        residentId: string;
        date: Date;
        amount: import("@prisma/client/runtime/library").Decimal;
        method: string;
        proofUrl: string | null;
        dueId: string;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            status: import("@prisma/client").$Enums.PaymentStatus;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            residentId: string;
            date: Date;
            amount: import("@prisma/client/runtime/library").Decimal;
            method: string;
            proofUrl: string | null;
            dueId: string;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        residentId: string;
        date: Date;
        amount: import("@prisma/client/runtime/library").Decimal;
        method: string;
        proofUrl: string | null;
        dueId: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        residentId: string;
        date: Date;
        amount: import("@prisma/client/runtime/library").Decimal;
        method: string;
        proofUrl: string | null;
        dueId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        residentId: string;
        date: Date;
        amount: import("@prisma/client/runtime/library").Decimal;
        method: string;
        proofUrl: string | null;
        dueId: string;
    }>;
}
