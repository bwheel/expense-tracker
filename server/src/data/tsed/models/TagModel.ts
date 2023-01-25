import { Tag } from "../client";
import { Integer, Required, Property, Format, Allow, CollectionOf } from "@tsed/schema";
import { ExpenseToTagModel } from "./ExpenseToTagModel";

export class TagModel implements Tag {
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

  @CollectionOf(() => ExpenseToTagModel)
  @Required()
  ExpenseToTag: ExpenseToTagModel[];
}

