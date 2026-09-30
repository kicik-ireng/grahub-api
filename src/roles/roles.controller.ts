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
import { RolesService } from './roles.service';

@ApiTags('roles')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('roles')
export class RolesController {
  constructor(private readonly service: RolesService) {}

  @Post()
  @Permissions('roles.create')
  @ApiOperation({ summary: 'Create new Role' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('roles.read')
  @ApiOperation({ summary: 'Get all Role' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('roles.read')
  @ApiOperation({ summary: 'Get Role by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('roles.update')
  @ApiOperation({ summary: 'Update Role' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('roles.delete')
  @ApiOperation({ summary: 'Delete Role' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
