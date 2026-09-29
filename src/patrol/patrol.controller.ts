import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { PatrolSchedulesService } from './patrol.service';

@ApiTags('patrol')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('patrol')
export class PatrolSchedulesController {
  constructor(private readonly service: PatrolSchedulesService) {}

  @Post()
  @Permissions('patrol.create')
  @ApiOperation({ summary: 'Create new PatrolSchedule' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('patrol.read')
  @ApiOperation({ summary: 'Get all PatrolSchedule' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('patrol.read')
  @ApiOperation({ summary: 'Get PatrolSchedule by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('patrol.update')
  @ApiOperation({ summary: 'Update PatrolSchedule' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('patrol.delete')
  @ApiOperation({ summary: 'Delete PatrolSchedule' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
