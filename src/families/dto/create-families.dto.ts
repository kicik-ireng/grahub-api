import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateFamilyDto {
  @ApiPropertyOptional({ description: 'Data field for Family' })
  @IsOptional()
  data?: any;
}
