import { isArray } from "@tsed/core";
import { deserialize } from "@tsed/json-mapper";
import { Injectable, Inject } from "@tsed/di";
import { PrismaService } from "../services/PrismaService";
import { Prisma, Company } from "../client";
import { CompanyModel } from "../models";

@Injectable()
export class CompaniesRepository {
  @Inject()
  protected prisma: PrismaService;

  get collection() {
    return this.prisma.company
  }

  get groupBy() {
    return this.collection.groupBy.bind(this.collection)
  }

  protected deserialize<T>(obj: null | Company | Company[]): T {
    return deserialize<T>(obj, { type: CompanyModel, collectionType: isArray(obj) ? Array : undefined })
  }

  async findUnique(args: Prisma.CompanyFindUniqueArgs): Promise<CompanyModel | null> {
    const obj = await this.collection.findUnique(args);
    return this.deserialize<CompanyModel | null>(obj);
  }

  async findFirst(args: Prisma.CompanyFindFirstArgs): Promise<CompanyModel | null> {
    const obj = await this.collection.findFirst(args);
    return this.deserialize<CompanyModel | null>(obj);
  }

  async findMany(args?: Prisma.CompanyFindManyArgs): Promise<CompanyModel[]> {
    const obj = await this.collection.findMany(args);
    return this.deserialize<CompanyModel[]>(obj);
  }

  async create(args: Prisma.CompanyCreateArgs): Promise<CompanyModel> {
    const obj = await this.collection.create(args);
    return this.deserialize<CompanyModel>(obj);
  }

  async update(args: Prisma.CompanyUpdateArgs): Promise<CompanyModel> {
    const obj = await this.collection.update(args);
    return this.deserialize<CompanyModel>(obj);
  }

  async upsert(args: Prisma.CompanyUpsertArgs): Promise<CompanyModel> {
    const obj = await this.collection.upsert(args);
    return this.deserialize<CompanyModel>(obj);
  }

  async delete(args: Prisma.CompanyDeleteArgs): Promise<CompanyModel> {
    const obj = await this.collection.delete(args);
    return this.deserialize<CompanyModel>(obj);
  }

  async deleteMany(args: Prisma.CompanyDeleteManyArgs) {
    return this.collection.deleteMany(args)
  }

  async updateMany(args: Prisma.CompanyUpdateManyArgs) {
    return this.collection.updateMany(args)
  }

  async aggregate(args: Prisma.CompanyAggregateArgs) {
    return this.collection.aggregate(args)
  }
}
