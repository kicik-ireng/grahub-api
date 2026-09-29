import { Module } from '@nestjs/common';
import { LetterTypesController } from './letter-types.controller';
import { LetterTypesService } from './letter-types.service';

@Module({
  controllers: [LetterTypesController],
  providers: [LetterTypesService]
})
export class LetterTypesModule {}
