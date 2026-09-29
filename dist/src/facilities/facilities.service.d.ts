import { PrismaService } from '../database/prisma.service';
export declare class FacilitysService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        location: string;
        condition: string;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            name: string;
            description: string | null;
            isActive: boolean;
            location: string;
            condition: string;
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
        name: string;
        description: string | null;
        isActive: boolean;
        location: string;
        condition: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        location: string;
        condition: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        location: string;
        condition: string;
    }>;
}
