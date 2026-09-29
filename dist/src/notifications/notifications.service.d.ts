import { PrismaService } from '../database/prisma.service';
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        createdAt: Date;
        type: string;
        title: string;
        userId: string | null;
        content: string;
        isRead: boolean;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            createdAt: Date;
            type: string;
            title: string;
            userId: string | null;
            content: string;
            isRead: boolean;
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
        createdAt: Date;
        type: string;
        title: string;
        userId: string | null;
        content: string;
        isRead: boolean;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        createdAt: Date;
        type: string;
        title: string;
        userId: string | null;
        content: string;
        isRead: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        type: string;
        title: string;
        userId: string | null;
        content: string;
        isRead: boolean;
    }>;
}
