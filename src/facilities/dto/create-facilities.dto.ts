import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateFacilityDto {
  @ApiPropertyOptional({ description: 'Data field for Facility' })
  @IsOptional()
  data?: any;
}
