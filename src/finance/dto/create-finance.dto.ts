import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateFinanceTransactionDto {
  @ApiPropertyOptional({ description: 'Data field for FinanceTransaction' })
  @IsOptional()
  data?: any;
}
