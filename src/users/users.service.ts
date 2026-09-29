import { Injectable, NotFoundException, ConflictException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    try {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const data: any = {
      email: createUserDto.email,
      password: hashedPassword,
    };

    if (createUserDto.roleIds && createUserDto.roleIds.length > 0) {
      data.roles = {
        create: createUserDto.roleIds.map(roleId => ({
          role: {
            connect: { id: roleId }
          }
        }))
      };
    }

    const user = await this.prisma.user.create({
      data,
      select: {
        id: true,
        email: true,
        status: true,
        createdAt: true,
        roles: {
          select: { role: { select: { name: true, code: true } } }
        }
      }
    });

    return user;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to create record: ' + error.message);
    }
  }

  async findAll() {
    try {
    return this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        status: true,
        createdAt: true,
        roles: {
          select: { role: { select: { name: true, code: true } } }
        }
      },
    });
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to findAll record: ' + error.message);
    }
  }

  async findOne(id: string) {
    try {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        status: true,
        createdAt: true,
        roles: {
          select: { role: { select: { name: true, code: true } } }
        }
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to findOne record: ' + error.message);
    }
  }
}
