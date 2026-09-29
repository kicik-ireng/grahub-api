import { Module } from '@nestjs/common';
import { FacilitysController } from './facilities.controller';
import { FacilitysService } from './facilities.service';

@Module({
  controllers: [FacilitysController],
  providers: [FacilitysService]
})
export class FacilitiesModule {}
