import { PrismaService } from '../database/prisma.service';
export declare class FinanceTransactionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        description: string;
        status: import("@prisma/client").$Enums.ApprovalStatus;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.FinanceTransactionType;
        date: Date;
        attachmentUrl: string | null;
        amount: import("@prisma/client/runtime/library").Decimal;
        accountId: string;
        categoryId: string;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            description: string;
            status: import("@prisma/client").$Enums.ApprovalStatus;
            createdAt: Date;
            updatedAt: Date;
            type: import("@prisma/client").$Enums.FinanceTransactionType;
            date: Date;
            attachmentUrl: string | null;
            amount: import("@prisma/client/runtime/library").Decimal;
            accountId: string;
            categoryId: string;
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
        description: string;
        status: import("@prisma/client").$Enums.ApprovalStatus;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.FinanceTransactionType;
        date: Date;
        attachmentUrl: string | null;
        amount: import("@prisma/client/runtime/library").Decimal;
        accountId: string;
        categoryId: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        description: string;
        status: import("@prisma/client").$Enums.ApprovalStatus;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.FinanceTransactionType;
        date: Date;
        attachmentUrl: string | null;
        amount: import("@prisma/client/runtime/library").Decimal;
        accountId: string;
        categoryId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        description: string;
        status: import("@prisma/client").$Enums.ApprovalStatus;
        createdAt: Date;
        updatedAt: Date;
        type: import("@prisma/client").$Enums.FinanceTransactionType;
        date: Date;
        attachmentUrl: string | null;
        amount: import("@prisma/client/runtime/library").Decimal;
        accountId: string;
        categoryId: string;
    }>;
}
