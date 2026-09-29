import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { KelurahansService } from './kelurahan.service';

@ApiTags('kelurahan')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('kelurahan')
export class KelurahansController {
  constructor(private readonly service: KelurahansService) {}

  @Post()
  @Permissions('kelurahan.create')
  @ApiOperation({ summary: 'Create new Kelurahan' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('kelurahan.read')
  @ApiOperation({ summary: 'Get all Kelurahan' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('kelurahan.read')
  @ApiOperation({ summary: 'Get Kelurahan by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('kelurahan.update')
  @ApiOperation({ summary: 'Update Kelurahan' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('kelurahan.delete')
  @ApiOperation({ summary: 'Delete Kelurahan' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
