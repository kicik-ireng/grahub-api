import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
