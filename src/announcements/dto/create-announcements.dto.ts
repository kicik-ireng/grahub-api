import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateAnnouncementDto {
  @ApiPropertyOptional({ description: 'Data field for Announcement' })
  @IsOptional()
  data?: any;
}
