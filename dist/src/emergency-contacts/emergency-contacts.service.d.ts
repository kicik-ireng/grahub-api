import { PrismaService } from '../database/prisma.service';
export declare class EmergencyContactsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        name: string;
        phone: string;
        address: string | null;
        category: string;
        isActive: boolean;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            name: string;
            phone: string;
            address: string | null;
            category: string;
            isActive: boolean;
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
        phone: string;
        address: string | null;
        category: string;
        isActive: boolean;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        name: string;
        phone: string;
        address: string | null;
        category: string;
        isActive: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        phone: string;
        address: string | null;
        category: string;
        isActive: boolean;
    }>;
}
