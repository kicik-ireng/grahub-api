import { PrismaService } from '../database/prisma.service';
export declare class BirthsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.ApprovalStatus;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        date: Date;
        place: string;
        attachmentUrl: string | null;
        reporterId: string;
        bornResidentId: string | null;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            status: import("@prisma/client").$Enums.ApprovalStatus;
            createdAt: Date;
            updatedAt: Date;
            notes: string | null;
            date: Date;
            place: string;
            attachmentUrl: string | null;
            reporterId: string;
            bornResidentId: string | null;
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
        status: import("@prisma/client").$Enums.ApprovalStatus;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        date: Date;
        place: string;
        attachmentUrl: string | null;
        reporterId: string;
        bornResidentId: string | null;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.ApprovalStatus;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        date: Date;
        place: string;
        attachmentUrl: string | null;
        reporterId: string;
        bornResidentId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.ApprovalStatus;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        date: Date;
        place: string;
        attachmentUrl: string | null;
        reporterId: string;
        bornResidentId: string | null;
    }>;
}
