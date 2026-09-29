import { ActivitysService } from './activities.service';
export declare class ActivitysController {
    private readonly service;
    constructor(service: ActivitysService);
    create(createDto: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        title: string;
        date: Date;
        location: string;
        organizer: string | null;
        budget: import("@prisma/client/runtime/library").Decimal | null;
        scope: string;
    }>;
    findAll(query: any): Promise<{
        data: {
            id: string;
            description: string | null;
            createdAt: Date;
            title: string;
            date: Date;
            location: string;
            organizer: string | null;
            budget: import("@prisma/client/runtime/library").Decimal | null;
            scope: string;
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
        title: string;
        date: Date;
        location: string;
        organizer: string | null;
        budget: import("@prisma/client/runtime/library").Decimal | null;
        scope: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        title: string;
        date: Date;
        location: string;
        organizer: string | null;
        budget: import("@prisma/client/runtime/library").Decimal | null;
        scope: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        description: string | null;
        createdAt: Date;
        title: string;
        date: Date;
        location: string;
        organizer: string | null;
        budget: import("@prisma/client/runtime/library").Decimal | null;
        scope: string;
    }>;
}
