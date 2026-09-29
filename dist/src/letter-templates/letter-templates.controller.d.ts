import { LetterTemplatesService } from './letter-templates.service';
export declare class LetterTemplatesController {
    private readonly service;
    constructor(service: LetterTemplatesService);
    create(createDto: any): Promise<{
        id: string;
        name: string;
        letterTypeId: string;
        isActive: boolean;
        contentHtml: string;
        version: number;
    }>;
    findAll(query: any): Promise<{
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
