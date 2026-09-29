import { PrismaService } from '../database/prisma.service';
export declare class AnnouncementsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        content: string;
        attachmentUrl: string | null;
        priority: string;
        targetScope: string;
        publishDate: Date;
        expiryDate: Date | null;
        imageUrl: string | null;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            createdAt: Date;
            title: string;
            content: string;
            attachmentUrl: string | null;
            priority: string;
            targetScope: string;
            publishDate: Date;
            expiryDate: Date | null;
            imageUrl: string | null;
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
        title: string;
        content: string;
        attachmentUrl: string | null;
        priority: string;
        targetScope: string;
        publishDate: Date;
        expiryDate: Date | null;
        imageUrl: string | null;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        content: string;
        attachmentUrl: string | null;
        priority: string;
        targetScope: string;
        publishDate: Date;
        expiryDate: Date | null;
        imageUrl: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        title: string;
        content: string;
        attachmentUrl: string | null;
        priority: string;
        targetScope: string;
        publishDate: Date;
        expiryDate: Date | null;
        imageUrl: string | null;
    }>;
}
