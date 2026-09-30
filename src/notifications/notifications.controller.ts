import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { NotificationsService } from './notifications.service';

@ApiTags('notifications')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('notifications')
export class NotificationsController {
  constructor(private readonly service: NotificationsService) {}

  @Post()
  @Permissions('notifications.create')
  @ApiOperation({ summary: 'Create new Notification' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('notifications.read')
  @ApiOperation({ summary: 'Get all Notification' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('notifications.read')
  @ApiOperation({ summary: 'Get Notification by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('notifications.update')
  @ApiOperation({ summary: 'Update Notification' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('notifications.delete')
  @ApiOperation({ summary: 'Delete Notification' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
