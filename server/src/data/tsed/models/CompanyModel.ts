import { Company } from "../client";
import { Integer, Required, Property, Format, Allow, CollectionOf } from "@tsed/schema";
import { CompanyToAccountModel } from "./CompanyToAccountModel";
import { ExpenseModel } from "./ExpenseModel";

export class CompanyModel implements Company {
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

  @Property(String)
  @Required()
  name: string;

  @CollectionOf(() => CompanyToAccountModel)
  @Required()
  CompanyToAccount: CompanyToAccountModel[];

  @CollectionOf(() => ExpenseModel)
  @Required()
  Expense: ExpenseModel[];
}

