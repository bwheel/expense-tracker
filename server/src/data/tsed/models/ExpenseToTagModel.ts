import { ExpenseToTag } from "../client";
import { Integer, Required, Property, Format, Allow } from "@tsed/schema";
import { ExpenseModel } from "./ExpenseModel";
import { TagModel } from "./TagModel";

export class ExpenseToTagModel implements ExpenseToTag {
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
  tagId: number;

  @Property(() => TagModel)
  @Required()
  tag: TagModel;
}

