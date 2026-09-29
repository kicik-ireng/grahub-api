import { Module } from '@nestjs/common';
import { FamilysController } from './families.controller';
import { FamilysService } from './families.service';

@Module({
  controllers: [FamilysController],
  providers: [FamilysService]
})
export class FamiliesModule {}
