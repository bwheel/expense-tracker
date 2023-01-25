import { isArray } from "@tsed/core";
import { deserialize } from "@tsed/json-mapper";
import { Injectable, Inject } from "@tsed/di";
import { PrismaService } from "../services/PrismaService";
import { Prisma, Expense } from "../client";
import { ExpenseModel } from "../models";

@Injectable()
export class ExpensesRepository {
  @Inject()
  protected prisma: PrismaService;

  get collection() {
    return this.prisma.expense
  }

  get groupBy() {
    return this.collection.groupBy.bind(this.collection)
  }

  protected deserialize<T>(obj: null | Expense | Expense[]): T {
    return deserialize<T>(obj, { type: ExpenseModel, collectionType: isArray(obj) ? Array : undefined })
  }

  async findUnique(args: Prisma.ExpenseFindUniqueArgs): Promise<ExpenseModel | null> {
    const obj = await this.collection.findUnique(args);
    return this.deserialize<ExpenseModel | null>(obj);
  }

  async findFirst(args: Prisma.ExpenseFindFirstArgs): Promise<ExpenseModel | null> {
    const obj = await this.collection.findFirst(args);
    return this.deserialize<ExpenseModel | null>(obj);
  }

  async findMany(args?: Prisma.ExpenseFindManyArgs): Promise<ExpenseModel[]> {
    const obj = await this.collection.findMany(args);
    return this.deserialize<ExpenseModel[]>(obj);
  }

  async create(args: Prisma.ExpenseCreateArgs): Promise<ExpenseModel> {
    const obj = await this.collection.create(args);
    return this.deserialize<ExpenseModel>(obj);
  }

  async update(args: Prisma.ExpenseUpdateArgs): Promise<ExpenseModel> {
    const obj = await this.collection.update(args);
    return this.deserialize<ExpenseModel>(obj);
  }

  async upsert(args: Prisma.ExpenseUpsertArgs): Promise<ExpenseModel> {
    const obj = await this.collection.upsert(args);
    return this.deserialize<ExpenseModel>(obj);
  }

  async delete(args: Prisma.ExpenseDeleteArgs): Promise<ExpenseModel> {
    const obj = await this.collection.delete(args);
    return this.deserialize<ExpenseModel>(obj);
  }

  async deleteMany(args: Prisma.ExpenseDeleteManyArgs) {
    return this.collection.deleteMany(args)
  }

  async updateMany(args: Prisma.ExpenseUpdateManyArgs) {
    return this.collection.updateMany(args)
  }

  async aggregate(args: Prisma.ExpenseAggregateArgs) {
    return this.collection.aggregate(args)
  }
}
