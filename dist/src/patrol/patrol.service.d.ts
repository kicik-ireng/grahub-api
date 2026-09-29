import { PrismaService } from '../database/prisma.service';
export declare class PatrolSchedulesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        notes: string | null;
        date: Date;
        shift: string;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            notes: string | null;
            date: Date;
            shift: string;
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
        notes: string | null;
        date: Date;
        shift: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        notes: string | null;
        date: Date;
        shift: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        notes: string | null;
        date: Date;
        shift: string;
    }>;
}
