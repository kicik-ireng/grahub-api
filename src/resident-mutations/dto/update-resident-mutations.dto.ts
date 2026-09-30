import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdateResidentMutationDto {
  @ApiPropertyOptional({
    description: 'Optional Data field for ResidentMutation',
  })
  @IsOptional()
  data?: any;
}
