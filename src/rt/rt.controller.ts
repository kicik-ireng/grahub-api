import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { RTsService } from './rt.service';

@ApiTags('rt')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('rt')
export class RTsController {
  constructor(private readonly service: RTsService) {}

  @Post()
  @Permissions('rt.create')
  @ApiOperation({ summary: 'Create new RT' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('rt.read')
  @ApiOperation({ summary: 'Get all RT' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('rt.read')
  @ApiOperation({ summary: 'Get RT by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('rt.update')
  @ApiOperation({ summary: 'Update RT' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('rt.delete')
  @ApiOperation({ summary: 'Delete RT' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
