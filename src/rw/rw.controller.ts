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
import { RWsService } from './rw.service';

@ApiTags('rw')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('rw')
export class RWsController {
  constructor(private readonly service: RWsService) {}

  @Post()
  @Permissions('rw.create')
  @ApiOperation({ summary: 'Create new RW' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('rw.read')
  @ApiOperation({ summary: 'Get all RW' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('rw.read')
  @ApiOperation({ summary: 'Get RW by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('rw.update')
  @ApiOperation({ summary: 'Update RW' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('rw.delete')
  @ApiOperation({ summary: 'Delete RW' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
