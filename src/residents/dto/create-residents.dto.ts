import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateResidentDto {
  @ApiPropertyOptional({ description: 'Data field for Resident' })
  @IsOptional()
  data?: any;
}
