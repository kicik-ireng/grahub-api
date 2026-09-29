import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateLetterTemplateDto {
  @ApiPropertyOptional({ description: 'Optional Data field for LetterTemplate' })
  @IsOptional()
  data?: any;
}
