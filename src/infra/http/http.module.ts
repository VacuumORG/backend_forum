import { Module } from '@nestjs/common';
import { UserModule } from './controllers/UserController/user.module';
import { AuthModule } from './controllers/AuthController/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class HttpModule {}
