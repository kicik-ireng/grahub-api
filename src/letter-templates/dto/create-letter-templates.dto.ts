import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateLetterTemplateDto {
  @ApiPropertyOptional({ description: 'Data field for LetterTemplate' })
  @IsOptional()
  data?: any;
}
