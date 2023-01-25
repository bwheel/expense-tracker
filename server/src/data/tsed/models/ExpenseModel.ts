import { Expense } from "../client";
import { Integer, Required, Property, Format, Allow, CollectionOf } from "@tsed/schema";
import { CompanyModel } from "./CompanyModel";
import { UserModel } from "./UserModel";
import { CategoryModel } from "./CategoryModel";
import { ExpenseToTagModel } from "./ExpenseToTagModel";
import { ExpenseToTransactionModel } from "./ExpenseToTransactionModel";

export class ExpenseModel implements Expense {
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

  @Property(Date)
  @Format("date-time")
  @Allow(null)
  expenseDate: Date | null;

  @Property(Number)
  @Integer()
  @Required()
  companyId: number;

  @Property(() => CompanyModel)
  @Required()
  company: CompanyModel;

  @Property(Number)
  @Integer()
  @Required()
  userId: number;

  @Property(() => UserModel)
  @Required()
  user: UserModel;

  @Property(Number)
  @Integer()
  @Required()
  categoryId: number;

  @Property(() => CategoryModel)
  @Required()
  category: CategoryModel;

  @CollectionOf(() => ExpenseToTagModel)
  @Required()
  ExpenseToTag: ExpenseToTagModel[];

  @CollectionOf(() => ExpenseToTransactionModel)
  @Required()
  ExpenseToTransaction: ExpenseToTransactionModel[];
}

