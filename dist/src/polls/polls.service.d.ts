import { PrismaService } from '../database/prisma.service';
export declare class PollsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        description: string | null;
        title: string;
        isActive: boolean;
        startDate: Date;
        endDate: Date;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            description: string | null;
            title: string;
            isActive: boolean;
            startDate: Date;
            endDate: Date;
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
        title: string;
        isActive: boolean;
        startDate: Date;
        endDate: Date;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        description: string | null;
        title: string;
        isActive: boolean;
        startDate: Date;
        endDate: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        description: string | null;
        title: string;
        isActive: boolean;
        startDate: Date;
        endDate: Date;
    }>;
}
