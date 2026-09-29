import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateKelurahanDto {
  @ApiPropertyOptional({ description: 'Data field for Kelurahan' })
  @IsOptional()
  data?: any;
}
