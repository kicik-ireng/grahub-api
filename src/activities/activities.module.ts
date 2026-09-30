import { Module } from '@nestjs/common';
import { ActivitysController } from './activities.controller';
import { ActivitysService } from './activities.service';

@Module({
  controllers: [ActivitysController],
  providers: [ActivitysService],
})
export class ActivitiesModule {}
