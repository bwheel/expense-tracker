import { User } from "../client";
import { Integer, Required, Property, Format, Allow, CollectionOf } from "@tsed/schema";
import { PasswordModel } from "./PasswordModel";
import { UserToAccountModel } from "./UserToAccountModel";
import { ExpenseModel } from "./ExpenseModel";

export class UserModel implements User {
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
  email: string;

  @Property(String)
  @Allow(null)
  preferredName: string | null;

  @Property(String)
  @Allow(null)
  firstName: string | null;

  @Property(String)
  @Allow(null)
  lastName: string | null;

  @Property(() => PasswordModel)
  @Required()
  currentPassword: PasswordModel;

  @Property(Number)
  @Integer()
  @Required()
  currentPasswordId: number;

  @CollectionOf(() => UserToAccountModel)
  @Required()
  UserToAccount: UserToAccountModel[];

  @CollectionOf(() => ExpenseModel)
  @Required()
  Expense: ExpenseModel[];
}

