import { Module } from '@nestjs/common';
import { LetterApprovalsController } from './letter-approvals.controller';
import { LetterApprovalsService } from './letter-approvals.service';

@Module({
  controllers: [LetterApprovalsController],
  providers: [LetterApprovalsService]
})
export class LetterApprovalsModule {}
