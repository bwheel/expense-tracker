import { isArray } from "@tsed/core";
import { deserialize } from "@tsed/json-mapper";
import { Injectable, Inject } from "@tsed/di";
import { PrismaService } from "../services/PrismaService";
import { Prisma, UserToAccount } from "../client";
import { UserToAccountModel } from "../models";

@Injectable()
export class UserToAccountsRepository {
  @Inject()
  protected prisma: PrismaService;

  get collection() {
    return this.prisma.userToAccount
  }

  get groupBy() {
    return this.collection.groupBy.bind(this.collection)
  }

  protected deserialize<T>(obj: null | UserToAccount | UserToAccount[]): T {
    return deserialize<T>(obj, { type: UserToAccountModel, collectionType: isArray(obj) ? Array : undefined })
  }

  async findUnique(args: Prisma.UserToAccountFindUniqueArgs): Promise<UserToAccountModel | null> {
    const obj = await this.collection.findUnique(args);
    return this.deserialize<UserToAccountModel | null>(obj);
  }

  async findFirst(args: Prisma.UserToAccountFindFirstArgs): Promise<UserToAccountModel | null> {
    const obj = await this.collection.findFirst(args);
    return this.deserialize<UserToAccountModel | null>(obj);
  }

  async findMany(args?: Prisma.UserToAccountFindManyArgs): Promise<UserToAccountModel[]> {
    const obj = await this.collection.findMany(args);
    return this.deserialize<UserToAccountModel[]>(obj);
  }

  async create(args: Prisma.UserToAccountCreateArgs): Promise<UserToAccountModel> {
    const obj = await this.collection.create(args);
    return this.deserialize<UserToAccountModel>(obj);
  }

  async update(args: Prisma.UserToAccountUpdateArgs): Promise<UserToAccountModel> {
    const obj = await this.collection.update(args);
    return this.deserialize<UserToAccountModel>(obj);
  }

  async upsert(args: Prisma.UserToAccountUpsertArgs): Promise<UserToAccountModel> {
    const obj = await this.collection.upsert(args);
    return this.deserialize<UserToAccountModel>(obj);
  }

  async delete(args: Prisma.UserToAccountDeleteArgs): Promise<UserToAccountModel> {
    const obj = await this.collection.delete(args);
    return this.deserialize<UserToAccountModel>(obj);
  }

  async deleteMany(args: Prisma.UserToAccountDeleteManyArgs) {
    return this.collection.deleteMany(args)
  }

  async updateMany(args: Prisma.UserToAccountUpdateManyArgs) {
    return this.collection.updateMany(args)
  }

  async aggregate(args: Prisma.UserToAccountAggregateArgs) {
    return this.collection.aggregate(args)
  }
}
