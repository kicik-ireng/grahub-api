import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreatePollDto {
  @ApiPropertyOptional({ description: 'Data field for Poll' })
  @IsOptional()
  data?: any;
}
