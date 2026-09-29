import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateRWDto {
  @ApiPropertyOptional({ description: 'Data field for RW' })
  @IsOptional()
  data?: any;
}
