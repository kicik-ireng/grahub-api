import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { AnnouncementsService } from './announcements.service';

@ApiTags('announcements')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('announcements')
export class AnnouncementsController {
  constructor(private readonly service: AnnouncementsService) {}

  @Post()
  @Permissions('announcements.create')
  @ApiOperation({ summary: 'Create new Announcement' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('announcements.read')
  @ApiOperation({ summary: 'Get all Announcement' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('announcements.read')
  @ApiOperation({ summary: 'Get Announcement by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('announcements.update')
  @ApiOperation({ summary: 'Update Announcement' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('announcements.delete')
  @ApiOperation({ summary: 'Delete Announcement' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
