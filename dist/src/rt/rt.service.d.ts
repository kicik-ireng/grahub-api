import { PrismaService } from '../database/prisma.service';
export declare class RTsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        number: string;
        id: string;
        rwId: string;
    }>;
    findAll(query?: any): Promise<{
        data: {
            number: string;
            id: string;
            rwId: string;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    findOne(id: string): Promise<{
        number: string;
        id: string;
        rwId: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        number: string;
        id: string;
        rwId: string;
    }>;
    remove(id: string): Promise<{
        number: string;
        id: string;
        rwId: string;
    }>;
}
