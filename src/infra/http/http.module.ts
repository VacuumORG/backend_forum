import { Module } from '@nestjs/common';
import { UserModule } from './controllers/UserController/user.module';
import { AuthModule } from './controllers/AuthController/auth.module';
import { TagModule } from './controllers/TagsController/tag.module';

@Module({
  imports: [UserModule, AuthModule, TagModule],
  controllers: [],
  providers: [],
})
export class HttpModule {}
