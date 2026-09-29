import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateBirthDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Birth' })
  @IsOptional()
  data?: any;
}
