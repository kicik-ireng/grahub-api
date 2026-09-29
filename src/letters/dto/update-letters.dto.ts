import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateLetterRequestDto {
  @ApiPropertyOptional({ description: 'Optional Data field for LetterRequest' })
  @IsOptional()
  data?: any;
}
