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
import { FinanceTransactionsService } from './finance.service';

@ApiTags('finance')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('finance')
export class FinanceTransactionsController {
  constructor(private readonly service: FinanceTransactionsService) {}

  @Post()
  @Permissions('finance.create')
  @ApiOperation({ summary: 'Create new FinanceTransaction' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('finance.read')
  @ApiOperation({ summary: 'Get all FinanceTransaction' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('finance.read')
  @ApiOperation({ summary: 'Get FinanceTransaction by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('finance.update')
  @ApiOperation({ summary: 'Update FinanceTransaction' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('finance.delete')
  @ApiOperation({ summary: 'Delete FinanceTransaction' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
