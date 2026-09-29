import { AnnouncementsService } from './announcements.service';
export declare class AnnouncementsController {
    private readonly service;
    constructor(service: AnnouncementsService);
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
    findAll(query: any): Promise<{
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
