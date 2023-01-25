import { isArray } from "@tsed/core";
import { deserialize } from "@tsed/json-mapper";
import { Injectable, Inject } from "@tsed/di";
import { PrismaService } from "../services/PrismaService";
import { Prisma, ExpenseToTag } from "../client";
import { ExpenseToTagModel } from "../models";

@Injectable()
export class ExpenseToTagsRepository {
  @Inject()
  protected prisma: PrismaService;

  get collection() {
    return this.prisma.expenseToTag
  }

  get groupBy() {
    return this.collection.groupBy.bind(this.collection)
  }

  protected deserialize<T>(obj: null | ExpenseToTag | ExpenseToTag[]): T {
    return deserialize<T>(obj, { type: ExpenseToTagModel, collectionType: isArray(obj) ? Array : undefined })
  }

  async findUnique(args: Prisma.ExpenseToTagFindUniqueArgs): Promise<ExpenseToTagModel | null> {
    const obj = await this.collection.findUnique(args);
    return this.deserialize<ExpenseToTagModel | null>(obj);
  }

  async findFirst(args: Prisma.ExpenseToTagFindFirstArgs): Promise<ExpenseToTagModel | null> {
    const obj = await this.collection.findFirst(args);
    return this.deserialize<ExpenseToTagModel | null>(obj);
  }

  async findMany(args?: Prisma.ExpenseToTagFindManyArgs): Promise<ExpenseToTagModel[]> {
    const obj = await this.collection.findMany(args);
    return this.deserialize<ExpenseToTagModel[]>(obj);
  }

  async create(args: Prisma.ExpenseToTagCreateArgs): Promise<ExpenseToTagModel> {
    const obj = await this.collection.create(args);
    return this.deserialize<ExpenseToTagModel>(obj);
  }

  async update(args: Prisma.ExpenseToTagUpdateArgs): Promise<ExpenseToTagModel> {
    const obj = await this.collection.update(args);
    return this.deserialize<ExpenseToTagModel>(obj);
  }

  async upsert(args: Prisma.ExpenseToTagUpsertArgs): Promise<ExpenseToTagModel> {
    const obj = await this.collection.upsert(args);
    return this.deserialize<ExpenseToTagModel>(obj);
  }

  async delete(args: Prisma.ExpenseToTagDeleteArgs): Promise<ExpenseToTagModel> {
    const obj = await this.collection.delete(args);
    return this.deserialize<ExpenseToTagModel>(obj);
  }

  async deleteMany(args: Prisma.ExpenseToTagDeleteManyArgs) {
    return this.collection.deleteMany(args)
  }

  async updateMany(args: Prisma.ExpenseToTagUpdateManyArgs) {
    return this.collection.updateMany(args)
  }

  async aggregate(args: Prisma.ExpenseToTagAggregateArgs) {
    return this.collection.aggregate(args)
  }
}
