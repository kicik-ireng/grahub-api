import { Module } from '@nestjs/common';
import { RWsController } from './rw.controller';
import { RWsService } from './rw.service';

@Module({
  controllers: [RWsController],
  providers: [RWsService],
})
export class RwModule {}
