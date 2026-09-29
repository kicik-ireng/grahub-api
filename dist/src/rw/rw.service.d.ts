import { PrismaService } from '../database/prisma.service';
export declare class RWsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        number: string;
        id: string;
        kelurahanId: string;
    }>;
    findAll(query?: any): Promise<{
        data: {
            number: string;
            id: string;
            kelurahanId: string;
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
        kelurahanId: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        number: string;
        id: string;
        kelurahanId: string;
    }>;
    remove(id: string): Promise<{
        number: string;
        id: string;
        kelurahanId: string;
    }>;
}
