import { Module } from '@nestjs/common';
import { LetterTemplatesController } from './letter-templates.controller';
import { LetterTemplatesService } from './letter-templates.service';

@Module({
  controllers: [LetterTemplatesController],
  providers: [LetterTemplatesService]
})
export class LetterTemplatesModule {}
