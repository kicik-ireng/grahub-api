import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateFamilyDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Family' })
  @IsOptional()
  data?: any;
}
