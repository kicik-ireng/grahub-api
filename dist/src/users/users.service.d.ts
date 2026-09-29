import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        roles: {
            role: {
                code: string;
                name: string;
            };
        }[];
        id: string;
        email: string;
        status: import("@prisma/client").$Enums.UserStatus;
        createdAt: Date;
    }>;
    findAll(): Promise<{
        roles: {
            role: {
                code: string;
                name: string;
            };
        }[];
        id: string;
        email: string;
        status: import("@prisma/client").$Enums.UserStatus;
        createdAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        roles: {
            role: {
                code: string;
                name: string;
            };
        }[];
        id: string;
        email: string;
        status: import("@prisma/client").$Enums.UserStatus;
        createdAt: Date;
    }>;
}
