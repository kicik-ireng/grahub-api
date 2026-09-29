import { Module } from '@nestjs/common';
import { KelurahansController } from './kelurahan.controller';
import { KelurahansService } from './kelurahan.service';

@Module({
  controllers: [KelurahansController],
  providers: [KelurahansService]
})
export class KelurahanModule {}
