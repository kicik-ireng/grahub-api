import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateNotificationDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Notification' })
  @IsOptional()
  data?: any;
}
