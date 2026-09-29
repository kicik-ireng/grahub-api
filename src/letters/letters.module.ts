import { Module } from '@nestjs/common';
import { LetterRequestsController } from './letters.controller';
import { LetterRequestsService } from './letters.service';

@Module({
  controllers: [LetterRequestsController],
  providers: [LetterRequestsService]
})
export class LettersModule {}
