import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateEmergencyContactDto {
  @ApiPropertyOptional({
    description: 'Optional Data field for EmergencyContact',
  })
  @IsOptional()
  data?: any;
}
