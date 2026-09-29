import { PrismaService } from '../database/prisma.service';
export declare class LetterTemplatesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createDto: any): Promise<{
        id: string;
        name: string;
        letterTypeId: string;
        isActive: boolean;
        contentHtml: string;
        version: number;
    }>;
    findAll(query?: any): Promise<{
        data: {
            id: string;
            name: string;
            letterTypeId: string;
            isActive: boolean;
            contentHtml: string;
            version: number;
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
        letterTypeId: string;
        isActive: boolean;
        contentHtml: string;
        version: number;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        name: string;
        letterTypeId: string;
        isActive: boolean;
        contentHtml: string;
        version: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        name: string;
        letterTypeId: string;
        isActive: boolean;
        contentHtml: string;
        version: number;
    }>;
}
