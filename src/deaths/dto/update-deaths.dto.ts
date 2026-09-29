import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateDeathDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Death' })
  @IsOptional()
  data?: any;
}
