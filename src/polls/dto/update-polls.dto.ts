import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdatePollDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Poll' })
  @IsOptional()
  data?: any;
}
