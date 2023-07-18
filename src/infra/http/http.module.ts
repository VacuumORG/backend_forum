import { Module } from '@nestjs/common';
import { UserModule } from './controllers/UserController/user.module';
import { AuthModule } from './controllers/AuthController/auth.module';
import { TagModule } from './controllers/TagsController/tag.module';
import { CommentModule } from './controllers/CommentController/comment.module';

@Module({
  imports: [UserModule, AuthModule, TagModule, CommentModule],
  controllers: [],
  providers: [],
})
export class HttpModule {}
