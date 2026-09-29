import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreateResidentMutationDto {
  @ApiPropertyOptional({ description: 'Data field for ResidentMutation' })
  @IsOptional()
  data?: any;
}
