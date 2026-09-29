import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateComplaintDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Complaint' })
  @IsOptional()
  data?: any;
}
