import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { FacilitysService } from './facilities.service';

@ApiTags('facilities')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('facilities')
export class FacilitysController {
  constructor(private readonly service: FacilitysService) {}

  @Post()
  @Permissions('facilities.create')
  @ApiOperation({ summary: 'Create new Facility' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('facilities.read')
  @ApiOperation({ summary: 'Get all Facility' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('facilities.read')
  @ApiOperation({ summary: 'Get Facility by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('facilities.update')
  @ApiOperation({ summary: 'Update Facility' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('facilities.delete')
  @ApiOperation({ summary: 'Delete Facility' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
