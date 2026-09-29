import { LetterTypesService } from './letter-types.service';
export declare class LetterTypesController {
    private readonly service;
    constructor(service: LetterTypesService);
    create(createDto: any): Promise<{
        id: string;
        code: string;
        name: string;
        description: string | null;
        category: string;
        requiresRtApproval: boolean;
        requiresRwApproval: boolean;
        requiresKelurahanApproval: boolean;
        requiresSignature: boolean;
        requiresAttachment: boolean;
        isActive: boolean;
    }>;
    findAll(query: any): Promise<{
        data: {
            id: string;
            code: string;
            name: string;
            description: string | null;
            category: string;
            requiresRtApproval: boolean;
            requiresRwApproval: boolean;
            requiresKelurahanApproval: boolean;
            requiresSignature: boolean;
            requiresAttachment: boolean;
            isActive: boolean;
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
        category: string;
        requiresRtApproval: boolean;
        requiresRwApproval: boolean;
        requiresKelurahanApproval: boolean;
        requiresSignature: boolean;
        requiresAttachment: boolean;
        isActive: boolean;
    }>;
    update(id: string, updateDto: any): Promise<{
        id: string;
        code: string;
        name: string;
        description: string | null;
        category: string;
        requiresRtApproval: boolean;
        requiresRwApproval: boolean;
        requiresKelurahanApproval: boolean;
        requiresSignature: boolean;
        requiresAttachment: boolean;
        isActive: boolean;
    }>;
    remove(id: string): Promise<{
        id: string;
        code: string;
        name: string;
        description: string | null;
        category: string;
        requiresRtApproval: boolean;
        requiresRwApproval: boolean;
        requiresKelurahanApproval: boolean;
        requiresSignature: boolean;
        requiresAttachment: boolean;
        isActive: boolean;
    }>;
}
