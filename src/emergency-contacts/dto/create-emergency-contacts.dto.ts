import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateEmergencyContactDto {
  @ApiPropertyOptional({ description: 'Data field for EmergencyContact' })
  @IsOptional()
  data?: any;
}
