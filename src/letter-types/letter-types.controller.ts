import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { LetterTypesService } from './letter-types.service';

@ApiTags('letter-types')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('letter-types')
export class LetterTypesController {
  constructor(private readonly service: LetterTypesService) {}

  @Post()
  @Permissions('letter-types.create')
  @ApiOperation({ summary: 'Create new LetterType' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('letter-types.read')
  @ApiOperation({ summary: 'Get all LetterType' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('letter-types.read')
  @ApiOperation({ summary: 'Get LetterType by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('letter-types.update')
  @ApiOperation({ summary: 'Update LetterType' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('letter-types.delete')
  @ApiOperation({ summary: 'Delete LetterType' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
