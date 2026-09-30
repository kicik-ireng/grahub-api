import { Module } from '@nestjs/common';
import { ResidentMutationsController } from './resident-mutations.controller';
import { ResidentMutationsService } from './resident-mutations.service';

@Module({
  controllers: [ResidentMutationsController],
  providers: [ResidentMutationsService],
})
export class ResidentMutationsModule {}
