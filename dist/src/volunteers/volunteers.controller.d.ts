import { VolunteersService } from './volunteers.service';
export declare class VolunteersController {
    private readonly service;
    constructor(service: VolunteersService);
    create(createDto: any): Promise<{
        id: string;
        residentId: string;
        skills: string;
        availability: string;
    }>;
    findAll(query: any): Promise<{
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
