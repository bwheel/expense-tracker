import { CompanyToAccount } from "../client";
import { Integer, Required, Property, Format, Allow } from "@tsed/schema";
import { CompanyModel } from "./CompanyModel";
import { AccountModel } from "./AccountModel";

export class CompanyToAccountModel implements CompanyToAccount {
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
  companyId: number;

  @Property(() => CompanyModel)
  @Required()
  company: CompanyModel;

  @Property(Number)
  @Integer()
  @Required()
  accountId: number;

  @Property(() => AccountModel)
  @Required()
  account: AccountModel;
}

