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
import { DuesService } from './dues.service';

@ApiTags('dues')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('dues')
export class DuesController {
  constructor(private readonly service: DuesService) {}

  @Post()
  @Permissions('dues.create')
  @ApiOperation({ summary: 'Create new Due' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('dues.read')
  @ApiOperation({ summary: 'Get all Due' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('dues.read')
  @ApiOperation({ summary: 'Get Due by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('dues.update')
  @ApiOperation({ summary: 'Update Due' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('dues.delete')
  @ApiOperation({ summary: 'Delete Due' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
