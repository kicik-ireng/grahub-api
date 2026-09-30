import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class AnnouncementsService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: any) {
    try {
      return this.prisma.announcement.create({
        data: createDto,
      });
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Failed to create record: ' + error.message,
      );
    }
  }

  async findAll(query: any = {}) {
    try {
      const page = Number(query.page) || 1;
      const limit = Number(query.limit) || 10;
      const skip = (page - 1) * limit;

      const [data, total] = await Promise.all([
        this.prisma.announcement.findMany({
          skip,
          take: limit,
        }),
        this.prisma.announcement.count(),
      ]);

      return {
        data,
        meta: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      };
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Failed to findAll record: ' + error.message,
      );
    }
  }

  async findOne(id: string) {
    try {
      const record = await this.prisma.announcement.findUnique({
        where: { id },
      });
      if (!record) throw new NotFoundException('Announcement not found');
      return record;
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Failed to findOne record: ' + error.message,
      );
    }
  }

  async update(id: string, updateDto: any) {
    try {
      await this.findOne(id); // verify exists
      return this.prisma.announcement.update({
        where: { id },
        data: updateDto,
      });
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Failed to update record: ' + error.message,
      );
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id); // verify exists
      return this.prisma.announcement.delete({
        where: { id },
      });
    } catch (error) {
      if (
        error instanceof NotFoundException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new InternalServerErrorException(
        'Failed to remove record: ' + error.message,
      );
    }
  }
}
