import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateResidentDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Resident' })
  @IsOptional()
  data?: any;
}
