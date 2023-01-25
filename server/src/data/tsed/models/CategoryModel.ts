import { Category } from "../client";
import { Integer, Required, Property, Format, Allow, CollectionOf } from "@tsed/schema";
import { ExpenseModel } from "./ExpenseModel";

export class CategoryModel implements Category {
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

  @CollectionOf(() => ExpenseModel)
  @Required()
  Expense: ExpenseModel[];
}

