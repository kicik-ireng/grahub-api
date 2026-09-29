import { DuesService } from './dues.service';
export declare class DuesController {
    private readonly service;
    constructor(service: DuesService);
    create(createDto: any): Promise<{
        id: string;
        description: string | null;
        status: import("@prisma/client").$Enums.DueStatus;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        familyId: string | null;
        residentId: string | null;
        amount: import("@prisma/client/runtime/library").Decimal;
        dueDate: Date;
    }>;
    findAll(query: any): Promise<{
        data: {
            id: string;
            description: string | null;
            status: import("@prisma/client").$Enums.DueStatus;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            familyId: string | null;
            residentId: string | null;
            amount: import("@prisma/client/runtime/library").Decimal;
            dueDate: Date;
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
        description: string | null;
        status: import("@prisma/client").$Enums.DueStatus;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        familyId: string | null;
        residentId: string | null;
        amount: import("@prisma/client/runtime/library").Decimal;
        dueDate: Date;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        description: string | null;
        status: import("@prisma/client").$Enums.DueStatus;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        familyId: string | null;
        residentId: string | null;
        amount: import("@prisma/client/runtime/library").Decimal;
        dueDate: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        description: string | null;
        status: import("@prisma/client").$Enums.DueStatus;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        familyId: string | null;
        residentId: string | null;
        amount: import("@prisma/client/runtime/library").Decimal;
        dueDate: Date;
    }>;
}
