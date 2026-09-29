import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreatePermissionDto {
  @ApiPropertyOptional({ description: 'Data field for Permission' })
  @IsOptional()
  data?: any;
}
