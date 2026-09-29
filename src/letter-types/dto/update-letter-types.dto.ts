import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateLetterTypeDto {
  @ApiPropertyOptional({ description: 'Optional Data field for LetterType' })
  @IsOptional()
  data?: any;
}
