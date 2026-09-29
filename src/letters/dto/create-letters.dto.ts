import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateLetterRequestDto {
  @ApiPropertyOptional({ description: 'Data field for LetterRequest' })
  @IsOptional()
  data?: any;
}
