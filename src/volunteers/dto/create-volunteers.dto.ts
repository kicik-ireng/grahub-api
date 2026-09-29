import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateVolunteerDto {
  @ApiPropertyOptional({ description: 'Data field for Volunteer' })
  @IsOptional()
  data?: any;
}
