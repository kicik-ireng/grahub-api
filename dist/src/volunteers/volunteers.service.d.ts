import { PrismaService } from '../database/prisma.service';
export declare class VolunteersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        residentId: string;
        skills: string;
        availability: string;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            residentId: string;
            skills: string;
            availability: string;
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
        residentId: string;
        skills: string;
        availability: string;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        residentId: string;
        skills: string;
        availability: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        residentId: string;
        skills: string;
        availability: string;
    }>;
}
