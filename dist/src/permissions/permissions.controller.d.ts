import { PermissionsService } from './permissions.service';
export declare class PermissionsController {
    private readonly service;
    constructor(service: PermissionsService);
    create(createDto: any): Promise<{
        id: string;
        code: string;
        name: string;
        group: string;
    }>;
    findAll(query: any): Promise<{
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
