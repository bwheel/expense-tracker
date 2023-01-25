import { isArray } from "@tsed/core";
import { deserialize } from "@tsed/json-mapper";
import { Injectable, Inject } from "@tsed/di";
import { PrismaService } from "../services/PrismaService";
import { Prisma, ExpenseToTransaction } from "../client";
import { ExpenseToTransactionModel } from "../models";

@Injectable()
export class ExpenseToTransactionsRepository {
  @Inject()
  protected prisma: PrismaService;

  get collection() {
    return this.prisma.expenseToTransaction
  }

  get groupBy() {
    return this.collection.groupBy.bind(this.collection)
  }

  protected deserialize<T>(obj: null | ExpenseToTransaction | ExpenseToTransaction[]): T {
    return deserialize<T>(obj, { type: ExpenseToTransactionModel, collectionType: isArray(obj) ? Array : undefined })
  }

  async findUnique(args: Prisma.ExpenseToTransactionFindUniqueArgs): Promise<ExpenseToTransactionModel | null> {
    const obj = await this.collection.findUnique(args);
    return this.deserialize<ExpenseToTransactionModel | null>(obj);
  }

  async findFirst(args: Prisma.ExpenseToTransactionFindFirstArgs): Promise<ExpenseToTransactionModel | null> {
    const obj = await this.collection.findFirst(args);
    return this.deserialize<ExpenseToTransactionModel | null>(obj);
  }

  async findMany(args?: Prisma.ExpenseToTransactionFindManyArgs): Promise<ExpenseToTransactionModel[]> {
    const obj = await this.collection.findMany(args);
    return this.deserialize<ExpenseToTransactionModel[]>(obj);
  }

  async create(args: Prisma.ExpenseToTransactionCreateArgs): Promise<ExpenseToTransactionModel> {
    const obj = await this.collection.create(args);
    return this.deserialize<ExpenseToTransactionModel>(obj);
  }

  async update(args: Prisma.ExpenseToTransactionUpdateArgs): Promise<ExpenseToTransactionModel> {
    const obj = await this.collection.update(args);
    return this.deserialize<ExpenseToTransactionModel>(obj);
  }

  async upsert(args: Prisma.ExpenseToTransactionUpsertArgs): Promise<ExpenseToTransactionModel> {
    const obj = await this.collection.upsert(args);
    return this.deserialize<ExpenseToTransactionModel>(obj);
  }

  async delete(args: Prisma.ExpenseToTransactionDeleteArgs): Promise<ExpenseToTransactionModel> {
    const obj = await this.collection.delete(args);
    return this.deserialize<ExpenseToTransactionModel>(obj);
  }

  async deleteMany(args: Prisma.ExpenseToTransactionDeleteManyArgs) {
    return this.collection.deleteMany(args)
  }

  async updateMany(args: Prisma.ExpenseToTransactionUpdateManyArgs) {
    return this.collection.updateMany(args)
  }

  async aggregate(args: Prisma.ExpenseToTransactionAggregateArgs) {
    return this.collection.aggregate(args)
  }
}
