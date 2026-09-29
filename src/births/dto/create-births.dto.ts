import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateBirthDto {
  @ApiPropertyOptional({ description: 'Data field for Birth' })
  @IsOptional()
  data?: any;
}
