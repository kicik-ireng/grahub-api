import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { VolunteersService } from './volunteers.service';

@ApiTags('volunteers')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('volunteers')
export class VolunteersController {
  constructor(private readonly service: VolunteersService) {}

  @Post()
  @Permissions('volunteers.create')
  @ApiOperation({ summary: 'Create new Volunteer' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('volunteers.read')
  @ApiOperation({ summary: 'Get all Volunteer' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('volunteers.read')
  @ApiOperation({ summary: 'Get Volunteer by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('volunteers.update')
  @ApiOperation({ summary: 'Update Volunteer' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('volunteers.delete')
  @ApiOperation({ summary: 'Delete Volunteer' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
