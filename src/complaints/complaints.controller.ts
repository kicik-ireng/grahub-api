import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { ComplaintsService } from './complaints.service';

@ApiTags('complaints')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('complaints')
export class ComplaintsController {
  constructor(private readonly service: ComplaintsService) {}

  @Post()
  @Permissions('complaints.create')
  @ApiOperation({ summary: 'Create new Complaint' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('complaints.read')
  @ApiOperation({ summary: 'Get all Complaint' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('complaints.read')
  @ApiOperation({ summary: 'Get Complaint by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('complaints.update')
  @ApiOperation({ summary: 'Update Complaint' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('complaints.delete')
  @ApiOperation({ summary: 'Delete Complaint' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
