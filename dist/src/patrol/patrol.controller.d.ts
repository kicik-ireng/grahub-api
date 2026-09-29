import { PatrolSchedulesService } from './patrol.service';
export declare class PatrolSchedulesController {
    private readonly service;
    constructor(service: PatrolSchedulesService);
    create(createDto: any): Promise<{
        id: string;
        notes: string | null;
        date: Date;
        shift: string;
    }>;
    findAll(query: any): Promise<{
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
