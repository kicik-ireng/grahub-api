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
import { PollsService } from './polls.service';

@ApiTags('polls')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('polls')
export class PollsController {
  constructor(private readonly service: PollsService) {}

  @Post()
  @Permissions('polls.create')
  @ApiOperation({ summary: 'Create new Poll' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('polls.read')
  @ApiOperation({ summary: 'Get all Poll' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('polls.read')
  @ApiOperation({ summary: 'Get Poll by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('polls.update')
  @ApiOperation({ summary: 'Update Poll' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('polls.delete')
  @ApiOperation({ summary: 'Delete Poll' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
