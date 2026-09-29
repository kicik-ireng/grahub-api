import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdatePermissionDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Permission' })
  @IsOptional()
  data?: any;
}
