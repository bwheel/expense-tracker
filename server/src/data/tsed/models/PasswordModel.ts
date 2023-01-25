import { Password } from "../client";
import { Integer, Required, Property, Format, Allow, CollectionOf } from "@tsed/schema";
import { UserModel } from "./UserModel";

export class PasswordModel implements Password {
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
  password: string;

  @Property(String)
  @Required()
  salt: string;

  @Property(Number)
  @Integer()
  @Required()
  workCost: number;

  @CollectionOf(() => UserModel)
  @Required()
  User: UserModel[];
}

