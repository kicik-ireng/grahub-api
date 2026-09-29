import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateDocumentDto {
  @ApiPropertyOptional({ description: 'Data field for Document' })
  @IsOptional()
  data?: any;
}
