import { isArray } from "@tsed/core";
import { deserialize } from "@tsed/json-mapper";
import { Injectable, Inject } from "@tsed/di";
import { PrismaService } from "../services/PrismaService";
import { Prisma, CompanyToAccount } from "../client";
import { CompanyToAccountModel } from "../models";

@Injectable()
export class CompanyToAccountsRepository {
  @Inject()
  protected prisma: PrismaService;

  get collection() {
    return this.prisma.companyToAccount
  }

  get groupBy() {
    return this.collection.groupBy.bind(this.collection)
  }

  protected deserialize<T>(obj: null | CompanyToAccount | CompanyToAccount[]): T {
    return deserialize<T>(obj, { type: CompanyToAccountModel, collectionType: isArray(obj) ? Array : undefined })
  }

  async findUnique(args: Prisma.CompanyToAccountFindUniqueArgs): Promise<CompanyToAccountModel | null> {
    const obj = await this.collection.findUnique(args);
    return this.deserialize<CompanyToAccountModel | null>(obj);
  }

  async findFirst(args: Prisma.CompanyToAccountFindFirstArgs): Promise<CompanyToAccountModel | null> {
    const obj = await this.collection.findFirst(args);
    return this.deserialize<CompanyToAccountModel | null>(obj);
  }

  async findMany(args?: Prisma.CompanyToAccountFindManyArgs): Promise<CompanyToAccountModel[]> {
    const obj = await this.collection.findMany(args);
    return this.deserialize<CompanyToAccountModel[]>(obj);
  }

  async create(args: Prisma.CompanyToAccountCreateArgs): Promise<CompanyToAccountModel> {
    const obj = await this.collection.create(args);
    return this.deserialize<CompanyToAccountModel>(obj);
  }

  async update(args: Prisma.CompanyToAccountUpdateArgs): Promise<CompanyToAccountModel> {
    const obj = await this.collection.update(args);
    return this.deserialize<CompanyToAccountModel>(obj);
  }

  async upsert(args: Prisma.CompanyToAccountUpsertArgs): Promise<CompanyToAccountModel> {
    const obj = await this.collection.upsert(args);
    return this.deserialize<CompanyToAccountModel>(obj);
  }

  async delete(args: Prisma.CompanyToAccountDeleteArgs): Promise<CompanyToAccountModel> {
    const obj = await this.collection.delete(args);
    return this.deserialize<CompanyToAccountModel>(obj);
  }

  async deleteMany(args: Prisma.CompanyToAccountDeleteManyArgs) {
    return this.collection.deleteMany(args)
  }

  async updateMany(args: Prisma.CompanyToAccountUpdateManyArgs) {
    return this.collection.updateMany(args)
  }

  async aggregate(args: Prisma.CompanyToAccountAggregateArgs) {
    return this.collection.aggregate(args)
  }
}
