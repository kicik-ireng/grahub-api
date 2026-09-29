import { RolesService } from './roles.service';
export declare class RolesController {
    private readonly service;
    constructor(service: RolesService);
    create(createDto: any): Promise<{
        id: string;
        code: string;
        name: string;
        description: string | null;
    }>;
    findAll(query: any): Promise<{
        data: {
            id: string;
            code: string;
            name: string;
            description: string | null;
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
        description: string | null;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        code: string;
        name: string;
        description: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        code: string;
        name: string;
        description: string | null;
    }>;
}
