import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class UpdatePatrolScheduleDto {
  @ApiPropertyOptional({
    description: 'Optional Data field for PatrolSchedule',
  })
  @IsOptional()
  data?: any;
}
