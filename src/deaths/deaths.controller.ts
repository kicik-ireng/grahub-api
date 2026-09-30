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
import { DeathsService } from './deaths.service';

@ApiTags('deaths')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('deaths')
export class DeathsController {
  constructor(private readonly service: DeathsService) {}

  @Post()
  @Permissions('deaths.create')
  @ApiOperation({ summary: 'Create new Death' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('deaths.read')
  @ApiOperation({ summary: 'Get all Death' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('deaths.read')
  @ApiOperation({ summary: 'Get Death by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('deaths.update')
  @ApiOperation({ summary: 'Update Death' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('deaths.delete')
  @ApiOperation({ summary: 'Delete Death' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
