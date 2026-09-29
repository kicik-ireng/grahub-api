import { Injectable, NotFoundException, InternalServerErrorException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { applyScopeFilter } from '../common/utils/scope.util';
import * as crypto from 'crypto';

@Injectable()
export class LetterRequestsService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: any, user: any) {
    try {
      // In a real app, inject user.resident.id as residentId
      return await this.prisma.letterRequest.create({
        data: {
          ...createDto,
          status: 'SUBMITTED',
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Failed to create letter request: ' + error.message);
    }
  }

  async findAll(query: any = {}, user: any) {
    try {
      const page = Number(query.page) || 1;
      const limit = Number(query.limit) || 10;
      const skip = (page - 1) * limit;
      
      // Apply Scope Authorization Filter
      const scopeFilter = applyScopeFilter(user, 'LetterRequest');
      
      const whereClause = {
        ...scopeFilter,
        ...(query.status && { status: query.status }),
      };

      const [data, total] = await Promise.all([
        this.prisma.letterRequest.findMany({
          where: whereClause,
          skip,
          take: limit,
          orderBy: { createdAt: query.sortOrder === 'asc' ? 'asc' : 'desc' },
        }),
        this.prisma.letterRequest.count({ where: whereClause }),
      ]);

      return {
        data,
        meta: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        }
      };
    } catch (error) {
      throw new InternalServerErrorException('Failed to fetch letter requests: ' + error.message);
    }
  }

  async findOne(id: string) {
    try {
      const record = await this.prisma.letterRequest.findUnique({
        where: { id },
      });
      if (!record) throw new NotFoundException('LetterRequest not found');
      return record;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to fetch letter request: ' + error.message);
    }
  }

  async updateStatus(id: string, status: 'APPROVED' | 'REJECTED' | 'VERIFICATION', user: any) {
    try {
      const letter = await this.findOne(id);
      
      // Additional business logic for verifying if user can approve
      return await this.prisma.letterRequest.update({
        where: { id },
        data: { status },
      });
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException('Failed to update letter status: ' + error.message);
    }
  }

  async generatePdf(id: string, user: any) {
    try {
      const letter = await this.findOne(id);
      if (letter.status !== 'APPROVED') {
        throw new BadRequestException('Only APPROVED letters can generate PDF');
      }

      // Generate a verification code for the QR
      const verificationCode = crypto.randomBytes(8).toString('hex');
      const verificationUrl = `/public/letters/verify/${verificationCode}`;

      // Mocking HTML to PDF logic (e.g. using Puppeteer or pdfkit)
      // const pdfBuffer = await pdfGeneratorService.generate(htmlTemplate, data);
      const mockPdfUrl = `https://storage.grahub.local/letters/${id}.pdf`;

      // Log generation action
      await this.prisma.activityLog.create({
        data: {
          userId: user.userId,
          action: 'GENERATE_PDF',
          module: 'letters',
          details: `Generated PDF for letter ${id}`
        }
      });

      return await this.prisma.letterRequest.update({
        where: { id },
        data: { 
          status: 'READY_TO_PRINT',
        },
      });
    } catch (error) {
      if (error instanceof NotFoundException || error instanceof BadRequestException) throw error;
      throw new InternalServerErrorException('Failed to generate PDF: ' + error.message);
    }
  }

  async update(id: string, updateDto: any) {
    try {
      await this.findOne(id);
      return await this.prisma.letterRequest.update({
        where: { id },
        data: updateDto,
      });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to update letter request: ' + error.message);
    }
  }

  async remove(id: string) {
    try {
      await this.findOne(id);
      return await this.prisma.letterRequest.delete({
        where: { id },
      });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to delete letter request: ' + error.message);
    }
  }
}
