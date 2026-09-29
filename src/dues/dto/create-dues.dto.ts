import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateDueDto {
  @ApiPropertyOptional({ description: 'Data field for Due' })
  @IsOptional()
  data?: any;
}
