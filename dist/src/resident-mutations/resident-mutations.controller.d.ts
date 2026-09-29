import { ResidentMutationsService } from './resident-mutations.service';
export declare class ResidentMutationsController {
    private readonly service;
    constructor(service: ResidentMutationsService);
    create(createDto: any): Promise<{
        id: string;
        type: import("@prisma/client").$Enums.MutationType;
        notes: string | null;
        residentId: string;
        date: Date;
        reason: string | null;
        fromRtId: string | null;
        toRtId: string | null;
        fromRwId: string | null;
        toRwId: string | null;
    }>;
    findAll(query: any): Promise<{
        data: {
            id: string;
            type: import("@prisma/client").$Enums.MutationType;
            notes: string | null;
            residentId: string;
            date: Date;
            reason: string | null;
            fromRtId: string | null;
            toRtId: string | null;
            fromRwId: string | null;
            toRwId: string | null;
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
        type: import("@prisma/client").$Enums.MutationType;
        notes: string | null;
        residentId: string;
        date: Date;
        reason: string | null;
        fromRtId: string | null;
        toRtId: string | null;
        fromRwId: string | null;
        toRwId: string | null;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        type: import("@prisma/client").$Enums.MutationType;
        notes: string | null;
        residentId: string;
        date: Date;
        reason: string | null;
        fromRtId: string | null;
        toRtId: string | null;
        fromRwId: string | null;
        toRwId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        type: import("@prisma/client").$Enums.MutationType;
        notes: string | null;
        residentId: string;
        date: Date;
        reason: string | null;
        fromRtId: string | null;
        toRtId: string | null;
        fromRwId: string | null;
        toRwId: string | null;
    }>;
}
