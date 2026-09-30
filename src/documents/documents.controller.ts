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
import { DocumentsService } from './documents.service';

@ApiTags('documents')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('documents')
export class DocumentsController {
  constructor(private readonly service: DocumentsService) {}

  @Post()
  @Permissions('documents.create')
  @ApiOperation({ summary: 'Create new Document' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('documents.read')
  @ApiOperation({ summary: 'Get all Document' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('documents.read')
  @ApiOperation({ summary: 'Get Document by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('documents.update')
  @ApiOperation({ summary: 'Update Document' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('documents.delete')
  @ApiOperation({ summary: 'Delete Document' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
