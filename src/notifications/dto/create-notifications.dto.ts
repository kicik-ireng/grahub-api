import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @ApiPropertyOptional({ description: 'Data field for Notification' })
  @IsOptional()
  data?: any;
}
