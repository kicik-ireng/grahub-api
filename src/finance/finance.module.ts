import { Module } from '@nestjs/common';
import { FinanceTransactionsController } from './finance.controller';
import { FinanceTransactionsService } from './finance.service';

@Module({
  controllers: [FinanceTransactionsController],
  providers: [FinanceTransactionsService]
})
export class FinanceModule {}
