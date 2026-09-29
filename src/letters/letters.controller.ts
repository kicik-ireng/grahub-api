import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query, Request, BadRequestException } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { LetterRequestsService } from './letters.service';

@ApiTags('letters')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('letters')
export class LetterRequestsController {
  constructor(private readonly service: LetterRequestsService) {}

  @Post()
  @Permissions('letters.create')
  @ApiOperation({ summary: 'Create new LetterRequest' })
  create(@Body() createDto: any, @Request() req: any) {
    return this.service.create(createDto, req.user);
  }

  @Get()
  @Permissions('letters.read')
  @ApiOperation({ summary: 'Get all LetterRequest with Scope Authorization' })
  findAll(@Query() query: any, @Request() req: any) {
    return this.service.findAll(query, req.user);
  }

  @Get(':id')
  @Permissions('letters.read')
  @ApiOperation({ summary: 'Get LetterRequest by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id/approve')
  @Permissions('letters.approve')
  @ApiOperation({ summary: 'Approve LetterRequest' })
  approve(@Param('id') id: string, @Request() req: any) {
    return this.service.updateStatus(id, 'APPROVED', req.user);
  }
  
  @Patch(':id/reject')
  @Permissions('letters.reject')
  @ApiOperation({ summary: 'Reject LetterRequest' })
  reject(@Param('id') id: string, @Request() req: any) {
    return this.service.updateStatus(id, 'REJECTED', req.user);
  }

  @Post(':id/generate-pdf')
  @Permissions('letters.generate')
  @ApiOperation({ summary: 'Generate PDF for Approved Letter' })
  @ApiResponse({ status: 200, description: 'PDF generated successfully with QR code' })
  generatePdf(@Param('id') id: string, @Request() req: any) {
    return this.service.generatePdf(id, req.user);
  }

  @Patch(':id')
  @Permissions('letters.update')
  @ApiOperation({ summary: 'Update LetterRequest' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('letters.delete')
  @ApiOperation({ summary: 'Delete LetterRequest' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
