import { isArray } from "@tsed/core";
import { deserialize } from "@tsed/json-mapper";
import { Injectable, Inject } from "@tsed/di";
import { PrismaService } from "../services/PrismaService";
import { Prisma, Transaction } from "../client";
import { TransactionModel } from "../models";

@Injectable()
export class TransactionsRepository {
  @Inject()
  protected prisma: PrismaService;

  get collection() {
    return this.prisma.transaction
  }

  get groupBy() {
    return this.collection.groupBy.bind(this.collection)
  }

  protected deserialize<T>(obj: null | Transaction | Transaction[]): T {
    return deserialize<T>(obj, { type: TransactionModel, collectionType: isArray(obj) ? Array : undefined })
  }

  async findUnique(args: Prisma.TransactionFindUniqueArgs): Promise<TransactionModel | null> {
    const obj = await this.collection.findUnique(args);
    return this.deserialize<TransactionModel | null>(obj);
  }

  async findFirst(args: Prisma.TransactionFindFirstArgs): Promise<TransactionModel | null> {
    const obj = await this.collection.findFirst(args);
    return this.deserialize<TransactionModel | null>(obj);
  }

  async findMany(args?: Prisma.TransactionFindManyArgs): Promise<TransactionModel[]> {
    const obj = await this.collection.findMany(args);
    return this.deserialize<TransactionModel[]>(obj);
  }

  async create(args: Prisma.TransactionCreateArgs): Promise<TransactionModel> {
    const obj = await this.collection.create(args);
    return this.deserialize<TransactionModel>(obj);
  }

  async update(args: Prisma.TransactionUpdateArgs): Promise<TransactionModel> {
    const obj = await this.collection.update(args);
    return this.deserialize<TransactionModel>(obj);
  }

  async upsert(args: Prisma.TransactionUpsertArgs): Promise<TransactionModel> {
    const obj = await this.collection.upsert(args);
    return this.deserialize<TransactionModel>(obj);
  }

  async delete(args: Prisma.TransactionDeleteArgs): Promise<TransactionModel> {
    const obj = await this.collection.delete(args);
    return this.deserialize<TransactionModel>(obj);
  }

  async deleteMany(args: Prisma.TransactionDeleteManyArgs) {
    return this.collection.deleteMany(args)
  }

  async updateMany(args: Prisma.TransactionUpdateManyArgs) {
    return this.collection.updateMany(args)
  }

  async aggregate(args: Prisma.TransactionAggregateArgs) {
    return this.collection.aggregate(args)
  }
}
