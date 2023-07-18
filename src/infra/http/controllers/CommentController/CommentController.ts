import { Body, Controller, Post } from '@nestjs/common';
import { CreateCommentCase } from 'application/use-cases/comment/create-comment-case';
import { CreateCommentDTO } from 'infra/http/dtos/CreateCommentDTO';

@Controller('comments')
export class CommentController {
  constructor(private readonly createCommentCase: CreateCommentCase) {}
  @Post('/')
  async create(@Body() body: CreateCommentDTO) {
    const { content, topicId, userId } = body;
    return this.createCommentCase.execute({
      content,
      topicId,
      userId,
    });
  }
}
