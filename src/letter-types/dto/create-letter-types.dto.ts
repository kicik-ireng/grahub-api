import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateLetterTypeDto {
  @ApiPropertyOptional({ description: 'Data field for LetterType' })
  @IsOptional()
  data?: any;
}
