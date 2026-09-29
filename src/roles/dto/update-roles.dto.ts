import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateRoleDto {
  @ApiPropertyOptional({ description: 'Optional Data field for Role' })
  @IsOptional()
  data?: any;
}
