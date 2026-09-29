import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateFacilityDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Facility' })
  @IsOptional()
  data?: any;
}
