import { PrismaService } from '../database/prisma.service';
export declare class KelurahansService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        code: string;
        name: string;
        address: string | null;
        postalCode: string | null;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            code: string;
            name: string;
            address: string | null;
            postalCode: string | null;
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
        address: string | null;
        postalCode: string | null;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        code: string;
        name: string;
        address: string | null;
        postalCode: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        code: string;
        name: string;
        address: string | null;
        postalCode: string | null;
    }>;
}
