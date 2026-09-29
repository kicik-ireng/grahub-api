import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateKelurahanDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Kelurahan' })
  @IsOptional()
  data?: any;
}
