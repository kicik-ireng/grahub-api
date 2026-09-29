import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateDocumentDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Document' })
  @IsOptional()
  data?: any;
}
