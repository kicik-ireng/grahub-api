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
import { BirthsService } from './births.service';

@ApiTags('births')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('births')
export class BirthsController {
  constructor(private readonly service: BirthsService) {}

  @Post()
  @Permissions('births.create')
  @ApiOperation({ summary: 'Create new Birth' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('births.read')
  @ApiOperation({ summary: 'Get all Birth' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('births.read')
  @ApiOperation({ summary: 'Get Birth by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('births.update')
  @ApiOperation({ summary: 'Update Birth' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('births.delete')
  @ApiOperation({ summary: 'Delete Birth' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
