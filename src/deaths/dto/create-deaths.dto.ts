import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateDeathDto {
  @ApiPropertyOptional({ description: 'Data field for Death' })
  @IsOptional()
  data?: any;
}
