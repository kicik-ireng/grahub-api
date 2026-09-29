import { PrismaService } from '../database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(loginDto: LoginDto): Promise<{
        accessToken: string;
        user: {
            id: string;
            email: string;
            status: "ACTIVE";
        };
    }>;
    me(userId: string): Promise<{
        roles: string[];
        permissions: string[];
        id: string;
        email: string;
        status: import("@prisma/client").$Enums.UserStatus;
        resident: {
            id: string;
            email: string | null;
            status: import("@prisma/client").$Enums.ResidentStatus;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            nik: string;
            familyCardNumber: string;
            fullName: string;
            nickname: string | null;
            birthPlace: string;
            birthDate: Date;
            gender: import("@prisma/client").$Enums.Gender;
            maritalStatus: import("@prisma/client").$Enums.MaritalStatus;
            occupation: string | null;
            education: string | null;
            nationality: string;
            phone: string | null;
            address: string;
            photo: string | null;
            moveInDate: Date | null;
            moveOutDate: Date | null;
            moveOutReason: string | null;
            notes: string | null;
            rtId: string;
            rwId: string;
            kelurahanId: string;
            familyId: string | null;
        } | null;
    }>;
}
