import { PrismaService } from '../database/prisma.service';
export declare class PermissionsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        code: string;
        name: string;
        group: string;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            code: string;
            name: string;
            group: string;
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
        code: string;
        name: string;
        group: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        code: string;
        name: string;
        group: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        code: string;
        name: string;
        group: string;
    }>;
}
