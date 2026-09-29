import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateVolunteerDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Volunteer' })
  @IsOptional()
  data?: any;
}
