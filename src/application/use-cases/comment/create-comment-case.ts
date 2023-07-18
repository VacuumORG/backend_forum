import { Injectable } from '@nestjs/common';
import { Comment } from 'domain/entities/Comment';
import { CommentRepository } from 'domain/repositories/CommentRepository';

export interface CreateCommentRequest {
  content: string;
  userId: string;
  topicId: string;
}

export interface CreateCommentResponse {
  comment: Comment;
}

@Injectable()
export class CreateCommentCase {
  constructor(private readonly commentRepository: CommentRepository) {}
  async execute(request: CreateCommentRequest): Promise<CreateCommentResponse> {
    const { content, userId, topicId } = request;
    const comment = new Comment({
      content,
      userId,
      topicId,
    });
    await this.commentRepository.create(comment);
    return {
      comment,
    };
  }
}
