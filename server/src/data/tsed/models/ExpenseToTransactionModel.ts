import { ExpenseToTransaction } from "../client";
import { Integer, Required, Property, Format, Allow } from "@tsed/schema";
import { ExpenseModel } from "./ExpenseModel";
import { TransactionModel } from "./TransactionModel";

export class ExpenseToTransactionModel implements ExpenseToTransaction {
  @Property(Number)
  @Integer()
  @Required()
  id: number;

  @Property(Date)
  @Format("date-time")
  @Required()
  createDate: Date;

  @Property(Date)
  @Format("date-time")
  @Required()
  updateDate: Date;

  @Property(Date)
  @Format("date-time")
  @Allow(null)
  deleteDate: Date | null;

  @Property(Number)
  @Integer()
  @Required()
  expenseId: number;

  @Property(() => ExpenseModel)
  @Required()
  expense: ExpenseModel;

  @Property(Number)
  @Integer()
  @Required()
  transactionId: number;

  @Property(() => TransactionModel)
  @Required()
  transaction: TransactionModel;
}

