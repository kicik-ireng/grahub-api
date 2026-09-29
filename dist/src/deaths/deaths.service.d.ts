import { PrismaService } from '../database/prisma.service';
export declare class DeathsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.ApprovalStatus;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        place: string;
        attachmentUrl: string | null;
        reporterId: string;
        cause: string | null;
        deceasedId: string;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            status: import("@prisma/client").$Enums.ApprovalStatus;
            createdAt: Date;
            updatedAt: Date;
            date: Date;
            place: string;
            attachmentUrl: string | null;
            reporterId: string;
            cause: string | null;
            deceasedId: string;
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
        date: Date;
        place: string;
        attachmentUrl: string | null;
        reporterId: string;
        cause: string | null;
        deceasedId: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.ApprovalStatus;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        place: string;
        attachmentUrl: string | null;
        reporterId: string;
        cause: string | null;
        deceasedId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.ApprovalStatus;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        place: string;
        attachmentUrl: string | null;
        reporterId: string;
        cause: string | null;
        deceasedId: string;
    }>;
}
