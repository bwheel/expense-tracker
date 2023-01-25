import { isArray } from "@tsed/core";
import { deserialize } from "@tsed/json-mapper";
import { Injectable, Inject } from "@tsed/di";
import { PrismaService } from "../services/PrismaService";
import { Prisma, Tag } from "../client";
import { TagModel } from "../models";

@Injectable()
export class TagsRepository {
  @Inject()
  protected prisma: PrismaService;

  get collection() {
    return this.prisma.tag
  }

  get groupBy() {
    return this.collection.groupBy.bind(this.collection)
  }

  protected deserialize<T>(obj: null | Tag | Tag[]): T {
    return deserialize<T>(obj, { type: TagModel, collectionType: isArray(obj) ? Array : undefined })
  }

  async findUnique(args: Prisma.TagFindUniqueArgs): Promise<TagModel | null> {
    const obj = await this.collection.findUnique(args);
    return this.deserialize<TagModel | null>(obj);
  }

  async findFirst(args: Prisma.TagFindFirstArgs): Promise<TagModel | null> {
    const obj = await this.collection.findFirst(args);
    return this.deserialize<TagModel | null>(obj);
  }

  async findMany(args?: Prisma.TagFindManyArgs): Promise<TagModel[]> {
    const obj = await this.collection.findMany(args);
    return this.deserialize<TagModel[]>(obj);
  }

  async create(args: Prisma.TagCreateArgs): Promise<TagModel> {
    const obj = await this.collection.create(args);
    return this.deserialize<TagModel>(obj);
  }

  async update(args: Prisma.TagUpdateArgs): Promise<TagModel> {
    const obj = await this.collection.update(args);
    return this.deserialize<TagModel>(obj);
  }

  async upsert(args: Prisma.TagUpsertArgs): Promise<TagModel> {
    const obj = await this.collection.upsert(args);
    return this.deserialize<TagModel>(obj);
  }

  async delete(args: Prisma.TagDeleteArgs): Promise<TagModel> {
    const obj = await this.collection.delete(args);
    return this.deserialize<TagModel>(obj);
  }

  async deleteMany(args: Prisma.TagDeleteManyArgs) {
    return this.collection.deleteMany(args)
  }

  async updateMany(args: Prisma.TagUpdateManyArgs) {
    return this.collection.updateMany(args)
  }

  async aggregate(args: Prisma.TagAggregateArgs) {
    return this.collection.aggregate(args)
  }
}
