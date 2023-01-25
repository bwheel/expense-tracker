import { UserToAccount } from "../client";
import { Integer, Required, Property, Format, Allow } from "@tsed/schema";
import { UserModel } from "./UserModel";
import { AccountModel } from "./AccountModel";

export class UserToAccountModel implements UserToAccount {
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
  userId: number;

  @Property(() => UserModel)
  @Required()
  user: UserModel;

  @Property(Number)
  @Integer()
  @Required()
  accountId: number;

  @Property(() => AccountModel)
  @Required()
  account: AccountModel;
}

