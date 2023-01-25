import { Transaction } from "../client";
import { Integer, Required, Property, Format, Allow, CollectionOf } from "@tsed/schema";
import { AccountModel } from "./AccountModel";
import { ExpenseToTransactionModel } from "./ExpenseToTransactionModel";

export class TransactionModel implements Transaction {
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
  amount: number;

  @Property(Number)
  @Integer()
  @Required()
  accountId: number;

  @Property(() => AccountModel)
  @Required()
  account: AccountModel;

  @CollectionOf(() => ExpenseToTransactionModel)
  @Required()
  ExpenseToTransaction: ExpenseToTransactionModel[];
}

