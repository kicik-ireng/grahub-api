import { PrismaService } from '../database/prisma.service';
export declare class DocumentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string;
        scope: string;
        isDeleted: boolean;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            category: string;
            scope: string;
            isDeleted: boolean;
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
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string;
        scope: string;
        isDeleted: boolean;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string;
        scope: string;
        isDeleted: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        category: string;
        scope: string;
        isDeleted: boolean;
    }>;
}
