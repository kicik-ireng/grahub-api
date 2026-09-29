import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateRTDto {
  @ApiPropertyOptional({ description: 'Optional Data field for RT' })
  @IsOptional()
  data?: any;
}
