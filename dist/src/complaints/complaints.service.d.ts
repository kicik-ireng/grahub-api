import { PrismaService } from '../database/prisma.service';
export declare class ComplaintsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        description: string;
        status: import("@prisma/client").$Enums.ComplaintStatus;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        residentId: string;
        category: string;
        priority: import("@prisma/client").$Enums.ComplaintPriority;
        assignedTo: string | null;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            description: string;
            status: import("@prisma/client").$Enums.ComplaintStatus;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            residentId: string;
            category: string;
            priority: import("@prisma/client").$Enums.ComplaintPriority;
            assignedTo: string | null;
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
        status: import("@prisma/client").$Enums.ComplaintStatus;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        residentId: string;
        category: string;
        priority: import("@prisma/client").$Enums.ComplaintPriority;
        assignedTo: string | null;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        description: string;
        status: import("@prisma/client").$Enums.ComplaintStatus;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        residentId: string;
        category: string;
        priority: import("@prisma/client").$Enums.ComplaintPriority;
        assignedTo: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        description: string;
        status: import("@prisma/client").$Enums.ComplaintStatus;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        residentId: string;
        category: string;
        priority: import("@prisma/client").$Enums.ComplaintPriority;
        assignedTo: string | null;
    }>;
}
