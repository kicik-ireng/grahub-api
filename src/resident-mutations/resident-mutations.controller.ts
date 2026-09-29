import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { ResidentMutationsService } from './resident-mutations.service';

@ApiTags('resident-mutations')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('resident-mutations')
export class ResidentMutationsController {
  constructor(private readonly service: ResidentMutationsService) {}

  @Post()
  @Permissions('resident-mutations.create')
  @ApiOperation({ summary: 'Create new ResidentMutation' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('resident-mutations.read')
  @ApiOperation({ summary: 'Get all ResidentMutation' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('resident-mutations.read')
  @ApiOperation({ summary: 'Get ResidentMutation by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('resident-mutations.update')
  @ApiOperation({ summary: 'Update ResidentMutation' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('resident-mutations.delete')
  @ApiOperation({ summary: 'Delete ResidentMutation' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
