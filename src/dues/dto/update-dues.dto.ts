import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateDueDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Due' })
  @IsOptional()
  data?: any;
}
