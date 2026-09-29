import { FacilitysService } from './facilities.service';
export declare class FacilitysController {
    private readonly service;
    constructor(service: FacilitysService);
    create(createDto: any): Promise<{
        id: string;
        name: string;
        description: string | null;
        isActive: boolean;
        location: string;
        condition: string;
    }>;
    findAll(query: any): Promise<{
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
