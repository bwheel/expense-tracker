import { isArray } from "@tsed/core";
import { deserialize } from "@tsed/json-mapper";
import { Injectable, Inject } from "@tsed/di";
import { PrismaService } from "../services/PrismaService";
import { Prisma, Password } from "../client";
import { PasswordModel } from "../models";

@Injectable()
export class PasswordsRepository {
  @Inject()
  protected prisma: PrismaService;

  get collection() {
    return this.prisma.password
  }

  get groupBy() {
    return this.collection.groupBy.bind(this.collection)
  }

  protected deserialize<T>(obj: null | Password | Password[]): T {
    return deserialize<T>(obj, { type: PasswordModel, collectionType: isArray(obj) ? Array : undefined })
  }

  async findUnique(args: Prisma.PasswordFindUniqueArgs): Promise<PasswordModel | null> {
    const obj = await this.collection.findUnique(args);
    return this.deserialize<PasswordModel | null>(obj);
  }

  async findFirst(args: Prisma.PasswordFindFirstArgs): Promise<PasswordModel | null> {
    const obj = await this.collection.findFirst(args);
    return this.deserialize<PasswordModel | null>(obj);
  }

  async findMany(args?: Prisma.PasswordFindManyArgs): Promise<PasswordModel[]> {
    const obj = await this.collection.findMany(args);
    return this.deserialize<PasswordModel[]>(obj);
  }

  async create(args: Prisma.PasswordCreateArgs): Promise<PasswordModel> {
    const obj = await this.collection.create(args);
    return this.deserialize<PasswordModel>(obj);
  }

  async update(args: Prisma.PasswordUpdateArgs): Promise<PasswordModel> {
    const obj = await this.collection.update(args);
    return this.deserialize<PasswordModel>(obj);
  }

  async upsert(args: Prisma.PasswordUpsertArgs): Promise<PasswordModel> {
    const obj = await this.collection.upsert(args);
    return this.deserialize<PasswordModel>(obj);
  }

  async delete(args: Prisma.PasswordDeleteArgs): Promise<PasswordModel> {
    const obj = await this.collection.delete(args);
    return this.deserialize<PasswordModel>(obj);
  }

  async deleteMany(args: Prisma.PasswordDeleteManyArgs) {
    return this.collection.deleteMany(args)
  }

  async updateMany(args: Prisma.PasswordUpdateManyArgs) {
    return this.collection.updateMany(args)
  }

  async aggregate(args: Prisma.PasswordAggregateArgs) {
    return this.collection.aggregate(args)
  }
}
