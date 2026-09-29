import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateComplaintDto {
  @ApiPropertyOptional({ description: 'Data field for Complaint' })
  @IsOptional()
  data?: any;
}
