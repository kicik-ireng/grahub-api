import { RWsService } from './rw.service';
export declare class RWsController {
    private readonly service;
    constructor(service: RWsService);
    create(createDto: any): Promise<{
        number: string;
        id: string;
        kelurahanId: string;
    }>;
    findAll(query: any): Promise<{
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
