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
import { ActivitysService } from './activities.service';

@ApiTags('activities')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('activities')
export class ActivitysController {
  constructor(private readonly service: ActivitysService) {}

  @Post()
  @Permissions('activities.create')
  @ApiOperation({ summary: 'Create new Activity' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('activities.read')
  @ApiOperation({ summary: 'Get all Activity' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('activities.read')
  @ApiOperation({ summary: 'Get Activity by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('activities.update')
  @ApiOperation({ summary: 'Update Activity' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('activities.delete')
  @ApiOperation({ summary: 'Delete Activity' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
