import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateAnnouncementDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Announcement' })
  @IsOptional()
  data?: any;
}
