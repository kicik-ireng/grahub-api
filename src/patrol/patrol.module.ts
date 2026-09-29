import { Module } from '@nestjs/common';
import { PatrolSchedulesController } from './patrol.controller';
import { PatrolSchedulesService } from './patrol.service';

@Module({
  controllers: [PatrolSchedulesController],
  providers: [PatrolSchedulesService]
})
export class PatrolModule {}
