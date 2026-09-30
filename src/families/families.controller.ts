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
import { FamilysService } from './families.service';

@ApiTags('families')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('families')
export class FamilysController {
  constructor(private readonly service: FamilysService) {}

  @Post()
  @Permissions('families.create')
  @ApiOperation({ summary: 'Create new Family' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('families.read')
  @ApiOperation({ summary: 'Get all Family' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('families.read')
  @ApiOperation({ summary: 'Get Family by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('families.update')
  @ApiOperation({ summary: 'Update Family' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('families.delete')
  @ApiOperation({ summary: 'Delete Family' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
