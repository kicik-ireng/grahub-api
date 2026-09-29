import { Module } from '@nestjs/common';
import { RTsController } from './rt.controller';
import { RTsService } from './rt.service';

@Module({
  controllers: [RTsController],
  providers: [RTsService]
})
export class RtModule {}
