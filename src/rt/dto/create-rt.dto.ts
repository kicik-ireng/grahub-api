import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateRTDto {
  @ApiPropertyOptional({ description: 'Data field for RT' })
  @IsOptional()
  data?: any;
}
