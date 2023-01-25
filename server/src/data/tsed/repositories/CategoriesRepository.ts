import { isArray } from "@tsed/core";
import { deserialize } from "@tsed/json-mapper";
import { Injectable, Inject } from "@tsed/di";
import { PrismaService } from "../services/PrismaService";
import { Prisma, Category } from "../client";
import { CategoryModel } from "../models";

@Injectable()
export class CategoriesRepository {
  @Inject()
  protected prisma: PrismaService;

  get collection() {
    return this.prisma.category
  }

  get groupBy() {
    return this.collection.groupBy.bind(this.collection)
  }

  protected deserialize<T>(obj: null | Category | Category[]): T {
    return deserialize<T>(obj, { type: CategoryModel, collectionType: isArray(obj) ? Array : undefined })
  }

  async findUnique(args: Prisma.CategoryFindUniqueArgs): Promise<CategoryModel | null> {
    const obj = await this.collection.findUnique(args);
    return this.deserialize<CategoryModel | null>(obj);
  }

  async findFirst(args: Prisma.CategoryFindFirstArgs): Promise<CategoryModel | null> {
    const obj = await this.collection.findFirst(args);
    return this.deserialize<CategoryModel | null>(obj);
  }

  async findMany(args?: Prisma.CategoryFindManyArgs): Promise<CategoryModel[]> {
    const obj = await this.collection.findMany(args);
    return this.deserialize<CategoryModel[]>(obj);
  }

  async create(args: Prisma.CategoryCreateArgs): Promise<CategoryModel> {
    const obj = await this.collection.create(args);
    return this.deserialize<CategoryModel>(obj);
  }

  async update(args: Prisma.CategoryUpdateArgs): Promise<CategoryModel> {
    const obj = await this.collection.update(args);
    return this.deserialize<CategoryModel>(obj);
  }

  async upsert(args: Prisma.CategoryUpsertArgs): Promise<CategoryModel> {
    const obj = await this.collection.upsert(args);
    return this.deserialize<CategoryModel>(obj);
  }

  async delete(args: Prisma.CategoryDeleteArgs): Promise<CategoryModel> {
    const obj = await this.collection.delete(args);
    return this.deserialize<CategoryModel>(obj);
  }

  async deleteMany(args: Prisma.CategoryDeleteManyArgs) {
    return this.collection.deleteMany(args)
  }

  async updateMany(args: Prisma.CategoryUpdateManyArgs) {
    return this.collection.updateMany(args)
  }

  async aggregate(args: Prisma.CategoryAggregateArgs) {
    return this.collection.aggregate(args)
  }
}
