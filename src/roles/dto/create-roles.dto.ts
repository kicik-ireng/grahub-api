import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @ApiPropertyOptional({ description: 'Data field for Role' })
  @IsOptional()
  data?: any;
}
