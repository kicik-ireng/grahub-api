import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateFinanceTransactionDto {
  @ApiPropertyOptional({ description: 'Optional Data field for FinanceTransaction' })
  @IsOptional()
  data?: any;
}
