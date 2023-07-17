import { Injectable } from '@nestjs/common';
import { TagRepository } from 'domain/repositories/TagRepository';
import { PrismaService } from '../prisma.service';
import { Tag } from 'domain/entities/Tags';

@Injectable()
export class PrismaTagRepository implements TagRepository {
  constructor(private prisma: PrismaService) {}

  async create(tag: Tag): Promise<void> {
    const { id, name, categoryId, createdAt, updatedAt } = tag;

    await this.prisma.tag.create({
      data: {
        id,
        name,
        categoryId,
        createdAt,
        updatedAt,
      },
    });
  }
}
