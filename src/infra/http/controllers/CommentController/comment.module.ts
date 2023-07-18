import { Module } from '@nestjs/common';
import { DatabaseModule } from 'infra/database/database.module';
import { CommentController } from './CommentController';
import { CreateCommentCase } from 'application/use-cases/comment/create-comment-case';

@Module({
  imports: [DatabaseModule],
  controllers: [CommentController],
  providers: [CreateCommentCase],
})
export class CommentModule {}
