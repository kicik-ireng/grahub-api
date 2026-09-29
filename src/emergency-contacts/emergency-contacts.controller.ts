import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { EmergencyContactsService } from './emergency-contacts.service';

@ApiTags('emergency-contacts')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('emergency-contacts')
export class EmergencyContactsController {
  constructor(private readonly service: EmergencyContactsService) {}

  @Post()
  @Permissions('emergency-contacts.create')
  @ApiOperation({ summary: 'Create new EmergencyContact' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('emergency-contacts.read')
  @ApiOperation({ summary: 'Get all EmergencyContact' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('emergency-contacts.read')
  @ApiOperation({ summary: 'Get EmergencyContact by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('emergency-contacts.update')
  @ApiOperation({ summary: 'Update EmergencyContact' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('emergency-contacts.delete')
  @ApiOperation({ summary: 'Delete EmergencyContact' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
