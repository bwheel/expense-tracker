import { Account } from "../client";
import { Integer, Required, Property, Format, Allow, Enum, CollectionOf } from "@tsed/schema";
import { AccountType } from "../enums";
import { UserToAccountModel } from "./UserToAccountModel";
import { CompanyToAccountModel } from "./CompanyToAccountModel";
import { TransactionModel } from "./TransactionModel";

export class AccountModel implements Account {
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

  @Required()
  @Enum(AccountType)
  accountType: AccountType;

  @Property(Number)
  @Integer()
  @Required()
  currentBalance: number;

  @CollectionOf(() => UserToAccountModel)
  @Required()
  UserToAccount: UserToAccountModel[];

  @CollectionOf(() => CompanyToAccountModel)
  @Required()
  CompanyToAccount: CompanyToAccountModel[];

  @CollectionOf(() => TransactionModel)
  @Required()
  Transaction: TransactionModel[];
}

