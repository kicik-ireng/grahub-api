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
import { PaymentsService } from './payments.service';

@ApiTags('payments')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, PermissionsGuard)
@Controller('payments')
export class PaymentsController {
  constructor(private readonly service: PaymentsService) {}

  @Post()
  @Permissions('payments.create')
  @ApiOperation({ summary: 'Create new Payment' })
  create(@Body() createDto: any) {
    return this.service.create(createDto);
  }

  @Get()
  @Permissions('payments.read')
  @ApiOperation({ summary: 'Get all Payment' })
  findAll(@Query() query: any) {
    return this.service.findAll(query);
  }

  @Get(':id')
  @Permissions('payments.read')
  @ApiOperation({ summary: 'Get Payment by id' })
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Permissions('payments.update')
  @ApiOperation({ summary: 'Update Payment' })
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.service.update(id, updateDto);
  }

  @Delete(':id')
  @Permissions('payments.delete')
  @ApiOperation({ summary: 'Delete Payment' })
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
