import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdatePaymentDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Payment' })
  @IsOptional()
  data?: any;
}
