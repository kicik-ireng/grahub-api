import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateRWDto {
  @ApiPropertyOptional({ description: 'Optional Data field for RW' })
  @IsOptional()
  data?: any;
}
