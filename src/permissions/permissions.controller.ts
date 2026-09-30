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
import { PermissionsService } from './permissions.service';

@ApiTags('permissions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('permissions')
export class PermissionsController {
  constructor(private readonly service: PermissionsService) {}

  @Post()
  @Permissions('permissions.create')
  @ApiOperation({ summary: 'Create new Permission' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('permissions.read')
  @ApiOperation({ summary: 'Get all Permission' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('permissions.read')
  @ApiOperation({ summary: 'Get Permission by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('permissions.update')
  @ApiOperation({ summary: 'Update Permission' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('permissions.delete')
  @ApiOperation({ summary: 'Delete Permission' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
