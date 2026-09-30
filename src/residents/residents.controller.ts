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
import { ResidentsService } from './residents.service';

@ApiTags('residents')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('residents')
export class ResidentsController {
  constructor(private readonly service: ResidentsService) {}

  @Post()
  @Permissions('residents.create')
  @ApiOperation({ summary: 'Create new Resident' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('residents.read')
  @ApiOperation({ summary: 'Get all Resident' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('residents.read')
  @ApiOperation({ summary: 'Get Resident by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('residents.update')
  @ApiOperation({ summary: 'Update Resident' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('residents.delete')
  @ApiOperation({ summary: 'Delete Resident' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
