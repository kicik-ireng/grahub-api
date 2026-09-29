import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PermissionsGuard } from '../common/guards/permissions.guard';
import { Permissions } from '../common/decorators/permissions.decorator';
import { LetterTemplatesService } from './letter-templates.service';

@ApiTags('letter-templates')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('letter-templates')
export class LetterTemplatesController {
  constructor(private readonly service: LetterTemplatesService) {}

  @Post()
  @Permissions('letter-templates.create')
  @ApiOperation({ summary: 'Create new LetterTemplate' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('letter-templates.read')
  @ApiOperation({ summary: 'Get all LetterTemplate' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('letter-templates.read')
  @ApiOperation({ summary: 'Get LetterTemplate by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('letter-templates.update')
  @ApiOperation({ summary: 'Update LetterTemplate' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('letter-templates.delete')
  @ApiOperation({ summary: 'Delete LetterTemplate' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
