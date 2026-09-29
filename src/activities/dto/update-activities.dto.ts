import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateActivityDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Activity' })
  @IsOptional()
  data?: any;
}
