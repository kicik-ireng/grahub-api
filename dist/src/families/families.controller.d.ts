import { FamilysService } from './families.service';
export declare class FamilysController {
    private readonly service;
    constructor(service: FamilysService);
    create(createDto: any): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.ResidentStatus;
        createdAt: Date;
        updatedAt: Date;
        familyCardNumber: string;
        address: string;
        rtId: string;
        rwId: string;
        kelurahanId: string;
        headResidentId: string | null;
    }>;
    findAll(query: any): Promise<{
        data: {
            id: string;
            status: import("@prisma/client").$Enums.ResidentStatus;
            createdAt: Date;
            updatedAt: Date;
            familyCardNumber: string;
            address: string;
            rtId: string;
            rwId: string;
            kelurahanId: string;
            headResidentId: string | null;
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
        status: import("@prisma/client").$Enums.ResidentStatus;
        createdAt: Date;
        updatedAt: Date;
        familyCardNumber: string;
        address: string;
        rtId: string;
        rwId: string;
        kelurahanId: string;
        headResidentId: string | null;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.ResidentStatus;
        createdAt: Date;
        updatedAt: Date;
        familyCardNumber: string;
        address: string;
        rtId: string;
        rwId: string;
        kelurahanId: string;
        headResidentId: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.ResidentStatus;
        createdAt: Date;
        updatedAt: Date;
        familyCardNumber: string;
        address: string;
        rtId: string;
        rwId: string;
        kelurahanId: string;
        headResidentId: string | null;
    }>;
}
