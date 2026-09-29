import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreatePaymentDto {
  @ApiPropertyOptional({ description: 'Data field for Payment' })
  @IsOptional()
  data?: any;
}
