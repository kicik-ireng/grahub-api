import { Module } from '@nestjs/common';
import { LetterVerificationController } from './letter-verification.controller';
import { LetterVerificationService } from './letter-verification.service';

@Module({
  controllers: [LetterVerificationController],
  providers: [LetterVerificationService],
})
export class LetterVerificationModule {}
