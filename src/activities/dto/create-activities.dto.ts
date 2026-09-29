import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateActivityDto {
  @ApiPropertyOptional({ description: 'Data field for Activity' })
  @IsOptional()
  data?: any;
}
