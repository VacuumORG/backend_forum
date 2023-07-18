import { Injectable } from '@nestjs/common';
import { CommentRepository } from 'domain/repositories/CommentRepository';
import { PrismaService } from '../prisma.service';
import { Comment } from 'domain/entities/Comment';

@Injectable()
export class PrismaCommentRepository implements CommentRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async create(comment: Comment): Promise<void> {
    const { id, content, topicId, userId, createdAt, updatedAt } = comment;
    await this.prismaService.comment.create({
      data: {
        id,
        content,
        userId,
        topicId,
        createdAt,
        updatedAt,
      },
    });
  }
}
