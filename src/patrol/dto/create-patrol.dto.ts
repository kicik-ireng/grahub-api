import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, IsNotEmpty } from 'class-validator';

export class CreatePatrolScheduleDto {
  @ApiPropertyOptional({ description: 'Data field for PatrolSchedule' })
  @IsOptional()
  data?: any;
}
